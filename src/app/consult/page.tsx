import React from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import ConsultServ from '@/components/ConsultServ';
import HeroConsult from '@/components/HeroConsult';

const Consult = () => {
    return (
        <>
            <Head>
                <title>Consulting Services | Accessible Web Designs</title>
                <meta name="description" content="Blah Blah" />
            </Head>

            <Navigation />
            <Block />
            <HeroConsult />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="container mx-auto px-4">
                    {/* ... other consulting services content */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <ConsultServ
                            tier="Tier 1: Foundational Consultation"
                            focus="Introductory assessment and strategic guidance"
                            includes={[
                                'Accessibility audit (basic): Review of common WCAG guidelines and key issues.',
                                'SEO assessment (basic): High-level analysis of current visibility and optimization opportunities.',
                                'Website performance check: Basic speed and usability testing.',
                                '1-2 hour strategy session: Discuss findings, priorities, and potential solutions.',
                            ]}
                            idealFor={[
                                'Businesses unsure about their website\'s health',
                                'Those wanting an affordable start to improving accessibility and SEO',
                                'Clients seeking a roadmap for further improvements.',
                            ]}
                        />
                        <ConsultServ
                            tier="Tier 2: Comprehensive Analysis"
                            focus="In-depth evaluation and optimization recommendations"
                            includes={[
                                'Everything in Tier 1',
                                'Full website accessibility audit: Detailed review of all pages and elements for WCAG compliance.',
                                'Advanced SEO analysis: Comprehensive keyword research, competitor analysis, and optimization strategy.',
                                'Website performance optimization: In-depth analysis and recommendations for improving speed and usability.',
                                '2-3 hour strategy session: Detailed discussion of findings, recommendations, and implementation plan.',
                            ]}
                            idealFor={[
                                'Businesses serious about improving their website\'s accessibility and SEO',
                                'Those seeking a comprehensive understanding of their website\'s strengths and weaknesses',
                                'Clients wanting a roadmap for significant improvements.',
                            ]}
                        />
                        <ConsultServ
                            tier="Tier 3: Custom Solutions"
                            focus="Tailored solutions for complex needs"
                            includes={[
                                'Everything in Tier 1 & 2',
                                'Custom accessibility solutions: Development of custom solutions to address specific accessibility challenges.',
                                'Advanced SEO strategy: Development and implementation of a comprehensive SEO strategy tailored to your specific goals.',
                                'Website performance engineering: In-depth performance optimization and implementation of advanced techniques.',
                                'Ongoing support and monitoring: Regular check-ins and support to ensure ongoing success.',
                            ]}
                            idealFor={[
                                'Businesses with complex accessibility or SEO requirements',
                                'Those seeking a fully customized solution to meet their specific needs',
                                'Clients wanting a long-term partnership for ongoing support and improvement.',
                            ]}
                        />
                    </div>
                </div>
            </main>
        </>
    );
};

export default Consult;


