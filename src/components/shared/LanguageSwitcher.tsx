// src/components/shared/LanguageSwitcher.tsx
'use client';

import { Button } from '@/components/ui/button';
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu';
import { Globe } from 'lucide-react';
import { useState, useEffect } from 'react';

export default function LanguageSwitcher() {
  const [currentLang, setCurrentLang] = useState('EN');
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    // Here you would typically get the current language from URL or context
    // For now, it's just a static example
  }, []);

  const handleLanguageChange = (lang: string) => {
    setCurrentLang(lang);
    // Here you would navigate to the new language URL, e.g., router.push('/vi' + pathname)
    alert(`Language changed to ${lang}. Full i18n routing not implemented in this example.`);
  };

  if (!mounted) {
    // Avoid hydration mismatch
    return <div className="w-20 h-10" />; // Placeholder for SSR
  }

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="ghost" className="flex items-center gap-1.5 text-sm">
          <Globe className="h-4 w-4" />
          {currentLang}
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end">
        <DropdownMenuItem onClick={() => handleLanguageChange('EN')}>
          English (EN)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('VN')}>
          Tiếng Việt (VN)
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => handleLanguageChange('ZH')}>
          中文 (ZH)
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
