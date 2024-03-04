

import { Outlet } from "react-router-dom";
import Sidebar from "./sidebar";
import Content from "./content";
import User from "./user";

export default function Home(){
    return (
      <div className="flex flex-row bg-fixed  bg-[length:240vh_200vh]  min-h-screen bg-[url('/image/xx.jpg')]">
        <div className="absolute right-0 top-0">
          <User />
        </div>

        <Sidebar />
        <div className="flex-1">
          <Content />
        </div>

        <Outlet />
      </div>
    );
}