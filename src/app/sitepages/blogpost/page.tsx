import React, { Fragment } from "react";
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import BlogServ from '@/components/ServiceForms/BlogServ';
import Head from 'next/head';
import HeroBlog from '@/components/Hero/HeroBlog';
import Footer from "@/components/Footer";
import BlogBlocks from "@/components/Spacings/BlogBlocks";

const BlogPost = () => {
    return (
        <Fragment>
            <Head>
                <title>Blog Post | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the BlogPost page." />
            </Head>
            <Navigation />
            <BlogBlocks />
            <HeroBlog />
            <main className=" text-gray-800 py-20">
                <main className=" text-gray-800 py-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Blog Post Generation Services</h1>
                    <Block />
                    <BlogServ />
                </main>
            </main>
            <Footer />
        </Fragment>
    );
};

export default BlogPost;

