export default function YachtContent(){
    
    return (
      <div className="min-h-screen ml-4 w-[60vh] bg-white fixed">
        <div className="p-8 flex justify-center overflow-hidden">
          <div className="flex flex-col ">
            <div className="w-[400px] h-[55px] rounded-full bg-white border-gray-300 border-2  flex items-center">
              <input
                placeholder="Arama"
                type="search"
                className="w-[300px] h-[52px] ml-[30px] outline-none border-none text-xl focus:border-none "
              />
              <button>
                <svg
                  className="ml-4"
                  height="30"
                  viewBox="0 -960 960 960"
                  width="30"
                  fill="grey"
                >
                  <path d="M784-120 532-372q-30 24-69 38t-83 14q-109 0-184.5-75.5T120-580q0-109 75.5-184.5T380-840q109 0 184.5 75.5T640-580q0 44-14 83t-38 69l252 252-56 56ZM380-400q75 0 127.5-52.5T560-580q0-75-52.5-127.5T380-760q-75 0-127.5 52.5T200-580q0 75 52.5 127.5T380-400Z" />
                </svg>
              </button>
            </div>
            <h1 className="text-xl font-bold text-gray-600 mb-5 mt-8 ml-4 ">
              Seçilen Tekne Bilgisi
            </h1>

            <div className="ml-2 overflow-auto scrollbar-hide w-[350px] h-[71vh] text-xl font-semi-bold mt-2">
              <table class="w-[370px] table-auto text-clip min-w-full text-left text-gray-700 text-lg font-semibold  border-separat px-8 ">
                <tbody className="" >
                  <tr >
                    <td classname=" border-separate  py-3">Tekne Id</td>
                    <td class="whitespace-nowrap  py-3">12345</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap  py-3">Tekne</td>
                    <td class="whitespace-nowrap  py-3">S.Sufi</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap  py-3">En</td>
                    <td class="whitespace-nowrap  py-3">4.37m</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap  py-3">Boy</td>
                    <td class="whitespace-nowrap  py-3">13.41m</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap  py-3">Metrekare</td>
                    <td class="whitespace-nowrap  py-3">58.60m^2</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap  py-3">Tekne Tipi</td>
                    <td class="whitespace-nowrap  py-3">S/Y</td>
                  </tr>
                  <tr>
                    <td class="whitespace-nowrap  py-9">Bayrağı</td>
                    <td class="whitespace-nowrap  py-9">
                      <img src="src\Bayrak.png" className="h-12" alt="" />
                      Türkiye
                    </td>
                  </tr>
                  <tr>
                    <td class="py-3">Tekne Sahibi</td>
                    <td class="py-3">6504950</td>
                  </tr>
                  <tr>
                    <td class="  py-3">Tekne Sahibi</td>
                    <td class="  py-3">ŞAİR SİGORTA ACENTELİĞİ LTD.ŞTİ</td>
                  </tr>
                  <tr>
                    <td class="py-3">Tekne Sahibi</td>
                    <td class="py-3">6504950</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    );
}
    
