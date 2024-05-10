import React, { Fragment } from 'react'
import Navigation from '@/components/Navigation';
import Block from '@/components/Spacings/Block';
import Head from 'next/head';
import BlogTemplate0 from '@/components/Blog/BlogTemplate0';
import Footer from '@/components/Footer';

const may1024 = () => {
    // Updated blog data
    const blogPost = {
        title: 'Stop the Busywork, Boost Your Business: How AI Can Be Your Secret Weapon',
        date: 'May 10, 2024',


        author: {
            avatarUrl: "/Authors/author0.png",
            name: 'Czyz Hernandez',
            profession: 'AI Engineer | Founder'
        },
    };


    return (
        <Fragment>
            <Head>
                <title>Stop the Busywork, Boost Your Business: How AI Can Be Your Secret Weapon</title>
                <meta name="description" content="Learn more about The Benefits of Integrating AI into Your Workload." />
            </Head>
            <Navigation />
            <Block />
            <main className=" text-black py-20">
                <Block />
                <div className="container mx-auto bg-gray-800 rounded-xl p-6 px-6  "> {/* Container for blog content */}
                    <Block />
                    <BlogTemplate0
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

export default may1024;
