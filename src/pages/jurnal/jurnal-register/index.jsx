export default function JurnalRegister(){
    return (
      <div className="w-full h-72 mt-10">
        <h1 className="text-2xl font-medium border-b-2 mb-8">
          Jurnal Kayıt İşlemleri
        </h1>
        {/* form başlangıç */}
        <div className="h-[50vh] w-full grid grid-cols-3 grid-rows-4 mt-8 ml-8 ">
          <form action="" className=" col-start-1">
            <div id="id-jurnal-kayit" className="flex flex-col">
              <label htmlFor="" className="ml-2">
                Id
              </label>
              <input
                type="text"
                className="w-[330px] h-12 rounded-lg text-lg"
                name=""
                id=""
                placeholder="Tekne Id"
              />
            </div>
          </form>
          <form action="" className=" col-start-2">
            <div id="tekne-jurnal-kayit" className="flex flex-col">
              <label htmlFor="" className="ml-2">
                Tekne
              </label>
              <input
                type="text"
                className="w-[330px] h-12 rounded-lg text-lg"
                name=""
                id=""
                placeholder="Tekne İsmi"
              />
            </div>
          </form>
          <form action="" className=" col-start-3">
            <div id="jurnal-tipi" className="flex flex-col">
              <label htmlFor="" className="ml-2">
                Jurnal Tipi
              </label>
              <select
                className="w-[330px] h-12 rounded-lg text-lg"
                name=""
                id=""
              >
                <option selected>Jurnal Tipi Seçiniz</option>
                <option value="1">Kara</option>
                <option value="2">Deniz</option>
              </select>
            </div>
          </form>
          <form action="" className=" col-start-3">
            <div id="jurnal-tipi" className="flex flex-col">
              <label htmlFor="" className="ml-2">
                Hareket Tipi
              </label>
              <select
                className="w-[330px] h-12 rounded-lg text-lg"
                name=""
                id=""
              >
                <option selected>Hareket Tipi Seçiniz</option>
                <option value="1">Deniz Giriş</option>
                <option value="2">Deniz Çıkış</option>
              </select>
            </div>
          </form>
          <form action="" className="col-start-1 row-start-2">
            <div id="tekne-hareket-tarihi-kayit" className="flex flex-col">
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
          </form>
          <form action="" className="col-start-2 row-start-2">
            <div id="tekne-hareket-saati-kayit" className="flex flex-col">
              <label htmlFor="" className="ml-2">
                Hareket Saati
              </label>
              <input
                type="time"
                className="w-[330px] h-12 rounded-lg text-lg"
                name=""
                id=""
              />
            </div>
          </form>
          <form action="" className="col-start-1 row-start-3">
            <div id="tekne-donus-tarihi-kayit" className="flex flex-col">
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
          </form>
          <form action="" className="col-start-2 row-start-3">
            <div id="tekne-donus-saati-kayit" className="flex flex-col">
              <label htmlFor="" className="ml-2">
                Dönüş Saati
              </label>
              <input
                type="time"
                className="w-[330px] h-12 rounded-lg text-lg"
                name=""
                id=""
              />
            </div>
          </form>
          <div className="col-start-3 row-start-4">
            <button className=" bg-sky-700 rounded-lg w-[300px] h-14 ml-8 text-2xl font-medium text-white hover:bg-sky-800 hover:shadow-sm">
              Kaydet
            </button>
          </div>
          {/* form bitiş */}
        </div>
      </div>
    );
}