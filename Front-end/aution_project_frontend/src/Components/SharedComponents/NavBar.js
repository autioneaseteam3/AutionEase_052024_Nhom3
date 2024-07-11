import { useState } from "react";
import Logo from "../../Assets/Logo.png"
function NavBar() {
    const [user, setUser] = useState(true);
    return (
        <nav id="header" class="w-full z-30 py-1 bg-[#ff4949] h-[120px] shadow-lg border-b border-blue-400 flex items-center">
            <div class="w-full flex items-center justify-between mt-0 px-6 py-2">
                <label for="menu-toggle" class="cursor-pointer md:hidden block">
                    <svg class="fill-current text-blue-600" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                        <title>menu</title>
                        <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z"></path>
                    </svg>
                </label>
                <input class="hidden" type="checkbox" id="menu-toggle" />
                <div class="hidden md:flex md:items-center md:w-auto w-full order-3 md:order-1" id="menu">
                    <div className="px-[40px] flex flex-col justify-center items-center">
                        <img src={Logo} width={85} height={75} alt="Logo" />
                        <span className=" text-[16px] text-white">Auction Table</span>
                    </div>
                    <nav>
                        <ul class="md:flex items-center justify-between text-base text-blue-600 pt-4 md:pt-0">
                            <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-[40px] lg:-ml-2 text-white" href="/">Home</a></li>
                            <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-[40px] lg:-ml-2 text-white" href="/">Products</a></li>
                            <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-[40px] lg:-ml-2 text-white" href="/">Products</a></li>
                            <li><a class="inline-block no-underline hover:text-black font-medium text-lg py-2 px-[40px] lg:-ml-2 text-white" href="/">About</a></li>
                        </ul>
                    </nav>
                </div>

                <div class="order-2 md:order-3 flex flex-wrap items-center justify-end mr-0 md:mr-4" id="nav-content">
                    <div class="auth flex items-center w-full md:w-full">
                        {
                            user === false ?
                                <>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="30px" height="30px" className=" m-5" style={{ color: "white" }} viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M10 21h4c0 1.1-.9 2-2 2s-2-.9-2-2m11-2v1H3v-1l2-2v-6c0-3.1 2-5.8 5-6.7V4c0-1.1.9-2 2-2s2 .9 2 2v.3c3 .9 5 3.6 5 6.7v6zm-4-8c0-2.8-2.2-5-5-5s-5 2.2-5 5v7h10z" />
                                    </svg>
                                    <li class="flex items-center flex-col">
                                        <img src="https://randomuser.me/api/portraits/men/20.jpg" alt="" class="rounded-full w-16 h-16 object-cover" />
                                    </li>
                                </> :
                                <>
                                    <button class="bg-white text-[#ff6767] font-semibold rounded-md  p-2 px-5 border border-gray-300 mr-4">Sign in</button>
                                    <button class=" text-white rounded-md font-semibold   p-2 px-5 mr-4 bg-[#ff6767] ">Sign up</button>
                                </>
                        }

                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;