import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import Learn from "./components/Learn/index.tsx";
import NavBar from "./components/Navbar/navbar.tsx";
import reportWebVitals from "./reportWebVitals";
import { Provider } from 'react-redux'
import Footer from "./components/Footer/footer.tsx";
import { BrowserRouter } from "react-router-dom";
import { store } from './redux/store/store.tsx';

ReactDOM.createRoot(document.getElementById("root")!).render(
  <Provider store= {store}>
  <React.StrictMode>
    <BrowserRouter>
      <Learn />
      <NavBar />
      <App />
      <Footer />
    </BrowserRouter>
  </React.StrictMode>
  </Provider>
);

reportWebVitals();
