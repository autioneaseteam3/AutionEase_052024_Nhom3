import Search from "../../Components/SharedComponents/Search";
import ProductPurchased from "../../Components/PurchasedListComponents/ProductPurchased";
import banner from "../../Assets/Banner_home.png";

function PurchasedListPage() {
  return (
    <div>
      <Search />
      <div>
        <img className="w-full h-[300px]" src={banner} alt=""></img>
      </div>
      <div className="flex justify-center">
        <div className=" w-4/5 flex flex-start my-[20px]">
          <div className="text-[30px] font-semibold">My Purchased Property</div>
        </div>
      </div>
      <ProductPurchased />
    </div>
  );
}

export default PurchasedListPage;
