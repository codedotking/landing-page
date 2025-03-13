# Finwise - Smart Financial Management

![Finwise Logo](/public/favicon.svg)

Finwise is a modern financial management application designed to help users track expenses, budget effectively, and make smarter investment decisions. Built with Next.js, Tailwind CSS, and Shadcn UI, this application offers a sleek, responsive interface with powerful financial tools.

[中文版本](./README.md)

## Features

- **Smart Budgeting**: Intelligent categorization, customizable goals, and predictive analysis
- **Seamless Investing**: Micro investing, expert portfolios, and real-time performance tracking
- **Bank-Grade Security**: Military-grade encryption, biometric authentication, and real-time fraud detection
- **Responsive Design**: Fully optimized for all devices from mobile to desktop
- **Modern UI**: Clean, intuitive interface with smooth animations and interactions

## Tech Stack

- **Framework**: [Next.js](https://nextjs.org/)
- **Styling**: [Tailwind CSS](https://tailwindcss.com/)
- **UI Components**: [Shadcn UI](https://ui.shadcn.com/)
- **Typography**: [Inter](https://fonts.google.com/specimen/Inter) from Google Fonts
- **Icons**: Custom SVG icons

## Project Structure

```
finwise/
├── app/                  # Next.js app directory
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Home page component
├── components/           # React components
│   ├── ui/               # UI components from Shadcn
│   ├── Header.tsx        # Site header with navigation
│   ├── Hero.tsx          # Hero section
│   ├── Features.tsx      # Features section
│   ├── Investing.tsx     # Investing section
│   ├── Security.tsx      # Security section
│   ├── Pricing.tsx       # Pricing plans
│   ├── Testimonials.tsx  # User testimonials
│   ├── FAQ.tsx           # Frequently asked questions
│   ├── Contact.tsx       # Contact form and information
│   ├── CTA.tsx           # Call to action section
│   ├── Footer.tsx        # Site footer
│   └── ...               # Other components
├── public/               # Static assets
│   └── favicon.svg       # Site favicon
└── ...
```

## Getting Started

### Prerequisites

- Node.js 18.x or later
- npm or yarn

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/yourusername/finwise.git
   cd finwise
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Run the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

4. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application.

## Customization

### Styling

The project uses Tailwind CSS for styling. You can customize the theme in the `app/globals.css` file.

### Components

All components are located in the `components` directory. Each component is self-contained and can be modified independently.

### Adding Pages

To add new pages, create new files in the `app` directory following the Next.js App Router conventions.

## Deployment

This project can be deployed on any platform that supports Next.js applications, such as:

- [Vercel](https://vercel.com/) (recommended)
- [Netlify](https://www.netlify.com/)
- [AWS Amplify](https://aws.amazon.com/amplify/)

## License

This project is licensed under the MIT License - see the LICENSE file for details.

## Acknowledgements

- [Next.js](https://nextjs.org/) - The React framework
- [Tailwind CSS](https://tailwindcss.com/) - Utility-first CSS framework
- [Shadcn UI](https://ui.shadcn.com/) - UI components
- [React](https://reactjs.org/) - JavaScript library for building user interfaces

---

Designed and developed with ❤️ by [Your Name/Company] 