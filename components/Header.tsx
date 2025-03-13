import React from 'react';
import Link from 'next/link';
import { Button } from './ui/button';
import Logo from './Logo';
import MobileNav from './MobileNav';

const Header: React.FC = () => {
  return (
    <header className="sticky top-0 w-full py-4 flex items-center justify-center bg-background/80 backdrop-blur-md z-50 border-b border-border/40">
      <div className="container flex items-center justify-between">
        <div className="flex items-center gap-8">
          <Logo />
          <nav className="hidden md:flex items-center gap-6">
            <Link href="#features" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Features
            </Link>
            <Link href="#pricing" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Pricing
            </Link>
            <Link href="#testimonials" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Testimonials
            </Link>
            <Link href="#contact" className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              Contact
            </Link>
          </nav>
        </div>
        <div className="hidden md:block">
          <Button variant="default" size="sm" className="rounded-full">
            Get Started
          </Button>
        </div>
        <MobileNav />
      </div>
    </header>
  );
};

export default Header; 