"use client"
import React, { useState } from 'react';
import Link from 'next/link';
import { Button } from './ui/button';

const MobileNav: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="md:hidden">
      <Button
        variant="ghost"
        size="icon"
        onClick={() => setIsOpen(!isOpen)}
        aria-label="Toggle menu"
        className="relative z-50"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className={`h-6 w-6 transition-all ${isOpen ? 'rotate-90' : ''}`}
        >
          {isOpen ? (
            <path d="M18 6 6 18M6 6l12 12" />
          ) : (
            <>
              <line x1="4" x2="20" y1="12" y2="12" />
              <line x1="4" x2="20" y1="6" y2="6" />
              <line x1="4" x2="20" y1="18" y2="18" />
            </>
          )}
        </svg>
      </Button>

      {isOpen && (
        <div className="fixed inset-0 z-40 bg-background/95 backdrop-blur-sm">
          <div className="flex flex-col items-center justify-center h-full space-y-8 text-center">
            <Link 
              href="#features" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Features
            </Link>
            <Link 
              href="#pricing" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Pricing
            </Link>
            <Link 
              href="#testimonials" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Testimonials
            </Link>
            <Link 
              href="#contact" 
              className="text-xl font-medium"
              onClick={() => setIsOpen(false)}
            >
              Contact
            </Link>
            <Button 
              className="mt-4 rounded-full"
              onClick={() => setIsOpen(false)}
            >
              Get Started
            </Button>
          </div>
        </div>
      )}
    </div>
  );
};

export default MobileNav; 