import React from 'react';

const Security: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24">
      <div className="container">
        <div className="flex flex-col md:flex-row gap-12 items-center">
          <div className="flex-1 space-y-4">
            <h2 className="text-3xl font-bold tracking-tighter">Bank-Grade Security</h2>
            <p className="text-muted-foreground">
              Your financial data is protected with the highest level of security.
              We use advanced encryption and multi-factor authentication to keep your information safe.
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
                  <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                  <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                </svg>
                <div>
                  <h3 className="font-medium">Military-Grade Encryption</h3>
                  <p className="text-sm text-muted-foreground">All your data is encrypted with 256-bit encryption, the same standard used by major banks.</p>
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
                  <h3 className="font-medium">Biometric Authentication</h3>
                  <p className="text-sm text-muted-foreground">Secure access to your account with fingerprint or face recognition for added security.</p>
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
                  <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
                  <path d="m9 12 2 2 4-4" />
                </svg>
                <div>
                  <h3 className="font-medium">Real-Time Fraud Detection</h3>
                  <p className="text-sm text-muted-foreground">Advanced algorithms monitor your account for suspicious activity and alert you immediately.</p>
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
                  <div className="w-full h-24 bg-primary/10 rounded-lg mb-4 flex items-center justify-center">
                    <div className="w-16 h-16 rounded-full bg-primary/20 flex items-center justify-center">
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
                        className="h-8 w-8 text-primary"
                      >
                        <rect width="18" height="11" x="3" y="11" rx="2" ry="2" />
                        <path d="M7 11V7a5 5 0 0 1 10 0v4" />
                      </svg>
                    </div>
                  </div>
                  <div className="w-full mt-4 space-y-3">
                    {[1, 2, 3].map((i) => (
                      <div key={i} className="flex items-center gap-3 py-2">
                        <div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center">
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
                            className="h-4 w-4 text-green-500"
                          >
                            <path d="M20 6 9 17l-5-5" />
                          </svg>
                        </div>
                        <div className="flex-1">
                          <div className="w-full h-2 bg-muted rounded-md mb-1" />
                          <div className="w-2/3 h-2 bg-muted rounded-md" />
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="absolute bottom-4 left-0 right-0 flex justify-center">
                    <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-primary-foreground">
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
                        className="h-6 w-6"
                      >
                        <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
                        <path d="m9 12 2 2 4-4" />
                      </svg>
                    </div>
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

export default Security; 