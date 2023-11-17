import React from 'react'
import ReactPlayer from 'react-player';
const Home = () => {
    return (
        <div class='flex justify-center'>
            <ReactPlayer
                url="\video.webm"
                playing={true}
                loop={true}
                muted={true}
                width="100%"
                height="90%"
                style={{ position: 'relative', top: 0, left: 0, zIndex: -1 }}
            />
            <section class="z-10 text-gray-100 w-11/12 body-font">
                <div class="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
                    <div class="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
                        <h1 class="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-100">Empowering Sight Through
                            <br class="hidden lg:inline-block" />AI Vision Assistance
                        </h1>
                        <p class="mb-8 leading-relaxed">Unlock a world of possibilities for the visually impaired. Our AI-powered vision assistance redefines independence, providing real-time narrations and empowering users to understand the world through innovative technology and empathy.</p>
                        <div class="flex justify-center">
                            <button class="inline-flex text-white glass-button backdrop-blur-md bg-indigo-500 bg-opacity-70 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-base">Install Now</button>
                            <button class="ml-4 inline-flex glass-button backdrop-blur-md bg-opacity-90 text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-base">How it works</button>
                        </div>
                    </div>
                    <div class="">
                        <img class="object-cover object-center h-96 rounded" alt="hero" src="\phone.png" />
                    </div>
                </div>
            </section>
        </div>
    )
}

export default Home