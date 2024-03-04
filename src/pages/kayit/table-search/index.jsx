export default function TableSearch(){
    return (
      <div className="">
        <h1 className=" text-2xl px-4 py-4 mb-4 text-gray-600 font-semibold border-b-2 border-spacing-1">
          Tekne Kayıt İşlemleri
        </h1>
        <div id="search-group" className=" flex justify-center  ">
          <div className="flex flex-col">
            <div
              id="search"
              className="w-[500px] h-[55px] rounded-full bg-white border-gray-300 border-2  flex items-center ml-[450px]"
            >
              <input
                placeholder="Arama"
                type="search"
                className="w-[400px] h-[50px] ml-[30px] outline-none border-none text-xl  "
              />
              <button>
                <svg
                  className="ml-5"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                  fill="grey"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </button>
            </div>
            {/* tableeeeeeeeeeeeeeeeeeeeeeeeee */}
            <div
              id="search-table"
              className=" w-[1550px] h-[500px] mt-14 overflow-auto scrollbar-hide border-b-2"
            >
              <table className="w-full table-fixed ">
                <thead className="h-12 text-gray-500 text-md text-center ">
                  <tr
                    className="border-b-2 border-gray-600 text-center"
                    itemScope="col"
                  >
                    <th scope="col" className="px-6 py-3  ">
                      <div class="flex items-center justify-center">
                        ID
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-6  py-3 w-52">
                      <div class="flex items-center justify-center">
                        Tekne
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 w-52 ">
                      <div class="flex items-center justify-center">
                        Tekne Sahibi
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 w-44">
                      <div class="flex items-center justify-center ">
                        Bayrağı
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      <div class="flex items-center justify-center">
                        Tekne Tipi
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>

                    <th scope="col" className="px-6 py-3 ">
                      <div class="flex items-center justify-center">
                        En
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      <div class="flex items-center justify-center ">
                        Boy
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-6 py-3 ">
                      <div class="flex items-center justify-center">
                        Derinlik
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" className="px-6 ">
                      <div class="flex items-center justify-center ">
                        Tonaj
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5  hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th scope="col" class="px-6 py-3 w-56">
                      <div class="flex items-center justify-center">
                        Bağlı Olduğu Liman
                        <a href="#">
                          <svg
                            class="w-6 h-6 ms-1.5 hover:fill-gray-700"
                            aria-hidden="true"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path d="M8.574 11.024h6.852a2.075 2.075 0 0 0 1.847-1.086 1.9 1.9 0 0 0-.11-1.986L13.736 2.9a2.122 2.122 0 0 0-3.472 0L6.837 7.952a1.9 1.9 0 0 0-.11 1.986 2.074 2.074 0 0 0 1.847 1.086Zm6.852 1.952H8.574a2.072 2.072 0 0 0-1.847 1.087 1.9 1.9 0 0 0 .11 1.985l3.426 5.05a2.123 2.123 0 0 0 3.472 0l3.427-5.05a1.9 1.9 0 0 0 .11-1.985 2.074 2.074 0 0 0-1.846-1.087Z" />
                          </svg>
                        </a>
                      </div>
                    </th>
                    <th className="w-16"></th>
                    <th className="w-16"></th>
                  </tr>
                </thead>

                <tbody className="text-center overflow-y-scroll  font-medium ">
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                  <tr className="h-12 border-b">
                    <td>296876</td>
                    <td>Sufi Necmi</td>
                    <td>Orhan Şenel</td>

                    <td>Türkiye</td>
                    <td>S/Y</td>
                    <td>4.7</td>
                    <td>21.2</td>
                    <td>1.4</td>
                    <td>60</td>
                    <td>Kaş Marina</td>
                    <td>
                      <button className="h-8 w-16 rounded-full bg-green-400 text-white mt-0.5">
                        {" "}
                        Aktif
                      </button>
                    </td>
                    <td>
                      <button className="mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          height="34"
                          viewBox="0 -960 960 960"
                          width="34"
                          className="hover:fill-gray-700"
                          fill="#808080"
                        >
                          <path d="M160-80q-33 0-56.5-23.5T80-160v-400q0-33 23.5-56.5T160-640h640q33 0 56.5 23.5T880-560v400q0 33-23.5 56.5T800-80H160Zm0-80h640v-400H160v400Zm160-40h320v-80H320v80ZM200-320h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM200-440h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80Zm120 0h80v-80h-80v80ZM160-160v-400 400Zm80-560v-200h80v61q32-29 73-45t87-16q88 0 155 56.5T716-720h-82q-14-53-56.5-86.5T480-840q-30 0-57 10.5T375-800h65v80H240Z" />
                        </svg>
                      </button>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
            {/* tableeeeeeeeeeeeeeee */}
          </div>
        </div>
      </div>
    );
}