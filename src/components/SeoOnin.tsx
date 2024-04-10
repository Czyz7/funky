import React from 'react';

interface SeoOninProps {
    benefits: string[];
}

const SeoOnin: React.FC<SeoOninProps> = ({ benefits }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-screen-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">On-Page SEO Services</h2>
            <p className="text-lg mb-4">Improve your website&apos;s search engine rankings and visibility with targeted on-page optimization.</p>

            <h3 className="text-xl font-semibold mb-2">Benefits</h3>
            <ul className="list-disc space-y-2">
                {benefits.map((benefit) => (
                    <li key={benefit} className="text-gray-700">
                        {benefit}
                    </li>
                ))}
            </ul>

            <div className="mt-6">
                <p className="text-xl font-bold mb-2">$200 per page</p>
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default SeoOnin;
