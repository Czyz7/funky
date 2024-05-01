import React, { Fragment } from 'react'
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import BlogTemplate from '@/components/Blog/BlogTemplate';
import Footer from '@/components/Footer';

const may0124 = () => {
    // Updated blog data
    const blogPost = {
        title: 'Wix: AI Pioneer in Website Building (Almost)',
        date: 'May 01, 2024',


        author: {
            avatarUrl: "/Authors/author0.png",
            name: 'Czyz Hernandez',
            profession: 'AI Engineer | Founder'
        },
    };


    return (
        <Fragment>
            <Head>
                <title>Blog | Wix: AI Pioneer in Website Building (Almost)</title>
                <meta name="description" content="Learn more about The Benefits of Integrating AI into Your Workload." />
            </Head>
            <Navigation />
            <Block />
            <main className=" text-black py-20">
                <Block />
                <div className="container mx-auto bg-gray-800 rounded-xl p-6 px-6  "> {/* Container for blog content */}
                    <Block />
                    <BlogTemplate
                        title={blogPost.title}
                        date={blogPost.date}
                        author={blogPost.author}
                    />
                </div>
                <Block />
                <Block />
            </main>
            <Footer />
        </Fragment>
    );
};

export default may0124;
