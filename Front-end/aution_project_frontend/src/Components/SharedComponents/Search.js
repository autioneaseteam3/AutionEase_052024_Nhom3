import icons from "../../Assets/icon";

function Search() {
  return (
    <div className="flex justify-center my-[32px]">
      <div className="flex justify-between items-center w-1/2 border border-[#ff4949] rounded-[25px] ">
        <div className="flex">
          <img
            className="w-[30px] h-[30px] my-[8px] mr-[10px] ml-[20px]"
            src={icons.searchIcon}
            alt=""
          ></img>
          <input
            className="outline-none h-[40px] text-[18px]"
            placeholder="Search for product"
          ></input>
        </div>
        <div className="flex items-center bg-[#ff4949] h-[50px] px-[12px] text-[#fff] rounded-tr-[25px] rounded-br-[25px] hover:cursor-pointer">
          <div>Categories</div>
          <img className="w-4 h-4 filter invert m-2" src={icons.downIcon} alt=""></img>
        </div>
      </div>
    </div>
  );
}

export default Search;
