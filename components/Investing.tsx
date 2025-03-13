import React from 'react';

const Investing: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col md:flex-row-reverse gap-12 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Seamless Investing</h2>
            <p className="text-muted-foreground">
              Invest in stocks, ETFs, cryptocurrencies, and more with our easy-to-use platform.
              Start building your portfolio today with as little as $1.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                >
                  <path d="m12 8-9.04 9.06a2.82 2.82 0 1 0 3.98 3.98L16 12" />
                  <circle cx="17" cy="7" r="5" />
                </svg>
                <div>
                  <h3 className="font-medium">Micro Investing</h3>
                  <p className="text-sm text-muted-foreground">Start with as little as $1 and gradually build your investment portfolio.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                >
                  <path d="M2 20h.01" />
                  <path d="M7 20v-4" />
                  <path d="M12 20v-8" />
                  <path d="M17 20V8" />
                  <path d="M22 4v16" />
                </svg>
                <div>
                  <h3 className="font-medium">Expert Portfolios</h3>
                  <p className="text-sm text-muted-foreground">Choose from expert-curated portfolios designed to match your risk tolerance and goals.</p>
                </div>
              </li>
              <li className="flex items-start gap-2">
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
                  className="h-5 w-5 text-primary flex-shrink-0 mt-0.5"
                >
                  <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <h3 className="font-medium">Real-Time Performance</h3>
                  <p className="text-sm text-muted-foreground">Track your investments in real-time with detailed analytics and performance metrics.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[320px] aspect-[9/16] relative">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background rounded-3xl overflow-hidden border border-border">
                <div className="absolute top-0 left-0 right-0 h-8 bg-background flex items-center justify-center">
                  <div className="w-20 h-1 bg-muted-foreground/20 rounded-full" />
                </div>
                <div className="pt-10 px-4 flex flex-col items-center">
                  <div className="grid grid-cols-2 gap-2 w-full mb-4">
                    <div className="bg-primary h-10 rounded-md flex items-center justify-center text-primary-foreground text-sm">
                      Stocks
                    </div>
                    <div className="bg-yellow-500 h-10 rounded-md flex items-center justify-center text-yellow-950 text-sm">
                      Crypto
                    </div>
                  </div>
                  <div className="w-full h-40 bg-muted/50 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-full h-full p-2 flex items-end justify-between">
                      {[1, 2, 3, 4, 5, 6, 7].map((i) => (
                        <div 
                          key={i} 
                          className="w-[10%] bg-primary rounded-t-sm" 
                          style={{ 
                            height: `${Math.max(15, Math.min(90, 30 + Math.sin(i) * 40))}%`,
                            opacity: i % 2 === 0 ? 1 : 0.7
                          }}
                        />
                      ))}
                    </div>
                  </div>
                  <div className="w-full mt-4 space-y-2">
                    {[1, 2].map((i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-muted" />
                          <div className="w-16 h-3 bg-muted rounded-md" />
                        </div>
                        <div className="flex items-center gap-1">
                          <div className="w-12 h-3 bg-muted rounded-md" />
                          <div className={`w-3 h-3 rounded-full ${i % 2 === 0 ? 'bg-green-500' : 'bg-red-500'}`} />
                        </div>
                      </div>
                    ))}
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

export default Investing; 