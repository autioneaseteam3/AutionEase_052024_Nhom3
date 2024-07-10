import banner from "../../Assets/Banner_home.png";
function ProductPurchased() {
  const datas = [
    {
      img: banner,
      name: "Mercedes_GLC200 4MATIC",
      price: "$17.90",
      status: "Bought",
    },
    {
      img: banner,
      name: "Mercedes_GLC200 4MATIC",
      price: "$17.90",
      status: "Bought",
    },
    {
      img: banner,
      name: "Mercedes_GLC200 4MATIC",
      price: "$17.90",
      status: "Bought",
    },
  ];
  return (
    <div className="w-full flex justify-center">
      <table className="w-4/5 mb-[100px] ">
        <thead>
          <tr className="border-b  ">
            <th>Product</th>
            <th>Price</th>
            <th>Status</th>
            <th>Auction</th>
          </tr>
        </thead>
        <tbody>
          {datas.map((data, index) => (
            <tr key={index} className=" w-full border-b h-[80px]">
              <td className=" w-2/5">
                <div className=" flex items-center justify-center ">
                  <img
                    className="w-[80px] h-[60px] mr-12"
                    src={data.img}
                    alt=""
                  ></img>
                  <div>{data.name}</div>
                </div>
              </td>
              <td className="w-1/5">{data.price}</td>
              <td className="w-1/5">{data.status}</td>
              <td className="w-1/5">
                <div className="bg-[#d2d2d2] py-2 mx-8">Quick View</div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default ProductPurchased;
