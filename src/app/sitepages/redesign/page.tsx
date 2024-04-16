import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import RedesignServ from '@/components/ServiceForms/ConsultServ';
import HeroRedesign from '@/components/Hero/HeroRedesign';


const Redesign = () => {
    return (
        <Fragment>
            <Head>
                <title>Consulting Services | Accessible Web Designs</title>
                <meta name="description" content="Blah Blah" />
            </Head>

            <Navigation />
            <Block />
            <HeroRedesign />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing</h1>
                <Block />
                <RedesignServ />
            </main>
        </Fragment>
    );
};

export default Redesign;


