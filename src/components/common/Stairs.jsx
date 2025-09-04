import React from 'react'
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import  { useRef } from "react";
import { useLocation } from 'react-router-dom';

function Stairs(props) {
    const StairParent = useRef(null)
    const PageRef=useRef(null)
    const currentPath=useLocation().pathname
  useGSAP(function () {
    const tl = gsap.timeline();
    tl.to(StairParent.current,{
      display:"block"
    })
    tl.from(".stair", {
      height: 0,
      stagger: {
        amount: -0.2,
      },
    });
    tl.to(".stair", {
      y: "100%",
      stagger: {
        amount: -0.2,
      },
    })
    tl.to(StairParent.current,{
      display:"none"
    })
    tl.to(".stair", {
      y: "0%",
      
    })
    gsap.from(PageRef.current,{
        opacity:0,
        delay:1.2,
        scale:1
    })
  },[currentPath])
  return (
    <div>
        <div ref={StairParent}className="h-screen w-full fixed  top-0 z-20">
        <div className="h-screen w-full  flex ">
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5  bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
          <div className="stair h-full w-1/5 bg-black "></div>
        </div>
      </div>
      <div ref={PageRef}>
        {props.children}
      </div>
    </div>
  )
}

export default Stairs