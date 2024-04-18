import React from 'react';
import Image from 'next/image';

interface Logo {
    alt: string;
    src: string;
}

interface PortfolioLogosProps {
    logos: Logo[];
}

const PortfolioLogos: React.FC<PortfolioLogosProps> = ({ logos }) => {
    return (
        <div className="flex flex-row justify-center items-center grid-cols-4 gap-y-20 gap-x-20">
            {logos.map((logo) => (
                <Image
                    key={logo.src}
                    src={logo.src}
                    alt={logo.alt}
                    width={100}
                    height={50}
                    className='rounded-full opacity-80 hover:scale-110 duration-200 ease-in-out transition-opacity hover:opacity-100 cursor-auto items-center'
                />
            ))}
        </div>
    );
};


export default PortfolioLogos;
