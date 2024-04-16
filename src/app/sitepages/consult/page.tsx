import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import ConsultServ from '@/components/ServiceForms/ConsultServ';
import HeroConsult from '@/components/Hero/HeroConsult';

const Consult = () => {
    return (
        <Fragment>
            <Head>
                <title>Consulting Services | Accessible Web Designs</title>
                <meta name="description" content="Blah Blah" />
            </Head>

            <Navigation />
            <Block />
            <HeroConsult />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="container mx-auto px-4">
                    <ConsultServ />

                </div>
            </main>
        </Fragment>
    );
};

export default Consult;
