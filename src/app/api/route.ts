import { NextResponse } from 'next/server';

interface GitHubRepo {
  id: number;
  name: string;
  description: string;
  html_url: string;
  topics: string[];
  language: string;
  stargazers_count: number;
  forks_count: number;
  updated_at: string;
  homepage?: string;
}

export async function GET() {
  try {
    const response = await fetch(
      'https://api.github.com/users/LakshyaVerma123kl/repos?sort=updated&per_page=6',
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          'User-Agent': 'Portfolio-Website'
        },
        next: { revalidate: 3600 } // Cache for 1 hour
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with status: ${response.status}`);
    }

    const repos: GitHubRepo[] = await response.json();
    
    // Filter out forked repos and get only original work
    const originalRepos = repos.filter(repo => !repo.name.includes('fork'));
    
    return NextResponse.json(originalRepos);
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    
    // Return a proper error response
    return NextResponse.json(
      { error: 'Failed to fetch GitHub repositories' },
      { status: 500 }
    );
  }
}
