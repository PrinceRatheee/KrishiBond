import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { store } from "./Redux/store";
import { Provider } from "react-redux";
import Header from "./components/Header.jsx";
import Footer from "./components/Footer.jsx";

createRoot(document.getElementById("root")).render(
  <Provider store={store}>
    <Header />
    <App />
    <Footer/>
  </Provider>
);
