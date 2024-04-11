import React from 'react';

interface SeoTechnProps {
    tier: string;
    price: number;
    details: string[];
}

const SeoTechn: React.FC<SeoTechnProps> = ({ tier, price, details }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-screen-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">{tier} Package</h2>
            <p className="text-lg mb-4">
                Price: ${price}
            </p>
            <ul className="list-disc space-y-2">
                {details.map((detail) => (
                    <li key={detail} className="text-gray-700">
                        {detail}
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

export default SeoTechn;
