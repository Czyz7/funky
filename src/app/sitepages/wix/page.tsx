import React, { Fragment } from 'react'
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import HeroWix from '@/components/Hero/HeroWix';
import WixServ from '@/components/ServiceForms/WixServ';
import Footer from '@/components/Footer';
import WixBlock from '@/components/Spacings/wixBlock';
import WixFaq from '@/components/Faq/WixFaq';
import FaqBlock from '@/components/Spacings/FaqBlock';
import WordPressFaq1 from '@/components/Faq/WordPressFaq1';
import WixFaq0 from '@/components/Faq/WixFaq0';
import WixFaq1 from '@/components/Faq/WixFaq1';
import WordPressFaq0 from '@/components/Faq/WordPressFaq0';

const Wix = () => {
    return (
        <Fragment>
            <Head>
                <title>Wix Development | Blot AI</title>
                <meta name="description" content="Our Wix development services in Las Vegas help businesses create beautiful, functional, and effective websites. We offer a range of services to meet your needs, including Wix website design, development, and maintenance." />
                <meta name="keywords" content="Wix development, Wix website design, Wix website development, Wix website maintenance, Las Vegas" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>

            <Navigation />
            <WixBlock />
            <HeroWix />
            <Block />
            <main className=" text-gray-800 py-20">
                <h1 className="text-5xl font-bold text-center mb-2 text-gray-800">Pricing for Wix Website Development</h1>
                <Block />
                <Block />
                <WixServ />
                <Block />
                <div className='p-10 rounded-lg'>
                    <FaqBlock />
                    <Block />
                    <WixFaq />
                    <WordPressFaq0 />
                    <WordPressFaq1 />
                    <WixFaq0 />
                    <WixFaq1 />
                </div>
                <Block />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Wix;
