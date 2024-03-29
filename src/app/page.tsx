import Head from 'next/head';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';

// ... other component imports

export default function Home() {
  return (
    <div>
      <Head>
        <title>Your Web Design Co.</title>
        {/* ... other meta tags */}
      </Head>
      <Navigation />
      <HeroSection />
      {/* ... other sections (Services, Portfolio, etc.) */}
    </div>
  );
}
