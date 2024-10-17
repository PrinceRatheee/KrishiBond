/* eslint-disable no-unused-vars */
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AuthPage from "./pages/AuthPage";
import { Provider } from "react-redux";
import { store, persistor } from "./Redux/store.js";
import { PersistGate } from "redux-persist/integration/react";
import DetailPage from "./pages/DetailPage";
import CompanyDemandForm from "./pages/CompanyDemandForm.jsx";

function App() {
  return (
    <>
      <Provider store={store}>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/auth" element={<AuthPage />} />
            <Route path="/detail" element={<DetailPage />} />
            <Route path="/create" element={< CompanyDemandForm/>} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
