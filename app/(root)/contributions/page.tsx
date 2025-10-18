'use client';

import { useState, useEffect } from 'react';
import { GitHubCalendar } from '@/components/git-hub-calendar';
import { OpenSource } from '@/components/open-source';
import { Skeleton } from '@/components/ui/skeleton';
import {
  format,
  subDays,
  addDays,
  startOfWeek,
  endOfWeek,
  eachDayOfInterval,
  isSameDay
} from 'date-fns';

interface ContributionDay {
  date: string;
  count: number;
}

interface Contributor {
  login: string;
  avatar_url: string;
  contributions: number;
}

interface RepoDetails {
  stargazers_count: number;
  forks_count: number;
  description: string;
  html_url: string;
  language: string;
  topics: string[];
}

export default function ContributionsPage() {
  const [contributionData, setContributionData] = useState<ContributionDay[]>(
    []
  );
  const [contributors, setContributors] = useState<Contributor[]>([]);
  const [repoDetails, setRepoDetails] = useState<RepoDetails | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const githubUsername = 'SwapnilMk';
  const repo = 'SwapnilMk/portfolio-website';

  useEffect(() => {
    const fetchGitHubData = async () => {
      try {
        setIsLoading(true);

        // Fetch contributors
        const contributorsResponse = await fetch(
          `https://api.github.com/repos/${repo}/contributors`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json'
              // Add Authorization header if using a token:
              // 'Authorization': `token ${process.env.GITHUB_TOKEN}`,
            }
          }
        );
        if (!contributorsResponse.ok) {
          throw new Error('Failed to fetch contributors');
        }
        const contributorsData = await contributorsResponse.json();
        setContributors(contributorsData);

        // Fetch repository details
        const repoResponse = await fetch(
          `https://api.github.com/repos/${repo}`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json'
            }
          }
        );
        if (!repoResponse.ok) {
          throw new Error('Failed to fetch repository details');
        }
        const repoData = await repoResponse.json();
        setRepoDetails({
          stargazers_count: repoData.stargazers_count,
          forks_count: repoData.forks_count,
          description: repoData.description,
          html_url: repoData.html_url,
          language: repoData.language,
          topics: repoData.topics
        });

        // Fetch contribution events
        const eventsResponse = await fetch(
          `https://api.github.com/users/${githubUsername}/events/public`,
          {
            headers: {
              Accept: 'application/vnd.github.v3+json'
            }
          }
        );
        if (!eventsResponse.ok) {
          throw new Error('Failed to fetch GitHub events');
        }
        const events = await eventsResponse.json();

        // Process events to create contribution data
        const contributionsMap = new Map<string, number>();
        const today = new Date();
        const startDate = subDays(today, 364);

        // Initialize all days in the last year with 0 contributions
        eachDayOfInterval({ start: startDate, end: today }).forEach((day) => {
          contributionsMap.set(format(day, 'yyyy-MM-dd'), 0);
        });

        // Count contributions (PushEvent, CreateEvent, DeleteEvent)
        events.forEach((event: any) => {
          const date = format(new Date(event.created_at), 'yyyy-MM-dd');
          let count = contributionsMap.get(date) || 0;

          if (event.type === 'PushEvent') {
            count += event.payload.commits?.length || 1;
          } else if (
            event.type === 'CreateEvent' ||
            event.type === 'DeleteEvent'
          ) {
            count += 1;
          }

          contributionsMap.set(date, count);
        });

        // Convert to array of ContributionDay
        const contributions = Array.from(contributionsMap.entries()).map(
          ([date, count]) => ({
            date,
            count
          })
        );

        setContributionData(contributions);
      } catch (err) {
        setError('Failed to load GitHub data. Please try again later.');
        console.error(err);
      } finally {
        setIsLoading(false);
      }
    };

    fetchGitHubData();
  }, []);

  return (
    <div className='container mx-auto space-y-12 py-12'>
      <OpenSource
        repository={repo}
        title='Proudly Open Source'
        description={
          repoDetails?.description ||
          'Personal portfolio website showcasing my projects and contributions!'
        }
        buttonText='⭐ Star on GitHub'
        defaultStats={{
          stars: repoDetails?.stargazers_count || 0,
          contributors: contributors.map((contributor) => ({
            login: contributor.login,
            avatar_url: contributor.avatar_url
          })),
          forks: repoDetails?.forks_count || 0,
          language: repoDetails?.language || 'TypeScript',
          topics: repoDetails?.topics || []
        }}
      />

      <div className='rounded-xl border bg-slate-50 p-6 dark:bg-slate-900'>
        <h2 className='mb-6 text-center text-3xl font-bold tracking-tight text-slate-800 dark:text-slate-100'>
          My GitHub Contributions
        </h2>
        {isLoading && (
          <div className='space-y-2'>
            <Skeleton className='h-4 w-full rounded-lg' />
            <div className='flex gap-1'>
              {Array.from({ length: 53 }).map((_, i) => (
                <div key={i} className='flex flex-col gap-1'>
                  {Array.from({ length: 7 }).map((_, j) => (
                    <Skeleton key={j} className='h-3 w-3 rounded-[4px]' />
                  ))}
                </div>
              ))}
            </div>
          </div>
        )}
        {error && <p className='text-center text-red-500'>{error}</p>}
        {!isLoading && !error && <GitHubCalendar data={contributionData} />}
      </div>
    </div>
  );
}
