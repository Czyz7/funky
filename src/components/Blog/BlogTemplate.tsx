import React from 'react';
import Head from 'next/head'; // For SEO metadata
import Image from 'next/image';

interface Author {
    avatarUrl: string;
    name: string;
    profession: string;
}



interface BlogTemplateProps {
    title: string;
    date: string;
    content: string; // Or any other format for your content
    // Add more props as needed (author, featured image, etc.)
    author: Author;
}

const BlogTemplate: React.FC<BlogTemplateProps> = ({ title, date, content, author }) => {
    return (
        <div className="container mx-auto max-w-screen-lg rounded-md p-4 bg-indigo-50">
            <Head>
                <title>{title} - Your Blog Name</title>
                {/* Add meta tags for SEO (description, keywords, etc.) */}
            </Head>

            <article className="grid grid-cols-12 gap-4">
                <div className="col-span-9">
                    <h1 className="text-4xl font-bold">{title}</h1>
                    <p className="text-gray-600">Published on: {date}</p>

                    <div className="prose mt-4">
                        {content}
                    </div>

                    <div className="flex items-center justify-end mt-4">
                        <button className="btn btn-primary">Subscribe to my newsletter</button>
                    </div>
                </div>
                <div className="col-span-3">
                    <div className="flex items-center justify-center">
                        <Image
                            src={author.avatarUrl}
                            alt={author.name}
                            width={100}
                            height={100}
                            className="rounded-full"
                        />
                    </div>
                    <h3 className="text-xl font-bold mt-4">{author.name}</h3>
                    <p className="text-gray-600">{author.profession}</p>
                </div>
            </article>
        </div>
    );
};

export default BlogTemplate;
