import { useEffect, useState } from "react";

import DynamicFieldRenderer from "../modules/nao/DynamicFieldRenderer.tsx";

export default function FieldCreation() {

  const [activeTab, setActiveTab] =
    useState("engagement");

  const [fields, setFields] =
    useState<any[]>([]);

  const [newField, setNewField] =
    useState({
      label: "",
      type: "text",
      placeholder: "",
      options: "",
      required: false,
    });

  const tabs = [
    {
      id: "engagement",
      label: "Engagement Details",
    },
    {
      id: "client",
      label: "Client Details and Background",
    },
    {
      id: "accounting",
      label: "Accounting Issue and Conclusion",
    },
    {
      id: "intellicue",
      label: "IntelliCue",
    },
  ];

  /* LOAD SAVED FIELDS */
  useEffect(() => {

    const savedFields =
      localStorage.getItem("dynamicFields");

    if (savedFields) {
      setFields(JSON.parse(savedFields));
    }

  }, []);

  /* SAVE FIELD */
  const handleAddField = () => {

    if (!newField.label) {
      alert("Please enter field label");
      return;
    }

    const field = {
      id: Date.now(),
      tab: activeTab,
      label: newField.label,
      type: newField.type,
      placeholder: newField.placeholder,
      required: newField.required,

      options:
        newField.type === "dropdown"
          ? newField.options
              .split(",")
              .map((x) => x.trim())
          : [],
    };

    const updatedFields = [
      ...fields,
      field,
    ];

    setFields(updatedFields);

    localStorage.setItem(
      "dynamicFields",
      JSON.stringify(updatedFields)
    );

    /* RESET FORM */
    setNewField({
      label: "",
      type: "text",
      placeholder: "",
      options: "",
      required: false,
    });

  };

  /* DELETE FIELD */
  const handleDeleteField = (id: number) => {

    const updatedFields =
      fields.filter((x) => x.id !== id);

    setFields(updatedFields);

    localStorage.setItem(
      "dynamicFields",
      JSON.stringify(updatedFields)
    );

  };

  return (

    <div className="bg-white rounded-2xl shadow-sm border p-6 min-h-[85vh]">

      {/* HEADING */}
      <div className="mb-8">

        <h2 className="text-3xl font-bold text-[#1F2A44]">
          Field Creation
        </h2>

        <p className="text-sm text-gray-500 mt-2">
          Create dynamic fields for NAO Consultation tabs
        </p>

      </div>

      {/* TABS */}
      <div className="flex gap-4 mb-8 flex-wrap">

        {tabs.map((tab) => (

          <button
            key={tab.id}
            onClick={() =>
              setActiveTab(tab.id)
            }
            className={`
              px-5
              py-2
              rounded-xl
              text-sm
              font-medium
              transition-all

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

      {/* PREVIEW + FORM */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* LEFT SIDE */}
        <div className="border rounded-2xl p-5 bg-gray-50">

          <h3 className="font-semibold text-lg mb-5">
            Form Preview
          </h3>

          <div className="space-y-6 max-h-[700px] overflow-y-auto pr-2">

            {fields
              .filter((x) => x.tab === activeTab)
              .map((field) => (

              <div
                key={field.id}
                className="
                  bg-white
                  border
                  rounded-xl
                  p-4
                  relative
                "
              >

                {/* DELETE BUTTON */}
                <button
                  onClick={() =>
                    handleDeleteField(field.id)
                  }
                  className="
                    absolute
                    top-3
                    right-3
                    text-red-500
                    text-xs
                    font-medium
                  "
                >
                  Delete
                </button>

                {/* LABEL */}
                <label className="block mb-3 font-medium">

                  {field.label}

                  {field.required && (
                    <span className="text-red-500 ml-1">
                      *
                    </span>
                  )}

                </label>

                {/* FIELD */}
                <DynamicFieldRenderer
                  field={field}
                />

              </div>

            ))}

            {fields.filter(
              (x) => x.tab === activeTab
            ).length === 0 && (

              <div className="text-sm text-gray-500">

                No fields added yet for this tab.

              </div>

            )}

          </div>

        </div>

        {/* RIGHT SIDE */}
        <div className="border rounded-2xl p-5">

          <h3 className="font-semibold text-lg mb-5">
            Add New Field
          </h3>

          <div className="space-y-5">

            {/* FIELD LABEL */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Field Label
              </label>

              <input
                type="text"
                value={newField.label}
                onChange={(e) =>
                  setNewField({
                    ...newField,
                    label: e.target.value,
                  })
                }
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                "
                placeholder="Enter field label"
              />

            </div>

            {/* FIELD TYPE */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Field Type
              </label>

              <select
                value={newField.type}
                onChange={(e) =>
                  setNewField({
                    ...newField,
                    type: e.target.value,
                  })
                }
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                "
              >

                <option value="text">
                  Text
                </option>

                <option value="textarea">
                  Textarea
                </option>

                <option value="dropdown">
                  Dropdown
                </option>

                <option value="date">
                  Date
                </option>

                <option value="file">
                  File Upload
                </option>

                <option value="editor">
                  Rich Text Editor
                </option>

              </select>

            </div>

            {/* PLACEHOLDER */}
            <div>

              <label className="block text-sm font-medium mb-2">
                Placeholder
              </label>

              <input
                type="text"
                value={newField.placeholder}
                onChange={(e) =>
                  setNewField({
                    ...newField,
                    placeholder: e.target.value,
                  })
                }
                className="
                  w-full
                  border
                  rounded-xl
                  px-4
                  py-3
                "
                placeholder="Enter placeholder"
              />

            </div>

            {/* DROPDOWN OPTIONS */}
            {newField.type === "dropdown" && (

              <div>

                <label className="block text-sm font-medium mb-2">
                  Dropdown Options
                </label>

                <input
                  type="text"
                  value={newField.options}
                  onChange={(e) =>
                    setNewField({
                      ...newField,
                      options: e.target.value,
                    })
                  }
                  className="
                    w-full
                    border
                    rounded-xl
                    px-4
                    py-3
                  "
                  placeholder="India, US, UK"
                />

              </div>

            )}

            {/* REQUIRED */}
            <div className="flex items-center gap-3">

              <input
                type="checkbox"
                checked={newField.required}
                onChange={(e) =>
                  setNewField({
                    ...newField,
                    required: e.target.checked,
                  })
                }
              />

              <label className="text-sm font-medium">
                Required Field
              </label>

            </div>

            {/* BUTTON */}
            <button
              onClick={handleAddField}
              className="
                w-full
                bg-[#98002E]
                text-white
                py-3
                rounded-xl
                font-medium
                hover:opacity-90
              "
            >
              Add Field
            </button>

          </div>

        </div>

      </div>

    </div>

  );
}