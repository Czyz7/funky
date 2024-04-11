import React, { Fragment } from "react";
import Link from "next/link";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from "@/components/block";
import HeroCode from "@/components/HeroCode";
import CodeServ from "@/components/CodeServ";

const Coding = () => {
    return (
        <Fragment>
            <Head>
                <title>Coding Services</title>
                <meta name="description" content="I offer a range of coding services, including web development, mobile development, and data science." />
            </Head>
            <Navigation />
            <Block />
            <HeroCode />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">

                <div className="container mx-auto px-4">
                    {/* ... other consulting services content */}

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
                        <CodeServ
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
                        <CodeServ
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
                        <CodeServ
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

export default Coding;
