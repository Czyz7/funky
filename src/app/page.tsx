import Head from 'next/head';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';

// ... other component imports

export default function Home() {
  return (
    <div>
      <Head>
        <title>Accessible Web Designs</title>
        {/* ... other meta tags */}
      </Head>
      <Navigation />
      <HeroSection />
      {/* ... other sections (Services, Portfolio, etc.) */}
    </div>
  );
}
