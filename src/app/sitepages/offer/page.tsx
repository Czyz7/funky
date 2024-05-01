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
                <title>Services | Blot AI</title>
                <meta name="description" content="Blot AI offers a comprehensive range of web development, SEO, and digital marketing services in Las Vegas. Our services are designed to help businesses achieve their online goals and grow their businesses." />
                <meta name="keywords" content="web development, SEO, digital marketing, Las Vegas" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
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
