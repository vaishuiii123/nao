import { Editor } from "@tinymce/tinymce-react";

type Props = {
  onPrevious: () => void;
  onNext: () => void;
};

const editorConfig = {
  height: 220,

  min_height: 180,

  resize: true,

  menubar: false,

  plugins: [
    "advlist",
    "autolink",
    "lists",
    "link",
    "image",
    "table",
    "code",
    "fullscreen",
    "textcolor",
  ],

  toolbar:
    "undo redo | " +
    "bold italic underline | " +
    "forecolor backcolor | " +
    "alignleft aligncenter alignright | " +
    "bullist numlist | " +
    "image table",

  branding: false,
  promotion: false,
};

export default function ClientDetailsBackground({
  onPrevious,
  onNext,
}: Props) {



  return (

    <div className="bg-white rounded-2xl shadow-sm border p-5 min-h-[70vh]">

      {/* HEADING */}
      <h2 className="text-2xl font-bold text-[#1F2A44] mb-6">
        Client Details and Background
      </h2>

      {/* INSTRUCTIONS */}
      <div className="mb-8">

        <p className="font-semibold mb-3 text-base">
          Instructions:
        </p>

        <ul className="list-disc pl-6 text-sm text-gray-700 space-y-3 leading-6">

          <li>
            Detailed background on key financial information and
            critical details of the audit arrangement.
          </li>

          <li>
            General details should be documented for engagement review.
          </li>

          <li>
            Please provide all required supporting information.
          </li>

          <li>
            Users can type, paste screenshots, insert images,
            attach references, and format content.
          </li>

        </ul>

      </div>

      {/* QUESTION SECTION */}
      {/* QUESTION 1 a */}
      <div className="border rounded-2xl overflow-hidden mb-10">

        {/* QUESTION HEADER */}
        <div className="bg-gray-100 px-5 py-4 border-b">

          <h3 className="font- text-sm leading-6">

            1.	(a) Please summarize in the section below the name of the client 
            (you can prefer to keep the name confidential/ anonymous) and the brief summary of the nature of 
            business/ operations to enable the National Accounting office to understand the nature of operations.<br/>
            <b> Do not provide any information or details to the National Accounting 
              Office team which are confidential in nature, and which could violate laws in relation to
               Unpublished price sensitive information or compliance with Insider Trading regulations.
               Please provide brief details on turnover, profit before tax from continuing operations, 
               Total assets, total current assets, and net worth details (you can provide this rounded 
               off to nearest thousands or million).</b>


          </h3>

        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="overflow-x-auto">

          {/* WIDE CONTENT */}
          <div className="min-w-[1600px] grid grid-cols-3">

            {/* GUIDANCE */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                Guidance
              </h4>

              <Editor
  tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
  init={editorConfig}
/>

            </div>

            {/* ET ANALYSIS */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                ET Analysis and Conclusion
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* MANAGEMENT RESPONSE */}
            <div className="p-5">

              <h4 className="font-semibold text-sm mb-4">
                Management Response
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

          </div>

        </div>

      </div>

      {/* QUESTION 1 b */}
       <div className="border rounded-2xl overflow-hidden mb-10">

        {/* QUESTION HEADER */}
        <div className="bg-gray-100 px-5 py-4 border-b">

          <h3 className="font- text-sm leading-6">

            1.	(b) Please summarize in the section below a background of the accounting/ auditing issue
             which is on hand (e.g., Revenue recognition – principal vs agent; impairment of goodwill). 
             Please explain the facts of the case in detail for the National Accounting office to understand 
             the same. Do not attach agreements or large documents in this section, please summarize all relevant 
             facts of the case which are necessary for the NAO to provide an opinion.<br/>
            <b> Please ensure that this section is reviewed and approved by the Engagement Audit Manager and 
              Engagement Audit Partner.  </b>


          </h3>

        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="overflow-x-auto">

          {/* WIDE CONTENT */}
          <div className="min-w-[1600px] grid grid-cols-3">

            {/* GUIDANCE */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                Guidance
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* ET ANALYSIS */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                ET Analysis and Conclusion
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* MANAGEMENT RESPONSE */}
            <div className="p-5">

              <h4 className="font-semibold text-sm mb-4">
                Management Response
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

          </div>

        </div>

      </div>

      {/* QUESTION 2*/}
       <div className="border rounded-2xl overflow-hidden mb-10">

        {/* QUESTION HEADER */}
        <div className="bg-gray-100 px-5 py-4 border-b">

          <h3 className="font- text-sm leading-6">

            2.	Generally Accepted Accounting Standards (GAAP)/ GAAS literature which provides guidance in 
            relation to the issue on hand. Please reproduce in the section below the GAAP/ GAAS literature 
            which is relevant. This should be a verbatim reproduction and the analysis of the facts of the 
            case with the relevant literature should be done in section 3 of the attached memo. 
            Engagement teams should make a reference to the technical literature which is relevant to their 
            GAAP reporting (e.g., Singapore team should refer to Singapore IFRS, UK team should refer to FRS, 
            in case the country does not have relevant literature on a specific topic which is on hand, 
            then the engagement team should make a reference and reproduce GAAP which has such literature – e.g., 
            IFRS, US GAAP) Please do not attach the guidance as a whole in Word or PDF..<br/>
            <b> Do not include the views of Management in this section. </b>


          </h3>

        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="overflow-x-auto">

          {/* WIDE CONTENT */}
          <div className="min-w-[1600px] grid grid-cols-3">

            {/* GUIDANCE */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                Guidance
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* ET ANALYSIS */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                ET Analysis and Conclusion
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* MANAGEMENT RESPONSE */}
            <div className="p-5">

              <h4 className="font-semibold text-sm mb-4">
                Management Response
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

          </div>

        </div>

      </div>

      {/* QUESTION 3 a*/}
       <div className="border rounded-2xl overflow-hidden mb-10">

        {/* QUESTION HEADER */}
        <div className="bg-gray-100 px-5 py-4 border-b">

          <h3 className="font- text-sm leading-6">

            3. (a) Audit engagement team analysis of the GAAP/ GAAS issue and preliminary views of the audit 
            engagement team on the matter. Do not include the views of Management in this section.
             <u>It is important for the National Accounting Office to have the preliminary views of the 
             engagement manager and engagement partner so do not restrict yourself to only analyzing the 
             issue without providing a formal preliminary view.</u><br/>
            <b> Please ensure that this section is reviewed and approved by the Engagement Audit Manager 
              and Engagement Audit Partner.  </b>


          </h3>

        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="overflow-x-auto">

          {/* WIDE CONTENT */}
          <div className="min-w-[1600px] grid grid-cols-3">

            {/* GUIDANCE */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                Guidance
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* ET ANALYSIS */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                ET Analysis and Conclusion
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* MANAGEMENT RESPONSE */}
            <div className="p-5">

              <h4 className="font-semibold text-sm mb-4">
                Management Response
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

          </div>

        </div>

      </div>

 {/* QUESTION 4*/}
       <div className="border rounded-2xl overflow-hidden mb-10">

        {/* QUESTION HEADER */}
        <div className="bg-gray-100 px-5 py-4 border-b">

          <h3 className="font- text-sm leading-6">

            3. (b) Please insert views, if any, of Management of the Company – especially if these views are
             not in agreement of the views of the audit engagement team in section 3(a) above. It is important 
             that any Management views are supported with relevant guidance from GAAP/ GAAS, or they are supported
              by an accounting opinion obtained from a third-party accounting firm of repute. <br/>
            <b> Please ensure that this section is reviewed and approved by the Engagement Audit Manager and
               Engagement Audit Partner.  </b>


          </h3>

        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="overflow-x-auto">

          {/* WIDE CONTENT */}
          <div className="min-w-[1600px] grid grid-cols-3">

            {/* GUIDANCE */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                Guidance
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* ET ANALYSIS */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                ET Analysis and Conclusion
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* MANAGEMENT RESPONSE */}
            <div className="p-5">

              <h4 className="font-semibold text-sm mb-4">
                Management Response
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

          </div>

        </div>

      </div>

      {/* QUESTION 3 b*/}
       <div className="border rounded-2xl overflow-hidden mb-10">

        {/* QUESTION HEADER */}
        <div className="bg-gray-100 px-5 py-4 border-b">

          <h3 className="font- text-sm leading-6">

            4.<b>	National Accounting Office team view</b><br></br>
                In this section, the National Accounting Office will provide its technical views 
                on the accounting/ auditing matter. The NAO will summarize the issue on hand, 
                the technical literature referred to, industry practices (if any) and also the final 
                technical view. In case there are accounting alternatives offered by GAAP, the NAO team 
                will also provide these alternatives to the audit engagement team.
          </h3>

        </div>

        {/* HORIZONTAL SCROLL CONTAINER */}
        <div className="overflow-x-auto">

          {/* WIDE CONTENT */}
          <div className="min-w-[1600px] grid grid-cols-3">

            {/* GUIDANCE */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                Guidance
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* ET ANALYSIS */}
            <div className="border-r p-5">

              <h4 className="font-semibold text-sm mb-4">
                ET Analysis and Conclusion
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

            {/* MANAGEMENT RESPONSE */}
            <div className="p-5">

              <h4 className="font-semibold text-sm mb-4">
                Management Response
              </h4>

              <Editor
                tinymceScriptSrc="https://cdn.jsdelivr.net/npm/tinymce@7/tinymce.min.js"
                init={editorConfig}
              />

            </div>

          </div>

        </div>

      </div>




      {/* FILES */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-5 mt-8">

        <div>

          <label className="block text-sm font-medium mb-2">
            Upload FS
          </label>

          <input
            type="file"
            className="w-full border rounded-lg p-2 bg-white text-sm"
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            Upload TB
          </label>

          <input
            type="file"
            className="w-full border rounded-lg p-2 bg-white text-sm"
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            Upload Agreements
          </label>

          <input
            type="file"
            className="w-full border rounded-lg p-2 bg-white text-sm"
          />

        </div>

        <div>

          <label className="block text-sm font-medium mb-2">
            Upload Other Documents
          </label>

          <input
            type="file"
            className="w-full border rounded-lg p-2 bg-white text-sm"
          />

        </div>

      </div>

      {/* BUTTONS */}
      <div className="flex justify-between items-center mt-10">

        {/* PREVIOUS */}
        <button
          onClick={onPrevious}
          className="
            border
            border-gray-300
            bg-white
            px-6
            py-2.5
            rounded-xl
            text-sm
            font-medium
            hover:bg-gray-100
          "
        >
          Previous
        </button>

        {/* RIGHT BUTTONS */}
        <div className="flex gap-4">

          <button
            className="
              bg-gray-200
              px-6
              py-2.5
              rounded-xl
              text-sm
              font-medium
            "
          >
            Save as Draft
          </button>

          <button
            onClick={onNext}
            className="
              bg-[#98002E]
              text-white
              px-8
              py-2.5
              rounded-xl
              text-sm
              font-medium
              hover:opacity-90
            "
          >
            Next
          </button>

        </div>

      </div>

    </div>

  );
}