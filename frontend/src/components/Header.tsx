
import knavLogo from "../images/knav_white.png";  // fix name if needed
import { Bell } from "lucide-react"; // install if needed
import { User } from "lucide-react";



export default function Header () {
  return (
    
 <div>

      <header className="h-15 bg-[#6a0b23] 
        flex items-center justify-between px-7 
        rounded-2xl shadow-md">

      {/* LEFT SECTION */}
      <div className="flex items-center">
        
        {/* Logo */}
        <img
          src={knavLogo}
          alt="KNAV Logo"
          className="h-11 object-contain"
        />

      </div>

      {/* RIGHT SECTION */}
      
        <div className="flex items-center gap-4">

          <div className="bg-white/20 p-2 rounded-full">
            <Bell className="text-white" size={12} />
          </div>
          
        <div className="bg-white p-[3px] rounded-full">
            <User className="text-gray-700" size={25} />

      </div>     
       </div>


    </header>
    </div>
  );
}
