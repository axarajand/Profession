import React from "react";
import Button from "./Button";
import imgBanner from "/rocket.png"

function Banner() {
    return(
        <div className="absolute w-[1162px] h-[598px] top-[92px] left-[164px]">
            <div className="container mx-auto flex items-center justify-between">
                <div className="w-1/2">
                    <h1 className="text-4xl mb-8 font-semibold text-[#184657]">Hello, welcome</h1>
                    <h2 className="text-5xl mb-8 font-extrabold text-black">Find your dream job</h2>
                    <p className="text-xl mb-10 font-normal text-black">Work in a place that makes you comfortable.<br/>Register now for free.</p>
                    <div className="flex space-x-4">
                        <Button className="bg-[#2545f4] text-white px-12 py-3 rounded-xl text-lg font-bold hover:bg-[#3b4ba5] hover:text-white transition duration-300" name="Register" />
                        <Button className="border border-solid border-[#2545f4] text-[#2545f4] px-12 py-3 rounded-xl text-lg font-bold hover:bg-white hover:text-blue-500 transition duration-300" name="Login" />
                    </div>
                </div>
                <div className="w-1/2">
                    <img className="w-[553px] h-[598px]" src={ imgBanner } alt="Banner image" />
                </div>
            </div>
        </div>
    )
}

export default Banner;