import React from 'react';
import { Button } from './ui/button';

const CTA: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-primary text-primary-foreground">
      <div className="container">
        <div className="flex flex-col items-center text-center space-y-4 md:space-y-8">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl lg:text-5xl">
            Join Over 1 Million Users<br />To Transform Your Finances
          </h2>
          <p className="max-w-[700px] text-primary-foreground/80">
            Start your journey to financial freedom today. Sign up for Finwise and take control of your money with our powerful tools and insights.
          </p>
          <div className="flex flex-col sm:flex-row gap-3 mt-6">
            <Button variant="secondary" size="lg" className="rounded-full">
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
                className="mr-2 h-5 w-5"
              >
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
              </svg>
              App Store
            </Button>
            <Button variant="outline" size="lg" className="rounded-full bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10">
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
                className="mr-2 h-5 w-5"
              >
                <path d="M12 19H5a2 2 0 0 1-2-2V7a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v5.5" />
                <path d="M16 19h6" />
                <path d="M19 16v6" />
              </svg>
              Google Play
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTA; 