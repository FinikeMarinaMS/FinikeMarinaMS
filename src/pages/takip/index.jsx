
import YachtContent from "./yacht-content"
import Map from "./map";


export default function TekneTakip(){
    return (
      <div className="flex flex-row bg-gradient-to-r from-sky-500 to-cyan-300">
        <YachtContent />
        
        <Map/>
       
      </div>
    );
}