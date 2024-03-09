import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Learn from "./components/learn/Learn.tsx";
import Navbar from "./components/navbar/Navbar.tsx";
import reportWebVitals from "./reportWebVitals";
import { Provider } from "react-redux";
import Footer from "./components/footer/Footer.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from "./redux/store/store.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <BrowserRouter>
        <Learn />
        <Navbar />
        <App />
        <Footer />
      </BrowserRouter>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
