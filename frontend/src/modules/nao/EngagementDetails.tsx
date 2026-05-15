import { useState } from "react";

type Props = {
  user: {
    name: string;
    email: string;
  };
};

export default function EngagementDetails({ user }: Props) {

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

  const [formData, setFormData] = useState({
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

  const [errors, setErrors] = useState({
    clientName: "",
    engagementPartner: "",
    engagementManager: "",
    otherTeamMembers: "",
  });

  const [files, setFiles] = useState<File[]>([]);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement |
      HTMLTextAreaElement |
      HTMLSelectElement
    >
  ) => {

    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });

  };

  const isValidEmailList = (emails: string) => {

    const emailArray = emails
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

  const validateForm = () => {

    let newErrors = {
      clientName: "",
      engagementPartner: "",
      engagementManager: "",
      otherTeamMembers: "",
    };

    let isValid = true;

    if (!formData.clientName.trim()) {
      newErrors.clientName =
        "Client Name is required";
      isValid = false;
    }

    if (
      !isValidEmailList(
        formData.engagementPartner
      )
    ) {
      newErrors.engagementPartner =
        "Enter valid emails separated by ;";
      isValid = false;
    }

    if (
      !isValidEmailList(
        formData.engagementManager
      )
    ) {
      newErrors.engagementManager =
        "Enter valid emails separated by ;";
      isValid = false;
    }

    if (
      !isValidEmailList(
        formData.otherTeamMembers
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

      <div className="grid grid-cols-2 gap-4">

        {/* Client Name */}
        <div className="col-span-2">

          <label className="form-label">
            Client Name
            <span className="required">*</span>
          </label>

          <input
            type="text"
            name="clientName"
            value={formData.clientName}
            onChange={handleChange}
            className="form-input"
          />

          {errors.clientName && (
            <p className="text-red-500 text-xs mt-1">
              {errors.clientName}
            </p>
          )}

        </div>

        {/* User */}
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

        {/* Engagement Partner */}
        <div>

          <label className="form-label">
            Email ID of Engagement Partner
            <span className="required">*</span>
          </label>

          <input
            type="text"
            name="engagementPartner"
            value={formData.engagementPartner}
            onChange={handleChange}
            placeholder="abc@knavus.com; xyz@knavus.com"
            className="form-input"
          />

          {errors.engagementPartner && (
            <p className="text-red-500 text-xs mt-1">
              {errors.engagementPartner}
            </p>
          )}

        </div>

        {/* Engagement Manager */}
        <div>

          <label className="form-label">
            Email ID of Engagement Manager
            <span className="required">*</span>
          </label>

          <input
            type="text"
            name="engagementManager"
            value={formData.engagementManager}
            onChange={handleChange}
            placeholder="manager@knavus.com; abc@knavus.com"
            className="form-input"
          />

          {errors.engagementManager && (
            <p className="text-red-500 text-xs mt-1">
              {errors.engagementManager}
            </p>
          )}

        </div>

        {/* Other Team Members */}
        <div className="col-span-2">

          <label className="form-label">
            Email ID of Other Team Members
            <span className="required">*</span>
          </label>

          <textarea
            name="otherTeamMembers"
            value={formData.otherTeamMembers}
            onChange={handleChange}
            placeholder="abc@knavus.com; xyz@knavus.com"
            className="form-textarea"
          />

          {errors.otherTeamMembers && (
            <p className="text-red-500 text-xs mt-1">
              {errors.otherTeamMembers}
            </p>
          )}

        </div>

        {/* Audit Type */}
        <div>

          <label className="form-label">
            Audit/Attest Engagement Type
          </label>

          <select
            name="auditType"
            value={formData.auditType}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">-- Select --</option>

            {auditTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

        {/* Listed Company */}
        <div>

          <label className="form-label">
            Listed Company/PCAOB/SPAC
          </label>

          <select
            name="listedCompany"
            value={formData.listedCompany}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">-- Select --</option>

            {listedCompanies.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

        {/* Subsidiary */}
        <div>

          <label className="form-label">
            Subsidiary of a Listed Co
          </label>

          <select
            name="subsidiary"
            value={formData.subsidiary}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">-- Select --</option>

            {subsidiaryOptions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

        {/* Audit Risk */}
        <div>

          <label className="form-label">
            Audit Risk Classification Type
          </label>

          <select
            name="auditRisk"
            value={formData.auditRisk}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">-- Select --</option>

            {auditRiskTypes.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

        {/* Review Done */}
        <div>

          <label className="form-label">
            Review of Form Done by Engagement Partner
          </label>

          <select
            name="reviewDone"
            value={formData.reviewDone}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">-- Select --</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>

          </select>

        </div>

        {/* Report Release Date */}
        <div>

          <label className="form-label">
            Audit/Attest Report Release Date
          </label>

          <input
            type="date"
            name="reportReleaseDate"
            value={formData.reportReleaseDate}
            onChange={handleChange}
            className="form-input"
          />

        </div>

        {/* Region */}
        <div>

          <label className="form-label">
            Region
          </label>

          <select
            name="region"
            value={formData.region}
            onChange={handleChange}
            className="form-select"
          >

            <option value="">-- Select --</option>

            {regions.map((item) => (
              <option key={item} value={item}>
                {item}
              </option>
            ))}

          </select>

        </div>

        {/* Engagement Year End */}
        <div>

          <label className="form-label">
            Engagement Year End
          </label>

          <input
            type="date"
            name="engagementYearEnd"
            value={formData.engagementYearEnd}
            onChange={handleChange}
            className="form-input"
          />

        </div>

        {/* Attachment */}
        <div className="col-span-2">

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
          <div className="mt-3 space-y-2">

            {files.map((file, index) => (

              <div
                key={index}
                className="flex items-center justify-between border rounded-md px-4 py-3 bg-gray-50"
              >

                <div className="flex items-center gap-4">

                  <span className="text-sm text-gray-700">
                    {file.name}
                  </span>
<button
  type="button"
  onClick={() => {

    const extension =
      file.name.split(".").pop()?.toLowerCase();

    const fileURL =
      URL.createObjectURL(file);

    // PDF Preview
    if (extension === "pdf") {

      window.open(fileURL, "_blank");

    }

    // Word / Excel Download
    else if (
      extension === "doc" ||
      extension === "docx" ||
      extension === "xls" ||
      extension === "xlsx"
    ) {

      const link =
        document.createElement("a");

      link.href = fileURL;
      link.download = file.name;

      document.body.appendChild(link);
      link.click();
      document.body.removeChild(link);

    }

    else {

      alert(
        "Preview not supported for this file type."
      );

    }

  }}
  className="text-blue-600 text-sm font-medium hover:underline"
>
  Preview
</button>

                </div>

                <button
                  type="button"
                  onClick={() => {

                    const updatedFiles =
                      files.filter(
                        (_, i) => i !== index
                      );

                    setFiles(updatedFiles);

                  }}
                  className="text-red-500 text-sm font-medium hover:text-red-700"
                >
                  Remove
                </button>

              </div>

            ))}

          </div>

        </div>

      </div>

      {/* Buttons */}
      <div className="flex justify-end gap-4 mt-8">

        <button className="bg-gray-200 px-6 py-2 rounded-lg">
          Save as Draft
        </button>

        <button
          type="button"
          className="bg-[#98002E] text-white px-8 py-3 rounded-lg"
          onClick={() => {

            if (validateForm()) {
              alert("Form Submitted Successfully");
            }

          }}
        >
          Next
        </button>

      </div>

    </div>
  );
}