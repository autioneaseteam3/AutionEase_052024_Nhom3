import Logo from "../../Assets/Logo.png"
function NavBarAdmin() {
    return ( 
        <div id="menu" class="bg-[#ff4949] col-span-2 rounded-lg p-4 flex flex-col">
                    <div className="px-[40px] flex flex-col justify-center items-center">
                        <img src={Logo} width={65} height={55} alt="Logo" />
                        <span className=" text-[16px] text-white">Auction Table</span>
                    </div>
                    <div id="menu" class="flex flex-col space-y-2 my-5">
                        <a href="/" class="hover:bg-white/10 bg-white transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                            <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6 group-hover:text-indigo-400">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold text-sm text-[#ff4949] lg:text-sm leading-4 group-hover:text-indigo-400">Reports</p>
                                </div>

                            </div>
                        </a>
                        <a href="/" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group mb-5">
                            <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                        <path fill="currentColor" d="M11 15H6l7-14v8h5l-7 14z" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold text-sm lg:text-sm text-slate-200 leading-4 group-hover:text-indigo-400">Assets</p>
                                </div>
                                <div class="absolute -top-3 -right-3 md:top-0 md:right-0 px-2 py-1.5 rounded-full bg-indigo-800 text-xs font-mono font-bold">23</div>
                            </div>
                        </a>
                        <a href="/" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group mb-5">
                            <div class="relative flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                <div>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 640 512">
                                        <path fill="currentColor" d="M96 128a128 128 0 1 1 256 0a128 128 0 1 1-256 0M0 482.3C0 383.8 79.8 304 178.3 304h91.4c98.5 0 178.3 79.8 178.3 178.3c0 16.4-13.3 29.7-29.7 29.7H29.7C13.3 512 0 498.7 0 482.3M609.3 512H471.4c5.4-9.4 8.6-20.3 8.6-32v-8c0-60.7-27.1-115.2-69.8-151.8c2.4-.1 4.7-.2 7.1-.2h61.4c89.1 0 161.3 72.2 161.3 161.3c0 17-13.8 30.7-30.7 30.7M432 256c-31 0-59-12.6-79.3-32.9c19.7-26.6 31.3-59.5 31.3-95.1c0-26.8-6.6-52.1-18.3-74.3C384.3 40.1 407.2 32 432 32c61.9 0 112 50.1 112 112s-50.1 112-112 112" />
                                    </svg>
                                </div>
                                <div>
                                    <p class="font-bold text-sm lg:text-sm text-slate-200 leading-4 group-hover:text-indigo-400">Users</p>
                                </div>

                            </div>
                        </a>
                        <a href="/" class="hover:bg-white/10 transition duration-150 ease-linear rounded-lg py-3 px-2 group">
                            <div class="flex flex-col space-y-2 md:flex-row md:space-y-0 space-x-2 items-center">
                                <div>
                                <svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 24 24">
                                    <path fill="currentColor" d="M5 21q-.825 0-1.412-.587T3 19V5q0-.825.588-1.412T5 3h4.2q.325-.9 1.088-1.45T12 1t1.713.55T14.8 3H19q.825 0 1.413.588T21 5v6.7q-.475-.225-.975-.387T19 11.075V5H5v14h6.05q.075.55.238 1.05t.387.95zm0-3v1V5v6.075V11zm2-1h4.075q.075-.525.238-1.025t.362-.975H7zm0-4h6.1q.8-.75 1.788-1.25T17 11.075V11H7zm0-4h10V7H7zm5-4.75q.325 0 .538-.213t.212-.537t-.213-.537T12 2.75t-.537.213t-.213.537t.213.538t.537.212M18 23q-2.075 0-3.537-1.463T13 18t1.463-3.537T18 13t3.538 1.463T23 18t-1.463 3.538T18 23m-.5-2h1v-2.5H21v-1h-2.5V15h-1v2.5H15v1h2.5z"/>
                                </svg>
                                </div>
                                <div>
                                    <p class="font-bold text-sm lg:text-sm text-slate-200 leading-4 group-hover:text-indigo-400">Clients</p>
                                </div>

                            </div>
                        </a>
                    </div>
                    <div className="mt-auto">
                        <hr class="my-2 border-white" />
                        <a href="/" class="flex flex-col space-y-2 md:space-y-0 md:flex-row mb-5 items-center md:space-x-2 hover:bg-white/10 group transition duration-150 ease-linear rounded-lg group w-full py-3 px-2">
                            <div>
                                <img class="rounded-full w-10 h-10 relative object-cover" src="https://img.freepik.com/free-photo/no-problem-concept-bearded-man-makes-okay-gesture-has-everything-control-all-fine-gesture-wears-spectacles-jumper-poses-against-pink-wall-says-i-got-this-guarantees-something_273609-42817.jpg?w=1800&t=st=1669749937~exp=1669750537~hmac=4c5ab249387d44d91df18065e1e33956daab805bee4638c7fdbf83c73d62f125" alt="" />
                            </div>
                            <div>
                                <p class="font-medium group-hover:text-indigo-400 leading-4">Jim Smith</p>
                                <span class="text-xs text-white">Pantazi LLC</span>
                            </div>
                        </a>
                    </div>
                </div>
     );
}

export default NavBarAdmin;