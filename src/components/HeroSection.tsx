import React from 'react';

const HeroSection = () => {
    return (
        <section className="bg-black text-white py-20 relative"> {/* Black background for video contrast */}
            <video autoPlay muted loop poster="/path/to/poster-image.jpg" className="w-full h-screen object-cover">
                <source src="/path/to/your-video.mp4" type="video/mp4" />
                {/* Fallback for older browsers:  */}
                Your browser does not support the video tag.
            </video>

            <div className="container mx-auto absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-center"> {/* Center content over video */}
                <h1 className="text-4xl font-bold mb-4">Accessible Web Designs</h1>
                <p>Modern, Accessible, User-Friendly Web Designs</p>
                <button className="bg-white text-black font-medium px-6 py-3 rounded-md mt-4 hover:bg-opacity-80">
                    Get a Quote
                </button>
            </div>
        </section>
    );
};

export default HeroSection;
