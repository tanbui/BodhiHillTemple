// src/components/layout/Footer.tsx
import { Copyright, Facebook, Youtube, Instagram } from 'lucide-react';
import Link from 'next/link';
import { DharmaWheelIcon } from '@/components/icons/DharmaWheelIcon';

export default function Footer() {
  return (
    <footer className="bg-muted/50 border-t border-border/40">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4 group">
              <DharmaWheelIcon className="h-8 w-8 text-primary group-hover:animate-spin-slow transition-transform" />
              <span className="font-headline text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                Vien Quang Temple
              </span>
            </Link>
            <p className="text-sm text-muted-foreground">
              A place of peace, learning, and community.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/about" className="text-muted-foreground hover:text-primary transition-colors">About Us</Link></li>
              <li><Link href="/activities" className="text-muted-foreground hover:text-primary transition-colors">Events</Link></li>
              <li><Link href="/donate" className="text-muted-foreground hover:text-primary transition-colors">Donate</Link></li>
              <li><Link href="/contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4 font-headline">Connect With Us</h3>
            <div className="flex space-x-4">
              <Link href="#" aria-label="Facebook" className="text-muted-foreground hover:text-primary transition-colors">
                <Facebook className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="Instagram" className="text-muted-foreground hover:text-primary transition-colors">
                <Instagram className="h-6 w-6" />
              </Link>
              <Link href="#" aria-label="YouTube" className="text-muted-foreground hover:text-primary transition-colors">
                <Youtube className="h-6 w-6" />
              </Link>
            </div>
          </div>
        </div>
        <div className="mt-12 border-t border-border/60 pt-8 flex flex-col sm:flex-row justify-between items-center text-sm text-muted-foreground">
          <p className="flex items-center">
            <Copyright className="h-4 w-4 mr-1.5" /> {new Date().getFullYear()} Bodhi Hill Buddhist Temple. All rights reserved.
          </p>
          <p>
            Designed with <span className="text-primary">❤</span> for peace and wisdom.
          </p>
        </div>
      </div>
    </footer>
  );
}
