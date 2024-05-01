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
                <title>Website Redesign Services | Blot AI</title>
                <meta name="description" content="Our website redesign services in Las Vegas help businesses create beautiful, functional, and effective websites. We offer a range of services to meet your needs, including website redesign, development, and maintenance." />
                <meta name="keywords" content="website redesign, website redesign services, website development, website maintenance, Las Vegas" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
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


