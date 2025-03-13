import React from 'react';
import { Card, CardContent, CardFooter, CardHeader } from './ui/card';

const Testimonials: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/50" id="testimonials">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12 animate-in">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl text-gradient">What Our Clients Say</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Don't just take our word for it. Here's what our users have to say about Finwise.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover-scale">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Sarah Smith</h3>
                  <p className="text-sm text-muted-foreground">Small Business Owner</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm">
                "Finwise has completely transformed how I manage my business finances. The budgeting tools are intuitive, and the expense tracking has saved me hours of work each month. Highly recommended!"
              </p>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </CardFooter>
          </Card>
          <Card className="hover-scale md:translate-y-4">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Mark Davis</h3>
                  <p className="text-sm text-muted-foreground">Freelance Designer</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm">
                "As a freelancer, keeping track of my finances was always a challenge. Finwise makes it simple with automatic categorization and tax preparation features. It's been a game-changer for my business."
              </p>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </CardFooter>
          </Card>
          <Card className="hover-scale">
            <CardHeader className="pb-0">
              <div className="flex items-center gap-2">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
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
                    className="h-5 w-5 text-primary"
                  >
                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2" />
                    <circle cx="12" cy="7" r="4" />
                  </svg>
                </div>
                <div>
                  <h3 className="font-medium">Emily Johnson</h3>
                  <p className="text-sm text-muted-foreground">Marketing Manager</p>
                </div>
              </div>
            </CardHeader>
            <CardContent className="pt-4">
              <p className="text-sm">
                "I've tried several financial apps, but Finwise stands out with its clean interface and powerful features. The investment tracking and portfolio analysis tools have helped me make smarter financial decisions."
              </p>
            </CardContent>
            <CardFooter className="border-t pt-4 flex justify-between">
              <div className="flex text-yellow-500">
                {[1, 2, 3, 4, 5].map((star) => (
                  <svg
                    key={star}
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="currentColor"
                    className="h-4 w-4"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                ))}
              </div>
            </CardFooter>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Testimonials; 