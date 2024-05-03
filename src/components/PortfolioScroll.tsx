'use client';

import Image from 'next/image';
import { useEffect, useState } from 'react';

const PortfolioScroll = () => {
    const [windowWidth, setWindowWidth] = useState(0);

    useEffect(() => {
        setWindowWidth(window.innerWidth);
        window.addEventListener('resize', () => setWindowWidth(window.innerWidth));
        return () => window.removeEventListener('resize', () => setWindowWidth(window.innerWidth));
    }, []);

    return (
        <div className=" px-5 md:px-10 lg:px-24 py-10 rounded-3xl bg-gray-800 ">
            <div dir="ltr" className="snap-x snap-mandatory overflow-x-scroll bg-gray-800 scrollbar-hide ">
                <div className="snap-container snap-always flex space-x-6 h-100 bg-gray-800 scrollbar-hide xl:w-1/4 md:w-1/2 p-20 rounded-lg  ">
                    {windowWidth < 768 ? (
                        <>
                            <div className="snap-center min-w-[300px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125 "> {/* Added snap-center and min-w-[300px] */}
                                <Image
                                    src="/portfolioImages/pyg0.png"
                                    alt="Hero serve"
                                    width={300}
                                    height={300}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[300px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125 ">
                                <Image
                                    src="/portfolioImages/dM0.png"
                                    alt="Hero serve"
                                    width={300}
                                    height={300}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[300px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/dogWare0.png"
                                    alt="Hero serve"
                                    width={300}
                                    height={300}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[300px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/taxRes0.png"
                                    alt="Hero serve"
                                    width={300}
                                    height={300}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[300px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/mk4l.png"
                                    alt="Hero serve"
                                    width={300}
                                    height={300}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[300px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/whatCook0.png"
                                    alt="Hero serve"
                                    width={300}
                                    height={300}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[300px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/poa0.png"
                                    alt="Hero serve"
                                    width={300}
                                    height={300}
                                    layout="contain"
                                />
                            </div>
                        </>
                    ) : (
                        <>
                            <div className="snap-center min-w-[720px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125 "> {/* Added snap-center and min-w-[300px] */}
                                <Image
                                    src="/portfolioImages/pyg0.png"
                                    alt="Hero serve"
                                    width={720}
                                    height={720}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[720px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125 ">
                                <Image
                                    src="/portfolioImages/dM0.png"
                                    alt="Hero serve"
                                    width={720}
                                    height={720}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[720px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/dogWare0.png"
                                    alt="Hero serve"
                                    width={720}
                                    height={720}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[720px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/taxRes0.png"
                                    alt="Hero serve"
                                    width={720}
                                    height={720}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[720px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/mk4l.png"
                                    alt="Hero serve"
                                    width={720}
                                    height={720}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[720px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/whatCook0.png"
                                    alt="Hero serve"
                                    width={720}
                                    height={720}
                                    layout="contain"
                                />
                            </div>
                            <div className="snap-center min-w-[720px] overflow-hidden opacity-75 transform transition duration-700 ease-in-out hover:opacity-100 hover:scale-125">

                                <Image
                                    src="/portfolioImages/poa0.png"
                                    alt="Hero serve"
                                    width={720}
                                    height={720}
                                    layout="contain"
                                />
                            </div>
                        </>
                    )}

                    {/* ... Add more image divs here ... */}
                </div>
            </div>
        </div>
    );
};

export default PortfolioScroll;

