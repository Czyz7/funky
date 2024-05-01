import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import RedesignServ from '@/components/ServiceForms/RedesignServ';
import HeroRedesign from '@/components/Hero/HeroRedesign';
import Footer from '@/components/Footer';
import WebsiteRedesignBlock from '@/components/Spacings/webRedBlock';
import RedesignFaq0 from '@/components/Faq/RedesignFaq0';
import RedesignFaq1 from '@/components/Faq/RedesignFaq1';


const Redesign = () => {
    return (
        <Fragment>
            <Head>
                <title>Consulting Services | Accessible Web Designs</title>
                <meta name="description" content="Blah Blah" />
            </Head>

            <Navigation />
            <WebsiteRedesignBlock />
            <HeroRedesign />
            <Block />
            <main className=" text-gray-800 py-20">
                <h1 className="text-5xl font-bold title-font text-center mb-2 text-gray-800">Pricing for Website Redesign Services</h1>
                <Block />
                <Block />
                <RedesignServ />
                <Block />
                <div className="p-10 rounded-lg">
                    <Block />
                    <RedesignFaq0 />
                    <RedesignFaq1 />
                </div>
                <Block />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Redesign;


