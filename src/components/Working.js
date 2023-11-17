import React from 'react'

const Working = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='w-5/6'>
                <section class="text-gray-100 body-font">
                    <div class="container px-5 py-24 mx-auto">
                        <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0 space-y-6">
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    <img src='https://www.shutterstock.com/image-vector/photo-camera-vector-icon-600nw-1345025204.jpg' className='rounded-full' />
                                </div>
                                <div class="flex-grow pl-6">
                                    <h2 class="text-gray-100 text-xl title-font font-medium mb-1">Capture Surrounding</h2>
                                    <p class="leading-relaxed text-sm">The app captures the surrounding using the camera in the device.</p>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    <img src='https://media.istockphoto.com/id/1289309721/vector/artificial-intelligence-ai-processor-chip-vector-icon-symbol-for-graphic-design-logo-web.jpg?s=612x612&w=0&k=20&c=XAzVdGbT2vrpA9qIxkmyn0HVLXTsgO6fs49aMNBD-WQ=' className='rounded-full' />
                                </div>
                                <div class="flex-grow pl-6">
                                    <h2 class="text-gray-100 text-xl title-font font-medium mb-1">Vision OpenAI API</h2>
                                    <p class="leading-relaxed text-sm">Captured image is sent to openAI through Vision API and output is fetched.</p>
                                </div>
                            </div>
                            <div class="p-4 md:w-1/3 flex">
                                <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-indigo-100 text-indigo-500 mb-4 flex-shrink-0">
                                    <img src='https://static.vecteezy.com/system/resources/thumbnails/005/559/293/small/person-speak-icon-man-voice-voice-control-and-recognition-audio-assistant-for-web-mobile-app-sign-vector.jpg' className='rounded-full bg-white' />
                                </div>
                                <div class="flex-grow pl-6">
                                    <h2 class="text-gray-100 text-xl title-font font-medium mb-1">Text-to-speech</h2>
                                    <p class="leading-relaxed text-sm">The fetched output is read to the user using openAI's text-to-speech API.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    )
}

export default Working