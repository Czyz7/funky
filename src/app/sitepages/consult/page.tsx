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
import ConsultFaq0 from '@/components/Faq/ConsultFaq0';
import ConsultFaq1 from '@/components/Faq/ConsultFaq1';
import ConsultFaq2 from '@/components/Faq/ConsultFaq2';

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

            <main className=" text-gray-800 py-20">
                <Block />
                <ConsultAIBlock />
                <Block />
                <Block />
                <AiConsultServe />
                <Block />
                <Block />
                <ConsultServBlock />
                <Block />
                <Block />
                <ConsultServ />
                <Block />
                <div>
                    <Block />
                    <Block />
                    <ConsultFaq0 />
                    <ConsultFaq1 />
                    <ConsultFaq2 />
                </div>
                <Block />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Consult;
