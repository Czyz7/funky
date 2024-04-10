import React from 'react';

interface accessibilityPriceProps {
    title: string;
    price: string;
    description: string[];
}

const accessibilityPrice: React.FC<accessibilityPriceProps> = ({
    title,
    price,
    description,
}) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-3xl font-semibold mb-4">{price}</p>
            <ul className="list-disc space-y-2">
                {description.map((item) => (
                    <li key={item} className="text-gray-700">
                        {item}
                    </li>
                ))}
            </ul>
            <button className="mt-4 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md">
                Get Started
            </button>
        </div>
    );
};

export default accessibilityPrice;
