import {

  useState,

  useEffect,

} from "react";

import {

  Routes,

  Route,

  Navigate,

} from "react-router-dom";

import Login from "./pages/Login";

import Dashboard from "./pages/Dashboard";

import NAOConsultation
from "./pages/NAOConsultation";

import FieldCreation
from "./pages/FieldCreation";

import GeneralMaster
from "./pages/GeneralMaster";

import TeamMember
from "./pages/TeamMember";

import EmailTemplate
from "./pages/EmailTemplate";

import Setting
from "./pages/Setting";

import AuditTrail
from "./pages/AuditTrail";

import MainLayout
from "./layouts/MainLayout";

import { logAuditTrail }
from "./services/auditTrail";

function App() {

  /* =====================================
      GLOBAL CLICK LOGGER
  ====================================== */

  useEffect(() => {

    const handleClick = (
      event: any
    ) => {

      const element =
        event.target;

      /* TRACK ONLY BUTTONS & LINKS */

      if (

        element.tagName !== "BUTTON" &&

        element.tagName !== "A"

      ) {
        return;
      }

      /* BUTTON TEXT */

      const buttonText =

        element.innerText ||

        element.value ||

        "Unknown Click";

      /* MODULE */

      const module =
        window.location.pathname;

      /* SAVE LOG */

      logAuditTrail(

        "CLICK",

        module,

        `Clicked: ${buttonText}`,

        "user@knav.com"
      );
    };

    document.addEventListener(
      "click",
      handleClick
    );

    return () => {

      document.removeEventListener(
        "click",
        handleClick
      );
    };

  }, []);

  /* =====================================
      USER LOGIN STATE
  ====================================== */

  const [user, setUser] =
    useState<{

      name: string;

      email: string;

    } | null>(null);

  /* =====================================
      LOGIN SCREEN
  ====================================== */

  if (!user) {

    return (

      <Login
        onLogin={setUser}
      />

    );
  }

  /* =====================================
      ROUTES
  ====================================== */

  return (

    <Routes>

      {/* MAIN LAYOUT */}

      <Route

        path="/"

        element={

          <MainLayout

            user={user}

            onLogout={() =>
              setUser(null)
            }

          />

        }
      >

        {/* DASHBOARD */}

        <Route
          index
          element={<Dashboard />}
        />

        <Route
          path="dashboard"
          element={<Dashboard />}
        />

        {/* NAO CONSULTATION */}

        <Route

          path="nao-consultation"

          element={
            <NAOConsultation />
          }

        />

        {/* FIELD CREATION */}

        <Route

          path="field-creation"

          element={
            <FieldCreation />
          }

        />

        {/* GENERAL MASTER */}

        <Route

          path="general-master"

          element={
            <GeneralMaster />
          }

        />

        {/* TEAM MEMBER */}

        <Route

          path="team-member"

          element={
            <TeamMember />
          }

        />

        {/* EMAIL TEMPLATE */}

        <Route

          path="email-template"

          element={
            <EmailTemplate />
          }

        />

        {/* SETTINGS */}

        <Route

          path="setting"

          element={<Setting />}

        />

        {/* AUDIT TRAIL */}

        <Route

          path="audit-trail"

          element={<AuditTrail />}

        />

      </Route>

      {/* FALLBACK */}

      <Route

        path="*"

        element={
          <Navigate to="/" />
        }

      />

    </Routes>

  );
}

export default App;