import Logo from "../../Assets/Logo.png"
function Footer() {
    return (
        <footer class="bg-[#ff4949]" aria-labelledby="footer-heading">
            <h2 id="footer-heading" class="sr-only">Footer</h2>
            <div class="mx-auto max-w-7xl px-6 pb-8 pt-16 sm:pt-24 lg:px-8 lg:pt-32">
                <div class="xl:grid xl:grid-cols-3 xl:gap-8">
                    <div class="space-y-8">
                        <div className="flex justify-start">
                            <div className="px-[40px] flex flex-col justify-center items-center">
                                <img src={Logo} width={85} height={75} alt="Logo" />
                                <span className=" text-[16px] text-white">Auction Table</span>
                            </div>
                        </div>
                        <div class="flex space-x-6">
                            <button
                                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-blue-500/20 transition-all hover:shadow-lg hover:shadow-blue-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true"
                            >
                                App store
                            </button>
                            <button
                                class="middle none center mr-4 rounded-lg bg-blue-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-red-500/20 transition-all hover:shadow-lg hover:shadow-red-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                                data-ripple-light="true"
                            >
                                Play store
                            </button>

                        </div>
                    </div>
                    <div class="mt-16 grid grid-cols-2 gap-[50px] xl:col-span-2 xl:mt-0">
                        <div class="md:grid md:grid-cols-2 md:gap-8 ">
                            <div>
                                <h3 class="font-semibold leading-6 text-white text-3xl">Company</h3>
                                <ul class="mt-6 space-y-4">
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Marketing</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Legal Information</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Commerce</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Insights</a>
                                    </li>
                                </ul>
                            </div>
                            <div class="mt-10 md:mt-0">
                                <h3 class="text-3xl font-semibold leading-6 text-white">Help Center</h3>
                                <ul class="mt-6 space-y-4">
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Find a Property</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Documentation</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Guides</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">API Status</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                        <div class="md:grid md:grid-cols-2 md:gap-8">
                            <div>
                                <h3 class="text-3xl font-semibold leading-6 text-white">Contact Info</h3>
                                <ul class="mt-6 space-y-4">
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Phone: 1234567890</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Email: company@email.com</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Location: 100 Smart Street, LA, USA</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Press</a>
                                    </li>
                                    <li>
                                        <a href="/" class="text-sm leading-6 text-white hover:text-white">Partners</a>
                                    </li>
                                </ul>
                            </div>
                            
                        </div>
                    </div>
                </div>
                <div class="mt-16 border-t border-gray/10 pt-8 sm:mt-20 lg:mt-24">
                    <p class="text-xs leading-5 text-white-500">&copy; 2020 Your Company, Inc. All rights reserved.</p>
                </div>
            </div>
        </footer>
    );
}

export default Footer;