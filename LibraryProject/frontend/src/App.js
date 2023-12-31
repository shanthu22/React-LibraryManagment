import React, { useState } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useNavigate,
} from "react-router-dom";
import RoleSelector from "./Pages/roleSelecter/RoleSelector";
import AccessManager from "./Pages/accessManager/AccessManager";

import "../src/App.css";
import Parent from "./Pages/testing/parent";
import Login from "./Pages/authentication/Login/Login";
//npx json-server --watch src/database/store.json --port 5000
function App() {
  const [role, setRole] = useState("default");
  const [userInfo, setUserInfo] = useState();
  const callBackRoleSelector = (data) => {
    setRole(data.role);
    console.log(data);
    setUserInfo(data);
    console.log(userInfo);
  };

  return (
    <div className="custom-background">
      <div className="app">
        <div className="d-flex align-items-center justify-content-center"></div>

        <Router>
          <Routes>
            <Route
              path="/"
              element={
                <div className="d-flex align-items-center justify-content-center">
                  <RoleSelector callBackRoleSelector={callBackRoleSelector} />
                </div>
              }
            />
            <Route
              path="/base"
              element={
                <div className="d-flex align-items-center justify-content-center">
                  <Login
                    callBackRoleSelector={callBackRoleSelector}
                    userInfo={userInfo}
                  />
                </div>
              }
            />
            <Route
              path="/dashboard/:userName"
              element={<AccessManager role={role} userInfo={userInfo} />}
            />
            <Route path="/test" element={<Parent role={role} />} />
            <Route path="/login" element={<Login />} />
          </Routes>
        </Router>
      </div>
    </div>
  );
}

export default App;
