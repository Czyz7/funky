import React from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import SeoKey from '@/components/SeoKey';
import SeoOnin from '@/components/SeoOnin';
import HeroSeo from '@/components/HeroSeo';
import SeoTechn from '@/components/SeoTechn';

const SEO = () => {
    const onpageBenefits = [
        'Optimized title tags and meta descriptions',
        'Strategic keyword placement',
        'Improved website structure and navigation',
        'High-quality, relevant content',
        // ...add more benefits
    ];

    const seoKeys = [
        {
            tier: 'Starter Package',
            price: 200,
            keywords: '25-50',
            focus: 'Quality over quantity',
            includes: [
                'Initial niche/industry analysis',
                'Identification of high-potential seed keywords',
                'Competitor analysis to uncover gaps',
                'Keyword search volume & basic difficulty assessment',
            ],
            idealFor: [
                'Small businesses on a budget',
                'Clients new to SEO',
                'Those focused on a narrow niche',
            ],
        },
        {
            tier: 'Intermediate Package',
            price: 500,
            keywords: '75-125',
            focus: 'Balanced approach, finding a larger pool of valuable keywords',
            includes: [
                'Everything in Tier 1',
                'Deeper competitor analysis',
                'Long-tail keyword discovery (more specific search phrases)',
                'Search intent analysis (understanding the reason behind searches)',
                'Keyword grouping by themes/topics',
            ],
            idealFor: [
                'Businesses with some SEO understanding',
                'Those wanting broader content/optimization coverage',
                'Moderately competitive niches',
            ],
        },
        {
            tier: 'Advanced Package',
            price: 1000,
            keywords: '150+',
            focus: 'Comprehensive strategy & in-depth insights',
            includes: [
                'Everything in Tier 1 & 2',
                'Advanced competitor backlink analysis (identifying content opportunities)',
                'Search trend analysis',
                'Content calendar suggestions based on seasonality',
                'Potential for topical keyword expansion',
            ],
            idealFor: [
                'Established businesses aiming for significant growth',
                'Highly competitive industries',
                'Clients seeking data-driven content planning',
            ],
        },
    ];

    return (
        <>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>

            <Navigation />
            <Block />
            <HeroSeo />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="container mx-auto px-4">
                    {/* ... other SEO content */}

                    <div className="mt-12">
                        <SeoOnin benefits={onpageBenefits} />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        {seoKeys.map((seoKey) => (
                            <SeoKey
                                key={seoKey.tier}
                                tier={seoKey.tier}
                                price={seoKey.price}
                                keywords={seoKey.keywords}
                                focus={seoKey.focus}
                                includes={seoKey.includes}
                                idealFor={seoKey.idealFor}
                            />
                        ))}
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <SeoTechn
                            tier="Technical SEO Essentials"
                            price={250}
                            details={[
                                'Website speed optimization',
                                'Mobile-friendliness improvements',
                                'XML sitemap creation and submission',
                                'Google Search Console setup and monitoring',
                                'Basic schema markup implementation',
                            ]}
                        />
                        <SeoTechn
                            tier="Intermediate Optimization"
                            price={500}
                            details={[
                                'In-depth site audit and analysis',
                                'Advanced schema markup implementation',
                                'Structured data optimization',
                                'Canonicalization and 301 redirects',
                                'Broken link identification and repair',
                            ]}
                        />
                        <SeoTechn
                            tier="Advanced Technical Overhaul"
                            price={1000}
                            details={[
                                'Full website architecture review',
                                'Custom 404 page creation',
                                'Robots.txt optimization',
                                'htaccess file configuration',
                                'Server-side caching implementation',
                            ]}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default SEO;
