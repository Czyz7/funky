import Link from 'next/link';
import Image from 'next/image';

const Navigation = () => {
    return (
        <nav className="bg-gray-800 text-white p-4 fixed top-0 w-full z-10">
            <div className="container mx-auto flex items-center justify-between">
                <Link href="/">
                    <Image
                        src="/awd.png"
                        width={50}
                        height={75}
                        alt="Accessible Web Designs"
                        className="h-10"
                    />
                </Link>
                <ul className="hidden md:flex space-x-6">
                    <li>
                        <Link href="/about">About</Link>
                    </li>
                    <li>
                        <Link href="/offer">Services</Link>
                    </li>
                    <li>
                        <Link href="/pricing">Pricing</Link>
                    </li>
                    <li>
                        <Link href="/portfolio">Portfolio</Link>
                    </li>
                    <li>
                        <Link href="/contact">Contact</Link>
                    </li>
                    {/* ... more links */}
                </ul>

                {/* ... your code for mobile menu */}

                <Link href="/contact" className="block md:hidden">
                    <button className="bg-white text-black px-4 py-2 rounded-md hover:bg-opacity-80">
                        Contact Us
                    </button>
                </Link>

                {/* ... your code for mobile menu */}
            </div>
        </nav>
    );
};

export default Navigation;
