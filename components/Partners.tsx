import React from 'react';

const Partners: React.FC = () => {
  return (
    <section className="w-full py-12 border-t border-b border-border/40">
      <div className="container">
        <div className="flex flex-col items-center gap-4">
          <p className="text-xs text-muted-foreground uppercase tracking-wider">Trusted by companies worldwide</p>
          <div className="flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-16">
            {/* Partner logos */}
            <div className="flex items-center justify-center">
              <svg className="h-6 w-auto text-muted-foreground" viewBox="0 0 124 24" fill="currentColor">
                <path d="M17.9 4.4c-.4-.3-.7-.6-1.1-.8C15.2 2.8 13.5 2.4 12 2.4s-3.2.4-4.8 1.2c-.4.2-.7.5-1.1.8C4.4 5.9 3.5 8 3.5 10.4c0 3.7 2.2 7 5.7 8.3.3.1.6.2.9.3.6.2 1.2.3 1.9.3.7 0 1.3-.1 1.9-.3.3-.1.6-.2.9-.3 3.5-1.3 5.7-4.6 5.7-8.3 0-2.4-.9-4.5-2.6-6zm-5.9 12.9c-3.7 0-6.8-3.1-6.8-6.9s3-6.9 6.8-6.9c3.7 0 6.8 3.1 6.8 6.9s-3.1 6.9-6.8 6.9z" />
                <path d="M44.5 2.4c-4.4 0-8 3.5-8 7.8v11.3h3.2v-4.9h9.6v4.9h3.2V10.2c0-4.3-3.6-7.8-8-7.8zm4.8 11h-9.6V10.2c0-2.6 2.2-4.7 4.8-4.7s4.8 2.1 4.8 4.7v3.2z" />
                <path d="M60.2 2.4v18.7h3.2V2.4h-3.2zM74.8 2.4h-8v18.7h3.2v-6.1h4.8c3.5 0 6.4-2.8 6.4-6.3s-2.9-6.3-6.4-6.3zm0 9.5h-4.8V5.5h4.8c1.8 0 3.2 1.4 3.2 3.2s-1.4 3.2-3.2 3.2z" />
                <path d="M100.9 2.4l-4.5 13.2-4.5-13.2h-3.4l6.3 18.7h3.2l6.3-18.7z" />
                <path d="M119.4 18.2c-1.3 0-2.3-1-2.3-2.2v-5.2h5.5V7.7h-5.5V2.4h-3.2v13.6c0 3 2.5 5.4 5.5 5.4.8 0 1.5-.2 2.2-.5l-1-2.9c-.4.1-.8.2-1.2.2z" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="h-5 w-auto text-muted-foreground" viewBox="0 0 120 30" fill="currentColor">
                <path d="M20.4 7.5c-3.6 0-6.3 2.8-6.3 6.4 0 3.6 2.8 6.4 6.3 6.4 3.6 0 6.3-2.8 6.3-6.4.1-3.6-2.7-6.4-6.3-6.4zm0 10.3c-2 0-3.6-1.6-3.6-3.9s1.6-3.9 3.6-3.9c2 0 3.6 1.6 3.6 3.9s-1.6 3.9-3.6 3.9zm7-10.7h2.7v12.8h-2.7V7.1zm12.2-.4c-3.6 0-6.3 2.8-6.3 6.4 0 3.6 2.8 6.4 6.3 6.4 3.6 0 6.3-2.8 6.3-6.4 0-3.6-2.8-6.4-6.3-6.4zm0 10.3c-2 0-3.6-1.6-3.6-3.9s1.6-3.9 3.6-3.9c2 0 3.6 1.6 3.6 3.9s-1.6 3.9-3.6 3.9zm7.8-9.9h2.6v1.5h.1c.6-1.1 2-1.8 3.3-1.8 3.6 0 4.2 2.3 4.2 5.3v7.8h-2.7v-6.9c0-1.7-.3-3.1-2.3-3.1-2 0-2.5 1.5-2.5 3v7h-2.7V7.1zm18.3-.4c-3.1 0-5.7 2.8-5.7 6.4 0 3.6 2.5 6.4 5.7 6.4 2.2 0 3.5-1.2 4.3-2.5h.1v2.1h2.7V7.1h-2.7v2.1h-.1c-.8-1.3-2.1-2.5-4.3-2.5zm.7 10.3c-2 0-3.6-1.6-3.6-3.9s1.6-3.9 3.6-3.9c2 0 3.6 1.6 3.6 3.9s-1.6 3.9-3.6 3.9zm9.7-9.9h2.6v1.7h.1c.5-1.1 1.8-2 3.5-2 .7 0 1.3.1 1.9.3l-.7 2.6c-.4-.2-.8-.3-1.4-.3-2.1 0-3.3 1.6-3.3 3.7v6.8h-2.7V7.1zm15.4-.4c-3.6 0-6.5 2.8-6.5 6.4 0 3.6 2.9 6.4 6.5 6.4 2.7 0 5.1-1.6 6-4.1h-3c-.5.9-1.6 1.5-3 1.5-1.9 0-3.4-1.4-3.7-3.2h10c.1-.3.1-.6.1-.9.1-3.5-2.6-6.1-6.4-6.1zm-3.6 5.3c.5-1.5 1.9-2.6 3.6-2.6 1.6 0 3 1.1 3.4 2.6h-7zm8.5-4.9h2.7v12.8h-2.7V7.1zm4.5 0h2.8l4.5 7.8h.1l4.5-7.8h2.8v12.8h-2.7V11h-.1l-3.8 6.4h-1.5l-3.8-6.4h-.1v8.9h-2.7V7.1z" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="h-6 w-auto text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M7 10v4h3v7h4v-7h3l1-4h-4V8c0-1.1.9-2 2-2h2V2h-2a6 6 0 0 0-6 6v2H7Z" />
              </svg>
            </div>
            <div className="flex items-center justify-center">
              <svg className="h-6 w-auto text-muted-foreground" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                <rect width="4" height="12" x="2" y="9" />
                <circle cx="4" cy="4" r="2" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Partners; 