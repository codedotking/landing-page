import React from 'react';

const Features: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24" id="features">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4 animate-in">
            <h2 className="text-3xl font-bold tracking-tighter text-gradient">Smart Budgeting</h2>
            <p className="text-muted-foreground">
              Take control of your finances with our intelligent budgeting tools.
              Set goals, track spending, and receive personalized insights.
            </p>
            <ul className="space-y-4 mt-8">
              <li className="flex items-start gap-2 hover-scale">
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3 className="font-medium">Intelligent Categorization</h3>
                  <p className="text-sm text-muted-foreground">Automatically categorizes your transactions for easy tracking and analysis.</p>
                </div>
              </li>
              <li className="flex items-start gap-2 hover-scale">
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3 className="font-medium">Customizable Goals</h3>
                  <p className="text-sm text-muted-foreground">Set and track financial goals with visual progress indicators and smart reminders.</p>
                </div>
              </li>
              <li className="flex items-start gap-2 hover-scale">
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
                  <polyline points="20 6 9 17 4 12" />
                </svg>
                <div>
                  <h3 className="font-medium">Predictive Analysis</h3>
                  <p className="text-sm text-muted-foreground">Get insights about your spending patterns and recommendations for better financial health.</p>
                </div>
              </li>
            </ul>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="w-full max-w-[320px] aspect-[9/16] relative hover-scale">
              <div className="absolute inset-0 bg-gradient-to-b from-primary/20 to-background rounded-3xl overflow-hidden border border-border shadow-lg">
                <div className="absolute top-0 left-0 right-0 h-8 bg-background flex items-center justify-center">
                  <div className="w-20 h-1 bg-muted-foreground/20 rounded-full" />
                </div>
                <div className="pt-10 px-4 flex flex-col items-center">
                  <div className="w-full h-24 bg-primary rounded-lg mb-4 flex items-center justify-center text-primary-foreground font-medium">
                    $21,000
                  </div>
                  <div className="w-full mt-4 space-y-2">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <div key={i} className="flex items-center justify-between py-2 border-b border-border">
                        <div className="flex items-center gap-2">
                          <div className="w-6 h-6 rounded-full bg-muted" />
                          <div className="w-16 h-3 bg-muted rounded-md" />
                        </div>
                        <div className="w-12 h-3 bg-muted rounded-md" />
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

export default Features; 