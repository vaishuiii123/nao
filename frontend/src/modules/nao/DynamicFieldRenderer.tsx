type Props = {
  field: any;
};

import { logAuditTrail }
from "../../services/auditTrail";

export default function DynamicFieldRenderer({
  field,
}: Props) {

  /* =====================================
      FIELD CHANGE LOGGER
  ====================================== */

  const handleFieldChange = (
    e: any
  ) => {

    logAuditTrail(

      "FIELD_UPDATE",

      "NAO Consultation",

      `${field.label} updated`,

      "user@knav.com",

      field.label,

      e.target.value
    );
  };

  return (

    <div className="mb-4">

      {/* LABEL */}

      <label className="block text-sm font-medium mb-2">

        {field.label}

        {field.required && (

          <span className="text-red-500">
            *
          </span>

        )}

      </label>

      {/* =====================================
          TEXT
      ====================================== */}

      {field.type === "text" && (

        <input

          type="text"

          placeholder={
            field.placeholder
          }

          onChange={
            handleFieldChange
          }

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        />

      )}

      {/* =====================================
          TEXTAREA
      ====================================== */}

      {field.type === "textarea" && (

        <textarea

          placeholder={
            field.placeholder
          }

          onChange={
            handleFieldChange
          }

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
            min-h-[100px]
          "
        />

      )}

      {/* =====================================
          DROPDOWN
      ====================================== */}

      {field.type === "dropdown" && (

        <select

          onChange={
            handleFieldChange
          }

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        >

          <option>
            Select
          </option>

          {field.options?.map(

            (
              option: string,
              index: number
            ) => (

              <option key={index}>

                {option}

              </option>

            )
          )}

        </select>

      )}

      {/* =====================================
          DATE
      ====================================== */}

      {field.type === "date" && (

        <input

          type="date"

          onChange={
            handleFieldChange
          }

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        />

      )}

      {/* =====================================
          FILE
      ====================================== */}

      {field.type === "file" && (

        <input

          type="file"

          onChange={
            handleFieldChange
          }

          className="
            w-full
            border
            rounded-lg
            px-3
            py-2
          "
        />

      )}

    </div>

  );
}