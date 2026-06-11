import { useState } from "react";

export default function TopTabs() {
  const [activeTab, setActiveTab] = useState(0);

  const tabs = [
    "Engagement Details",
    "Client Details and Background",
    "Accounting Issue and Conclusion",
    "IntelliCue",
  ];

  return (
    <div className="bg-[#b4b5b8]" >
    <div className="bg-gray-200 rounded-full px-8 py-4 flex justify-between ">
      {tabs.map((tab, index) => {
        const isActive = index === activeTab;

        return (
          <div
            key={tab}
            className="flex flex-col items-center cursor-pointer "
            onClick={() => setActiveTab(index)} 
          >
            <div className="flex items-center gap-2">
              
              {/* Circle number */}
              <div
                className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-semibold
                ${isActive ? "bg-[#800000] text-white" : "bg-[#800000]/30 text-[#800000]"}`}
              >
                {index + 1}
              </div>

              {/* Text */}
              <span className="text-sm font-medium">
                {tab}
              </span>
            </div>

            {/* Underline */}
            {isActive && (
              <div className="mt-2 h-1 w-full bg-[#800000]"></div>
            )}
          </div>
        );
      })}
    </div>
    </div>
  );
}
``