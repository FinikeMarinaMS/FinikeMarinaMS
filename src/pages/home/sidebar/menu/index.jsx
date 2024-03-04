import { NavLink } from "react-router-dom";
import TekneKayit from "~/pages/kayit";



export default function Menu(){
    return (
      <nav className="absolute flex mt-[250px] -ml-[30px] text-2xl text-white font-semi-bold flex-col ">
        <NavLink to="/kayit">
          <div className="flex flex-row gap-x-4 rounded-2xl mb-2 px-9 py-4 transition-all hover:bg-sky-200 ">
            <svg height="34" viewBox="0 -960 960 960" width="34" fill="white">
              <path d="M520-400h80v-120h120v-80H600v-120h-80v120H400v80h120v120ZM320-240q-33 0-56.5-23.5T240-320v-480q0-33 23.5-56.5T320-880h480q33 0 56.5 23.5T880-800v480q0 33-23.5 56.5T800-240H320Zm0-80h480v-480H320v480ZM160-80q-33 0-56.5-23.5T80-160v-560h80v560h560v80H160Zm160-720v480-480Z" />
            </svg>
            Tekne Kayıt
          </div>
        </NavLink>
        <NavLink to="/takip">
          <div className="flex flex-row gap-x-4 rounded-2xl px-9 py-4 mb-2 transition-all hover:bg-sky-200 ">
            <svg height="34" viewBox="0 -960 960 960" width="34" fill="white">
              <path d="M480-80q-83 0-156-31.5T197-197q-54-54-85.5-127T80-480q0-83 31.5-156T197-763q54-54 127-85.5T480-880q146 0 255.5 91.5T872-559h-82q-19-73-68.5-130.5T600-776v16q0 33-23.5 56.5T520-680h-80v80q0 17-11.5 28.5T400-560h-80v80h80v120h-40L168-552q-3 18-5.5 36t-2.5 36q0 131 92 225t228 95v80Zm364-20L716-228q-21 12-45 20t-51 8q-75 0-127.5-52.5T440-380q0-75 52.5-127.5T620-560q75 0 127.5 52.5T800-380q0 27-8 51t-20 45l128 128-56 56ZM620-280q42 0 71-29t29-71q0-42-29-71t-71-29q-42 0-71 29t-29 71q0 42 29 71t71 29Z" />
            </svg>
            Tekne Takip
          </div>
        </NavLink>
        <NavLink to="/sozlesme">
          <div className="flex flex-row gap-x-4 rounded-2xl px-9 py-4 mb-2 transition-all hover:bg-sky-200 ">
            <svg height="34" viewBox="0 -960 960 960" width="34" fill="white">
              <path d="M360-600v-80h360v80H360Zm0 120v-80h360v80H360Zm120 320H200h280Zm0 80H240q-50 0-85-35t-35-85v-120h120v-560h600v361q-20-2-40.5 1.5T760-505v-295H320v480h240l-80 80H200v40q0 17 11.5 28.5T240-160h240v80Zm80 0v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T903-300L683-80H560Zm300-263-37-37 37 37ZM620-140h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
            </svg>
            Sözleşme
          </div>
        </NavLink>
        <NavLink to="/jurnal">
          <div className="flex flex-row gap-x-4 rounded-2xl px-9 py-4 mb-2 transition-all hover:bg-sky-200 ">
            <svg height="34" viewBox="0 -960 960 960" width="34" fill="white">
              <path d="M160-400v-80h280v80H160Zm0-160v-80h440v80H160Zm0-160v-80h440v80H160Zm360 560v-123l221-220q9-9 20-13t22-4q12 0 23 4.5t20 13.5l37 37q8 9 12.5 20t4.5 22q0 11-4 22.5T863-380L643-160H520Zm300-263-37-37 37 37ZM580-220h38l121-122-18-19-19-18-122 121v38Zm141-141-19-18 37 37-18-19Z" />
            </svg>
            Jurnal İşlemleri
          </div>
        </NavLink>
        <NavLink to="/fatura">
          <div className="flex flex-row gap-x-4 rounded-2xl px-9 py-4 mb-2 transition-all hover:bg-sky-200 ">
            <svg height="34" viewBox="0 -960 960 960" width="34" fill="white">
              <path d="M440-200h80v-40h40q17 0 28.5-11.5T600-280v-120q0-17-11.5-28.5T560-440H440v-40h160v-80h-80v-40h-80v40h-40q-17 0-28.5 11.5T360-520v120q0 17 11.5 28.5T400-360h120v40H360v80h80v40ZM240-80q-33 0-56.5-23.5T160-160v-640q0-33 23.5-56.5T240-880h320l240 240v480q0 33-23.5 56.5T720-80H240Zm280-560v-160H240v640h480v-480H520ZM240-800v160-160 640-640Z" />
            </svg>
            Faturalandırma
          </div>
        </NavLink>
        <NavLink to="/logout">
          
          <div className="mt-6 flex justify-center rounded-2xl py-4 px-0 mb-2 transition-color hover:bg-sky-400 ">
            <svg height="34" viewBox="0 -960 960 960" width="34" fill="white">
              <path d="M200-120q-33 0-56.5-23.5T120-200v-560q0-33 23.5-56.5T200-840h280v80H200v560h280v80H200Zm440-160-55-58 102-102H360v-80h327L585-622l55-58 200 200-200 200Z" />
            </svg>
          </div>
        </NavLink>
      </nav>
    );
}