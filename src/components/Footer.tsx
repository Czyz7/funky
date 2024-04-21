import Link from 'next/link';

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-4">
            <div className="container mx-auto">
                <div className="flex flex-wrap justify-between">
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold">Company</h2>
                        <ul className="list-none">
                            <li>
                                <Link href="/" className="text-white hover:underline">Home</Link>
                            </li>
                            <li>
                                <Link href="/about" className="text-white hover:underline">About</Link>
                            </li>
                            <li>
                                <Link href="/contact" className="text-white hover:underline">Contact</Link>
                            </li>
                        </ul>
                    </div>
                    <div className="w-full md:w-1/2">
                        <h2 className="text-2xl font-bold">Social</h2>
                        <ul className="list-none">
                            <li>
                                <a
                                    href="https://www.facebook.com/"
                                    className="text-white hover:underline"
                                >
                                    Facebook
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.twitter.com/"
                                    className="text-white hover:underline"
                                >
                                    Twitter
                                </a>
                            </li>
                            <li>
                                <a
                                    href="https://www.instagram.com/"
                                    className="text-white hover:underline"
                                >
                                    Instagram
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;  
