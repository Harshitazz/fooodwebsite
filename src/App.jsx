import { useState } from "react";
import { Outlet } from "react-router-dom";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";

import "./App.css";

export const server = "http://localhost:4000";
function App() {
  return (
    <>
      <Outlet />
    </>
  );
}

export default App;
