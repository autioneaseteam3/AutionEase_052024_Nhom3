import BannerProduct from "../../Components/ProductComponents/BannerProduct"
import FillterProducts from "../../Components/ProductComponents/FillterProducts";
import ListProduct from "../../Components/ProductComponents/ListProduct";
function Product() {
    const products = Array.from({ length: 6 });
    return (
        <div class="flex items-center flex-col justify-center w-full min-h-screen bg-[#f0f0f0]">
            <div class="container my-[80px] flex flex-wrap items-center justify-between">
                <div class="border-4 border-red-500 h-[60px] rounded-full bg-gray-100 shadow flex w-full">
                    <div class="flex w-10 h-full items-center justify-center bg-gray-100 rounded-tl-[50%] rounded-bl-[50%] px-8  border-gray-200">
                        <svg viewBox="0 0 20 20" aria-hidden="true" class="pointer-events-none absolute w-[40px] fill-black transition">
                            <path d="M16.72 17.78a.75.75 0 1 0 1.06-1.06l-1.06 1.06ZM9 14.5A5.5 5.5 0 0 1 3.5 9H2a7 7 0 0 0 7 7v-1.5ZM3.5 9A5.5 5.5 0 0 1 9 3.5V2a7 7 0 0 0-7 7h1.5ZM9 3.5A5.5 5.5 0 0 1 14.5 9H16a7 7 0 0 0-7-7v1.5Zm3.89 10.45 3.83 3.83 1.06-1.06-3.83-3.83-1.06 1.06ZM14.5 9a5.48 5.48 0 0 1-1.61 3.89l1.06 1.06A6.98 6.98 0 0 0 16 9h-1.5Zm-1.61 3.89A5.48 5.48 0 0 1 9 14.5V16a6.98 6.98 0 0 0 4.95-2.05l-1.06-1.06Z"></path>
                        </svg>
                    </div>
                    <input
                        type="text"
                        placeholder="Search for product"
                        class="w-full rounded-tl-full rounded-bl-full py-2 px-4 outline-none bg-gray-100" />
                    <select class="bg-red-300 border-l-4 border-[#ff4949] h-full rounded-tr-full font-semibold text-2xl rounded-br-full hover:bg-red-300 px-4 flex items-center justify-center outline-none">
                        <option className="font-semibold text-base uppercase">Categories</option>
                        <option className="font-semibold text-base uppercase">Categori 1</option>
                        <option className="font-semibold text-base uppercase">Categori 2</option>
                    </select>
                </div>
            </div>
            <BannerProduct/>
            <div class="grid grid-cols-12 gap-2 sm:gap-4 md:gap-6 lg:gap-10 xl:gap-5 w-full px-5 mb-[80px]">
                {/* Left content, fillter products */}
                <div className="col-span-3 rounded-lg p-4 flex flex-co">
                    <FillterProducts></FillterProducts>
                </div>

                {/* Right content load list products */}
                <div className="col-span-9 rounded-lg w-full">
                    <ListProduct content="Today's Auctions" products={products} ></ListProduct>
                    <ListProduct content="Upcoming Auctions" products={products} ></ListProduct>
                </div>
            </div>
        </div>
    );
}

export default Product;