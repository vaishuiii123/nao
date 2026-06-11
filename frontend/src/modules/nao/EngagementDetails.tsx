import { useEffect, useState } from "react";

//import DynamicFieldRenderer from "./DynamicFieldRenderer";
import DynamicFieldRenderer from "./DynamicFieldRenderer";
type Props = {
  user: {
    name: string;
    email: string;
  };

  formData: any;

  setFormData: any;

  onNext: () => void;
};

export default function EngagementDetails({

  user,

  formData,

  setFormData,

  onNext,

}: Props) {

  const [dynamicFields, setDynamicFields] =
    useState<any[]>([]);

  const [files, setFiles] =
    useState<File[]>([]);

  const [errors, setErrors] =
    useState({

      clientName: "",

      engagementPartner: "",

      engagementManager: "",

      otherTeamMembers: "",
    });

  /* =========================================
      DROPDOWNS
  ========================================== */

  const auditTypes = [
    "Statutory Audit",
    "Internal Audit",
    "Tax Audit",
    "Review Engagement",
  ];

  const listedCompanies = [
    "Listed",
    "PCAOB",
    "SPAC",
    "Private",
  ];

  const auditRiskTypes = [
    "Low",
    "Medium",
    "High",
  ];

  const regions = [
    "India",
    "US",
    "UK",
    "Europe",
  ];

  const subsidiaryOptions = [
    "Yes",
    "No",
  ];

   const ReviewForm = [
    "Yes",
    "No",
  ];

  /* =========================================
      HANDLE CHANGE
  ========================================== */

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({

      ...formData,

      [e.target.name]:
        e.target.value,
    });
  };

  /* =========================================
      LOAD DYNAMIC FIELDS
  ========================================== */

  useEffect(() => {

    const savedFields =
      localStorage.getItem(
        "dynamicFields"
      );

    if (savedFields) {

      setDynamicFields(
        JSON.parse(savedFields)
      );
    }

  }, []);

  /* =========================================
      EMAIL VALIDATION
  ========================================== */

  const isValidEmailList = (
    emails: string
  ) => {

    const emailArray =
      emails
        .split(";")
        .map((e) => e.trim())
        .filter((e) => e !== "");

    const emailRegex =
      /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    return (
      emailArray.length > 0 &&
      emailArray.every((email) =>
        emailRegex.test(email)
      )
    );
  };

  /* =========================================
      VALIDATE
  ========================================== */

  const validateForm = () => {

    let newErrors = {

      clientName: "",

      engagementPartner: "",

      engagementManager: "",

      otherTeamMembers: "",
    };

    let isValid = true;

    if (
      !formData.clientName?.trim()
    ) {

      newErrors.clientName =
        "Client Name is required";

      isValid = false;
    }

    if (
      !isValidEmailList(
        formData.engagementPartner || ""
      )
    ) {

      newErrors.engagementPartner =
        "Enter valid emails separated by ;";

      isValid = false;
    }

    if (
      !isValidEmailList(
        formData.engagementManager || ""
      )
    ) {

      newErrors.engagementManager =
        "Enter valid emails separated by ;";

      isValid = false;
    }

    if (
      !isValidEmailList(
        formData.otherTeamMembers || ""
      )
    ) {

      newErrors.otherTeamMembers =
        "Enter valid emails separated by ;";

      isValid = false;
    }

    setErrors(newErrors);

    return isValid;
  };

  return (

    <div className="bg-white rounded-xl shadow-sm border p-5">

      <h2 className="text-2xl font-bold text-gray-800 mb-5">
        NAO Consultation
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">

        {/* CLIENT NAME */}

        <div className="col-span-2">

          <label className="form-label">

            Client Name
            <span className="required">*</span>

          </label>

          <input
            type="text"
            name="clientName"
            value={formData.clientName || ""}
            onChange={handleChange}
            className="form-input"
          />

          {errors.clientName && (

            <p className="text-red-500 text-xs mt-1">
              {errors.clientName}
            </p>

          )}

        </div>

        {/* USER */}

        <div className="col-span-2">

          <label className="form-label">
            User Submitting the form
          </label>

          <input
            type="text"
            value={user.email}
            disabled
            className="form-input form-input-disabled"
          />

        </div>

        {/* ENGAGEMENT PARTNER */}
        <div>

          <label className="form-label">

            Email ID of Engagement Partner
            <span className="required">*</span>

          </label>

          <input
            type="text"
            name="engagementPartner"
            value={
              formData.engagementPartner || ""
            }
            onChange={handleChange}
            placeholder="abc@knavus.com; xyz@knavus.com"
            className="form-input"
          />

        </div>

        {/* ENGAGEMENT MANAGER */}
        <div>

          <label className="form-label">

            Email ID of Engagement Manager
            <span className="required">*</span>

          </label>

          <input
            type="text"
            name="engagementManager"
            value={
              formData.engagementManager || ""
            }
            onChange={handleChange}
            className="form-input"
          />

        </div>

        {/* OTHER TEAM MEMBERS */}
        <div className="col-span-2">

          <label className="form-label">

            Email ID of Other Team Members
            <span className="required">*</span>

          </label>

          <textarea
            name="otherTeamMembers"
            value={
              formData.otherTeamMembers || ""
            }
            onChange={handleChange}
            className="form-textarea"
            rows={4}
          />

        </div>

        {/* Audit/Attest Engagement Type */}
        <div>

          <label className="form-label">
            Audit/Attest Engagement Type
          </label>

          <select
            name="auditType"
            value={formData.auditType || ""}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              -- Select --
            </option>

            {auditTypes.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

        {/* Listed Company/PCAOB/SPAC */}
        <div>

          <label className="form-label">
            Listed Company/PCAOB/SPAC
          </label>

          <select
            name="listedCompany"
            value={
              formData.listedCompany || ""
            }
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              -- Select --
            </option>

            {listedCompanies.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

        {/* Subsidiary of a Listed Co */}
        <div>

          <label className="form-label">
            Subsidiary of a Listed Co
          </label>

          <select
            name="subsidiaryOptions"
            value={
              formData.subsidiaryOptions || ""
            }
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              -- Select --
            </option>

            {subsidiaryOptions.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

       {/* Audit Risk Classification Type */}
        <div>
          <label className="form-label">
            Audit Risk Classification Type
          </label>

          <select
            name="auditRiskType"
            value={formData.auditRiskType || ""}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              -- Select --
            </option>

            {auditRiskTypes.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

         {/* Review of Form Done by Engagement Partner – (Mandatory) */}
        <div>

          <label className="form-label">
           Review of Form Done by Engagement Partner – (Mandatory)
          </label>

          <select
            name="ReviewForm"
            value={
              formData.ReviewForm || ""
            }
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              -- Select --
            </option>

            {ReviewForm.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>
            ))}
          </select>
        </div>

       {/* Audit Risk Classification Type */}
        <div>

          <label className="form-label">
            Audit Risk Classification Type
          </label>

          <select
            name="auditRiskType"
            value={formData.auditRiskType || ""}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">
              -- Select --
            </option>

            {auditRiskTypes.map((item) => (

              <option
                key={item}
                value={item}
              >
                {item}
              </option>

            ))}

          </select>

        </div>

      </div>
     
    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
      
      {/* =========================================
    Audit/Attest Report Release Date
    ========================================== */}
      <div>
        <label className="form-label">
          Audit/Attest Report Release Date
          <span className="required">*</span>
        </label>

        <input
          type="date"
          name="engagementStartDate"
          value={
            formData.engagementStartDate || ""
          }
          onChange={handleChange}
          className="form-input"
        />

      </div>

  {/* Project Code */}
  <div>
          <label className="form-label">
            Project Code
            <span className="required">*</span>
          </label>

          <input
            type="text"
            name="projectCode"
            value={
              formData.projectCode || ""
            }
            onChange={handleChange}
            className="form-input"
          />

  </div>

</div>

      {/* =========================================
          ATTACHMENT
      ========================================== */}

      <div className="mt-6">

        <label className="form-label">
          Attachment
        </label>

        <input
          type="file"
          multiple
          accept=".doc,.docx,.xls,.xlsx,.pdf"
          onChange={(e) => {

            if (!e.target.files) return;

            const selectedFiles =
              Array.from(e.target.files);

            setFiles((prev) => [
              ...prev,
              ...selectedFiles,
            ]);

          }}
          className="form-input"
        />

      </div>

      {/* FILES */}

      <div className="mt-4 space-y-2">

        {files.map((file, index) => (

          <div
            key={index}
            className="
              flex
              items-center
              justify-between
              border
              rounded-md
              px-4
              py-3
              bg-gray-50
            "
          >

            <span className="text-sm">
              {file.name}
            </span>

            <button
              type="button"
              onClick={() => {

                const updated =
                  files.filter(
                    (_, i) =>
                      i !== index
                  );

                setFiles(updated);

              }}
              className="
                text-red-500
                text-sm
              "
            >
              Remove
            </button>

          </div>

        ))}

      </div>

      {/* =========================================
          DYNAMIC FIELDS
      ========================================== */}

      {dynamicFields
        .filter(
          (field) =>
            field.tab === "engagement"
        )
        .map((field) => (

          <DynamicFieldRenderer
            key={field.id}
            field={field}
          />

      ))}

      {/* =========================================
          BUTTONS
      ========================================== */}

      <div className="flex justify-end gap-4 mt-8">

        <button
          className="
            bg-gray-200
            px-6
            py-2
            rounded-lg
          "
        >
          Save as Draft
        </button>

        <button

          onClick={() => {

            if (
              validateForm()
            ) {

              onNext();
            }
          }}

          className="
            bg-[#98002E]
            text-white
            px-6
            py-3
            rounded-xl
            font-medium
          "
        >
          Next
        </button>

      </div>

    </div>
  );
}