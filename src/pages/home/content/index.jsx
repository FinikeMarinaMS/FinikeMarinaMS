import Bildirimler from "./bildirimler"
import HavaDurumu from "./hava-durumu"
import Uyarilar from "./uyarilar"
import Mail from "./mail";
import Ruzgar from "./ruzgar";

export default function Content(){
    return (
      <div className="bg-cover flex-1 ml-8 px-[40px] py-[40px] gap-x-[50px] gap-y-[50px] ">
        <div className="grid grid-cols-3 grid-rows-2 w-[1100px] h-[80vh] bg-white ml-[410px] mt-16 bg-opacity-0 gap-14  grid-flow-col ">
          <div className="col-start-1 col-span-1">
            <Mail />
          </div>
          <div className="col-start-2 col-span-1">
            <Bildirimler />
          </div>
          <div className="col-start-3 col-span-1">
            <Uyarilar />
          </div>
          <div className=" col-start-1 col-span-2">
            <HavaDurumu />
          </div>
          <div className=" col-start-3 col-span-2">
            <Ruzgar/>
          </div>
        </div>
      </div>
    );
}