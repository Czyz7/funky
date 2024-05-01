import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import HeroManage from '@/components/Hero/HeroManage';
import ManageServe from '@/components/ServiceForms/ManageServe';
import Footer from '@/components/Footer';
import WebsiteManagementBlock from '@/components/Spacings/webManBlock';
import ManageFaq0 from '@/components/Faq/ManageFaq0';
import ManageFaq1 from '@/components/Faq/ManageFaq1';
import ManageFaq2 from '@/components/Faq/ManageFaq2';




const Manage = () => {
    return (
        <Fragment>
            <Head>
                <title>Website Management Services | Blot AI</title>
                <meta name="description" content="Our website management services in Las Vegas help businesses keep their websites up-to-date, secure, and running smoothly. We offer a range of services to meet your needs, including website maintenance, security updates, and content management." />
                <meta name="keywords" content="website management, website maintenance, website security, content management, Las Vegas" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>

            <Navigation />
            <WebsiteManagementBlock />
            <HeroManage />

            <main className=" text-gray-800 py-20">
                <Block />
                <h1 className="text-5xl title-font font-bold text-center mb-2 text-gray-800">Pricing for Website Management Services</h1>
                <Block />
                <ManageServe />
                <Block />
                <Block />
                <div className="p-10 rounded-lg">
                    <ManageFaq0 />
                    <ManageFaq1 />
                    <ManageFaq2 />
                    <Block />
                    <Block />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Manage;
