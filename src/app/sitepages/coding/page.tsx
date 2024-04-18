import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from "@/components/block";
import HeroCode from "@/components/Hero/HeroCode";
import CodeServ from "@/components/ServiceForms/CodeServ";

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

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-800 ">Pricing for Coding Services</h1>
                <Block />
                <CodeServ />
            </main>
        </Fragment>
    );
};

export default Coding;
