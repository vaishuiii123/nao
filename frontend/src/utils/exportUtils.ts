import html2canvas from "html2canvas";
import jsPDF from "jspdf";

import {
  Document,
  Packer,
  Paragraph,
  TextRun,
  Table,
  TableRow,
  TableCell,
  WidthType,
} from "docx";

import { saveAs } from "file-saver";

/* =====================================================
   PDF DOWNLOAD
===================================================== */

export const downloadPDF = async (
  elementId: string,
  fileName: string
) => {

  const element =
    document.getElementById(elementId);

  if (!element) {
    alert("Element not found");
    return;
  }

  try {

    await new Promise((resolve) =>
      setTimeout(resolve, 2000)
    );

    const canvas =
      await html2canvas(element, {

        scale: 2,

        useCORS: true,

        allowTaint: true,

        backgroundColor:
          "#ffffff",

        logging: false,

        scrollX: 0,

        scrollY: 0,

        width:
          element.scrollWidth,

        height:
          element.scrollHeight,

        windowWidth:
          element.scrollWidth,

        windowHeight:
          element.scrollHeight,
      });

    const imgData =
      canvas.toDataURL(
        "image/jpeg",
        1.0
      );

    const pdf =
      new jsPDF(
        "landscape",
        "mm",
        "a4"
      );

    const pdfWidth =
      pdf.internal.pageSize.getWidth();

    const pdfHeight =
      pdf.internal.pageSize.getHeight();

    const imgWidth =
      pdfWidth;

    const imgHeight =
      (canvas.height * imgWidth) /
      canvas.width;

    let heightLeft =
      imgHeight;

    let position = 0;

    /* FIRST PAGE */

    pdf.addImage(
      imgData,
      "JPEG",
      0,
      position,
      imgWidth,
      imgHeight
    );

    heightLeft -= pdfHeight;

    /* MULTIPLE PAGES */

    while (heightLeft > 0) {

      position =
        heightLeft - imgHeight;

      pdf.addPage();

      pdf.addImage(
        imgData,
        "JPEG",
        0,
        position,
        imgWidth,
        imgHeight
      );

      heightLeft -= pdfHeight;
    }

    pdf.save(
      `${fileName}.pdf`
    );

  } catch (error) {

    console.error(error);

    alert(
      "PDF generation failed"
    );
  }
};


/* =====================================================
   WORD DOWNLOAD
===================================================== */

export const downloadWord = async (
  elementId: string,
  fileName: string
) => {

  const element =
    document.getElementById(elementId);

  if (!element) {

    alert("Element not found");

    return;
  }

  /* =====================================
      CLONE FULL FORM
  ====================================== */

  const cloned =
    element.cloneNode(
      true
    ) as HTMLElement;

  /* REMOVE BUTTONS */

  cloned
    .querySelectorAll("button")
    .forEach((btn) =>
      btn.remove()
    );

  /* =====================================
      FIX INPUTS
  ====================================== */

  cloned
    .querySelectorAll(
      "input, textarea, select"
    )
    .forEach((field: any) => {

      const div =
        document.createElement("div");

      div.style.border =
        "1px solid #d1d5db";

      div.style.padding =
        "8px";

      div.style.marginBottom =
        "10px";

      div.style.minHeight =
        "40px";

      div.style.background =
        "#ffffff";

      /* SELECT */

      if (
        field.tagName === "SELECT"
      ) {

        div.innerText =
          field.options[
            field.selectedIndex
          ]?.text || "";
      }

      /* INPUT / TEXTAREA */

      else {

        div.innerText =
          field.value || "";
      }

      field.parentNode?.replaceChild(
        div,
        field
      );
    });

  /* =====================================
      HTML DOCUMENT
  ====================================== */

  const html = `

  <html>

    <head>

      <meta charset="utf-8" />

      <style>

        body {

          font-family: Arial;

          padding: 20px;

          color: #111827;
        }

        h1 {

          font-size: 28px;

          margin-bottom: 20px;
        }

        h2 {

          font-size: 22px;

          margin-top: 40px;

          margin-bottom: 15px;

          color: #98002E;
        }

        .pdf-section {

          page-break-after: always;

          margin-bottom: 40px;
        }

        label {

          display: block;

          font-weight: bold;

          margin-bottom: 6px;

          margin-top: 14px;
        }

        table {

          width: 100%;

          border-collapse: collapse;
        }

        td, th {

          border: 1px solid #d1d5db;

          padding: 8px;
        }

      </style>

    </head>

    <body>

      ${cloned.innerHTML}

    </body>

  </html>
  `;

  /* =====================================
      CREATE DOC FILE
  ====================================== */

  const blob =
    new Blob(
      [html],
      {
        type:
          "application/msword",
      }
    );

  const link =
    document.createElement("a");

  link.href =
    URL.createObjectURL(blob);

  link.download =
    `${fileName}.doc`;

  document.body.appendChild(
    link
  );

  link.click();

  document.body.removeChild(
    link
  );
};

/* =====================================================
   WORD → PDF
===================================================== */

export const downloadWordAsPDF = async (
  elementId: string,
  fileName: string
) => {

  /* FIRST DOWNLOAD WORD */

  await downloadWord(
    elementId,
    fileName
  );

  /* MESSAGE */

  alert(

    "Word document downloaded.\n\n" +

    "Open the Word file and Save As PDF."

  );
};