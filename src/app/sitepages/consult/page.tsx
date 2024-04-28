import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import ConsultServ from '@/components/ServiceForms/ConsultServ';
import HeroConsult from '@/components/Hero/HeroConsult';
import Footer from '@/components/Footer';
import ConsultingBlock from '@/components/Spacings/consultBlock';
import ConsultAIBlock from '@/components/Spacings/ConsultAIBlock';
import AiConsultServe from '@/components/ServiceForms/AiConsultServe';
import ConsultServBlock from '@/components/Spacings/ConsultServBlock';

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
                <ConsultAIBlock />
                <Block />
                <AiConsultServe />
                <Block />
                <ConsultServBlock />
                <Block />
                <ConsultServ />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Consult;
