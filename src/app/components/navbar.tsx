import Pagelink from "./pagelink";
import homepic from "/public/homepage.png"
import Image from "next/image";

export default function Navbar() {
    return (
        <main className="flex flex-row justify-between font-jost text-xl pt-5 pb-2"> 
            <div className="ml-[6rem] pt-1 flex items-center overflow-visible">
            <Pagelink text={<span className="inline-block p-2 hover:scale-110 origin-center transition-transform"><Image className="block" src={homepic} width={50} height={50} alt="Home"></Image></span>}
             page="/"></Pagelink>
                </div>
            <div className="flex flex-row margin-top:10px space-x-4 mr-8 mt-6">
                <div className="hover:scale-105"> <Pagelink text="Experience" page="/experience"></Pagelink></div>
                <div className="hover:scale-105"><Pagelink text="Leadership" page="/leadership"></Pagelink></div>
                <div className="hover:scale-105"><Pagelink text="About Me" page="/aboutme"></Pagelink></div>

            </div>  
        </main>

    );
}