import { useState } from "react";

function ListBillsPage() {
  const defaultItem = {
    Id: "#1234",
    Name: "Car",
    NameSuplier: "John",
    Datetime: "20/03/2003",
    Status: "Active",
  };
  const data = Array.from({ length: 10 }, () => ({ ...defaultItem }));
  const column = ["Id", "Name", "NameSuplier", "Datetime", "Status", "Action"];

  const fillter = [
    "Successfilly Aution",
    "Being Transported",
    "Successful Delivery",
    "Cancel",
  ];
  const [fillterState, setFillterState] = useState(0);
  return (
    <div
      id="content"
      class="bg-white/10 col-span-10 rounded-lg w-full overflow-y-auto"
    >
      <main>
        <div class="pt-6 px-4">
          <div className="w-full flex flex-col items-start">
            <span className=" text-black text-[24px] font-bold">Bills</span>
            <hr class="my-10 w-full border-slate-700" />
          </div>
          <div className="flex justify-end mx-auto">
            <select
              class="m-2 middle none center rounded-lg text-[24px] text-white bg-[#ff4949] py-3 px-5 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="false"
            >
              <option className=" bg-white text-black">Status</option>
              <option className=" bg-white text-black">Status</option>
              <option className=" bg-white text-black">Status</option>
            </select>
            <select
              class="m-2 middle none center rounded-lg text-[24px] text-white bg-[#ff4949] py-3 px-5 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="false"
            >
              <option className=" bg-white text-black">Timeleft</option>
              <option className=" bg-white text-black">Status</option>
              <option className=" bg-white text-black">Status</option>
            </select>
            <select
              class="m-2 middle none center rounded-lg text-[24px] text-white bg-[#ff4949] py-3 px-5 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="false"
            >
              <option className=" bg-white text-black">Autions</option>
              <option className=" bg-white text-black">Status</option>
              <option className=" bg-white text-black">Status</option>
            </select>
          </div>
          <table class="text-left w-full">
            <thead class="bg-[#D9D9D9] flex text-white w-full">
              <tr class="flex w-full ">
                {fillter.map((item, index) => {
                  return (
                    <th
                      key={index}
                      class={`${
                        fillterState === index && "bg-[#FF4949]"
                      } flex items-center justify-center p-4 w-1/4 h-full text-black`}
                      onClick={() => {
                        setFillterState(index);
                      }}
                    >
                      <button>{item}</button>
                    </th>
                  );
                })}
              </tr>
            </thead>
          </table>
          <table class="rounded-t-lg m-5 w-full  mx-auto bg-[#9A8181] text-gray-800">
            <tr class=" border-b-2 border-gray-300">
              {column.map((item, index) => {
                return (
                  <th key={index} class="px-4 py-3">
                    {item}
                  </th>
                );
              })}
            </tr>
            {data.map((item, index) => {
              return (
                <tr
                  class={`${
                    index % 2 === 0
                      ? "bg-gray-100 border-gray-200"
                      : "bg-[#D6B8B8]"
                  } border-b`}
                >
                  {column.map((field, index) => {
                    return field === "Action" ? ( //Check if action render 2 button
                      fillterState === 0 || fillterState === 1 ? (
                        <td className="px-4 py-3">
                          <button
                            class="middle none center mr-4 rounded-lg bg-yellow-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Detail
                          </button>
                          <button
                            class="middle none center mr-4 rounded-lg bg-green-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-green-500/20 transition-all hover:shadow-lg hover:shadow-green-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Appect
                          </button>
                          <button
                            class="middle none center rounded-lg bg-orange-500 py-3 px-6 font-sans text-xs font-bold uppercase text-white shadow-md shadow-orange-500/20 transition-all hover:shadow-lg hover:shadow-orange-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                            data-ripple-light="true"
                          >
                            Reject
                          </button>
                        </td>
                      ) : (
                        <td className="px-4 py-3 h-full">
                          <a class="relative" href="/">
                            <span class="absolute top-0 left-0 mt-[6px] ml-[2px] text-base h-full w-full rounded bg-black"></span>
                            <span class="fold-bold relative inline-block rounded border-2 px-3 bg-[#CBE333] border-black text-base font-bold text-black transition duration-100 hover:bg-yellow-400 hover:text-gray-900">
                              Detail
                            </span>
                          </a>
                        </td>
                      )
                    ) : (
                      //field is text or number or date
                      <td class="px-4 py-3">{item[field]}</td>
                    );
                  })}
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
        </div>
      </main>
    </div>
  );
}

export default ListBillsPage;
