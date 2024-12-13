"use client";


const Features = () => {


    return (
        <div className="relative">
               <div
                className="absolute inset-x-0 top-[-10rem] -z-10 transform-gpu overflow-hidden blur-3xl sm:top-[-20rem]"
                aria-hidden="true"
            >
                <div
                    className="relative left-1/2 -z-10 aspect-[1155/678] w-[36.125rem] max-w-none -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-[#ff80b5] to-[#9089fc] opacity-30 sm:left-[calc(50%-40rem)] sm:w-[72.1875rem]"
                    style={{
                        clipPath:
                            "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
                    }}
                ></div>
            </div>
            <div class="pt-12 container mx-auto px-4">
                <div class="mb-12 flex flex-wrap -mx-4 justify-center">
                    <div class="px-4 relative w-full lg:w-8/12 text-center">
                        <h6 class="mb-2 text-lg font-bold uppercase text-lightBlue-500">We are here</h6>
                        <h2 class="text-4xl font-bold mt-0 mb-1 text-blueGray-700">Are you looking for answers?</h2>
                        <p class="mt-2 mb-4 text-xl leading-relaxed text-blueGray-400">You have no idea who I am. You do not know me at all. Have you ever written a song line that a full crowd would shout when you enter the stage? I do not think so.</p>
                    </div>
                </div>
                <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css" />

                <section id="new-features" class="sm:py-10">
                    <div class="px-4 mx-auto max-w-7xl sm:px-6 lg:px-8">
                        <div class="text-center">
                            <h2 class="text-3xl font-bold leading-tight text-gray-900 sm:text-4xl xl:text-5xl">
                                Boost Your Productivity </h2>
                            <p class="mt-4 text-base leading-7 text-gray-600 sm:mt-8">
                                Enhance your workflow with advanced features
                            </p>
                        </div>
                        <div
                            class="grid grid-cols-1 mt-10 text-center sm:mt-16 sm:grid-cols-2 sm:gap-x-12 gap-y-12 md:grid-cols-3 md:gap-0">
                            <div class="md:p-8 lg:p-14 flex flex-col justify-center items-center">
                                <div class="w-14 h-14 rounded-full bg-purple-200 flex justify-center items-center">
                                    <i class="fa-solid fa-chart-column text-3xl text-gray-900"></i>
                                </div>
                                <h3 class="mt-12 text-xl font-bold text-gray-900">Advanced Analytics</h3>
                                <p class="mt-5 text-base text-gray-600">Track and analyze your data with powerful analytics tools. Gain valuable
                                    insights for better decision-making.</p>
                            </div>

                            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                                <div class="w-14 h-14 rounded-full bg-teal-200 flex justify-center items-center">
                                    <i class="fa-solid fa-truck-fast text-3xl text-gray-900"></i>
                                </div>
                                <h3 class="mt-12 text-xl font-bold text-gray-900">Fast Integration</h3>
                                <p class="mt-5 text-base text-gray-600">Seamlessly integrate with your existing tools and systems for a smooth
                                    workflow experience.</p>
                            </div>

                            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 flex flex-col justify-center items-center">
                                <div class="w-14 h-14 rounded-full bg-yellow-200 flex justify-center items-center">
                                    <i class="fa-solid fa-shield text-3xl text-gray-900"></i>
                                </div>
                                <h3 class="mt-12 text-xl font-bold text-gray-900">Security First</h3>
                                <p class="mt-5 text-base text-gray-600">Ensure the safety of your data with top-notch security features. Your
                                    privacy is our priority.</p>
                            </div>

                            <div class="md:p-8 lg:p-14 md:border-t md:border-gray-200 flex flex-col justify-center items-center">
                                <div class="w-14 h-14 rounded-full bg-red-200 flex justify-center items-center">
                                    <i class="fa-solid fa-cloud text-3xl text-gray-900"></i>
                                </div>
                                <h3 class="mt-12 text-xl font-bold text-gray-900">Cloud Integration</h3>
                                <p class="mt-5 text-base text-gray-600">Access your data from anywhere with seamless cloud integration. Work
                                    without boundaries.</p>
                            </div>

                            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                                <div class="w-14 h-14 rounded-full bg-green-200 flex justify-center items-center">
                                    <i class="fa-solid fa-pen-nib text-3xl text-gray-900"></i>
                                </div>
                                <h3 class="mt-12 text-xl font-bold text-gray-900">Task Management</h3>
                                <p class="mt-5 text-base text-gray-600">Organize your workflow with efficient task management features. Stay on
                                    top of your projects effortlessly.</p>
                            </div>

                            <div class="md:p-8 lg:p-14 md:border-l md:border-gray-200 md:border-t flex flex-col justify-center items-center">
                                <div class="w-14 h-14 rounded-full bg-orange-200 flex justify-center items-center">
                                    <i class="fa-solid fa-bolt text-3xl text-gray-900"></i>
                                </div>
                                <h3 class="mt-12 text-xl font-bold text-gray-900">Performance Metrics</h3>
                                <p class="mt-5 text-base text-gray-600">Monitor and measure your performance with comprehensive metrics.
                                    Optimize your processes for maximum efficiency.</p>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
};

export default Features;
