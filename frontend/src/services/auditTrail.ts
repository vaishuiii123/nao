export const logAuditTrail = (

  action: string,

  module: string,

  details: string,

  userEmail: string,

  fieldName?: string,

  fieldValue?: string

) => {

  try {

    /* GET EXISTING LOGS */

    const existingLogs =
      JSON.parse(

        localStorage.getItem(
          "auditTrailLogs"
        ) || "[]"
      );

    /* NEW LOG */

    const newLog = {

      id: Date.now(),

      action,

      module,

      details,

      userEmail,

      fieldName:
        fieldName || "",

      fieldValue:
        fieldValue || "",

      timestamp:
        new Date().toISOString(),

      url:
        window.location.pathname,
    };

    /* SAVE */

    existingLogs.unshift(
      newLog
    );

    localStorage.setItem(

      "auditTrailLogs",

      JSON.stringify(
        existingLogs
      )
    );

  } catch (error) {

    console.error(
      "Audit log failed",
      error
    );
  }
};