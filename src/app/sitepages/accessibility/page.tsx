import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from '@/components/Spacings/Block';
import AccessibilityPrice from '@/components/ServiceForms/AccessibilityPrice';
import HeroAccess from "@/components/Hero/HeroAccess";
import Footer from "@/components/Footer";
import AccessibilityBlocks from "@/components/Spacings/accessBlock";

const Accessibility = () => {
    return (
        <Fragment>
            <Head>
                <title>Accessibility</title>
                <meta name="description" content="I offer a range of coding services, including web development, mobile development, and data science." />
            </Head>
            <Navigation />
            <AccessibilityBlocks />
            <HeroAccess />
            <main className=" text-gray-800 py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing</h1>
                <Block />
                <AccessibilityPrice />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Accessibility;
