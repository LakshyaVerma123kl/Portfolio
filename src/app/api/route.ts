import { NextResponse } from "next/server";

interface GitHubRepo {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  topics: string[];
  language: string | null;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage?: string | null;
  fork: boolean; // Add this field to properly check for forks
}

interface GitHubApiError {
  message: string;
  documentation_url?: string;
}

const GITHUB_USERNAME = "LakshyaVerma123kl";
const REPOS_PER_PAGE = 6;
const CACHE_DURATION = 3600; // 1 hour

export async function GET() {
  try {
    // Add GitHub token for higher rate limits (optional but recommended)
    const headers: HeadersInit = {
      Accept: "application/vnd.github.v3+json",
      "User-Agent": "Portfolio-Website",
      "X-GitHub-Api-Version": "2022-11-28", // Specify API version
    };

    // Add auth token if available (increases rate limit from 60 to 5000 requests/hour)
    if (process.env.GITHUB_TOKEN) {
      headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
    }

    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=${REPOS_PER_PAGE}&type=owner`,
      {
        headers,
        next: { revalidate: CACHE_DURATION },
      }
    );

    if (!response.ok) {
      // Handle different HTTP status codes appropriately
      if (response.status === 404) {
        throw new Error("GitHub user not found");
      }
      if (response.status === 403) {
        throw new Error("GitHub API rate limit exceeded");
      }
      if (response.status >= 500) {
        throw new Error("GitHub API server error");
      }

      // Try to get error details from GitHub API
      try {
        const errorData: GitHubApiError = await response.json();
        throw new Error(`GitHub API error: ${errorData.message}`);
      } catch {
        throw new Error(`GitHub API responded with status: ${response.status}`);
      }
    }

    const repos: GitHubRepo[] = await response.json();

    // More robust filtering for original repos
    const originalRepos = repos.filter(
      (repo) =>
        !repo.fork && // Use the fork field instead of name check
        repo.description !== null && // Filter out repos without descriptions
        repo.name.toLowerCase() !== `${GITHUB_USERNAME.toLowerCase()}` // Exclude profile README repo
    );

    // Transform data to include only what's needed for the frontend
    const transformedRepos = originalRepos.map((repo) => ({
      id: repo.id,
      name: repo.name,
      description: repo.description || "No description available",
      html_url: repo.html_url,
      topics: repo.topics || [],
      language: repo.language || "Unknown",
      stargazers_count: repo.stargazers_count,
      forks_count: repo.forks_count,
      updated_at: repo.updated_at,
      homepage: repo.homepage || null,
    }));

    return NextResponse.json({
      repos: transformedRepos,
      total: transformedRepos.length,
      last_updated: new Date().toISOString(),
    });
  } catch (error) {
    console.error("Error fetching GitHub repos:", error);

    // Return more specific error information
    const errorMessage =
      error instanceof Error ? error.message : "Unknown error occurred";

    return NextResponse.json(
      {
        error: "Failed to fetch GitHub repositories",
        message: errorMessage,
        timestamp: new Date().toISOString(),
      },
      { status: 500 }
    );
  }
}
