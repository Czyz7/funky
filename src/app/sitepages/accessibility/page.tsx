import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from "@/components/block";
import AccessibilityPrice from '@/components/ServiceForms/AccessibilityPrice';
import HeroAccess from "@/components/Hero/HeroAccess";

const Accessibility = () => {
    return (
        <Fragment>
            <Head>
                <title>Accessibility</title>
                <meta name="description" content="I offer a range of coding services, including web development, mobile development, and data science." />
            </Head>
            <Navigation />
            <Block />
            <HeroAccess />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="container mx-auto px-4">
                    <h1 className="text-3xl font-bold">Accessibility</h1>
                    <p className="text-lg">
                        I offer a range of coding services, including web development, mobile development, and data science. I have experience working with a variety of technologies, including React, Next.js, Node.js, HTML, CSS, JavaScript, TypeScript, Tailwind CSS, Python, and Git.
                    </p>
                    {/* Pricing Card Section */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
                        <AccessibilityPrice
                            title="Consultation"
                            price="$55/mo"
                            description={[
                                'Monthly Software, Theme, and Plugin Updates',
                                'Monthly Security Scans',
                                'Monthly Website Backups',
                            ]}
                        />
                        <AccessibilityPrice
                            title="Accessibility Audit"
                            price="$299"
                            description={[
                                'In-depth analysis of your website’s accessibility',
                                'WCAG 2.1 compliance report',
                                'Prioritized list of recommendations',
                            ]}
                        />
                        <AccessibilityPrice
                            title="Accessible Website"
                            price="Custom Quote"
                            description={[
                                'Remediate website accessibility issues',
                                'Develop and implement an accessibility plan',
                                'Ongoing accessibility maintenance',
                            ]}
                        />
                    </div>
                    {/* End of Pricing Card Section */}
                    {/* ...(the rest of your code) */}
                </div>
            </main>
        </Fragment>
    );
};

export default Accessibility;
