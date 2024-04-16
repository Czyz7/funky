import Link from "next/link"

const ServiceGallery = () => {
    return (
        <section className="text-gray-600 body-font">
            {/* ... (rest of your component with the changes below) ... */}

            <div className="flex flex-wrap -m-4">
                <div className="xl:w-1/4 md:w-1/2 p-3 rounded-lg transition duration-300 ease-in-out hover:scale-110 ">
                    <Link href="/sitepages/blogpost">
                        {/* Use your custom class or inline background url */}
                        <div className="p-24 rounded-lg bg-blogpost-bg bg-cover bg-center">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Website Design</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                {/* ... (similar changes to the rest of your divs) ... */}
                <div className="xl:w-1/4 md:w-1/2 p-3 rounded-lg transition duration-300 ease-in-out hover:scale-110 ">
                    <Link href="/sitepages/blogpost">
                        {/* Use your custom class or inline background url */}
                        <div className="p-24 rounded-lg bg-blogpost-bg bg-cover bg-center">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">WordPress Design</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-3 rounded-lg transition duration-300 ease-in-out hover:scale-110 ">
                    <Link href="/sitepages/blogpost">
                        {/* Use your custom class or inline background url */}
                        <div className="p-24 rounded-lg bg-blogpost-bg bg-cover bg-center">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Site Management</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-3 rounded-lg transition duration-300 ease-in-out hover:scale-110 ">
                    <Link href="/sitepages/blogpost">
                        {/* Use your custom class or inline background url */}
                        <div className="p-24 rounded-lg bg-blogpost-bg bg-cover bg-center">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Website Redesign</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-3 rounded-lg transition duration-300 ease-in-out hover:scale-110 ">
                    <Link href="/sitepages/blogpost">
                        {/* Use your custom class or inline background url */}
                        <div className="p-24 rounded-lg bg-blogpost-bg bg-cover bg-center">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Blog Posts</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-3 rounded-lg transition duration-300 ease-in-out hover:scale-110 ">
                    <Link href="/sitepages/blogpost">
                        {/* Use your custom class or inline background url */}
                        <div className="p-24 rounded-lg bg-blogpost-bg bg-cover bg-center">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">SEO</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-3 rounded-lg transition duration-300 ease-in-out hover:scale-110 ">
                    <Link href="/sitepages/blogpost">
                        {/* Use your custom class or inline background url */}
                        <div className="p-24 rounded-lg bg-blogpost-bg bg-cover bg-center">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Accessibility</h2>
                            </div>
                        </div>
                    </Link>
                </div>
                <div className="xl:w-1/4 md:w-1/2 p-3 rounded-lg transition duration-300 ease-in-out hover:scale-110 ">
                    <Link href="/sitepages/blogpost">
                        {/* Use your custom class or inline background url */}
                        <div className="p-24 rounded-lg bg-blogpost-bg bg-cover bg-center">
                            <div className="flex flex-col items-center justify-center w-full h-full">
                                <h3 className="tracking-widest text-indigo-500 text-sm font-medium title-font">AI Assisted</h3>
                                <h2 className="text-lg text-indigo-50 font-medium title-font mb-2 ">Consulting</h2>
                            </div>
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    )
}

export default ServiceGallery
