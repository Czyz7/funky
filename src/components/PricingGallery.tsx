import Link from 'next/link';
import Image from 'next/image';

const ServiceGallery = () => {
    return (
        <section className="text-gray-600 body-font">
            {/* ... (rest of your component) ... */}
            <div className="flex flex-wrap -m-4  grid-cols-4  ">
                <div className="xl:w-1/4 md:w-1/2 rounded-lg relative hover:bg-indigo-500 hover:scale-110 transition duration-300 ease-in-out">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/laptop.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60 absolute inset-0" // Absolute positioning for the image
                            />

                            {/* Overlay content - remains outside the image container */}
                            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* ... (rest of your component) ... */}
                <div className="xl:w-1/4 md:w-1/2 rounded-lg relative hover:bg-indigo-500 hover:scale-110 transition duration-300 ease-in-out">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/laptop.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60 absolute inset-0" // Absolute positioning for the image
                            />

                            {/* Overlay content - remains outside the image container */}
                            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 rounded-lg relative hover:bg-indigo-500 hover:scale-110 transition duration-300 ease-in-out">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/laptop.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60 absolute inset-0" // Absolute positioning for the image
                            />

                            {/* Overlay content - remains outside the image container */}
                            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800" >
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 rounded-lg relative hover:bg-indigo-500 hover:scale-110 transition duration-300 ease-in-out">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/laptop.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60 absolute inset-0" // Absolute positioning for the image
                            />

                            {/* Overlay content - remains outside the image container */}
                            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 rounded-lg relative hover:bg-indigo-500 hover:scale-110 transition duration-300 ease-in-out">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/laptop.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60 absolute inset-0" // Absolute positioning for the image
                            />

                            {/* Overlay content - remains outside the image container */}
                            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 rounded-lg relative hover:bg-indigo-500 hover:scale-110 transition duration-300 ease-in-out">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/laptop.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60 absolute inset-0" // Absolute positioning for the image
                            />

                            {/* Overlay content - remains outside the image container */}
                            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 rounded-lg relative hover:bg-indigo-500 hover:scale-110 transition duration-300 ease-in-out">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/laptop.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60 absolute inset-0" // Absolute positioning for the image
                            />

                            {/* Overlay content - remains outside the image container */}
                            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 rounded-lg relative hover:bg-indigo-500 hover:scale-110 transition duration-300 ease-in-out">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/laptop.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="opacity-60 absolute inset-0" // Absolute positioning for the image
                            />

                            {/* Overlay content - remains outside the image container */}
                            <div className="flex flex-col items-center justify-center w-full h-full bg-gray-800">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>

            </div>
        </section>
    );
};

export default ServiceGallery;
