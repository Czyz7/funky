import React, { Fragment } from 'react';
import HeroBlog from '@/components/Hero/HeroBlog';
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import BlogBlock from '@/components/Blog/BlogBlock';
import Footer from '@/components/Footer';



const BlogHome = () => {
    return (
        <Fragment>
            <Head>
                <title>About Us | Vegas AI Solutions</title>
                <meta name="description" content="Learn more about Accessible Web Designs and our mission to make the web accessible to everyone." />
            </Head>
            <Navigation />
            <Block />
            <HeroBlog />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <BlogBlock />
            </main>
            <Footer />
        </Fragment>
    );
};

export default BlogHome;

