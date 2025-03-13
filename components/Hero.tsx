import React from 'react';
import Image from 'next/image';
import { Button } from './ui/button';

const Hero: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 lg:py-32 flex flex-col items-center text-center">
      <div className="container">
        <div className="flex flex-col items-center gap-4 mb-10 md:mb-16 animate-in">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tighter text-gradient">
            Smart, Secure, Simple<br />Financial Management
          </h1>
          <p className="text-muted-foreground text-sm md:text-base max-w-[600px] mx-auto">
            Your all-in-one tool for tracking expenses, budgeting, investing, and more.
            Take control of your financial future today.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button className="rounded-full flex items-center gap-2 hover-scale">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              App Store
            </Button>
            <Button variant="outline" className="rounded-full flex items-center gap-2 hover-scale">
              <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
              </svg>
              Google Play
            </Button>
          </div>
        </div>
        <div className="relative w-full max-w-[320px] mx-auto hover-scale">
          <div className="w-full aspect-[9/16] relative">
            <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background rounded-3xl overflow-hidden border border-border shadow-lg">
              <div className="absolute top-0 left-0 right-0 h-8 bg-background flex items-center justify-center">
                <div className="w-20 h-1 bg-muted-foreground/20 rounded-full" />
              </div>
              <div className="pt-10 px-4 flex flex-col items-center">
                <div className="w-full h-24 bg-primary rounded-lg mb-4 flex items-center justify-center text-primary-foreground font-medium">
                  $21,000
                </div>
                <div className="grid grid-cols-2 gap-2 w-full">
                  <div className="bg-primary/20 h-10 rounded-md" />
                  <div className="bg-yellow-500/20 h-10 rounded-md" />
                </div>
                <div className="w-full mt-4 space-y-2">
                  {[1, 2, 3].map((i) => (
                    <div key={i} className="flex items-center justify-between py-2 border-b border-border">
                      <div className="flex items-center gap-2">
                        <div className="w-6 h-6 rounded-full bg-muted" />
                        <div className="w-16 h-3 bg-muted rounded-md" />
                      </div>
                      <div className="w-12 h-3 bg-muted rounded-md" />
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
                    +
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero; 