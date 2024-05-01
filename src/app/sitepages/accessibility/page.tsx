import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from '@/components/Spacings/Block';
import AccessibilityPrice from '@/components/ServiceForms/AccessibilityPrice';
import HeroAccess from "@/components/Hero/HeroAccess";
import Footer from "@/components/Footer";
import AccessibilityBlocks from "@/components/Spacings/accessBlock";
import AccFaq0 from "@/components/Faq/AccFaq0";
import AccFaq1 from "@/components/Faq/AccFaq1";
import AccFaq2 from "@/components/Faq/AccFaq2";

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
            <Block />
            <main className=" text-gray-800 py-20">
                <h1 className="text-5xl font-bold title-font text-center mb-2 text-gray-800">Pricing for Digital Accessibility Services</h1>
                <Block />
                <Block />
                <AccessibilityPrice />
                <Block />
                <Block />
                <div>
                    <AccFaq0 />
                    <AccFaq1 />
                    <AccFaq2 />
                </div>
                <Block />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Accessibility;
