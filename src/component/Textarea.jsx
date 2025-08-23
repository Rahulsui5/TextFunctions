import React from "react";
import { useState } from "react";
const Textarea = ({bgcolor}) => {
  const [texts, settexts] = useState("");
  let color=bgcolor==="darkgray"?"white":"black"
  const showChanges = (e) =>{
    settexts(e.target.value)
     console.log()
  };
  return (
    <div>
      <div className="section1 p-10 grid justify-center">
        <label htmlFor="" style={{color:color}} className="font-bold text-2xl text-center">
          Enter text here
        </label>
        <br />
        <textarea
          name=""
          style={{width:"100%",backgroundColor:bgcolor,color:color,borderColor:color}}
          placeholder="Enter here........."
          className=" shadow-md rounded-2xl border  border-zinc-950  min-h-20 p-4"
          rows={7}
          cols={100}
          id="textarea"
          value={texts}
          onChange={ showChanges }
        ></textarea>
        <div className="flex flex-wrap justify-center text-white border border-solid border-black bg-slate-100 mt-5 rounded-lg  shadow-md ">
          <button
            className=" shadow-lg rounded-lg bg-slate-400 hover:bg-slate-500 hover:scale-95 m-2 p-2"
            onClick={() => {
              settexts(texts.toUpperCase());
            }}
          >
            Upper Case
          </button>
          <button
            className=" shadow-lg rounded-lg bg-slate-400 hover:bg-slate-500 hover:scale-95 m-2 p-2"
            onClick={() => {
              settexts(texts.toLowerCase());
            }}
          >
            Lower Case
          </button>
          
          <button
            className=" shadow-lg rounded-lg bg-slate-400 hover:bg-slate-500 hover:scale-95 m-2 p-2"
            onClick={()=>{
              settexts(texts.trim().split(/\s+/).join(" "))}
            }
          >
            White Space
          </button>
          <button
            className=" shadow-lg rounded-lg bg-slate-400 hover:bg-slate-500 hover:scale-95 m-2 p-2"
            onClick={() => {
              navigator.clipboard.writeText(texts)
            }}
          >
            Copy
          </button>
          <button
            className=" shadow-lg rounded-lg bg-slate-400 hover:bg-slate-500 hover:scale-95 m-2 p-2"
            onClick={() => {
              settexts("");
            }}
          >
            Clear
          </button>
        </div>
        <summary className="m-4 p-4" style={{color:color}}>{texts}</summary>
        <div className="flex flex-wrap gap-20 justify-center">
          <label className="" style={{color:color}} htmlFor="totalchar">
            Total Character:{texts.split("").filter(e=>e!==" ").length}
          </label>
          <label className="" style={{color:color}} htmlFor="totalchar">
            Total Word:{texts.split(" ").filter(e=>e).length}
          </label>
          <label className="" style={{color:color}} htmlFor="totalchar">
            Reading Time:{(texts.trim().split(/\s+/g).length)/100} Minute
          </label>
        </div>
      </div>
    </div>
  );
};
export default Textarea;
