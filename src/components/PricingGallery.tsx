import React from 'react';
import Image from 'next/image';


interface PricingGalleryProps {
    imageUrl: string;
    altText: string;
    brandColor?: string;
    width: number;
    height: number;
}

const PricingGallery: React.FC<PricingGalleryProps> = ({
    imageUrl,
    altText,
    brandColor = '#F66B0E', // Adjust this to your brand color
}) => {
    return (
        <div className="group relative">
            <Image
                className="group-hover:opacity-75 transition duration-300 ease-in-out block w-full rounded-lg"
                src={imageUrl}
                alt={altText}
            />
            <div
                className={`group-hover:bg-${brandColor} group-hover:absolute group-hover:inset-0 z-10 opacity-0 transition duration-300 ease-in-out rounded-lg`}
            ></div>
        </div>
    );
};

export default PricingGallery;
