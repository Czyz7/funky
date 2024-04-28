import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import RedesignServ from '@/components/ServiceForms/RedesignServ';
import HeroRedesign from '@/components/Hero/HeroRedesign';
import Footer from '@/components/Footer';
import WebsiteRedesignBlock from '@/components/Spacings/webRedBlock';


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

            <main className=" text-gray-800 py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Website Redesign Services</h1>
                <Block />
                <RedesignServ />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Redesign;


