/* eslint-disable no-unused-vars */
import {  Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";

import DetailPage from "./pages/DetailPage";
import CompanyDemandForm from "./pages/CompanyDemandForm.jsx";
import Dashboard from "./components/Dashboard.jsx";
import AllDemands from "./pages/AllDemands";

function App() {
  return (
    <>
 
       
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/create" element={< CompanyDemandForm/>} />
            <Route path="/profile" element={<Dashboard/>}/>
            <Route path="/get" element={<AllDemands/>}/>
          </Routes>
        
     
    </>
  );
}

export default App;
