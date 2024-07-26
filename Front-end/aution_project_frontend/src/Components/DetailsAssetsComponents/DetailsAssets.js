import React from 'react';
import HeroLogo from '../../Assets/DetailsAssets_Hero.png';
import ProductImg from '../../Assets/DetailAssets_Products.png';

const DetailsAssets = () => {
  const recommendedProducts = [
    {
      id: 1,
      name: 'Product 1',
      location: 'Los Angeles',
      time: '2P.m 07/2004',
      imgSrc: ProductImg,
    },
    {
      id: 2,
      name: 'Product 2',
      location: 'Los Angeles',
      time: '2P.m 07/2004',
      imgSrc: ProductImg,
    },
    {
      id: 3,
      name: 'Product 3',
      location: 'Los Angeles',
      time: '2P.m 07/2004',
      imgSrc: ProductImg,
    },
    {
      id: 4,
      name: 'Product 4',
      location: 'Los Angeles',
      time: '2P.m 07/2004',
      imgSrc: ProductImg,
    },
  ];
  return (
    <div className="max-w-full mx-auto p-2">
      <div className="bg-white rounded-lg shadow-lg p-4">
        {/* Search bar */}
        <div className="flex items-center p-4 ">
          <input
            type="text"
            className="flex-grow p-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition duration-300 ease-in-out "
            placeholder="Search for products"
          />
          <button className="ml-4 bg-red-500 text-white px-4 py-2 rounded-md flex items-center justify-center gap-1">
            Categories
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="1.2rem"
              height="1.2rem"
              viewBox="0 0 48 48"
            >
              <path
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="4"
                d="M36 18L24 30L12 18"
              />
            </svg>
          </button>
        </div>

        {/* Hero Section */}

        <div className="w-full my-2">
          <img src={HeroLogo} className="w-full" />
        </div>

        {/* Product Details */}

        <div className="md:flex px-4 py-6 lg:px-10 lg:py-10">
          <div className="md:w-1/2">
            <img
              src={ProductImg}
              alt="Product"
              className="rounded-lg object-cover h-72 w-full md:h-auto md:w-3/4 md:ml-[12.5%]"
            />
          </div>
          <div className="md:w-1/2 md:pl-4 flex flex-col gap-2 mt-4 md:mt-0">
            <div className="flex items-center justify-between">
              <h1 className="text-2xl md:text-3xl font-bold">Product Name</h1>
              <button className="py-2 px-5 bg-[#FF6262] rounded text-white">
                Add
              </button>
            </div>
            <p className="font-bold w-full text-left mb-3">
              Sales/Lot Type: Online Auction
            </p>
            <div className="flex flex-col gap-5 mb-4">
              <div className="flex items-center gap-3">
                <div className="bg-[#FF6262] p-3 rounded-full text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4rem"
                    height="1.4rem"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M9 20H6a4 4 0 0 1-4-4V7a4 4 0 0 1 4-4h11a4 4 0 0 1 4 4v3M8 2v2m7-2v2M2 8h19m-2.5 7.643l-1.5 1.5" />
                      <circle cx="17" cy="17" r="5" />
                    </g>
                  </svg>
                </div>
                <p className="font-bold text-sm md:text-base">
                  Time left : 1h : 12m : 5s
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FF6262] p-3 rounded-full text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4rem"
                    height="1.4rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M7 15h2c0 1.08 1.37 2 3 2s3-.92 3-2c0-1.1-1.04-1.5-3.24-2.03C9.64 12.44 7 11.78 7 9c0-1.79 1.47-3.31 3.5-3.82V3h3v2.18C15.53 5.69 17 7.21 17 9h-2c0-1.08-1.37-2-3-2s-3 .92-3 2c0 1.1 1.04 1.5 3.24 2.03C14.36 11.56 17 12.22 17 15c0 1.79-1.47 3.31-3.5 3.82V21h-3v-2.18C8.47 18.31 7 16.79 7 15"
                    />
                  </svg>
                </div>
                <p className="font-bold text-sm md:text-base">
                  Starting bid: 800,000$
                </p>
              </div>
              <div className="flex items-center gap-3">
                <div className="bg-[#FF6262] p-3 rounded-full text-white ">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="1.4rem"
                    height="1.4rem"
                    viewBox="0 0 24 24"
                  >
                    <path
                      fill="currentColor"
                      d="M12 11.5A2.5 2.5 0 0 1 9.5 9A2.5 2.5 0 0 1 12 6.5A2.5 2.5 0 0 1 14.5 9a2.5 2.5 0 0 1-2.5 2.5M12 2a7 7 0 0 0-7 7c0 5.25 7 13 7 13s7-7.75 7-13a7 7 0 0 0-7-7"
                    />
                  </svg>
                </div>
                <p className="font-bold text-sm md:text-base">
                  Location: Los Angeles
                </p>
              </div>
            </div>
            <div className="flex flex-col bg-[#F8F8F8] gap-4 rounded p-4">
              <div className="flex flex-row items-center justify-between ">
                <p>Current bid: dollar</p>
                <p>Time left: 1h 12m 5s</p>
              </div>
              <hr />
              <div className="flex flex-row items-center justify-between ">
                <p>Current bid: dollar</p>
                <p>Time left: 1h 12m 5s</p>
              </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-4">
              <div className="w-full md:w-3/4 flex items-center border rounded-lg overflow-hidden">
                <div className="bg-gray-200 px-4 py-2">
                  <span>$</span>
                </div>
                <input
                  type="text"
                  defaultValue="100.0"
                  className="p-2 border-l focus:outline-none w-full"
                />
              </div>
              <button className="bg-red-500 text-white font-semibold py-2 px-10 md:px-20 rounded-full mt-4">
                Place Bid
              </button>
            </div>
          </div>
        </div>
        {/* Recommended Products */}
        <div className="mt-8">
          <h2 className="text-2xl font-bold mb-4 self-end w-full text-left">
            Recommend other products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
            {recommendedProducts.map((product) => (
              <div
                key={product.id}
                className="bg-gray-100 p-4 rounded-lg shadow-md flex flex-col items-start"
              >
                <img
                  src={product.imgSrc}
                  alt={`Recommended ${product.name}`}
                  className="rounded-lg object-cover w-full h-64"
                />
                <h3 className="text-lg font-bold mt-2">{product.name}</h3>
                <p>{product.location}</p>
                <p className="self-end w-full text-right">{product.time}</p>
                <button className="w-4/5 ml-[10%] bg-red-500 text-white py-1 px-3 rounded-md mt-3">
                  Add
                </button>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsAssets;
