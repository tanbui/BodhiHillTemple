// src/components/layout/Header.tsx
'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import LanguageSwitcher from '@/components/shared/LanguageSwitcher';
import { DharmaWheelIcon } from '@/components/icons/DharmaWheelIcon';
import { cn } from '@/lib/utils';
import { useState, useEffect } from 'react';

const navItems = [
  { href: '/', label: 'Home' },
  { href: '/about', label: 'About Us' },
  { href: '/activities', label: 'Activities' },
  { href: '/teachings', label: 'Teachings' },
  { href: '/prayers', label: 'Prayers' },
  { href: '/donate', label: 'Donate' },
  //{ href: '/contact', label: 'Contact' },
  { href: '/admin/feedback', label: 'Feedback Tool' }, // Added for GenAI feature
];

export default function Header() {
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);
  // Simple theme toggle example, replace with robust solution if needed
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Check for saved theme preference or system preference
    const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
    const savedTheme = localStorage.getItem('theme');
    if (savedTheme === 'dark' || (!savedTheme && prefersDark)) {
      document.documentElement.classList.add('dark');
      setIsDarkMode(true);
    } else {
      document.documentElement.classList.remove('dark');
      setIsDarkMode(false);
    }
  }, []);
  
  const toggleTheme = () => {
    if (document.documentElement.classList.contains('dark')) {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
      setIsDarkMode(false);
    } else {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
      setIsDarkMode(true);
    }
  };


  if (!mounted) {
    return null; 
  }

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 shadow-md">
      <div className="container mx-auto flex h-20 items-center justify-between px-4 sm:px-6 lg:px-8">
        <Link href="/" className="flex items-center gap-2 group">
          <DharmaWheelIcon className="h-10 w-10 text-primary group-hover:animate-spin-slow transition-transform duration-500" />
          <span className="font-headline text-2xl font-semibold text-foreground group-hover:text-primary transition-colors">
            Vien Quang Temple
          </span>
        </Link>

        <nav className="hidden md:flex items-center space-x-1 lg:space-x-2">
          {navItems.map((item) => (
            <Button
              key={item.href}
              variant="ghost"
              asChild
              className={cn(
                'text-sm font-medium transition-colors hover:text-primary focus-visible:text-primary focus-visible:bg-accent/50',
                pathname === item.href ? 'text-primary font-semibold' : 'text-muted-foreground'
              )}
            >
              <Link href={item.href}>{item.label}</Link>
            </Button>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <LanguageSwitcher />
          <Button variant="ghost" size="icon" onClick={toggleTheme} aria-label="Toggle theme">
            {isDarkMode ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
          </Button>
          <div className="md:hidden">
            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon">
                  <Menu className="h-6 w-6" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px] bg-background p-6">
                <nav className="flex flex-col space-y-4">
                  {navItems.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      className={cn(
                        'block px-3 py-2 rounded-md text-base font-medium hover:bg-accent hover:text-accent-foreground transition-colors',
                        pathname === item.href ? 'bg-primary text-primary-foreground' : 'text-foreground'
                      )}
                    >
                      {item.label}
                    </Link>
                  ))}
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
