// app/admin/components/nav-item.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { icons } from 'lucide-react';

interface NavItemProps {
  href: string;
  icon: keyof typeof icons;
  label: string;
  isCollapsed: boolean;
}

export function NavItem({ href, icon, label, isCollapsed }: NavItemProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  const LucideIcon = icons[icon] as LucideIcon;

  if (isCollapsed) {
    return (
      <Button
        asChild
        variant={isActive ? 'secondary' : 'ghost'}
        size="icon"
        className={cn('h-10 w-10', isActive && 'bg-accent')}
      >
        <Link href={href}>
          <LucideIcon className="h-4 w-4" />
          <span className="sr-only">{label}</span>
        </Link>
      </Button>
    );
  }

  return (
    <Button
      asChild
      variant={isActive ? 'secondary' : 'ghost'}
      className={cn('w-full justify-start', isActive && 'bg-accent')}
    >
      <Link href={href}>
        <LucideIcon className="mr-2 h-4 w-4" />
        {label}
      </Link>
    </Button>
  );
}