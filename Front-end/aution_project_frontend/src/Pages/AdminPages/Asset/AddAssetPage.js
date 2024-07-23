function AddAssetPage() {
  return (
    <div
      id="content"
      class="bg-white/10 col-span-10 rounded-lg w-full overflow-y-auto"
    >
      <main>
        <div class="pt-6 px-4">
          <div className="w-full flex flex-col items-start">
            <span className=" text-black text-[24px] font-bold">
              Add Assets
            </span>
            <hr class="my-10 w-full border-slate-700" />
          </div>
          <div className="w-full flex justify-center">
            <div class=" flex items-center justify-center w-5/6">
              <form
                id="form"
                class="bg-white shadow-md rounded px-8 w-full pt-6 pb-8 mb-4"
              >
                <h1 class="block text-gray-700 font-bold mb-2 text-xl text-center">
                  Add Assets
                </h1>
                <br />
                <div class="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                  />
                </div>
                <div className=" flex w-full space-x-10 mb-4">
                  <div class="mb-4 w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                    />
                  </div>
                  <div class="mb-4 w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                    />
                  </div>
                </div>

                <div class="mb-4">
                  <textarea
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="w-full rounded-xl py-4 px-4 border text-sm outline-[#007bff]"
                  />
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                  />
                </div>
                <div className=" flex w-full space-x-10 mb-4">
                  <div class="mb-4 w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                    />
                  </div>
                  <div class="mb-4 w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                    />
                  </div>
                </div>
                <div class="mb-4">
                  <input
                    type="text"
                    name="name"
                    placeholder="Name"
                    class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                  />
                </div>
                <div className=" flex w-full space-x-10 mb-4">
                  <div class="mb-4 w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                    />
                  </div>
                  <div class="mb-4 w-1/2">
                    <input
                      type="text"
                      name="name"
                      placeholder="Name"
                      class="w-full rounded-3xl py-4 px-4 border text-sm outline-[#007bff]"
                    />
                  </div>
                </div>
                <div class="flex items-center justify-between">
                    <div class="w-full max-w-md p-9 bg-white rounded-lg shadow-lg">
                      <h1 class="text-center text-2xl sm:text-2xl font-semibold mb-4 text-gray-800">
                        Upload image
                      </h1>
                      <div
                        class="bg-gray-100 p-8 text-center rounded-lg border-dashed border-2 border-gray-300 hover:border-blue-500 transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-md"
                        id="dropzone"
                      >
                        <label
                          for="fileInput"
                          class="cursor-pointer flex flex-col items-center space-y-2"
                        >
                          <svg
                            class="w-16 h-16 text-gray-400"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                          >
                            <path
                              stroke-linecap="round"
                              stroke-linejoin="round"
                              stroke-width="2"
                              d="M12 6v6m0 0v6m0-6h6m-6 0H6"
                            ></path>
                          </svg>
                          <span class="text-gray-600">
                            Drag and drop your files here
                          </span>
                          <span class="text-gray-500 text-sm">
                            (or click to select)
                          </span>
                        </label>
                        <input
                          type="file"
                          id="fileInput"
                          class="hidden"
                          multiple
                        />
                      </div>
                      <div class="mt-6 text-center" id="fileList"></div>
                    </div>
                  <div className=" space-x-5">
                    <button
                      id="submit"
                      class="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Add
                    </button>
                    <button
                      id="submit"
                      class="bg-black hover:bg-black text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      type="submit"
                    >
                      Cancel
                    </button>
                  </div>
                </div>

                <div class="mb-4"></div>
              </form>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default AddAssetPage;
