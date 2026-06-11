import { useState } from "react";

export default function EmailTemplate() {

  const [templates, setTemplates] = useState([

    {
      title: "Consultation Initiated – Awaiting NAO Allocation",
      body: `Dear Team,

A new consultation has just been submitted and is now awaiting allocation.
You will be notified once the NAO Manager and Partner are assigned.

Cheers,
NAOPilot`,
    },

    {
      title: "Allocated – Work in Progress",
      body: `Dear All,

This NAO consultation has been assigned to an NAO Manager and Partner.
Assigned reviewers may now connect with the engagement team to begin discussions.

Engagement Team is requested to coordinate with the assigned NAO reviewers on a timely basis to avoid any delays.

Please Note:

1. Engagement teams are responsible for sharing timelines with the assigned NAO Manager and Partner, and for staying in sync through regular coordination and follow-ups. Just a heads-up: Core NAO won’t be able to step in if there are any issues caused by lack of coordination between the engagement and NAO teams.

2. If a consultation is missing key details or analysis, NAO may reject the consultation. We encourage everyone to include enough facts and thoughtful analysis to meet our quality standards—this helps move things along more smoothly and quickly!

3. Please make sure the consultation questions are clearly defined and focused—not too broad or open-ended. NAO’s review and conclusion will be based strictly on the specific questions raised. If any issues later arise due to implications of other underlying questions or standards that weren’t explicitly addressed, NAO won’t be responsible for those. Clear and precise questions help us give you the most relevant and helpful guidance.

4. The typical turnaround time for consultations is 5 working days. To meet this, both the engagement and NAO teams should stay in touch and coordinate well throughout the process.

5. Both teams should check in with each other regularly and reasonably. To make this easier, we’ve added follow-up buttons you can use. Just a reminder—consultations that go quiet for too long may automatically escalate by the system.

6. NAO teams are encouraged to maintain quality in every memo. Since these get uploaded to the intranet and are accessible firmwide, it’s important they reflect the professionalism and effort we put in. Gaps in quality can sometimes have a ripple effects.

7. If there are any concerns, we suggest first reaching out to the relevant Engagement or NAO Partner. If things still aren’t resolved, feel free to escalate your concerns to the Core NAO team.

Cheers,
NAOpilot`,
    },

    {
      title: "Re-allocated to New NAO Manager/Partner",
      body: `Dear All,

This consultation has been re-allocated to a new NAO Manager/ Partner.
Assigned reviewers may now connect with the engagement team to begin discussions.
Engagement Team is requested to coordinate with the assigned NAO reviewers on a timely basis to avoid any delays.

Teams Please Note:

1. Engagement teams are responsible for sharing timelines with the assigned NAO Manager and Partner, and for staying in sync through regular coordination and follow-ups. Just a heads-up: Core NAO won’t be able to step in if there are any issues caused by lack of coordination between the engagement and NAO teams.

2. If a consultation is missing key details or analysis, NAO may reject the consultation. We encourage everyone to include enough facts and thoughtful analysis to meet our quality standards—this helps move things along more smoothly and quickly!

3. Please make sure the consultation questions are clearly defined and focused—not too broad or open-ended. NAO’s review and conclusion will be based strictly on the specific questions raised. If any issues later arise due to implications of other underlying questions or standards that weren’t explicitly addressed, NAO won’t be responsible for those. Clear and precise questions help us give you the most relevant and helpful guidance.

4. The typical turnaround time for consultations is 5 working days. To meet this, both the engagement and NAO teams should stay in touch and coordinate well throughout the process.

5. Both teams should check in with each other regularly and reasonably. To make this easier, we’ve added follow-up buttons you can use. Just a reminder—consultations that go quiet for too long may automatically escalate by the system.

6. NAO teams are encouraged to maintain quality in every memo. Since these get uploaded to the intranet and are accessible firmwide, it’s important they reflect the professionalism and effort we put in. Gaps in quality can sometimes have a ripple effects.

7. If there are any concerns, we suggest first reaching out to the relevant Engagement or NAO Partner. If things still aren’t resolved, feel free to escalate your concerns to the Core NAO team.

Cheers,
NAOPilot`,
    },

    {
      title: "Returned to ET – Key Details Required / Queries Raised",
      body: `Dear All,

NAO has reviewed the consultation and noted a few points for ET inputs.
ET is requested to review the feedback, address the points raised, and update the form accordingly. 
Reach out to NAO manager or Partner, if required.
Edit access has been restored for the ET.

Regards,
NAOPilot`,
    },

    {
      title: "Submitted to NAO – Queries Addressed",
      body: `Dear All,

Engagement Team has responded to NAO queries.
NAO team is requested to review the responses and reach out to ET for further clarifications, if any.

Regards,
NAOPilot`,
    },

    {
      title: "Sent for NAO Partner Review",
      body: `Dear [NAO Partner]

The consultation has been reviewed by the NAO Manager, and Section 4 has been updated.
It’s now ready for your review.
Please share your comments and  connect with the NAO Manager if you’d like to discuss anything.

Regards,
NAOPilot`,
    },

    {
      title: "Inputs shared by NAO Partner",
      body: `Dear [NAO Manager]

The NAO Partner has reviewed the consultation.
Please take a look and check if there are any comments that require resolution.
Please connect with the NAO Partner or engagement team if needed.

Regards,
NAOPilot`,
    },

    {
      title: "Draft Sent to ET for Clearance",
      body: `Dear All,

NAO has completed Section 4 containing NAO Analysis and Conclusion.
ET is requested to review the draft and share clearance or comments.
Reach out to NAO manager or Partner, if required.
ET now has edit access.

Regards,
NAOPilot`,
    },

    {
      title: "Submitted to NAO – For Release",
      body: `Dear All,

The consultation  has been cleared by ET and is now ready for finalization.
Once NAO team finalizes it on the portal—the system will  assign an opinion number.

Regards,
NAOPilot.`,
    },

    {
      title: "Consultation Finalized",
      body: `Dear All,

The consultation is now finalized and an opinion number has been assigned.
Thank you for your collaboration throughout the process.

Regards,
NAOPilot`,
    },

    {
      title: "Rejected",
      body: `Dear All,

The consultation has been rejected by NAO due to lack of key details and analysis.
Engagement Team is requested to revisit the form, make necessary changes, and resubmit. Edit access is now restored.
Reach out to the NAO team for support if needed.

Regards,
NAOPilot`,
    },

    {
      title: "Withdrawn",
      body: `Dear All,

Please note that this consultation has been withdrawn at the request of the engagement team. As such, no further action is required.
Thank you for your collaboration throughout the process.

Regards,
NAOPilot`,
    },

    {
      title: "Follow Up with ET",
      body: `Dear All,

NAO is currently awaiting ET inputs to help move the consultation forward.
ET is requested to coordinate with the assigned NAO reviewers or respond directly so we can keep things moving.

Regards,
NAOpilot`,
    },

    {
      title: "Follow Up with NAO",
      body: `Dear All,

Just a heads-up that the Engagement Team is waiting for NAO reviewers to move the consultation forward.
NAO reviewers are  requested to provide a quick response that would help keep things flowing !

Regards,
NAOpilot`,
    },

    {
      title: "Follow Up with ET and NAO",
      body: `Dear ET and NAO Teams,

Please provide an update on status of the consultation.
We haven’t seen any updates from either side for a while, and we’re hoping to keep things moving forward.
 Please let us know where the consultation is stuck so we can address issues, if any.

Regards,
NAOpilot`,
    },

    {
      title: "Escalate to Engagement Partner",
      body: `Dear [Engagement Partner],

We have been following up with the Engagement Manager/Team regarding the discussion and status of the consultation, but have not received any response in the past 48 hours (two working days), despite three prior follow-ups.
Requesting your support in looking into this.

Regards,
NAOpilot`,
    },

    {
      title: "Escalate to NAO Partner",
      body: `Dear [NAO Partner],

We have been following up with the NAO Manager regarding the discussion and status of the consultation, but have not received any response in the past 48 hours (two working days), despite three prior follow-ups.
Requesting your support in looking into this.

Regards,
NAOpilot`,
    },

    {
      title: "Escalate to NAO",
      body: `Dear NAO Team,

We’d like to escalate this consultation as it hasn’t progressed despite our best efforts, internal coordination and partner escalations.
We’d appreciate your involvement to help move things forward and bring this to a close.
Thanks in advance for your support.`,
    },

  ]);

  const handleChange = (
    index: number,
    value: string
  ) => {

    const updatedTemplates = [...templates];

    updatedTemplates[index].body = value;

    setTemplates(updatedTemplates);

  };

  return (

    <div className="bg-white rounded-xl shadow-sm border p-4">

      {/* HEADER */}
      <div className="mb-4">

        <h2 className="text-2xl font-bold text-[#1F2A44]">
          Email Templates
        </h2>

        <p className="text-sm text-gray-500 mt-1">
          Manage consultation workflow email templates
        </p>

      </div>

      {/* TABLE */}
      <div className="overflow-auto border rounded-xl">

        <table className="w-full border-collapse min-w-[900px]">

          <thead>

            <tr className="bg-[#98002E] text-white">

              <th
                className="
                  border
                  p-2
                  text-left
                  w-[220px]
                  text-sm
                "
              >
                Template Name
              </th>

              <th
                className="
                  border
                  p-2
                  text-left
                  text-sm
                "
              >
                Email Body
              </th>

            </tr>

          </thead>

          <tbody>

            {templates.map((template, index) => (

              <tr
                key={index}
                className="align-top"
              >

                {/* TEMPLATE NAME */}
                <td
                  className="
                    border
                    p-2
                    font-medium
                    text-xs
                    bg-gray-50
                    w-[220px]
                  "
                >
                  {template.title}
                </td>

                {/* EMAIL BODY */}
                <td className="border p-2">

                  <textarea
                      value={template.body}
                      readOnly
                      className="
                      w-full
                      min-h-[140px]
                      border
                      rounded-md
                      p-2
                      text-[12px]
                      leading-4
                      resize-y
                      bg-gray-100
                     text-gray-600
                      cursor-not-allowed
                      focus:outline-none
                    "
                  />

                </td>

              </tr>

            ))}

          </tbody>

        </table>

      </div>

      {/* BUTTON */}
      <div className="flex justify-end mt-4">

      </div>

    </div>

  );

}