import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Agence from "./pages/Agence";
import Projects from "./pages/Projects";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

function App() {
  useGSAP(function () {
    const tl = gsap.timeline();
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.4,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.4,
      },
    });
  });
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/agence" element={<Agence />} />
        <Route path="/projects" element={<Projects />} />
      </Routes>

      <div className="h-screen w-full fixed flex top-0 z-20">
        <div className="stair h-full w-1/5 bg-black "></div>
        <div className="stair h-full w-1/5 bg-black "></div>
        <div className="stair h-full w-1/5  bg-black "></div>
        <div className="stair h-full w-1/5 bg-black "></div>
        <div className="stair h-full w-1/5 bg-black "></div>
      </div>
    </div>
  );
}

export default App;
