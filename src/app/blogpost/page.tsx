import React, { Fragment } from "react";
import Navigation from '@/components/Navigation';
import Block from '@/components/block';
import BlogServ from '@/components/BlogServ';
import Head from 'next/head';
import HeroBlog from '@/components/HeroBlog';

const BlogPost = () => {
    return (
        <Fragment>
            <Head>
                <title>Blog Post | Accessible Web Designs</title>
                <meta name="description" content="This is a filler page for the BlogPost page." />
            </Head>
            <Navigation />
            <Block />
            <HeroBlog />
            <main className="bg-gradient-to-r from-emerald-400 to-cyan-400 text-black py-20">
                <div className="grid grid-cols-3 gap-4">
                    <BlogServ
                        tier="Tier 1: AI-Assisted Essentials"
                        focus="Cost-effective, basic blog content"
                        includes={[
                            'AI-generated drafts (using your tools and prompts)',
                            'Light editing and proofreading by a human editor',
                            'Basic topic/keyword research',
                            'Standard formatting and image sourcing (where applicable)',
                        ]}
                        idealFor={[
                            'High-volume, less complex blog posts',
                            'Clients on a tight budget',
                            'Businesses needing content for less competitive topics',
                        ]}
                    />
                    <BlogServ
                        tier="Tier 2: AI-Enhanced with SEO"
                        focus="Quality content with search optimization"
                        includes={[
                            'AI-generated drafts with refined prompts for quality',
                            'Human editing, proofreading, and fact-checking',
                            'Keyword research and strategic inclusion in the content',
                            'Optimization of title tags, meta descriptions, and basic on-page elements',
                        ]}
                        idealFor={[
                            'Businesses needing regular, SEO-focused blog content',
                            'Content aiming for moderate search competition',
                            'Clients wanting a balance between cost and optimization',
                        ]}
                    />
                    <BlogServ
                        tier="Tier 3: Expert-Crafted SEO Powerhouse"
                        focus="High-quality, in-depth content aimed at driving traffic"
                        includes={[
                            'Extensive keyword and competitor research',
                            'Human writer from scratch, using AI as a research tool (optional)',
                            'In-depth content focused on audience needs and search intent',
                            'Advanced on-page optimization, internal linking strategy',
                            'Potential for incorporating long-tail keywords and addressing related questions (for comprehensiveness)',
                        ]}
                        idealFor={[
                            'Targeting competitive keywords and aiming for top rankings',
                            'Building thought leadership with authoritative articles',
                            'Clients who value content as a significant traffic driver',
                        ]}
                    />

                </div>
            </main>
        </Fragment>
    );
};

export default BlogPost;

