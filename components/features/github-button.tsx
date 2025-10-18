'use client';

import React, { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { GithubIcon } from 'lucide-react';

function formatCount(n: number) {
  if (n >= 1_000_000)
    return (n / 1_000_000).toFixed(1).replace(/\.0$/, '') + 'M';
  if (n >= 1_000) return (n / 1_000).toFixed(1).replace(/\.0$/, '') + 'k';
  return String(n);
}

export default function StarOnGithub() {
  const [following, setFollowing] = useState<number | null>(null);
  const [loading, setLoading] = useState(true);
  const username = 'SwapnilMk';

  useEffect(() => {
    let mounted = true;
    const url = `https://api.github.com/users/${username}`;

    async function fetchData() {
      try {
        setLoading(true);
        const res = await fetch(url);
        if (!res.ok) throw new Error('GitHub API error');
        const data = await res.json();
        if (mounted && typeof data.following === 'number') {
          setFollowing(data.following);
        }
      } catch (e) {
        // fail silently - keep null
        console.error('Failed to fetch GitHub user:', e);
      } finally {
        if (mounted) setLoading(false);
      }
    }

    fetchData();
    return () => {
      mounted = false;
    };
  }, []);

  const openProfile = () =>
    window.open(
      `https://github.com/${username}`,
      '_blank',
      'noopener,noreferrer'
    );

  return (
    <Button
      type='button'
      aria-label='Open GitHub profile'
      title='Open GitHub profile'
      onClick={openProfile}
      className='duration-&lsqb;12s&rsqb; before:duration-&lsqb;12s&rsqb; group relative inline-flex h-10 cursor-pointer items-center justify-center whitespace-nowrap rounded-md border-0 bg-[linear-gradient(var(--card-bg,#fff),var(--card-bg,#fff)),linear-gradient(var(--card-bg,#fff)_50%,rgba(255,255,255,0.6)_80%,rgba(0,0,0,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] bg-[length:200%] px-4 py-2 text-sm font-medium text-foreground ring-offset-background transition-colors transition-transform duration-200 [background-clip:padding-box,border-box,border-box] [background-origin:border-box] [border:calc(0.08*1rem)_solid_transparent] before:absolute before:bottom-[-20%] before:left-1/2 before:z-[0] before:h-[20%] before:w-[60%] before:-translate-x-1/2 before:bg-[linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] before:[filter:blur(calc(0.8*1rem))] hover:scale-105 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 active:scale-95 disabled:pointer-events-none disabled:opacity-50 motion-safe:animate-rainbow before:motion-safe:animate-rainbow motion-reduce:animate-none before:motion-reduce:animate-none dark:bg-[linear-gradient(var(--card-bg,#0b0b0d),var(--card-bg,#0b0b0d)),linear-gradient(var(--card-bg,#0b0b0d)_50%,rgba(11,11,13,0.6)_80%,rgba(11,11,13,0)),linear-gradient(90deg,hsl(0,100%,63%),hsl(90,100%,63%),hsl(210,100%,63%),hsl(195,100%,63%),hsl(270,100%,63%))] dark:[--card-bg:#0b0b0d]'
    >
      <div className='flex items-center'>
        <GithubIcon className='h-4 w-4 text-gray-800 dark:text-gray-100' />
        <span className='ml-1 hidden p-1 text-gray-900 dark:text-gray-100 lg:inline'>
          GitHub
        </span>
      </div>

      <div className='ml-2 flex items-center gap-1 text-sm md:flex'>
        <svg
          className='size-4 text-gray-500 transition-all duration-200 group-hover:text-yellow-300 dark:text-gray-400'
          data-slot='icon'
          aria-hidden='true'
          fill='currentColor'
          viewBox='0 0 24 24'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            clipRule='evenodd'
            d='M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.006 5.404.434c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.434 2.082-5.005Z'
            fillRule='evenodd'
          ></path>
        </svg>
        <span className='font-display inline-block font-medium tabular-nums tracking-wider text-slate-900 dark:text-slate-100'>
          {loading
            ? '...'
            : following !== null
              ? formatCount(following)
              : 'N/A'}
        </span>
      </div>
    </Button>
  );
}
