import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import FaqBlock from '@/components/Spacings/FaqBlock';

import Footer from '@/components/Footer';
import WordPressFaq from '@/components/Faq/WordPressFaq';

const Faq = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <FaqBlock />
            <main className=" text-gray-800 py-20">
                <div className="p-10 rounded-lg">
                    <WordPressFaq />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Faq;
