import React, { Fragment } from "react";
import Head from "next/head";
import Navigation from "@/components/Navigation";
import Block from '@/components/Spacings/Block';
import HeroOffer from "@/components/Hero/HeroOffer";
import ServiceGallery from "@/components/ServiceGallery";
import Footer from "@/components/Footer";
import ServiceBlock from "@/components/Spacings/ServiceBlock";

const Offer = () => {
    return (
        <Fragment>
            <Head>
                <title>All Services</title>
                <meta name="description" content="I offer a range of coding services, including web development, mobile development, and data science." />
            </Head>
            <Navigation />
            <ServiceBlock />
            <HeroOffer />
            <main className=" text-gray-800 py-20">
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
