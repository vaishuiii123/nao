import { useEffect, useState } from "react";
import * as XLSX from "xlsx";

type TeamMemberType = {
  empId: string;
  name: string;
  email: string;
  designation: string;
  naoTeamDesignation: string;
};

export default function TeamMember() {

  const [members, setMembers] = useState<TeamMemberType[]>([]);

  useEffect(() => {

    const loadExcel = async () => {

      try {

        const response = await fetch("./NAO_Members.xlsx");

        if (!response.ok) {
          throw new Error("Excel file not found");
        }

        const arrayBuffer =
          await response.arrayBuffer();

        const workbook = XLSX.read(
          arrayBuffer,
          {
            type: "array",
          }
        );

        const sheetName =
          workbook.SheetNames[0];

        const worksheet =
          workbook.Sheets[sheetName];

        const jsonData: any[][] =
          XLSX.utils.sheet_to_json(
            worksheet,
            {
              header: 1,
            }
          );

        console.log(jsonData);

        const rows = jsonData.slice(1);

        const formattedData = rows.map(
          (row) => ({
            empId: row[0] || "",
            name: row[1] || "",
            email: row[2] || "",
            designation: row[3] || "",
            naoTeamDesignation:
              row[4] || "",
          })
        );

        setMembers(formattedData);

      } catch (error) {

        console.error(
          "Error loading Excel:",
          error
        );

      }

    };

    loadExcel();

  }, []);

  return (

    <div className="bg-white rounded-2xl shadow-sm border p-6">

      <h2 className="text-4xl font-bold text-[#1F2A44] mb-2">
        Team Members
      </h2>

      <p className="text-gray-500 mb-8">
        Team member data fetched from Excel
      </p>

      <div className="overflow-x-auto">

        <table className="w-full border-collapse">

          <thead>

            <tr className="bg-[#98002E] text-white">

              <th className="p-4 text-left">
                Employee ID
              </th>

              <th className="p-4 text-left">
                Name
              </th>

              <th className="p-4 text-left">
                Email
              </th>

              <th className="p-4 text-left">
                Designation
              </th>

              <th className="p-4 text-left">
                NAO Team Designation
              </th>

            </tr>

          </thead>

          <tbody>

            {members.map((member, index) => (

              <tr
                key={index}
                className="border-b"
              >

                <td className="p-4">
                  {member.empId}
                </td>

                <td className="p-4">
                  {member.name}
                </td>

                <td className="p-4">
                  {member.email}
                </td>

                <td className="p-4">
                  {member.designation}
                </td>

                <td className="p-4">
                  {member.naoTeamDesignation}
                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

    </div>

  );
}