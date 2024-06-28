import Link from 'next/link';

const MenuFooter = () => {
    return (
        <nav aria-label="Footer navigation">
            <ul className="flex flex-col text-white md:flex-row md:space-x-4">
                <li>
                    <Link href="/privacy-policy" legacyBehavior >
                        <a className="hover:text-gray-400">Privacy Policy</a>
                    </Link>
                </li>
                <li>
                    <Link href="/terms-of-service" legacyBehavior>
                        <a className="hover:text-gray-400">Terms of Service</a>
                    </Link>
                </li>
                <li>
                    <Link href="/contact" legacyBehavior>
                        <a className="hover:text-gray-400">Contact</a>
                    </Link>
                </li>
                <li>
                    <Link href="/about" legacyBehavior>
                        <a className="hover:text-gray-400">About Us</a>
                    </Link>
                </li>
            </ul>
        </nav>
    );
};

export default MenuFooter;