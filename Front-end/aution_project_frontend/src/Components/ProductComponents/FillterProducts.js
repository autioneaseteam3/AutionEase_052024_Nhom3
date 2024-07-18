import CheckBoxItem from "./CheckBoxItem";

function FillterProducts() {
    
    return (
        <div className="w-full">
            <div className="w-full">
                <p class="w-full border-b-2 border-black bg-[#f0f0f0] text-[32px] font-semibold flex justify-start pb-5 px-5 focus:outline-none focus:border-black">Fillter</p>
            </div>
            <div className="w-full border-b-2  border-black focus:border-black py-2">
                <select id="subject" name="subject" class="w-full bg-[#f0f0f0] text-[32px] font-normal py-2 px-3 focus:outline-none">
                    <option value="" disabled selected>Category</option>
                </select>
                <div className="flex flex-col pl-[50px]">
                    <CheckBoxItem content="Truck"/>
                    <CheckBoxItem content="Super Car"/>
                    <CheckBoxItem content="Bed"/>
                </div>
            </div>
            <div className="w-full">
                <select id="subject" name="subject" class="w-full border-b-2 bg-[#f0f0f0] border-black text-[32px] font-normal  py-2 px-3 focus:outline-none focus:border-black">
                    <option value="" disabled selected>Condition</option>
                    <option value="Option-1">Référencement</option>
                    <option value="Option-2">Publicité Digitale</option>
                    <option value="Option-3">Brand Content</option>
                </select>

            </div>
            <div className="w-full">
                <select id="subject" name="subject" class="w-full border-b-2 bg-[#f0f0f0] border-black text-[32px] font-normal py-2 px-3 focus:outline-none focus:border-black">
                    <option value="" disabled selected>Localtion</option>
                    <option value="Option-1">Référencement</option>
                    <option value="Option-2">Publicité Digitale</option>
                    <option value="Option-3">Brand Content</option>
                </select>
            </div>
            <div className="w-full">
                <select id="subject" name="subject" class="w-full border-b-2 bg-[#f0f0f0] border-black text-[32px] font-normal py-2 px-3 focus:outline-none focus:border-black">
                    <option value="" disabled selected>Auctions</option>
                    <option value="Option-1">Référencement</option>
                    <option value="Option-2">Publicité Digitale</option>
                    <option value="Option-3">Brand Content</option>
                </select>
            </div>
            <div className="w-full border-b-2 border-black focus:border-black py-2">
                <select id="subject" name="subject" class="w-full bg-[#f0f0f0] text-[32px] font-normal py-2 px-3 focus:outline-none">
                    <option value="" disabled selected>Fillter by Price</option>
                </select>
                <div className="flex pl-[50px]">
                    <input type="text" className="w-[100px] h-[35px] bg-white text-center" value="5" />
                    <div className="mx-5 flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="2em" height="2em" viewBox="0 0 1024 1024">
                            <path fill="currentColor" d="M754.752 480H160a32 32 0 1 0 0 64h594.752L521.344 777.344a32 32 0 0 0 45.312 45.312l288-288a32 32 0 0 0 0-45.312l-288-288a32 32 0 1 0-45.312 45.312z" />
                        </svg>
                    </div>
                    <input type="text" className="w-[100px] h-[35px] bg-white text-center" value="100"/>
                </div>
            </div>
            <div className="w-full">
                <select id="subject" name="subject" class="w-full border-b-2 bg-[#f0f0f0] border-black text-[32px] font-normal py-2 px-3 focus:outline-none focus:border-black">
                    <option value="" disabled selected>Auctions</option>
                    <option value="Option-1">Référencement</option>
                    <option value="Option-2">Publicité Digitale</option>
                    <option value="Option-3">Brand Content</option>
                </select>
            </div>
        </div>
    );
}

export default FillterProducts;