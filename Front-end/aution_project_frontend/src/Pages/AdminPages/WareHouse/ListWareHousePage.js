import TableList from "../../../Components/AdminComponents/TableList";

function ListWareHouse() {
    const defaultItem = {
        Id: "#1234",
        Name: "K01",
        Location: "1234 Elm Street, NY",
      };
      const data = Array.from({ length: 8 }, () => ({ ...defaultItem }));
      const column = ["Id", "Name", "Location", "Action"];
      return (
        <div
          id="content"
          class="bg-white/10 col-span-10 rounded-lg w-full overflow-y-auto"
        >
          <main>
            <div class="pt-6 px-4">
              <div className="w-full flex flex-col items-start">
                <span className=" text-black text-[24px] font-bold">Ware Houses</span>
                <hr class="my-10 w-full border-slate-700" />
              </div>
              <div className="flex justify-end mx-auto">
                <button
                  class="m-2 middle none center rounded-lg text-[24px] text-white bg-[#ff4949] py-3 px-6 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  data-ripple-light="false"
                >
                  Add
                </button>
              </div>
              <TableList data={data} column={column} />
            </div>
          </main>
        </div>
      );
}

export default ListWareHouse;