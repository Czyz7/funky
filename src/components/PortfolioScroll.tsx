import Image from 'next/image';


const PortfolioScroll = () => {
    return (
        <div className=" px-5 md:px-10 lg:px-6 py-8 rounded-3xl bg-gray-800 ">
            <div dir="ltr" className="snap-x overflow-x-scroll scroll-pl-6 snap-mandatory bg-gray-800"> {/* Added snap-x and overflow-x-scroll */}
                <div className="snap-container snap-always flex space-x-6 bg-gray-800"> {/* Added snap-container and space-x-6 */}

                    <Image src="/Hero Images/webRed0.png" alt="Hero serve" width={512} height={512} />


                    <Image src="/Hero Images/webRed0.png" alt="Hero serve" width={512} height={512} />


                    <Image src="/Hero Images/webRed0.png" alt="Hero serve" width={512} height={512} />

                    <Image src="/Hero Images/webRed0.png" alt="Hero serve" width={512} height={512} />

                    <Image src="/Hero Images/webRed0.png" alt="Hero serve" width={512} height={512} />

                    <Image src="/Hero Images/webRed0.png" alt="Hero serve" width={512} height={512} />

                    <Image src="/Hero Images/webRed0.png" alt="Hero serve" width={512} height={512} />

                    {/* ... Add more image divs here ... */}
                </div>
            </div>
        </div>
    );
};

export default PortfolioScroll;
