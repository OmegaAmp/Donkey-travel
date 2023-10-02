'use client'

import Link from 'next/link'

const Footer = () => {
    return (
        <footer className="bg-gray-800 text-white p-6">
            <div className="container mx-auto flex flex-col md:flex-row justify-center items-center">
                <div className="mb-4 md:mb-0 flex space-x-6">
                    <Link href="/about" className="hover:text-gray-400">About</Link>
                    <Link href="/blog" className="hover:text-gray-400">Blog</Link>
                    <Link href="/contact" className="hover:text-gray-400">Contact</Link>
                    <Link href="/privacy-policy" className="hover:text-gray-400">Privacy Policy</Link>
                    <Link href="/terms-and-conditions" className="hover:text-gray-400">Terms and Conditions</Link>
                    <Link href="/" className="hover:text-gray-400">Home</Link>
                </div>
            </div>
        </footer>

    )
}

export default Footer;