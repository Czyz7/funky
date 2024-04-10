import Head from 'next/head';
import Navigation from '../components/Navigation';
import HeroSection from '../components/HeroSection';
import Link from 'next/link';

// ... other component imports

export default function Home() {
  return (
    <div>
      <Head>


        <title>Accessible Web Designs</title>
        {/* ... other meta tags */}
      </Head>
      <Link rel="icon" href="/favicon.ico" />
      <Navigation />
      <HeroSection />
      {/* ... other sections (Services, Portfolio, etc.) */}
    </div>
  );
}
