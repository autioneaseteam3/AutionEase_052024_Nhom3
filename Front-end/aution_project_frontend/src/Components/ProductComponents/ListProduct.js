function ListProduct({ products, content }) {
    return (
        <div>
            <div className="w-full flex justify-between p-[50px] pb-0">
                <div className="text-[35px] font-normal" style={{ fontFamily: 'Gowun Batang, serif' }}>{content}</div>
                <div>
                    <ul class="flex space-x-2 justify-center pagination-Container">
                        <a href="/" class="group">
                            <li class="active w-10 h-10 text-gray-800 place-items-center rounded-md flex items-center justify-start  bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24">
                                    <g fill="none" fill-rule="evenodd">
                                        <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                        <path fill="currentColor" d="M7.94 13.06a1.5 1.5 0 0 1 0-2.12l5.656-5.658a1.5 1.5 0 1 1 2.121 2.122L11.122 12l4.596 4.596a1.5 1.5 0 1 1-2.12 2.122l-5.66-5.658Z" />
                                    </g>
                                </svg>
                            </li>
                        </a>
                        <a href="/" class="group">
                            <li class="active w-10 h-10 text-gray-800 grid place-items-center rounded-md border lg:border-2 border-gray-300 bg-gray-300">
                                <span class="font-medium text-black">1</span>
                            </li>
                        </a>
                        <a href="/" class="group">
                            <li class="active w-10 h-10 text-gray-800 grid place-items-center rounded-md border lg:border-2 border-gray-300 bg-gray-300">
                                <span class="font-medium text-black">2</span>
                            </li>
                        </a>
                        <a href="/" class="group">
                            <li class="active w-10 h-10 text-gray-800 grid place-items-center rounded-md border lg:border-2 border-gray-300 bg-gray-300">
                                <span class="font-medium text-black">3</span>
                            </li>
                        </a>
                        <a href="/" class="group">
                            <li class="active w-10 h-10 text-gray-800 place-items-center rounded-md flex items-center justify-start  bg-white">
                                <svg xmlns="http://www.w3.org/2000/svg" width="3em" height="3em" viewBox="0 0 24 24"><g fill="none" fill-rule="evenodd">
                                    <path d="M24 0v24H0V0zM12.593 23.258l-.011.002l-.071.035l-.02.004l-.014-.004l-.071-.035q-.016-.005-.024.005l-.004.01l-.017.428l.005.02l.01.013l.104.074l.015.004l.012-.004l.104-.074l.012-.016l.004-.017l-.017-.427q-.004-.016-.017-.018m.265-.113l-.013.002l-.185.093l-.01.01l-.003.011l.018.43l.005.012l.008.007l.201.093q.019.005.029-.008l.004-.014l-.034-.614q-.005-.019-.02-.022m-.715.002a.02.02 0 0 0-.027.006l-.006.014l-.034.614q.001.018.017.024l.015-.002l.201-.093l.01-.008l.004-.011l.017-.43l-.003-.012l-.01-.01z" />
                                    <path fill="currentColor" d="M16.06 10.94a1.5 1.5 0 0 1 0 2.12l-5.656 5.658a1.5 1.5 0 1 1-2.121-2.122L12.879 12L8.283 7.404a1.5 1.5 0 0 1 2.12-2.122l5.658 5.657Z" />
                                </g>
                                </svg>
                            </li>
                        </a>
                    </ul>
                </div>
            </div>
            <div id="Projects" class="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-20 gap-x-14 mt-10 mb-5">
                {
                    products.map((item, index) => {
                        return (
                            <div class="bg-white rounded-lg shadow-lg">
                                <div class="relative overflow-hidden">
                                    <img class="w-full h-full" src="https://tse1.mm.bing.net/th?id=OIP.ZShPzTqjz_ddVJtAeHUv2AHaEK&pid=Api&rs=1&c=1&qlt=95&w=214&h=120" alt="Product" />
                                </div>
                                <div className="p-8 pt-0">
                                    <div className="flex flex-col items-start">
                                        <h3 class="text-xl font-bold text-gray-900 mt-4">Product Name</h3>
                                        <p class="text-gray-500 text-sm mt-2">1990, New york, Usa</p>
                                        <span class="text-gray-900 font-bold text-[30px]">$29.99</span>
                                        <p class="text-gray-500 text-sm mt-2">14D 16H (July 17, 2024 03:57 AM UTC+07)</p>
                                    </div>
                                    <div class="flex items-center justify-end mt-4">
                                        <button class="bg-gray-900 text-white py-2 px-4 rounded-full font-bold hover:bg-gray-800">Add to Cart</button>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
            <div className="w-fit mx-auto">
                <button
                    class="middle none center mr-3 rounded-lg border border-pink-500 py-3 px-6 font-sans text-xs font-bold uppercase text-pink-500 transition-all hover:opacity-75 focus:ring focus:ring-pink-200 active:opacity-[0.85] disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                    data-ripple-dark="true"
                >
                    See More
                </button>
            </div>
        </div>
    );
}

export default ListProduct;