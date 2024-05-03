// In App.tsx or your relevant component file
import React, { Fragment } from 'react';
import ContactForm from '@/components/ContactForm'; // Import the component
import Navigation from '@/components/Navigation';
import HeroContact from '@/components/Hero/HeroContact';
import Footer from '@/components/Footer';
import Head from 'next/head';
import ConatactBlock from '@/components/Spacings/ContactBlock';
import Block from '@/components/Spacings/Block';
import ContactFaq0 from '@/components/Faq/ContactFaq0';

// Inside your component's JSX:
const ContactPage = () => {
    return (
        <Fragment>
            <Head>
                <title>Contact Us | Blot AI</title>
                <meta name="description" content="Contact Blot AI in Las Vegas for all your web development, SEO, and digital marketing needs. We're here to help you achieve your business goals online." />
                <meta name="keywords" content="contact us, Blot AI, Las Vegas, web development, SEO, digital marketing" />
                <meta name="location" content="Las Vegas, NV, Summerlin, Henderson, Southern Nevada, 89128" />
            </Head>

            <div>

                {/* Other content of your page */}
                <Navigation /> {/* Render the Navigation */}
                <ConatactBlock /> {/* Render the Block */}
                <HeroContact /> {/* Render the HeroContact */}
                {/* Other content of your page */}
                <Block />
                <Block />
                <Block />
                <ContactFaq0 />
                <Block />
                <Block />
                <Block />
                <ContactForm /> {/* Render the ContactForm */}
                <Block />
                <Block />
                <Block />
            </div>
            <Footer /> {/* Render the Footer */}
        </Fragment>
    );
};

export default ContactPage;