import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import  AuthPage  from "./pages/AuthPage";
import { Provider } from 'react-redux';
import { store, persistor } from './Redux/store.js';
import { PersistGate } from 'redux-persist/integration/react';

function App() {
  return (
    <>
     <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/auth" element={<AuthPage/>} />
        </Routes>
      </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
