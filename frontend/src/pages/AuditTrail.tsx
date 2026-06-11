import { useEffect, useState } from "react";

export default function AuditTrail() {

  const [logs, setLogs] =
    useState<any[]>([]);

  /* =====================================
      LOAD LOGS
  ====================================== */

  useEffect(() => {

    const storedLogs =
      JSON.parse(

        localStorage.getItem(
          "auditTrailLogs"
        ) || "[]"
      );

    setLogs(storedLogs);

  }, []);

  /* =====================================
      CLEAR LOGS
  ====================================== */

  const clearLogs = () => {

    localStorage.removeItem(
      "auditTrailLogs"
    );

    setLogs([]);
  };

  return (

    <div className="p-6">

      <div
        className="
          bg-white
          rounded-xl
          shadow-sm
          border
          p-6
        "
      >

        {/* HEADER */}

        <div
          className="
            flex
            justify-between
            items-center
            mb-6
          "
        >

          <h1
            className="
              text-3xl
              font-bold
            "
          >
            Audit Trail
          </h1>

          <button

            onClick={clearLogs}

            className="
              bg-red-600
              text-white
              px-4
              py-2
              rounded-lg
              hover:bg-red-700
            "
          >
            Clear Logs
          </button>

        </div>

        {/* TABLE */}

        <div className="overflow-auto">

          <table
            className="
              w-full
              border-collapse
            "
          >

            {/* TABLE HEAD */}

            <thead>

              <tr
                className="
                  bg-gray-100
                "
              >

                <th
                  className="
                    border
                    px-4
                    py-3
                    text-left
                  "
                >
                  Action
                </th>

                <th
                  className="
                    border
                    px-4
                    py-3
                    text-left
                  "
                >
                  Module
                </th>

                <th
                  className="
                    border
                    px-4
                    py-3
                    text-left
                  "
                >
                  Details
                </th>

                <th
                  className="
                    border
                    px-4
                    py-3
                    text-left
                  "
                >
                  User
                </th>

                <th
                  className="
                    border
                    px-4
                    py-3
                    text-left
                  "
                >
                  Time
                </th>

                <th
                  className="
                    border
                    px-4
                    py-3
                    text-left
                  "
                >
                  Field
                </th>

                <th
                  className="
                    border
                    px-4
                    py-3
                    text-left
                  "
                >
                  Value
                </th>

              </tr>

            </thead>

            {/* TABLE BODY */}

            <tbody>

              {logs.length === 0 && (

                <tr>

                  <td

                    colSpan={7}

                    className="
                      border
                      px-4
                      py-6
                      text-center
                    "
                  >
                    No audit logs found
                  </td>

                </tr>

              )}

              {logs.map((log) => (

                <tr key={log.id}>

                  {/* ACTION */}

                  <td
                    className="
                      border
                      px-4
                      py-3
                    "
                  >
                    {log.action}
                  </td>

                  {/* MODULE */}

                  <td
                    className="
                      border
                      px-4
                      py-3
                    "
                  >
                    {log.module}
                  </td>

                  {/* DETAILS */}

                  <td
                    className="
                      border
                      px-4
                      py-3
                    "
                  >
                    {log.details}
                  </td>

                  {/* USER */}

                  <td
                    className="
                      border
                      px-4
                      py-3
                    "
                  >
                    {log.userEmail}
                  </td>

                  {/* TIME */}

                  <td
                    className="
                      border
                      px-4
                      py-3
                    "
                  >

                    {new Date(
                      log.timestamp
                    ).toLocaleString()}

                  </td>

                  {/* FIELD */}

                  <td
                    className="
                      border
                      px-4
                      py-3
                    "
                  >
                    {log.fieldName || "-"}
                  </td>

                  {/* VALUE */}

                  <td
                    className="
                      border
                      px-4
                      py-3
                    "
                  >
                    {log.fieldValue || "-"}
                  </td>

                </tr>

              ))}

            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}