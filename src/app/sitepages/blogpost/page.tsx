import React, { Fragment } from "react";
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import BlogServ from '@/components/ServiceForms/BlogServ';
import Head from 'next/head';
import HeroBlog from '@/components/Hero/HeroBlog';

const BlogPost = () => {
    return (
        <Fragment>
            <Head>
                <title>Blog Post | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the BlogPost page." />
            </Head>
            <Navigation />
            <Block />
            <HeroBlog />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                    <h1 className="sm:text-4xl text-3xl font-medium title-font text-center mb-2 text-gray-900">Pricing for Blog Post Generation Services</h1>
                    <Block />
                    <BlogServ />
                </main>
            </main>
        </Fragment>
    );
};

export default BlogPost;

