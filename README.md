# Coffee Buddy - Your Personal Coffee Guide

Coffee Buddy is an interactive web application designed to help coffee enthusiasts explore and learn about different aspects of coffee. Whether you're a beginner or an experienced coffee lover, this app provides comprehensive knowledge about coffee origins, processing methods, brewing techniques, and flavor profiles.

## Features

- **Knowledge Hub**: Access detailed information about:
  - Coffee Origins
  - Processing Methods
  - Brewing Methods
  - Flavor Profiles
  - Roast Types
  - Milk vs Black Coffee

- **Interactive Learning**: Each section provides in-depth content with:
  - Detailed explanations
  - Visual guides
  - Practical tips
  - Expert recommendations

## Tech Stack

- [Next.js 14](https://nextjs.org) - React framework
- TypeScript - For type safety
- CSS Modules - For component-scoped styling
- Next.js Image Optimization
- OpenAI Integration - For personalized recommendations

## Getting Started

1. Clone the repository
2. Install dependencies:

```bash
npm install
# or
yarn install
```

3. Set up environment variables:
Create a `.env.local` file with:

```
OPENAI_API_KEY=your_api_key_here
```

4. Run the development server:

```bash
npm run dev
# or
yarn dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the application.

## Project Structure

```
src/
├── app/
│   ├── learn/           # Knowledge base pages
│   │   ├── origins/
│   │   ├── processing/
│   │   ├── brew-methods/
│   │   ├── flavour-profiles/
│   │   ├── roasts/
│   │   └── milk-vs-black/
│   └── page.tsx         # Home page
├── components/          # Reusable components
└── styles/             # Global styles
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## Learn More

To learn more about the technologies used in this project:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.
