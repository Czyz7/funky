import Link from "next/link"
import Image from "next/image"

const ServiceGallery = () => {
    return (
        <section className="text-gray-600 body-font">
            {/* ... (rest of your component with the changes below) ... */}
            <div className=" px-5 md:px-10 lg:px-6 py-8 rounded-3xl bg-gray-800 ">
                <div className="flex flex-wrap -m-4">
                    <div className="xl:w-1/4 md:w-1/2 p-20 rounded-lg opacity-75 transform transition duration-500 ease-in-out hover:opacity-100 hover:bg-indigo-500">
                        <Link href="/sitepages/wordpress">
                            <div className="p-20 rounded-lg bg-cover bg-center "> {/* Make the container relative */}
                                <Image
                                    src="/Hero Images/wpEr.png"
                                    alt="Image Description"
                                    layout="fill"  // Fill the container
                                    objectFit="cover" // Adjust how the image fits
                                    quality={100}
                                    className='absolute inset-0'
                                    priority={true} // Prioritize this image for loading (optional)
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
                                    {/* Overlay your content on top of the image */}
                                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                    <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">WordPress Development</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    {/* ... (similar changes to the rest of your divs) ... */}
                    <div className="xl:w-1/4 md:w-1/2 p-20 rounded-lg opacity-75 transform transition duration-500 ease-in-out hover:opacity-100 hover:bg-indigo-500">
                        <Link href="/sitepages/wix">
                            <div className="p-20 rounded-lg bg-center "> {/* Make the container relative */}
                                <Image
                                    src="/Hero Images/wix0.png"
                                    alt="Image Description"
                                    layout="fill"  // Fill the container
                                    objectFit="cover" // Adjust how the image fits
                                    quality={100}
                                    className='absolute inset-0'
                                    priority={true} // Prioritize this image for loading (optional)
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
                                    {/* Overlay your content on top of the image */}
                                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                    <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Wix Development</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="xl:w-1/4 md:w-1/2 p-20 rounded-lg opacity-75 transform transition duration-500 ease-in-out hover:opacity-100 hover:bg-indigo-500">
                        <Link href="/sitepages/manage">
                            <div className="p-20 rounded-lg bg-cover bg-center "> {/* Make the container relative */}
                                <Image
                                    src="/Hero Images/officeCollab.png"
                                    alt="Image Description"
                                    layout="fill"  // Fill the container
                                    objectFit="cover" // Adjust how the image fits
                                    quality={100}
                                    className='absolute inset-0'
                                    priority={true} // Prioritize this image for loading (optional)
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
                                    {/* Overlay your content on top of the image */}
                                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                    <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Website Management</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="xl:w-1/4 md:w-1/2 p-20 rounded-lg opacity-75 transform transition duration-500 ease-in-out hover:opacity-100 hover:bg-indigo-500">
                        <Link href="/sitepages/redesign">
                            <div className="p-20 rounded-lg bg-cover bg-center "> {/* Make the container relative */}
                                <Image
                                    src="/Hero Images/web0.png"
                                    alt="Image Description"
                                    layout="fill"  // Fill the container
                                    objectFit="cover" // Adjust how the image fits
                                    quality={100}
                                    className='absolute inset-0'
                                    priority={true} // Prioritize this image for loading (optional)
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
                                    {/* Overlay your content on top of the image */}
                                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                    <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Website Redesign</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="xl:w-1/4 md:w-1/2 p-20 rounded-lg opacity-75 transform transition duration-500 ease-in-out hover:opacity-100 hover:bg-indigo-500">
                        <Link href="/sitepages/blogpost">
                            <div className="p-20 rounded-lg bg-cover bg-center "> {/* Make the container relative */}
                                <Image
                                    src="/Hero Images/blogRedesign0.png"
                                    alt="Image Description"
                                    layout="fill"  // Fill the container
                                    objectFit="cover" // Adjust how the image fits
                                    quality={100}
                                    className='absolute inset-0'
                                    priority={true} // Prioritize this image for loading (optional)
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
                                    {/* Overlay your content on top of the image */}
                                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                    <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Blog Post Generation</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="xl:w-1/4 md:w-1/2 p-20 rounded-lg opacity-75 transform transition duration-500 ease-in-out hover:opacity-100 hover:bg-indigo-500">
                        <Link href="/sitepages/seo">
                            <div className="p-20 rounded-lg bg-cover bg-center "> {/* Make the container relative */}
                                <Image
                                    src="/Hero Images/seo0.png"
                                    alt="Image Description"
                                    layout="fill"  // Fill the container
                                    objectFit="cover" // Adjust how the image fits
                                    quality={100}
                                    className='absolute inset-0'
                                    priority={true} // Prioritize this image for loading (optional)
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
                                    {/* Overlay your content on top of the image */}
                                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                    <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">SEO</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="xl:w-1/4 md:w-1/2 p-20 rounded-lg opacity-75 transform transition duration-500 ease-in-out hover:opacity-100 hover:bg-indigo-500">
                        <Link href="/sitepages/accessibility">
                            <div className="p-20 rounded-lg bg-cover bg-center "> {/* Make the container relative */}
                                <Image
                                    src="/Hero Images/accessibility0.png"
                                    alt="Image Description"
                                    layout="fill"  // Fill the container
                                    objectFit="cover" // Adjust how the image fits
                                    quality={100}
                                    className='absolute inset-0'
                                    priority={true} // Prioritize this image for loading (optional)
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
                                    {/* Overlay your content on top of the image */}
                                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                    <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Accessibility</h2>
                                </div>
                            </div>
                        </Link>
                    </div>

                    <div className="xl:w-1/4 md:w-1/2 p-20 rounded-lg opacity-75 transform transition duration-500 ease-in-out hover:opacity-100 hover:bg-indigo-500">
                        <Link href="/sitepages/consult">
                            <div className="p-20 rounded-lg bg-cover bg-center "> {/* Make the container relative */}
                                <Image
                                    src="/Hero Images/consulting0.png"
                                    alt="Image Description"
                                    layout="fill"  // Fill the container
                                    objectFit="cover" // Adjust how the image fits
                                    quality={100}
                                    className='absolute inset-0'
                                    priority={true} // Prioritize this image for loading (optional)
                                />
                                <div className="absolute inset-0 flex flex-col items-center justify-center w-full h-full">
                                    {/* Overlay your content on top of the image */}
                                    <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                    <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Consulting</h2>
                                </div>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default ServiceGallery
