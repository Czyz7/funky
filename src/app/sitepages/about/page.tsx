import React, { Fragment } from 'react';
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';
import Testimonial1 from '@/components/Testimonial1';

const About = () => {
    return (
        <Fragment>
            <Head>
                <title>About Us | Vegas AI Solutions</title>
                <meta name="description" content="Learn more about Accessible Web Designs and our mission to make the web accessible to everyone." />
            </Head>
            <Navigation />
            <Block />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">

                <section className="container mx-auto px-4 bg-gray-800 rounded-lg w-full">
                    <h1 className="text-4xl font-bold mb-8 text-white">Why use AI to solve your business needs?</h1>

                    <ul className="list-disc ml-4 text-indigo-50">
                        <li>Improve customer service</li>
                        <li>Automate tasks</li>
                        <li>Improve decision-making</li>
                        <li>Create new products and services</li>
                    </ul>

                    <h1 className="text-4xl font-bold mb-8 mt-16 text-white">How to implement AI into your workloads</h1>

                    <ol className="list-decimal ml-4 text-indigo-50">
                        <li>Identify the problem that you want to solve.</li>
                        <li>Choose the right AI solution.</li>
                        <li>Implement the AI solution.</li>
                        <li>Monitor and evaluate the AI solution.</li>
                    </ol>

                    <h1 className="text-4xl font-bold mb-8 mt-16 text-white">Benefits of using AI</h1>

                    <ul className="list-disc ml-4 text-indigo-50">
                        <li>Increased efficiency</li>
                        <li>Reduced costs</li>
                        <li>Improved customer satisfaction</li>
                        <li>Competitive advantage</li>
                    </ul>
                </section>
                <Testimonial1 />
            </main>

        </Fragment>
    );
};

export default About;

