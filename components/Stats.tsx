import React from 'react';

const Stats: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl font-bold tracking-tighter flex items-center">
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
                className="h-8 w-8 mr-2 text-primary"
              >
                <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                <circle cx="9" cy="7" r="4" />
                <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
                <path d="M16 3.13a4 4 0 0 1 0 7.75" />
              </svg>
              <span>2M+</span>
            </div>
            <p className="text-muted-foreground">Active users worldwide</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl font-bold tracking-tighter flex items-center">
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
                className="h-8 w-8 mr-2 text-primary"
              >
                <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                <path d="m9 12 2 2 4-4" />
              </svg>
              <span>5.0</span>
            </div>
            <p className="text-muted-foreground">Average rating on app stores</p>
          </div>
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="text-4xl font-bold tracking-tighter flex items-center">
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
                className="h-8 w-8 mr-2 text-primary"
              >
                <path d="M12 2v20M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" />
              </svg>
              <span>$20B+</span>
            </div>
            <p className="text-muted-foreground">Finances managed on our platform</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stats; 