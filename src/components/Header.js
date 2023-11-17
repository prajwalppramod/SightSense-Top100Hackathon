import React from 'react';

const Header = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-11/12'>
                <header className="z-150 text-gray-100 body-font">
                    <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
                        <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
                            {/* Replace the SVG with an <img> tag for the logo */}
                            <img
                                src="\logo.png"
                                alt="Logo"
                                className="w-fit h-16 text-white p-2 rounded-full"
                            />
                            <span className="ml-1 text-gray-100 text-xl">SightSense</span>
                        </a>
                        <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
                            <a className="mr-5 hover:text-gray-400">Home</a>
                            <a className="mr-5 hover:text-gray-400">Features</a>
                            <a className="mr-5 hover:text-gray-400">How it works</a>
                            <a className="mr-5 hover:text-gray-400">Contact</a>
                        </nav>
                        <button className="inline-flex items-center bg-[#C3C05D] text-black hover:bg-[#aaa751] border-0 py-1 px-3 focus:outline-none rounded text-base mt-4 md:mt-0">
                            Install Now
                        </button>
                    </div>
                </header>
            </div>
        </div>
    );
};

export default Header;
