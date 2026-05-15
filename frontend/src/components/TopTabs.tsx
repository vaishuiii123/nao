export default function TopTabs() {
  const tabs = [
    "Engagement Details",
    "Client Details and Background",
    "Accounting Issue and Conclusion",
    "IntelliCue",
  ];

  return (
    <div className="flex gap-3 mb-4">
      {tabs.map((tab, index) => (
        <button
          key={tab}
          className={`px-4 py-2 rounded-lg text-sm font-medium ${
            index === 2
              ? "bg-[#800000] text-white"
              : "bg-[#f3dede] text-[#800000]"
          }`}
        >
          {tab}
        </button>
      ))}
    </div>
  );
}