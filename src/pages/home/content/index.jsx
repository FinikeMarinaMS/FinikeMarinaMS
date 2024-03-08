import Bildirimler from "./bildirimler"
import HavaDurumu from "./hava-durumu"
import Uyarilar from "./uyarilar"
import Mail from "./mail";
import Ruzgar from "./ruzgar";
import TekneKayit from "~/pages/kayit";
import { Link } from "react-router-dom";

export default function Content(){
    return (
      <div className="w-[187vh] h-[500px] min-h-screen  flex justify-center pt-20 px-10 pb-5 ">
        <div className="grid grid-cols-4 grid-rows-3 gap-4 w-full h-full">
          <div className=" col-span-2 row-span-2  rounded-lg   bg-white">
            <Mail />
          </div>
          <div className=" col-span-2 row-span-2  rounded-lg   bg-white">
            <Uyarilar />
          </div>
          <div className=" col-span-1 row-span-2  rounded-lg    bg-white"></div>
          <Link
            className="col-span-3 row-span-2  rounded-lg hover:shadow-md    bg-white"
            to={"/takip"}
          ></Link>

          {/* <div className=" col-span-3 row-span-2  rounded-lg hover:shadow-md    bg-white"></div> */}
        </div>
      </div>
    );
}