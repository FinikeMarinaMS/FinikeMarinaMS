import JurnalContent from "./jurnal-content";
import JurnalTable from "./jurnal-table";
import JurnalRegister from "./jurnal-register";

export default function Jurnalİslemleri() {
  return (
    <div className="bg-[url('/image/xx.jpg')] flex flex-row">
      <JurnalContent />
      <main className="h-[160vh]  w-[310vh] bg-white ml-[65vh] mx-4 flex justify-center overflow-y-auto overflow-x-clip  scrollbar-hide ">
        <div className="flex flex-col">
          <JurnalTable />
          <JurnalRegister />
        </div>
      </main>
    </div>
  );
}
