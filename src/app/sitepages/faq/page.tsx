import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Head from 'next/head';
import FaqBlock from '@/components/Spacings/FaqBlock';

import Footer from '@/components/Footer';
import WordPressFaq from '@/components/Faq/WordPressFaq';
import WordPressFaq0 from '@/components/Faq/WordPressFaq1';
import WordPressFaq1 from '@/components/Faq/WordPressFaq1';
import WordPressFaq2 from '@/components/Faq/WordPressFaq2';
import WordPressFaq3 from '@/components/Faq/WordPressFaq3';
import WixFaq from '@/components/Faq/WixFaq';
import WixFaq0 from '@/components/Faq/WixFaq0';
import WixFaq1 from '@/components/Faq/WixFaq1';
import RedesignFaq0 from '@/components/Faq/RedesignFaq0';
import RedesignFaq1 from '@/components/Faq/RedesignFaq1';
import ManageFaq0 from '@/components/Faq/ManageFaq0';
import ManageFaq1 from '@/components/Faq/ManageFaq1';
import ManageFaq2 from '@/components/Faq/ManageFaq2';
import BlogPostFaq0 from '@/components/Faq/BlogPostFaq0';
import BlogPostFaq1 from '@/components/Faq/BlogPostFaq1';
import BlogPostFaq2 from '@/components/Faq/BlogPostFaq2';
import BlogPostFaq3 from '@/components/Faq/BlogPostFaq3';
import SeoFaq0 from '@/components/Faq/SeoFaq0';
import SeoFaq1 from '@/components/Faq/SeoFaq1';
import SeoFaq2 from '@/components/Faq/SeoFaq2';
import SeoFaq3 from '@/components/Faq/SeoFaq3';
import AccFaq0 from '@/components/Faq/AccFaq0';
import AccFaq1 from '@/components/Faq/AccFaq1';
import AccFaq2 from '@/components/Faq/AccFaq2';
import ConsultFaq0 from '@/components/Faq/ConsultFaq0';
import ConsultFaq1 from '@/components/Faq/ConsultFaq1';
import ConsultFaq2 from '@/components/Faq/ConsultFaq2';

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
                    <WordPressFaq0 />
                    <WordPressFaq1 />
                    <WordPressFaq2 />
                    <WordPressFaq3 />
                    <WixFaq />
                    <WixFaq0 />
                    <WixFaq1 />
                    <ManageFaq0 />
                    <ManageFaq1 />
                    <ManageFaq2 />
                    <RedesignFaq0 />
                    <RedesignFaq1 />
                    <BlogPostFaq0 />
                    <BlogPostFaq1 />
                    <BlogPostFaq2 />
                    <BlogPostFaq3 />
                    <SeoFaq0 />
                    <SeoFaq1 />
                    <SeoFaq2 />
                    <SeoFaq3 />
                    <AccFaq0 />
                    <AccFaq1 />
                    <AccFaq2 />
                    <ConsultFaq0 />
                    <ConsultFaq1 />
                    <ConsultFaq2 />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Faq;
