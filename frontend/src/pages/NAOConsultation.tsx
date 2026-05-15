import { useState } from "react";
import MainLayout from "../layouts/MainLayout";
import EngagementDetails from "../modules/nao/EngagementDetails";

type Props = {
  user: {
    name: string;
    email: string;
  };
  onLogout: () => void;
};

function NAOConsultation({ user, onLogout }: Props) {

  const [activeTab, setActiveTab] = useState("engagement");

  return (
    <MainLayout
      user={user}
      onLogout={onLogout}
    >

      {/* Tabs */}
      <div className="flex gap-3 mb-6">

        <button
          onClick={() => setActiveTab("engagement")}
          className={`px-5 py-3 rounded-lg font-medium transition
            ${
              activeTab === "engagement"
                ? "bg-[#98002E] text-white"
                : "bg-pink-100 text-[#98002E]"
            }`}
        >
          Engagement Details
        </button>

        <button
          onClick={() => setActiveTab("client")}
          className={`px-5 py-3 rounded-lg font-medium transition
            ${
              activeTab === "client"
                ? "bg-[#98002E] text-white"
                : "bg-pink-100 text-[#98002E]"
            }`}
        >
          Client Details and Background
        </button>

        <button
          onClick={() => setActiveTab("accounting")}
          className={`px-5 py-3 rounded-lg font-medium transition
            ${
              activeTab === "accounting"
                ? "bg-[#98002E] text-white"
                : "bg-pink-100 text-[#98002E]"
            }`}
        >
          Accounting Issue and Conclusion
        </button>

        <button
          onClick={() => setActiveTab("intellicue")}
          className={`px-5 py-3 rounded-lg font-medium transition
            ${
              activeTab === "intellicue"
                ? "bg-[#98002E] text-white"
                : "bg-pink-100 text-[#98002E]"
            }`}
        >
          IntelliCue
        </button>

      </div>

      {/* Dynamic Content */}

      {activeTab === "engagement" && (
        <EngagementDetails user={user} />
      )}

      {activeTab === "client" && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          Client Details and Background Content
        </div>
      )}

      {activeTab === "accounting" && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          Accounting Issue and Conclusion Content
        </div>
      )}

      {activeTab === "intellicue" && (
        <div className="bg-white rounded-xl p-6 shadow-sm">
          IntelliCue Content
        </div>
      )}

    </MainLayout>
  );
}

export default NAOConsultation;