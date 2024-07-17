import TableList from "../../../Components/AdminComponents/TableList";

function ListNewPage() {
  const defaultItem = {
    Id: "1234",
    Name: "Car",
    Date: "20/03/2003",
    Status: "Active",
  };
  const data = Array.from({ length: 5 }, () => ({ ...defaultItem }));
  const column = ["Id", "Name", "Date", "Status", "Action"];
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
              class="m-2 middle none center rounded-lg text-[24px] text-white bg-[#ff4949] py-3 px-5 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="false"
            >
              <option className=" bg-white text-black">Status</option>
              <option className=" bg-white text-black">Status</option>
              <option className=" bg-white text-black">Status</option>
            </select>
            <button
              class="m-2 middle none center rounded-lg text-[24px] text-white bg-[#ff4949] py-3 px-6 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="false"
            >
              Add News
            </button>
          </div>
          <TableList data={data} column={column} />
        </div>
      </main>
    </div>
  );
}

export default ListNewPage;
