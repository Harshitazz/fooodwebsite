import { useState } from 'react'
import { Outlet } from "react-router-dom";
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

import './App.css'
function App() {

  return (
    <>
      <Outlet/>
    </>
  )
}

export default App
