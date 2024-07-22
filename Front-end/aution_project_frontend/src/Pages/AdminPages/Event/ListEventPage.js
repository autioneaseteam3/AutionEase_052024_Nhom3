import React from "react";
import TableList from '../../../Components/AdminComponents/TableList';

function ListEventPage() {
  const [showModal, setShowModal] = React.useState(false);

  const defaultItem = {
    Id: '#1234',
    Name: 'Christmas',
    State: 'Upcoming',
  };

  const data = Array.from({ length: 8 }, () => ({ ...defaultItem }));
  const column = ['Id', 'Name', 'State', 'Action'];

  return (
    <div
      id="content"
      className="bg-white/10 col-span-10 rounded-lg w-full overflow-y-auto"
    >
      <main>
        <>
          {showModal ? (
            <>
              <div
                className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none"
              >
                <div className="relative w-auto my-6 mx-auto max-w-3xl">
                  {/*content*/}
                  <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                    {/*header*/}
                    <div className="flex items-start justify-between p-5 border-b border-solid border-blueGray-200 rounded-t">
                      <h3 className="text-3xl font-semibold">
                        Modal Title
                      </h3>
                      <button
                        className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                        onClick={() => setShowModal(false)}
                      >
                        <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                          ×
                        </span>
                      </button>
                    </div>
                    {/*body*/}
                    <div className="relative p-6 flex-auto">
                      <div className="mb-3 pt-0 ">

                        <input type="text" placeholder="Placeholder" className="px-3 py-3  placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full" />


                        <input type="text" placeholder="Placeholder" className="px-3 py-3 mt-5 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full" />


                        <input type="text" placeholder="Placeholder" className="px-3 py-3 mt-5 placeholder-blueGray-300 text-blueGray-600 relative bg-white bg-white rounded text-sm border border-blueGray-300 outline-none focus:outline-none focus:ring w-full" />


                      </div>

                    </div>
                    {/*footer*/}
                    <div className="flex items-center justify-end p-6 border-t border-solid border-blueGray-200 rounded-b">
                      <button
                        className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Close
                      </button>
                      <button
                        className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                        type="button"
                        onClick={() => setShowModal(false)}
                      >
                        Save Changes
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
            </>
          ) : null}
        </>

        <div className="pt-6 px-4">
          <div className="w-full flex flex-col items-start">
            <span className="text-black text-[24px] font-bold">Events</span>
            <hr className="my-10 w-full border-slate-700" />
          </div>
          <div className="flex justify-end mx-auto">
            <select
              className="m-2 middle none center rounded-lg text-[24px] text-white bg-[#ff4949] py-3 px-5 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="false"
            >
              <option className="bg-white text-black">Status</option>
              <option className="bg-white text-black">Status</option>
              <option className="bg-white text-black">Status</option>
            </select>
            <button
              className="m-2 middle none center rounded-lg text-[24px] text-white bg-[#ff4949] py-3 px-6 font-sans text-xs font-bold shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
              data-ripple-light="false" onClick={() => setShowModal(true)}
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

export default ListEventPage;
