import BannerProductImg from "../../Assets/Banner_product.png"
function BannerProduct() {
    return (
        <div className="h-[500px] bg-gray-200 rounded-3xl w-[90%] mb-[150px] flex">
            <div className="w-[50%] flex flex-col items-center justify-center">
                <div className="flex flex-col items-start">
                    <span className="text-[64px] font-bold" style={{ fontFamily: 'Glory, serif', zIndex: 1 }}>Red freight truck</span>
                    <span className="text-[32px] font-bold " style={{ fontFamily: 'Gluten, serif', transform: 'rotate(-1deg)', zIndex: 2 }}>
                        Peterbilt Car Tesla Semi
                    </span>
                    <span className="text-[32px] font-bold" style={{ fontFamily: 'Gluten, serif', transform: 'rotate(-2deg)', zIndex: 2 }}>
                        Semi-trailer truck
                    </span>
                    <span className="text-[24px] font-semibold my-[20px]" style={{ fontFamily: 'Gowun Batang, serif' }}>
                        Feel special with 15% off*
                    </span>
                    <button
                        className="middle none center rounded-3xl bg-[#762222] py-3 px-20 font-sans text-xs font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                        data-ripple-light="true"
                    >
                        Auction now
                    </button>
                </div>
            </div>
            <div className="w-[50%] flex items-center justify-center">
                <img src={BannerProductImg} alt="" className=" w-[600px] h-[300px]" />
            </div>
        </div>
    );
}

export default BannerProduct;