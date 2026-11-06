import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

import { Header } from "./compones/Header";
import { Aside } from "./compones/Aside";
import { Index } from "./pages/Index";
import { Footer } from "./compones/Footer"
import "./index.css";






createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Aside/>
    <Header/>
    <Index/>
    <Footer/>
   
  </StrictMode>,
);
