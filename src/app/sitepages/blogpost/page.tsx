import React, { Fragment } from "react";
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import BlogServ from '@/components/ServiceForms/BlogServ';
import Head from 'next/head';
import HeroBlog from '@/components/Hero/HeroBlog';
import Footer from "@/components/Footer";
import BlogBlocks from "@/components/Spacings/BlogBlocks";
import BlogPostFaq0 from "@/components/Faq/BlogPostFaq0";
import BlogPostFaq1 from "@/components/Faq/BlogPostFaq1";
import BlogPostFaq2 from "@/components/Faq/BlogPostFaq2";
import BlogPostFaq3 from "@/components/Faq/BlogPostFaq3";

const BlogPost = () => {
    return (
        <Fragment>
            <Head>
                <title>Blog Post Generation Services | Blot AI</title>
                <meta name="description" content="Our Blog Post Generation Services use advanced AI to create high-quality, SEO-optimized blog posts that will help you attract more traffic to your website and improve your search engine rankings. We offer a range of services to meet your needs, including blog post writing, editing, and optimization." />
                <meta name="keywords" content="blog post generation, AI writing, SEO optimization, content marketing, digital marketing, website traffic, search engine rankings, blog post writing service, blog post editing service, blog post optimization service" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>

            <Navigation />
            <BlogBlocks />
            <HeroBlog />
            <main className=" text-gray-800 py-20">
                <Block />
                <h1 className="text-5xl font-bold title-font text-center mb-2 text-gray-900">Pricing for Blog Post Generation Services</h1>
                <Block />
                <Block />
                <BlogServ />
                <Block />
                <div className="p-10 rounded-lg">
                    <BlogPostFaq0 />
                    <BlogPostFaq1 />
                    <BlogPostFaq2 />
                    <BlogPostFaq3 />
                </div>
            </main>
            <Footer />
        </Fragment>
    );
};

export default BlogPost;

