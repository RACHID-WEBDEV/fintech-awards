/* eslint-disable @next/next/no-img-element */
import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useEffect, useState } from 'react';
import { useTheme } from 'next-themes';

export const Logo = () => {
  return (
    <Link href="/">
      <a>
        <img src="/assets/images/the-nigeria-fintech-awards-logo.png" className="h-[65px]" alt="The-nigeria-fintech-awards-logo " />
      </a>
    </Link>
  );
};


export const LogoSwitch = () => {
  const [mounted, setMounted] = useState(false);
  const { theme, resolvedTheme } = useTheme();

  // When mounted on client, now we can show the UI
  useEffect(() => setMounted(true), []);

  return (
    <Link href="/">
      <a>
        {mounted && (theme === 'dark' || resolvedTheme === 'dark') ? <img src="/assets/images/the-nigeria-fintech-awards-logo-white.png" className="h-[65px]" alt="The-nigeria-fintech-awards-logo " /> : <img src="/assets/images/the-nigeria-fintech-awards-logo.png" className="h-[65px]" alt="The-nigeria-fintech-awards-logo " />}
      </a>
    </Link>
  );
};
