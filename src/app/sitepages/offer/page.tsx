import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from "@/components/block";
import HeroOffer from "@/components/Hero/HeroOffer";
import ServiceGallery from "@/components/ServiceGallery";
import Footer from "@/components/Footer";

const Offer = () => {
    return (
        <Fragment>
            <Head>
                <title>All Services</title>
                <meta name="description" content="I offer a range of coding services, including web development, mobile development, and data science." />
            </Head>
            <Navigation />
            <Block />
            <HeroOffer />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="container mx-auto px-4">
                    <Block />
                    <ServiceGallery />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default Offer;
