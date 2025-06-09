// src/components/shared/PageWrapper.tsx
import type { ReactNode } from 'react';
import { cn } from '@/lib/utils';

interface PageWrapperProps {
  children: ReactNode;
  className?: string;
}

export default function PageWrapper({ children, className }: PageWrapperProps) {
  return (
    <div className={cn('container mx-auto px-4 sm:px-6 lg:px-8 py-8 md:py-12 animate-subtle-fade-in', className)}>
      {children}
    </div>
  );
}
