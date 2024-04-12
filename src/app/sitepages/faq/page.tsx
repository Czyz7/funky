import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import Head from 'next/head';

const Faq = () => {
    return (
        <>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <Navigation />
            <Block />

            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <h1>SEO Page</h1>
                <p>
                    This is a filler page for the Faq page.
                </p>
            </main>
        </>
    );
};

export default Faq;
