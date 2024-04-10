import React from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import SeoOnin from '@/components/SeoOnin';

const SEO = () => {
    const onpageBenefits = [
        'Optimized title tags and meta descriptions',
        'Strategic keyword placement',
        'Improved website structure and navigation',
        'High-quality, relevant content',
        // ...add more benefits
    ];

    return (
        <>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <Block />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="container mx-auto px-4"> {/* Container for layout */}
                    <h1 className="text-3xl font-bold mb-4">SEO Services</h1>
                    <p className="mb-8">
                        Elevate your website&apos;s search engine rankings and drive organic traffic with our expert SEO services.
                    </p>

                    <SeoOnin benefits={onpageBenefits} />
                </div>
            </main>
        </>
    );
};

export default SEO;
