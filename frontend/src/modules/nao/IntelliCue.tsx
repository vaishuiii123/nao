import { MessageSquare } from "lucide-react";

export default function IntelliCue() {

  const cards = [
    {
      title: "Team Lock-in",
      items: [
        "Allocated - Work in Progress",
        "Re-allocated to New NAO Manager/Partner",
      ],
    },

    {
      title: "Think Tank",
      items: [
        "Send to ET - Key Details Required",
        "Submitted to NAO - Queries Addressed",
      ],
    },

    {
      title: "Precision Mode",
      items: [
        "Send for NAO Partner Review",
        "Send Inputs to NAO Manager",
      ],
    },

    {
      title: "Final Countdown",
      items: [
        "Draft Sent to ET for Clearance",
        "Submitted to NAO - For Release",
        "Consultation Finalized",
        "Opinion Number",
      ],
    },
  ];

  const pulseChecks = [
    "Follow Up with ET",
    "Follow Up with NAO",
    "Follow Up with ET and NAO",
    "Follow Up with Engagement Partner",
    "Follow Up with NAO Partner",
    "Escalate to Core NAO",
  ];

  return (

    <div className="bg-white rounded-2xl shadow-sm border p-5">

      {/* TOP */}
      <div className="flex justify-between items-center mb-6">

        <div>

          <h2 className="text-2xl font-bold text-[#1F2A44]">
            IntelliCue
          </h2>

          <p className="text-sm text-gray-500 mt-1">
            Consultation workflow and status tracking
          </p>

        </div>

        <div
          className="
            bg-green-100
            text-green-700
            px-4
            py-2
            rounded-full
            text-xs
            font-medium
          "
        >
          Consultation Initiated – Awaiting NAO Allocation
        </div>

      </div>

      {/* TEAM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">

        <div>

          <label className="text-sm font-medium text-gray-600">
            NAO Manager
          </label>

          <input
            type="text"
            className="
              w-full
              mt-1
              border
              rounded-lg
              px-3
              py-2
              text-sm
            "
          />

        </div>

        <div>

          <label className="text-sm font-medium text-gray-600">
            NAO Partner
          </label>

          <input
            type="text"
            className="
              w-full
              mt-1
              border
              rounded-lg
              px-3
              py-2
              text-sm
            "
          />

        </div>

      </div>

      {/* MAIN GRID */}
      {/* MAIN GRID */}
<div className="overflow-x-auto">

  <div className="grid grid-cols-3 gap-4 min-w-[1350px]">

    {/* LEFT SECTION */}
    <div className="border rounded-lg overflow-hidden bg-white">

      <div
        className="
          bg-[#98002E]
          text-white
          px-3
          py-2
          text-xs
          font-semibold
        "
      >
        Power Mode / Action Anchors / NAO Engine
      </div>

      <div className="divide-y">

        {cards.map((card, index) => (

          <div key={index} className="p-3">

            <div className="font-semibold text-xs mb-2">
              {card.title}
            </div>

            <div className="space-y-2">

              {card.items.map((item, idx) => (

                <div
                  key={idx}
                  className="
                    flex
                    justify-between
                    items-center
                    border
                    rounded-md
                    p-2
                    text-[11px]
                    bg-gray-50
                  "
                >

                  <span>{item}</span>

                  <button
                    className="
                      bg-[#F7E4EA]
                      text-[#98002E]
                      px-2
                      py-1
                      rounded
                      text-[10px]
                    "
                  >
                    Click Here
                  </button>

                </div>

              ))}

            </div>

          </div>

        ))}

      </div>

    </div>

    {/* MIDDLE SECTION */}
    <div className="flex flex-col gap-4">

      {/* PULSE CHECK */}
     <div className="border rounded-lg overflow-hidden bg-white">

        <div
          className="
            bg-[#98002E]
            text-white
            px-3
            py-2
            text-xs
            font-semibold
          "
        >
          Pulse Check / Signal Space
        </div>

        <div className="p-3 space-y-2">

          {pulseChecks.map((item, index) => (

            <div
              key={index}
              className="
                flex
                justify-between
                items-center
                border
                rounded-md
                p-2
                text-[11px]
                bg-gray-50
              "
            >

              <div className="flex items-center gap-2">

                <MessageSquare size={14} />

                {item}

              </div>

              <button
                className="
                  bg-[#E0F2FE]
                  text-[#0369A1]
                  px-2
                  py-1
                  rounded
                  text-[10px]
                "
              >
                Click Here
              </button>

            </div>

          ))}

        </div>

      </div>

      {/* PAUSE & RESET */}
      <div className="border rounded-lg overflow-hidden bg-white">

        <div
          className="
            bg-[#98002E]
            text-white
            px-3
            py-2
            text-xs
            font-semibold
          "
        >
          Pause and Reset
        </div>

        <div className="p-3 space-y-2">

          {["Rejected", "Withdrawn"].map((item, index) => (

            <div
              key={index}
              className="
                flex
                justify-between
                items-center
                border
                rounded-md
                p-2
                text-[11px]
                bg-gray-50
              "
            >

              <span>{item}</span>

              <button
                className="
                  bg-[#E0F2FE]
                  text-[#0369A1]
                  px-2
                  py-1
                  rounded
                  text-[10px]
                "
              >
                Click Here
              </button>

            </div>

          ))}

        </div>

      </div>

    </div>

    {/* RIGHT SECTION */}
    <div className="border rounded-lg overflow-hidden bg-white">

      <div
        className="
          bg-[#98002E]
          text-white
          px-3
          py-2
          text-xs
          font-semibold
        "
      >
        Status Timeline
      </div>

      <div className="h-[420px] bg-gray-50"></div>

    </div>

  </div>

</div>

      {/* INSTRUCTIONS */}
      <div className="border rounded-xl mt-6 p-4 bg-gray-50">

        <h3 className="font-semibold text-sm mb-3">
          Instructions
        </h3>

        <ol className="list-decimal pl-5 text-sm space-y-2 text-gray-700">

          <li>
            Populate the specific questions you are seeking guidance on.
          </li>

          <li>
            Add only questions requiring NAO input.
          </li>

          <li>
            Broad accounting standard questions are not accepted.
          </li>

          <li>
            Provide specific references wherever applicable.
          </li>

        </ol>

      </div>

    </div>

  );

}