function TableList({ data }) {
  return (
    <>
      <table class="rounded-t-lg m-5 w-full  mx-auto bg-[#9A8181] text-gray-800">
        <tr class=" border-b-2 border-gray-300">
          <th class="px-4 py-3">ID</th>
          <th class="px-4 py-3">Name</th>
          <th class="px-4 py-3">Date</th>
          <th class="px-4 py-3">Status</th>
          <th class="px-4 py-3">Action</th>
        </tr>
        {data.map((item, index) => {
          return (
            <tr class="bg-gray-100 border-b border-gray-200">
              <td class="px-4 py-3">#2112</td>
              <td class="px-4 py-3">
                <div className="flex justify-center items-center m-2">
                  <img
                    alt=""
                    className="w-8 h-8"
                    src="https://dailychevrolet.vn/wp-content/uploads/2022/11/HC3ACnh-siC3AAu-xe-Lamborghini-cE1BBB1c-C491E1BAB9p-scaled.jpg"
                  ></img>
                  <span className="m-2">Car</span>
                </div>
              </td>
              <td class="px-4 py-3">20/03/2003</td>
              <td class="px-4 py-3">Active</td>
              <td className="px-4 py-3">
                <button className="m-[15px]">
                  <svg
                    className="text-[#624DE3]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 24 24"
                  >
                    <g
                      fill="none"
                      stroke="currentColor"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                      stroke-width="2"
                    >
                      <path d="M12 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7" />
                      <path d="M18.375 2.625a1 1 0 0 1 3 3l-9.013 9.014a2 2 0 0 1-.853.505l-2.873.84a.5.5 0 0 1-.62-.62l.84-2.873a2 2 0 0 1 .506-.852z" />
                    </g>
                  </svg>
                </button>
                <button className="m-[15px]">
                  <svg
                    className="text-[#A30D11]"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24px"
                    height="24px"
                    viewBox="0 0 256 256"
                  >
                    <path
                      fill="currentColor"
                      d="M216 48h-36V36a28 28 0 0 0-28-28h-48a28 28 0 0 0-28 28v12H40a12 12 0 0 0 0 24h4v136a20 20 0 0 0 20 20h128a20 20 0 0 0 20-20V72h4a12 12 0 0 0 0-24M100 36a4 4 0 0 1 4-4h48a4 4 0 0 1 4 4v12h-56Zm88 168H68V72h120Zm-72-100v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0m48 0v64a12 12 0 0 1-24 0v-64a12 12 0 0 1 24 0"
                    />
                  </svg>
                </button>
              </td>
            </tr>
          );
        })}
      </table>
      <div className="flex justify-center w-full mx-auto">
        <div class="max-w-full w-full bg-white p-6 rounded-lg shadow-sm">
          <div class="flex justify-center w-full">
            <nav class="flex space-x-2" aria-label="Pagination">
              <a
                href="/"
                class="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              >
                Previous
              </a>
              <a
                href="/"
                class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              >
                1
              </a>
              <a
                href="/"
                class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              >
                2
              </a>
              <a
                href="/"
                class="relative inline-flex items-center px-4 py-2 text-sm font-medium text-gray-700 bg-white border border-fuchsia-100 hover:bg-fuchsia-200 cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              >
                3
              </a>
              <a
                href="/"
                class="relative inline-flex items-center px-4 py-2 text-sm bg-gradient-to-r from-violet-300 to-indigo-300 border border-fuchsia-100 hover:border-violet-100 text-white font-semibold cursor-pointer leading-5 rounded-md transition duration-150 ease-in-out focus:outline-none focus:shadow-outline-blue focus:border-blue-300 focus:z-10"
              >
                Next
              </a>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default TableList;
