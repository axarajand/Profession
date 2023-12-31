import React from "react";
import Navbar from "./Navbar";
import Banner from "./Banner";

function App() {
    return(
    <div className="bg-white flex flex-row justify-center w-full">
      <div className="bg-white w-[100%] h-[776px] [background:linear-gradient(240deg,rgba(37,69,244,0.5)_0%,rgba(255,255,255,0)_100%)] relative">
        <Navbar />
        <Banner />
      </div>
    </div>
    )
}

export default App;
