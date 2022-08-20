import React from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./src/components/layout/Footer";
import Header from "./src/components/layout/Header";

import Home from "./src/pages/home/Home"
import NotFound from "./src/pages/NotFound";
//import Down from "./src/pages/Download";

function Rotas(){
  return(
    <>
        <BrowserRouter>
            <Header/>
            <Routes>
                <Route path="*" element={<NotFound />} />
                <Route path="/" element={<Home />} />
            </Routes>
            <Footer/>
        </BrowserRouter>
    </>
    
  );
}

export default Rotas;