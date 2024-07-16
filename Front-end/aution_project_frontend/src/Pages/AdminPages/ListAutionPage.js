import TableList from "../../Components/AdminComponents/TableList";

function ListAutionPage() {
    const data = Array.from({ length: 5 });
    return (
      <div
        id="content"
        class="bg-white/10 col-span-10 rounded-lg w-full overflow-y-auto"
      >
        <main>
          <div class="pt-6 px-4">
            <div className="w-full flex flex-col items-start">
              <span className=" text-black text-[24px] font-bold">News</span>
              <hr class="my-10 w-full border-slate-700" />
            </div>
            <div className="flex justify-end mx-auto">
              <select
                class="m-2 middle none center rounded-lg text-black bg-[#ff4949] py-3 px-5 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="false"
              >             
                  <option className=" bg-white">Status</option>
                  <option className=" bg-white">Status</option>
                  <option className=" bg-white">Status</option>
              </select>
              <button
                class="m-2 middle none center rounded-lg text-black bg-[#ff4949] py-3 px-6 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                data-ripple-light="false"
              >
                Add News
              </button>
            </div>
            <TableList data={data}/>
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
  
  export default ListAutionPage;
  