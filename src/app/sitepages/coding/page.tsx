import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from '@/components/Spacings/Block';
import HeroCode from "@/components/Hero/HeroCode";
import CodeServ from "@/components/ServiceForms/CodeServ";
import Footer from "@/components/Footer";

const Coding = () => {
    return (
        <Fragment>
            <Head>
                <title>Coding Services</title>
                <meta name="description" content="I offer a range of coding services, including web development, mobile development, and data science." />
            </Head>
            <Navigation />
            <Block />
            <HeroCode />

            <main className=" text-gray-800 py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-800 ">Pricing for Coding Services</h1>
                <Block />
                <CodeServ />
            </main>
            <Footer />
        </Fragment>
    );
};

export default Coding;
