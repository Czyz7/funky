import Link from 'next/link';
import Image from 'next/image';

const ServiceGallery = () => {
    return (
        <section className="text-gray-600 body-font">
            {/* ... (rest of your component) ... */}
            <div className="flex flex-wrap -m-4  grid-cols-4  ">
                <div className="xl:w-1/4 md:w-1/2 p-12 rounded-lg transform overflow-hidden transition duration-500 ease-in-out hover:opacity-100 hover:scale-125 hover:bg-indigo-500">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-gradient-to-b from-indigo-700 to-indigo-500 relative">
                            <div className="p-12 text-center" >  {/* Overlay content */}
                                <h3 className="tracking-widest text-white text-sm font-medium title-font">
                                    AI Assisted
                                </h3>
                                <h2 className="text-lg text-white font-medium title-font mb-2">
                                    Website Design
                                </h2>
                            </div>
                            {/* Image with opacity */}
                            <Image
                                src="/compMstr.png"
                                alt="Background Image"
                                layout="fill"
                                objectFit="cover"
                                className="h-auto max-w-full" />
                        </div>
                    </Link>
                </div>




                {/* ... (rest of your component) ... */}
                <div className="xl:w-1/4 md:w-1/2 p-12 rounded-lg transform hover:bg-indigo-600 transition duration-500 hover:scale-125 ">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/Hero Images/wpEr.png"
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
                                    WordPress Design
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="xl:w-1/4 md:w-1/2 p-12 rounded-lg transform hover:bg-indigo-600 transition duration-500 hover:scale-125 ">
                    <Link href="/sitepages/blogpost">
                        <div className="p-24 rounded-lg bg-cover bg-center relative">
                            {/* Image with opacity */}
                            <Image
                                src="/Hero Images/webManage.png"
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
                                    Website Management
                                </h2>
                            </div>
                        </div>
                    </Link>
                </div>

                <div className="xl:w-1/4 md:w-1/2 p-12 rounded-lg transform hover:bg-indigo-600 transition duration-500 hover:scale-125 ">
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

                <div className="xl:w-1/4 md:w-1/2 p-12 rounded-lg transform hover:bg-indigo-600 transition duration-500 hover:scale-125 ">
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

                <div className="xl:w-1/4 md:w-1/2 p-12 rounded-lg transform hover:bg-indigo-600 transition duration-500 hover:scale-125 ">
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

                <div className="xl:w-1/4 md:w-1/2 p-12 rounded-lg transform hover:bg-indigo-600 transition duration-500 hover:scale-125 ">
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

                <div className="xl:w-1/4 md:w-1/2 p-12 rounded-lg transform hover:bg-indigo-600 transition duration-500 hover:scale-125 ">
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
