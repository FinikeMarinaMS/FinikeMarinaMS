export default function JurnalTable(){
    return (
      <div className="mt-8">
        <h1 className="text-2xl font-medium border-b-2 mb-8">
          Jurnal İşlemleri
        </h1>
        <div id="arama" className="mb-12 flex flex-row gap-x-10">
          <div id="jurnal-tipi" className="flex flex-col">
            <label htmlFor="" className="ml-2">
              Jurnal Tipi
            </label>
            <select className="w-[430px] h-12 rounded-lg text-lg" name="" id="">
              <option selected>Jurnal Tipi Seçiniz</option>
              <option value="1">Kara</option>
              <option value="2">Deniz</option>
            </select>
          </div>
          <div id="hareket-tarihi" className="flex flex-col">
            <label htmlFor="" className="ml-2">
              Hareket Tarihi
            </label>
            <input
              type="date"
              className="w-[330px] h-12 rounded-lg text-lg"
              name=""
              id=""
            />
          </div>
          <div id="donus-tarihi" className="flex flex-col">
            <label htmlFor="" className="ml-2">
              Dönüş Tarihi
            </label>
            <input
              type="date"
              className="w-[330px] h-12 rounded-lg text-lg"
              name=""
              id=""
            />
          </div>
        </div>
        <div className=" overflow-auto scrollbar-hide h-[500px] border-b-2">
          <table className="w-[160vh] table-fixed">
            <thead className="h-12 text-gray-500 text-md ">
              <tr
                className="border-b-2 border-gray-600 text-center"
                itemScope="col"
              >
                <th scope="col" className="px-6 py-3  w-20 ">
                  <div class="flex items-center">
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
                <th scope="col" className="px-6 py-3 w-40  ">
                  <div class="flex items-center ml-6">
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
                <th scope="col" className="px-6 py-3 w-28">
                  <div class="flex items-center ">
                    Jurnal Tipi
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
                <th scope="col" className="px-6 py-3">
                  <div class="flex items-center ml-8">
                    Hareket Tipi
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
                <th scope="col" className="px-6 py-3">
                  <div class="flex items-center ml-4">
                    Hareket Tarihi
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
                <th scope="col" className="px-6 py-3 w-24">
                  <div class="flex items-center">
                    Hareket Saati
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
                <th scope="col" className="px-6 py-3">
                  <div class="flex items-center ml-8">
                    Dönüş Tarihi
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
                <th scope="col" class="px-6 py-3 w-24">
                  <div class="flex items-center">
                    Dönüş Saati
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
                <th className="w-12"></th>
              </tr>
            </thead>

            <tbody className="text-center overflow-y-scroll  font-medium ">
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL Haaa sss</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
              <tr className="border-b-2 border-gray-300 h-12 ">
                <td className="">296857</td>
                <td>MARAL H</td>
                <td>Deniz</td>
                <td>Deniz Giriş</td>
                <td>24.01.2024</td>
                <td>13:50</td>
                <td>26.01.2024</td>
                <td>18:00</td>
                <td>
                  <button>
                    <svg
                      className="hover:fill-gray-700"
                      height="28"
                      viewBox="0 -960 960 960"
                      width="28"
                      fill="#808080"
                    >
                      <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h357l-80 80H200v560h560v-278l80-80v358q0 33-23.5 56.5T760-120H200Zm280-360ZM360-360v-170l367-367q12-12 27-18t30-6q16 0 30.5 6t26.5 18l56 57q11 12 17 26.5t6 29.5q0 15-5.5 29.5T897-728L530-360H360Zm481-424-56-56 56 56ZM440-440h56l232-232-28-28-29-28-231 231v57Zm260-260-29-28 29 28 28 28-28-28Z" />
                    </svg>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    );
}