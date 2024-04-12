import React from 'react';

interface SeoKeyProps {
    tier: string;
    price: number;
    keywords: string;
    focus: string;
    includes: string[];
    idealFor: string[];
}

const SeoKey: React.FC<SeoKeyProps> = ({ tier, price, keywords, focus, includes, idealFor }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-screen-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">{tier} Package</h2>
            <p className="text-lg mb-4">
                Price: ${price}
            </p>
            <p className="text-lg mb-4">
                Keywords: {keywords}
            </p>
            <p className="text-lg mb-4">
                Focus: {focus}
            </p>
            <h3 className="text-xl font-semibold mb-2">Includes</h3>
            <ul className="list-disc space-y-2">
                {includes.map((include) => (
                    <li key={include} className="text-gray-700">
                        {include}
                    </li>
                ))}
            </ul>
            <h3 className="text-xl font-semibold mb-2">Ideal For</h3>
            <ul className="list-disc space-y-2">
                {idealFor.map((ideal) => (
                    <li key={ideal} className="text-gray-700">
                        {ideal}
                    </li>
                ))}
            </ul>
            <div className="mt-6">
                <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                    Get Started
                </button>
            </div>
        </div>
    );
};

export default SeoKey;
