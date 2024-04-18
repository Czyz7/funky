import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import HeroManage from '@/components/Hero/HeroManage';
import ManageServe from '@/components/ServiceForms/ManageServe';




const Manage = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <Block />
            <HeroManage />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Website Management Services</h1>
                <Block />
                <ManageServe />
            </main>
        </Fragment>
    );
};

export default Manage;
