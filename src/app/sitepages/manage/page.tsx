import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import HeroManage from '@/components/Hero/HeroManage';
import ManageServe from '@/components/ServiceForms/ManageServe';
import Footer from '@/components/Footer';
import WebsiteManagementBlock from '@/components/Spacings/webManBlock';




const Manage = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <WebsiteManagementBlock />
            <HeroManage />

            <main className=" text-gray-800 py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Website Management Services</h1>
                <Block />
                <ManageServe />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Manage;
