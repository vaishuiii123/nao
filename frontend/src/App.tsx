import { useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Dashboard from "./pages/Dashboard";
import NAOConsultation from "./pages/NAOConsultation";

import FieldCreation from "./pages/FieldCreation";
import GeneralMaster from "./pages/GeneralMaster";
import TeamMember from "./pages/TeamMember";
import EmailTemplate from "./pages/EmailTemplate";
import Setting from "./pages/Setting";

function App() {

  const [user, setUser] = useState<{
    name: string;
    email: string;
  } | null>(null);

  // Login Page
  if (!user) {
    return (
      <Login onLogin={setUser} />
    );
  }

  return (

    <Routes>

      {/* Default Route */}
      <Route
        path="/"
        element={
          <Navigate to="/dashboard" />
        }
      />

      {/* Dashboard */}
      <Route
        path="/dashboard"
        element={
          <Dashboard
            user={user}
            onLogout={() => setUser(null)}
          />
        }
      />

      {/* NAO Consultation */}
      <Route
        path="/nao-consultation"
        element={
          <NAOConsultation
            user={user}
            onLogout={() => setUser(null)}
          />
        }
      />

      {/* Field Creation */}
      <Route
        path="/field-creation"
        element={
          <FieldCreation
            user={user}
            onLogout={() => setUser(null)}
          />
        }
      />

      {/* General Master */}
      <Route
        path="/general-master"
        element={
          <GeneralMaster
            user={user}
            onLogout={() => setUser(null)}
          />
        }
      />

      {/* Team Member */}
      <Route
        path="/team-member"
        element={
          <TeamMember
            user={user}
            onLogout={() => setUser(null)}
          />
        }
      />

      {/* Email Template */}
      <Route
        path="/email-template"
        element={
          <EmailTemplate
            user={user}
            onLogout={() => setUser(null)}
          />
        }
      />

      {/* Setting */}
      <Route
        path="/setting"
        element={
          <Setting
            user={user}
            onLogout={() => setUser(null)}
          />
        }
      />

    </Routes>

  );
}

export default App;