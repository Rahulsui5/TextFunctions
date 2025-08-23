import React from "react";
import { useState } from "react";
import Textarea from "./Textarea";
const Navbar = ({ titletext }) => {
  const [flipped, setFlipped] = useState(false);
  const [bgcolor, setbgcolor] = useState("white");
  const bgchanger=()=>{
      setbgcolor(p=>p==="white"?"darkgray":"white");
  }
  return (
    <div
      className="h-screen w-screen duration-200"
      style={{ backgroundColor: bgcolor}}>
      <header>
        <div className="flex justify-between items-center h-14 w-screen bg-slate-100 shadow-lg">
          <div className="title font-bold  text-lg pl-5 ">{titletext}</div>
          <div className="pr-5 flex justify-between items-center">
            <a className="m-[3vw] text-gray-500 hover:text-black" href="">
              Home
            </a>
            <a className="m-[3vw] text-gray-500 hover:text-black" href="">
              About
            </a>
            <a className="m-[3vw] text-gray-500 hover:text-black" href="">
              Contect
            </a>

            <div
              className="w-16 h-16 cursor-pointer m-0"
              style={{ perspective: "1000px" }}
              onClick={() => setFlipped(!flipped)
              }
            >
              <div
                className="w-full h-full relative transition-transform duration-700"
                onClick={bgchanger}
                style={{
                  transformStyle: "preserve-3d",
                  transform: flipped ? "rotateY(180deg)" : "rotateY(0deg)",
                }}
              >
                {/* Front */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{ backfaceVisibility: "hidden" }}
                >
                  <img
                    height={40}
                    width={40}
                    src="https://img.icons8.com/?size=100&id=62034&format=png&color=000000"
                    alt="front"
                  />
                </div>

                {/* Back */}
                <div
                  className="absolute inset-0 flex items-center justify-center"
                  style={{
                    transform: "rotateY(180deg)",
                    backfaceVisibility: "hidden",
                  }}
                >
                  <img
                    height={40}
                    width={40}
                    src="https://img.icons8.com/?size=100&id=8EUmYhfLPTCF&format=png&color=000000"
                    alt="back"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </header>
      <Textarea bgcolor={bgcolor}/>
      </div>
  );
};

export default Navbar;
