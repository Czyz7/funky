import React from 'react';

interface RedesignServProps {
    tier: string;
    focus: string;
    includes: string[];
    idealFor: string[];
}

const RedesignServ: React.FC<RedesignServProps> = ({ tier, focus, includes, idealFor }) => {
    return (
        <div className="bg-white rounded-lg shadow-md p-6 max-w-screen-md mx-auto">
            <h2 className="text-2xl font-bold mb-4">{tier}</h2>
            <p className="text-lg mb-4">
                Focus: {focus}
            </p>
            <ul className="list-disc space-y-2">
                {includes.map((include) => (
                    <li key={include} className="text-gray-700">
                        {include}
                    </li>
                ))}
            </ul>
            <p className="text-lg mb-4">
                Ideal for:
            </p>
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

export default RedesignServ;
