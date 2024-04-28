// In App.tsx or your relevant component file
import React, { Fragment } from 'react';
import ContactForm from '@/components/ContactForm'; // Import the component
import Navigation from '@/components/Navigation';
import HeroContact from '@/components/Hero/HeroContact';
import Footer from '@/components/Footer';
import Head from 'next/head';
import ConatactBlock from '@/components/Spacings/ContactBlock';

// Inside your component's JSX:
const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>SEO Page | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the SEO page." />
            </Head>
            <div>

                {/* Other content of your page */}
                <Navigation /> {/* Render the Navigation */}
                <ConatactBlock /> {/* Render the Block */}
                <HeroContact /> {/* Render the HeroContact */}
                {/* Other content of your page */}
                <ContactForm /> {/* Render the ContactForm */}
            </div>
            <Footer /> {/* Render the Footer */}
        </Fragment>
    );
};

export default ContactPage;