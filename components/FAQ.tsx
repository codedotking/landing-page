import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from './ui/accordion';

const FAQ: React.FC = () => {
  return (
    <section className="w-full py-12 md:py-24 bg-muted/30">
      <div className="container">
        <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl">Frequently Asked Questions</h2>
          <p className="text-muted-foreground max-w-[700px]">
            Find answers to common questions about Finwise and our services.
          </p>
        </div>
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full">
            <AccordionItem value="item-1">
              <AccordionTrigger>Is Finwise secure?</AccordionTrigger>
              <AccordionContent>
                Yes, Finwise uses bank-level 256-bit encryption to protect your data. We also offer two-factor authentication and biometric login options for added security. Your financial information is never shared with third parties without your explicit consent.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-2">
              <AccordionTrigger>Can I use Finwise on multiple devices?</AccordionTrigger>
              <AccordionContent>
                Absolutely! Finwise is available on iOS and Android devices, as well as through our web application. Your data syncs automatically across all your devices, so you can access your financial information anywhere, anytime.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-3">
              <AccordionTrigger>Can I connect all my bank accounts?</AccordionTrigger>
              <AccordionContent>
                Yes, Finwise connects with over 10,000 financial institutions worldwide. You can link checking accounts, savings accounts, credit cards, investment accounts, and more. This allows you to see your complete financial picture in one place.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-4">
              <AccordionTrigger>Do I need help setting up my account?</AccordionTrigger>
              <AccordionContent>
                Setting up your Finwise account is simple and intuitive. However, if you need assistance, our support team is available 24/7 via chat, email, or phone. We also offer comprehensive documentation and video tutorials to help you get started.
              </AccordionContent>
            </AccordionItem>
            <AccordionItem value="item-5">
              <AccordionTrigger>What if I need help using the app?</AccordionTrigger>
              <AccordionContent>
                Our support team is available to help you with any questions or issues you may have. You can reach us through the in-app chat, email at help@finwise.com, or by phone during business hours. We also have an extensive knowledge base with tutorials and guides.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </div>
    </section>
  );
};

export default FAQ; 