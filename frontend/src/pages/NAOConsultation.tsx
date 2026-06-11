import { useState } from "react";

import EngagementDetails from "../modules/nao/EngagementDetails";
import ClientDetailsBackground from "../modules/nao/ClientDetailsBackground";
import AccountingIssueConclusion from "../modules/nao/AccountingIssueConclusion";
import IntelliCue from "../modules/nao/IntelliCue";

import {
  downloadPDF,
  downloadWord,
  downloadWordAsPDF
} from "../utils/exportUtils";

export default function NAOConsultation() {

  /* =========================================
      ACTIVE TAB
  ========================================== */

  const [activeTab, setActiveTab] =
    useState("engagement");

  /* =========================================
      MAIN FORM DATA
  ========================================== */

  const [formData, setFormData] =
    useState({

      clientName: "",

      engagementPartner: "",

      engagementManager: "",

      otherTeamMembers: "",

      auditType: "",

      listedCompany: "",

      auditRisk: "",

      region: "",

      engagementYearEnd: "",

      subsidiary: "",

      reviewDone: "",

      reportReleaseDate: "",
    });

  /* =========================================
      TABS
  ========================================== */

  const tabs = [

    {
      id: "engagement",
      label: "Engagement Details",
    },

    {
      id: "client",
      label:
        "Client Details and Background",
    },

    {
      id: "accounting",
      label:
        "Accounting Issue and Conclusion",
    },

    {
      id: "intellicue",
      label: "IntelliCue",
    },
  ];

  return (

    <>

      {/* =====================================
          DOWNLOAD BUTTONS
      ====================================== */}

      <div className="flex justify-end gap-3 mb-4">

        <button

          onClick={() =>
            downloadPDF(
              "printable-form",
              "NAO_Consultation"
            )
          }

          className="
            bg-[#98002E]
            text-white
            px-4
            py-2
            rounded-lg
          "
        >
          Download PDF
        </button>

        <button

          onClick={() =>
            downloadWord(
              "printable-form",
              "NAO_Consultation"
            )
          }

          className="
            border
            border-[#98002E]
            text-[#98002E]
            px-4
            py-2
            rounded-lg
          "
        >
          Download Word
        </button>
      </div>

      {/* =====================================
          TABS
      ====================================== */}

      <div className="flex gap-4 mb-6 flex-wrap">

        {tabs.map((tab) => (

          <button

            key={tab.id}

            onClick={() =>
              setActiveTab(tab.id)
            }

            className={`

              px-4
              py-2
              rounded-lg
              text-sm
              font-medium

              ${
                activeTab === tab.id

                  ? "bg-[#98002E] text-white"

                  : "bg-[#F7E4EA] text-[#98002E]"
              }

            `}
          >
            {tab.label}
          </button>

        ))}

      </div>

      {/* =====================================
          SCREEN CONTENT
      ====================================== */}

      {activeTab === "engagement" && (

        <EngagementDetails

          user={{
            name: "User",
            email: "user@knav.com",
          }}

          formData={formData}

          setFormData={setFormData}

          onNext={() =>
            setActiveTab("client")
          }

        />

      )}

      {activeTab === "client" && (

        <ClientDetailsBackground

          onPrevious={() =>
            setActiveTab("engagement")
          }

          onNext={() =>
            setActiveTab("accounting")
          }

        />

      )}

      {activeTab === "accounting" && (

        <AccountingIssueConclusion

          onPrevious={() =>
            setActiveTab("client")
          }

          onNext={() =>
            setActiveTab("intellicue")
          }

        />

      )}

      {activeTab === "intellicue" && (

        <IntelliCue />

      )}

      {/* =====================================
          HIDDEN PDF AREA
      ====================================== */}

      <div

        id="printable-form"

        style={{

          position: "absolute",

          left: "-99999px",

          top: "0",

          width: "1400px",

          background: "#ffffff",

          padding: "30px",
        }}
      >

        {/* PAGE 1 */}

        <div className="pdf-section">

          <h1
            style={{
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Engagement Details
          </h1>

          <EngagementDetails

            user={{
              name: "User",
              email:
                "user@knav.com",
            }}

            formData={formData}

            setFormData={setFormData}

            onNext={() => {}}

          />

        </div>

        {/* PAGE 2 */}

        <div className="pdf-section">

          <h1
            style={{
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Client Details and Background
          </h1>

          <ClientDetailsBackground
            onPrevious={() => {}}
            onNext={() => {}}
          />

        </div>

        {/* PAGE 3 */}

        <div className="pdf-section">

          <h1
            style={{
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            Accounting Issue and Conclusion
          </h1>

          <AccountingIssueConclusion
            onPrevious={() => {}}
            onNext={() => {}}
          />

        </div>

        {/* PAGE 4 */}

        <div className="pdf-section">

          <h1
            style={{
              fontSize: "28px",
              marginBottom: "20px",
            }}
          >
            IntelliCue
          </h1>

          <IntelliCue />

        </div>

      </div>

    </>

  );
}