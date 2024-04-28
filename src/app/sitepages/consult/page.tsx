import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import ConsultServ from '@/components/ServiceForms/ConsultServ';
import HeroConsult from '@/components/Hero/HeroConsult';
import Footer from '@/components/Footer';
import ConsultingBlock from '@/components/Spacings/consultBlock';

const Consult = () => {
    return (
        <Fragment>
            <Head>
                <title>Consulting Services | Accessible Web Designs</title>
                <meta name="description" content="Blah Blah" />
            </Head>

            <Navigation />
            <ConsultingBlock />
            <HeroConsult />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Consulting Services</h1>
                <Block />
                <ConsultServ />

            </main>
            <Footer />
        </Fragment>
    );
};

export default Consult;
