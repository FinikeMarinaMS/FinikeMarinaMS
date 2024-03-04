import Logo from "./logo"
import Menu from "./menu"

export default function Sidebar(){
    return (
      <aside className=" fixed w-[330px] min-h-screen  drop-shadow-md bg-[#40679E]  px-4 flex justify-center ">
        <Logo />

        <Menu />
      </aside>
    );
}