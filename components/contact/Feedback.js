const Feedback = () => {
    return (

        <section className="bg-[#FFFFFF]" >

            <div class="py-[100px] bg-white-900">
                <div class="container flex flex-col items-center justify-center w-full p-6 mx-auto text-center xl:px-0">
                    <div class="text-sm font-bold tracking-wider text-indigo-600 uppercase">Testimonials</div>
                    <h2 class="max-w-2xl mt-3 text-3xl font-bold leading-snug tracking-tight text-black-800 lg:leading-tight lg:text-4xl  text-black">Here's what our customers said</h2>
                    <p class="max-w-2xl py-4 text-lg leading-normal text-gray-500 lg:text-xl xl:text-xl  text-gray-300">Testimonials is a great way to increase brand trust and awareness. Use this section to highlight your popular customers.</p>
                </div>
                <div class="container p-6 mx-auto mb-10 xl:px-0">
                    <div class="grid gap-10 lg:grid-cols-2 xl:grid-cols-3">
                        <div class="lg:col-span-2 xl:col-auto">
                            <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100  md:px-14 rounded-2xl md:py-14  bg-trueGray-800">
                                <p class="text-2xl leading-normal  text-black-300">Share a <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4 ">testimonial</mark> that hits some of your benefits from one of your popular customers.</p>
                                <div class="flex items-center mt-8 space-x-3">
                                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                        <img alt="Avatar" src="https://images.unsplash.com/photo-1511485977113-f34c92461ad9?crop=faces&amp;cs=tinysrgb&amp;fit=crop&amp;fm=jpg&amp;ixid=MnwxfDB8MXxhbGx8fHx8fHx8fHwxNjIwMTQ5ODEx&amp;ixlib=rb-1.2.1&amp;q=80&amp;w=100&amp;h=100" loading="lazy" />
                                    </div>
                                    <div>
                                        <div class="text-lg font-medium text-gray-400">Sarah Steiner</div>
                                        <div class="text-black-600  text-gray-600">VP Sales at Google</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100   md:px-14 rounded-2xl md:py-14  bg-trueGray-800">
                                <p class="text-2xl leading-normal  text-black-300">Make sure you only pick the <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4">right sentence</mark> to keep it short and simple.</p>
                                <div class="flex items-center mt-8 space-x-3">
                                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                        <img alt="Avatar" src="https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;crop=faces&amp;fit=crop&amp;w=100&amp;h=100&amp;q=80" loading="lazy" />
                                    </div>
                                    <div>
                                        <div class="text-lg font-medium text-gray-400">Dylan Ambrose</div>
                                        <div class="text-black-600  text-gray-600">Lead marketer at Netflix </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="">
                            <div class="flex flex-col justify-between w-full h-full px-6 py-6 bg-gray-100 md:px-14 rounded-2xl md:py-14  bg-trueGray-800">
                                <p class="text-2xl leading-normal  text-black-300">This is an <mark class="mx-1 text-indigo-800 bg-indigo-100 rounded-md ring-indigo-100 ring-4">awesome</mark> landing page template I've seen. I would use this for anything.</p>
                                <div class="flex items-center mt-8 space-x-3">
                                    <div class="flex-shrink-0 overflow-hidden rounded-full w-14 h-14">
                                        <img alt="Avatar" src="https://images.unsplash.com/photo-1624224971170-2f84fed5eb5e?ixlib=rb-1.2.1&amp;ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&amp;auto=format&amp;fit=crop&amp;w=100&amp;h=100&amp;crop=faces&amp;q=80" loading="lazy" />
                                    </div>
                                    <div>
                                        <div class="text-lg font-medium text-gray-400">Gabrielle Winn</div>
                                        <div class="text-black-600  text-gray-600">Co-founder of Acme Inc</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>

    )
}
export default Feedback;
