import { Editor } from "@tinymce/tinymce-react";

type Props = {
  onPrevious: () => void;
  onNext: () => void;
};

export default function AccountingIssueConclusion({
  onPrevious,
  onNext,
}: Props) {

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

  const sections = [
    "Accounting Issue / Background",
    "Relevant Guidance",
    "Analysis Performed",
    "Conclusion Reached",
  ];

  return (

    <div className="bg-white rounded-2xl shadow-sm border p-4">

      {/* Heading */}
      <h2 className="text-2xl font-bold text-[#1F2A44] mb-6">
        Accounting Issue and Conclusion
      </h2>

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

      {/* Bottom Buttons */}
      <div className="flex justify-between items-center mt-8">

        {/* Previous */}
        <button
          onClick={onPrevious}
          className="
            border
            border-gray-300
            bg-white
            px-5
            py-2
            rounded-lg
            text-sm
            font-medium
            hover:bg-gray-100
          "
        >
          Previous
        </button>

        {/* Right Buttons */}
        <div className="flex gap-3">

          <button
            className="
              bg-gray-200
              px-5
              py-2
              rounded-lg
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
              px-6
              py-2
              rounded-lg
              text-sm
              font-medium
              hover:opacity-90
            "
          >
            Submit
          </button>

        </div>

      </div>

    </div>

  );
}