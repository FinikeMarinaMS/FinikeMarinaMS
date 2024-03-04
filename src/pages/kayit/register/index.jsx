export default function Register(){
    return (
      <div className="mt-14">
        <h1 className="my-8 ml-12 border-b text-2xl font-medium">
          Tekne Kayıt Bilgileri
        </h1>
        <div className="flex justify-center">
          <div className="w-[214vh] h-[100vh] px-8 flex justify-center">
            <div className="flex flex-row">
              <div className="w-[107vh] h-[80vh] p-8 border"></div>
              <div className="w-[107vh] h-[80vh] p-8 border grid grid-cols-3 grid-rows-6 px-8">
                <form action="" className=" col-span-1 px-2">
                  <label className=" font-medium" htmlFor="">
                    Tekne İsmi
                  </label>
                  <input
                    placeholder="Tekne İsmi"
                    type="text"
                    className="w-full rounded-md"
                  />
                </form>
                <form action="" className=" col-span-1 px-2">
                  <label className=" font-medium" htmlFor="">
                    Tekne Tipi
                  </label>
                  <select className="w-full rounded-md">
                    <option selected>Tekne Tipi Seçiniz</option>
                    <option value="1">Gulet</option>
                    <option value="1">Aynakıç</option>
                    <option value="1">Tırhandil</option>
                    <option value="1">Motoryat</option>
                    <option value="1">Megayat</option>
                    <option value="1">Yelkenli</option>
                    <option value="1">Katamaran</option>
                    <option value="1">Tenezzüh</option>
                  </select>
                </form>
                <form action="" className=" col-span-1 px-2">
                  <label className=" font-medium" htmlFor="">
                    Bayrak
                  </label>
                  <select name="" id="" className="w-full rounded-md">
                    <option selected>Bayrak Seçiniz</option>
                  </select>
                </form>
                <form action="" className=" col-span-1 px-2">
                  <label className=" font-medium" htmlFor="">
                    Bağlı Olduğu Liman
                  </label>
                  <input
                    placeholder="Liman İsmi"
                    type="text"
                    className="w-full rounded-md"
                  />
                </form>
                <form action="" className=" col-span-1 px-2">
                  <label className=" font-medium" htmlFor="">
                    Tekne Durumu
                  </label>
                  <select name="" id="" className="w-full rounded-md">
                    <option selected>Durum</option>
                    <option value="1">Sivil</option>
                    <option value="2">Ticari</option>
                  </select>
                </form>
                <form action="" className=" col-span-1 px-2">
                  <label className=" font-medium" htmlFor="">
                    Ruhsat Numarası
                  </label>
                  <input
                    placeholder="Ruhsat"
                    type="number"
                    className="w-full rounded-md "
                  />
                </form>
                <div className=" row-span-2 grid grid-cols-2">
                  <form action="" className=" col-span-1 px-2">
                    <label className=" font-medium" htmlFor="">
                      En
                    </label>
                    <input
                      placeholder="En"
                      type="number"
                      className="w-full rounded-md "
                    />
                  </form>
                  <form action="" className=" col-span-1 px-2">
                    <label className=" font-medium" htmlFor="">
                      Boy
                    </label>
                    <input
                      placeholder="Boy"
                      type="number"
                      className="w-full rounded-md "
                    />
                  </form>
                </div>
                <div className=" row-span-2 grid grid-cols-2">
                  <form action="" className=" col-span-1 px-2">
                    <label className=" font-medium" htmlFor="">
                      Derinlik
                    </label>
                    <input
                      placeholder="Derinlik"
                      type="number"
                      className="w-full rounded-md "
                    />
                  </form>
                  <form action="" className=" col-span-1 px-2">
                    <label className=" font-medium" htmlFor="">
                      m²
                    </label>
                    <input
                      placeholder="m²"
                      type="number"
                      className="w-full rounded-md "
                    />
                  </form>
                </div>
                <div className=" row-span-2 grid grid-cols-3">
                  <form action="" className=" col-span-1 px-2">
                    <label className=" font-medium" htmlFor="">
                      İskele
                    </label>
                    <select className="w-full rounded-md" name="" id="">
                      <option selected></option>
                      <option value="1">ANM</option>
                      <option value="1">A</option>
                      <option value="1">B</option>
                      <option value="1">C</option>
                      <option value="1">D</option>
                      <option value="1">E</option>
                      <option value="1">KP</option>
                    </select>
                  </form>
                  <form action="" className=" col-span-2 px-2">
                    <label className=" font-medium" htmlFor="">
                      İskele Numarası
                    </label>
                    <select className="w-full rounded-md" name="" id="">
                      <option selected></option>
                    </select>
                  </form>
                </div>
                <form action="" className=" col-span-1 row-span-3 px-2">
                  <label className=" font-medium" htmlFor="">
                    Sigorta Poliçe Numarası
                  </label>
                  <input
                    placeholder="Ruhsat"
                    type="number"
                    className="w-full rounded-md "
                  />
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
}