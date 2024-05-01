import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import HeroWordPress from '@/components/Hero/HeroWordPress';
import WordPressServ from '@/components/ServiceForms/WordPressServ';
import Footer from '@/components/Footer';
import WordPressBlock from '@/components/Spacings/wpBlock';
import WordPressFaq from '@/components/Faq/WordPressFaq';
import WordPressFaq0 from '@/components/Faq/WordPressFaq0';
import WordPressFaq1 from '@/components/Faq/WordPressFaq1';
import FaqBlock from '@/components/Spacings/FaqBlock';
import WordPressFaq2 from '@/components/Faq/WordPressFaq2';
import WordPressFaq3 from '@/components/Faq/WordPressFaq3';



const Wordpress = () => {
    return (
        <Fragment>
            <Head>
                <title>WordPress Development | Blot AI</title>
                <meta name="description" content="Our WordPress development services in Las Vegas help businesses create beautiful, functional, and effective websites. We offer a range of services to meet your needs, including WordPress website design, development, and maintenance." />
                <meta name="keywords" content="WordPress development, WordPress website design, WordPress website development, WordPress website maintenance, Las Vegas" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>

            <Navigation />
            <WordPressBlock />
            <HeroWordPress />
            <Block />
            <main className=" text-gray-800 py-20">
                <h1 className="text-5xl font-bold title-font text-center mb-2 text-gray-800">Pricing for WordPress Website Development</h1>
                <Block />
                <Block />
                <WordPressServ />
                <Block />
                <div className='p-10 rounded-lg'>
                    <FaqBlock />
                    <Block />
                    <WordPressFaq />
                    <WordPressFaq0 />
                    <WordPressFaq1 />
                    <WordPressFaq3 />
                    <WordPressFaq2 />
                    <Block />
                    <Block />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Wordpress;
