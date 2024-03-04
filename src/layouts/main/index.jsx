import { Outlet } from "react-router-dom"


export default function MainLayout({}){
    return (
      <div className="w-[1265px] mx-auto flex">
      main layout
       <Outlet/>
      </div>
    );
}