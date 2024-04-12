import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';

const About = () => {
    return (
        <>
            <Head>
                <title>About Us | Vegas AI Solutions</title>
                <meta name="description" content="Learn more about Accessible Web Designs and our mission to make the web accessible to everyone." />
            </Head>
            <Navigation />
            <Block />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <h1>Vegas AI Solutions</h1>
                <p>
                    To empower businesses with cutting-edge, AI-driven websites that deliver exceptional user experiences, boost online visibility, and promote inclusivity.
                </p>
            </main>
        </>
    );
};

export default About;
