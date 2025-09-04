import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";
import React, { useRef } from "react";

function Agence() {
  const ImageDivRef = useRef(null); 
  gsap.registerPlugin(ScrollTrigger)
  const Image = useRef(null);

  const imageArray=[
    "https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEGGIE_640X290_2-640x290.jpg",
    "https://k72.ca/uploads/teamMembers/CAMILLE_640X290_2-640x290.jpg",
    "https://k72.ca/uploads/teamMembers/Olivier_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Lawrence_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/HugoJoseph_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/ChantalG_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MyleneS_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/SophieA_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Claire_480x640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/Michele_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MEL_480X640-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/MAXIME_480X640_2-480x640.jpg",
    "https://k72.ca/uploads/teamMembers/joel_480X640_3-480x640.jpg"
  ]
  useGSAP(function () {
    gsap.to(ImageDivRef.current,{
      scrollTrigger:{
        trigger:ImageDivRef.current,
        start:"top 26.25%",
        end:"top -120%",
        scrub:true,
        pin:true,
        pinSpacing:true,
        pinReparent:true,
        pinType:"transform",
        anticipatePin:"1",
        onUpdate:(elem)=>{
          let imageIndex;
          if(elem.progress<1){
            imageIndex=Math.floor(elem.progress * imageArray.length)
          }
          else{
            imageIndex=imageArray.length-1
          }
          Image.current.src=imageArray[imageIndex]
        }
      }
    })
  })
  return (
   <div>
    <div className="section1 py-1">
    <div ref={ImageDivRef} className="absolute h-[20vw] w-[15vw] top-[12vw] overflow-hidden rounded-3xl left-[30vw] ">
      <img ref={Image} className="h-full w-full" src="https://k72.ca/uploads/teamMembers/Carl_480x640-480x640.jpg"/>
    </div>
     <div className="relative font-[font-2]">
      <div className="mt-[55vh]">
        <h1 className="text-[20vw] text-center uppercase leading-[18vw]">
          Soixan7e Douze
        </h1>
      </div>
      <div className="pl-[40%] mt-20 ">
        <p className="text-6xl">
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Our curiosity feeds our creativity. We stay humble and say no to
          big egos, even yours. A brand is alive. It has values, a personality,
          a story. If we forget that, we can make good numbers short term, but
          kill it long term. That’s why we commit to bringing perspective, to
          build influential brands.
        </p>
      </div>
    </div>
   </div>
   <div className="section2 h-screen"></div>
   </div>
  );
}

export default Agence;
