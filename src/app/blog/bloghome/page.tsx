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
                <title>Blog | Blot AI</title>
                <meta name="description" content="Las Vegas web development experts at Blot AI share the latest insights and trends in web design, development, SEO, and digital marketing. Stay ahead of the curve with our informative blog posts!" />
                <meta name="keywords" content="Las Vegas web development, AI web development, Wix development, WordPress development, SEO, digital marketing, website design, website development, blog, web design trends, development trends, SEO trends, digital marketing trends" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>

            <Navigation />
            <BlogBlocks />
            <HeroBlog />
            <main className=" text-gray-800 py-20">
                <Block />
                <BlogBlock />
                <Block />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default BlogHome;

