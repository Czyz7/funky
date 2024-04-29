import Image from 'next/image';

const PortfolioScroll = () => {
    return (
        <div className="px-5 md:px-10 lg:px-24 py-10 rounded-3xl bg-gray-800 ">
            <div dir="ltr" className="snap-x snap-mandatory overflow-x-scroll scrollbar-hide h-100 bg-gray-800 ">
                <div className="snap-container snap-always flex space-x-6 h-100 bg-gray-800">
                    <div className="snap-center min-w-[512px] overflow-hidden hover:scale-x-110 hover:scale-y-110 transition-transform duration-300 "> {/* Added snap-center and min-w-[300px] */}
                        <Image
                            src="/portfolioImages/pyg0.png"
                            alt="Hero serve"
                            width={512}
                            height={512}

                        />
                    </div>
                    <div className="snap-center min-w-[512px]  hover:scale-x-110 hover:scale-y-110 transition-transform duration-300 ">
                        <Image
                            src="/portfolioImages/dM0.png"
                            alt="Hero serve" width={512} height={512}
                        />
                    </div>
                    <div className="snap-center min-w-[512px]  hover:scale-x-110 hover:scale-y-110 transition-transform duration-300">

                        <Image
                            src="/portfolioImages/dogWare0.png"
                            alt="Hero serve"
                            width={512}
                            height={512}
                        />
                    </div>
                    <div className="snap-center min-w-[512px]  hover:scale-x-110 hover:scale-y-110 transition-transform duration-300">

                        <Image
                            src="/portfolioImages/finHarmony1.png"
                            alt="Hero serve"
                            width={512}
                            height={512}
                        />
                    </div>
                    <div className="snap-center min-w-[512px]  hover:scale-x-110 hover:scale-y-110 transition-transform duration-300">

                        <Image
                            src="/portfolioImages/mk4l.png"
                            alt="Hero serve"
                            width={512}
                            height={512}
                        />
                    </div>
                    <div className="snap-center min-w-[512px]  hover:scale-x-110 hover:scale-y-110 transition-transform duration-300">

                        <Image
                            src="/portfolioImages/whatsCookin0.png"
                            alt="Hero serve"
                            width={512}
                            height={512}
                        />
                    </div>
                    <div className="snap-center min-w-[512px]  hover:scale-x-110 hover:scale-y-110 transition-transform duration-300">

                        <Image
                            src="/portfolioImages/poa0.png"
                            alt="Hero serve"
                            width={512}
                            height={100}
                        />
                    </div>

                    {/* ... Add more image divs here ... */}
                </div>
            </div>
        </div>
    );
};

export default PortfolioScroll;
