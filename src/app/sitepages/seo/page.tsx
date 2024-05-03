import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import HeroSeo from '@/components/Hero/HeroSeo';
import SeoServ from '@/components/ServiceForms/SeoServ';
import Footer from '@/components/Footer';
import SeoBlock from '@/components/Spacings/seoBlocks';
import SeoFaq0 from '@/components/Faq/SeoFaq0';
import SeoFaq1 from '@/components/Faq/SeoFaq1';
import SeoFaq2 from '@/components/Faq/SeoFaq2';
import SeoFaq3 from '@/components/Faq/SeoFaq3';

const SEO = () => {

    return (
        <Fragment>
            <Head>
                <title>SEO Services | Blot AI</title>
                <meta name="description" content="Our SEO services in Las Vegas help businesses improve their visibility and ranking in search engine results pages (SERPs). We offer a range of services to meet your needs, including SEO audits, keyword research, and link building." />
                <meta name="keywords" content="SEO services, SEO audit, keyword research, link building, Las Vegas" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>


            <Navigation />
            <SeoBlock />
            <HeroSeo />

            <main className=" text-gray-800 py-20">
                <Block />
                <h1 className="text-5xl font-bold title-font text-center mb-2 text-gray-800">Pricing for Search Engine Optimization Services</h1>
                <Block />
                <Block />
                <SeoServ />
                <div className="p-10 rounded-lg">
                    <Block />
                    <Block />
                    <SeoFaq0 />
                    <SeoFaq1 />
                    <SeoFaq2 />
                    <SeoFaq3 />
                    <Block />
                    <Block />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default SEO;
