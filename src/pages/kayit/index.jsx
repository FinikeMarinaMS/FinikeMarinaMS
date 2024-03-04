import Register from "./register";
import TableSearch from "./table-search";


export default function TekneKayit(){
    return (
      <div className="min-h-screen bg-cover  bg-[url('/image/xx.jpg')] flex justify-center items-center ">
        <main className="h-[95vh] w-[225vh] bg-white  overflow-auto scrollbar-hide backdrop-blur-sm">
          <div className="flex flex-col justify-center">
            <TableSearch />
          </div>
          
          <Register />
        </main>
      </div>
    );
}