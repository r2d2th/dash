// 'use client'

import TouchInput  from '@/app/ui/TouchTyping/TouchInput';
import TouchOutput from '@/app/ui/TouchTyping/TouchOutput';
import Toucher     from '@/app/ui/TouchTyping/Toucher';
import ThemeSwitcher from '@/app/ui/ThemeSwitcher';
import dynamic from 'next/dynamic';

// const ThemeSwitcher = dynamic(() => import('@/app/ui/ThemeSwitcher'), { ssr: false });
// const ThemeSwitcher = dynamic(() => import('@/app/ui/ThemeSwitcher'), {loading: () => <></>});

export default function Page() {
  return (
    <div>
      <div>
        <ThemeSwitcher />
      </div>
      <div>
        <Toucher />
      </div>
    </div>
)}
