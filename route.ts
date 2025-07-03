// Create this file: src/app/api/github-repos/route.ts
// This is a simplified version that works without complex setup

import { NextResponse } from 'next/server';

const GITHUB_USERNAME = 'LakshyaVerma123kl';

export async function GET() {
  try {
    // Simple approach: Get your most recent repositories
    const response = await fetch(
      `https://api.github.com/users/${GITHUB_USERNAME}/repos?sort=updated&per_page=10&type=owner`,
      {
        headers: {
          'Accept': 'application/vnd.github.v3+json',
          // Add token if available, but works without it (with rate limits)
          ...(process.env.GITHUB_TOKEN && {
            'Authorization': `Bearer ${process.env.GITHUB_TOKEN}`,
          }),
        },
        // Cache for 5 minutes
        next: { revalidate: 300 }
      }
    );

    if (!response.ok) {
      throw new Error(`GitHub API responded with ${response.status}`);
    }

    const repos = await response.json();
    
    // Filter out forked repos and get only your original work
    const originalRepos = repos.filter((repo: any) => !repo.fork);
    
    // Return top 6 repositories
    const topRepos = originalRepos.slice(0, 6);
    
    return NextResponse.json(topRepos);
    
  } catch (error) {
    console.error('Error fetching GitHub repos:', error);
    
    // Return empty array so component will use fallback
    return NextResponse.json([], { status: 200 });
  }
}

// Optional: Add error handling for different HTTP methods
export async function POST() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function PUT() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}

export async function DELETE() {
  return NextResponse.json({ error: 'Method not allowed' }, { status: 405 });
}
