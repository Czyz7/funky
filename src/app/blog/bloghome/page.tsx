import React, { Fragment } from 'react';
import HeroBlog from '@/components/Hero/HeroBlog';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import BlogBlock from '@/components/Blog/BlogBlock';
import Footer from '@/components/Footer';
import BlogBlocks from '@/components/Spacings/BlogBlocks';



const BlogHome = () => {
    return (
        <Fragment>
            <Head>
                <title>About Us | Vegas AI Solutions</title>
                <meta name="description" content="Learn more about Accessible Web Designs and our mission to make the web accessible to everyone." />
            </Head>
            <Navigation />
            <BlogBlocks />
            <HeroBlog />
            <main className=" text-gray-800 py-20">
                <BlogBlock />
            </main>
            <Footer />
        </Fragment>
    );
};

export default BlogHome;

