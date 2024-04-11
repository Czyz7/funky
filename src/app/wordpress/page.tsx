import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import HeroWordPress from '@/components/HeroWordPress';
import WordPressServ from '@/components/WordPressServ';

const Wordpress = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <Block />
            <HeroWordPress />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="container mx-auto px-4">
                    {/* ... other consulting services content */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <WordPressServ
                            tier="SEO Consultation"
                            focus="Improve your website's visibility and ranking in search results."
                            includes={[
                                'Keyword research and analysis',
                                'On-page and off-page optimization',
                                'Content creation and optimization',
                                'Technical SEO audit and implementation',
                                'Monthly reporting and analysis',
                            ]}

                            idealFor={[
                                'Businesses looking to increase their online visibility',
                                'Those wanting to improve their website\'s ranking in search results',
                                'Clients seeking to drive more traffic to their website',
                            ]}
                        />
                        <WordPressServ
                            tier="Accessibility Consultation"
                            focus="Make your website accessible to everyone, regardless of their abilities."
                            includes={[
                                'Website accessibility audit',
                                'WCAG compliance remediation',
                                'Assistive technology testing',
                                'Accessibility training and support',
                                'Ongoing monitoring and maintenance',
                            ]}
                            idealFor={[
                                'Businesses required to comply with accessibility regulations',
                                'Those wanting to make their website more inclusive and user-friendly',
                                'Clients seeking to improve the user experience for all visitors',
                            ]}
                        />
                        <WordPressServ
                            tier="Website Development Consultation"
                            focus="Create a custom website that meets your specific needs and goals."
                            includes={[
                                'Website design and development',
                                'Content creation and management',
                                'E-commerce integration',
                                'Website maintenance and support',
                                'Ongoing consultation and optimization',
                            ]}
                            idealFor={[
                                'Businesses needing a new website or a redesign of their existing website',
                                'Those wanting a website that is tailored to their specific industry and target audience',
                                'Clients seeking a long-term partnership for ongoing website support and improvement',
                            ]}
                        />
                    </div>
                </div>
            </main>
        </Fragment>
    );
};

export default Wordpress;
