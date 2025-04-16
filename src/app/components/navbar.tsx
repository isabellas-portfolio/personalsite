import Pagelink from "./pagelink";
import homepic from "/public/homepage.png"
import Image from "next/image";

export default function Navbar() {
    return (
        <main className="flex flex-row justify-between font-jost text-xl"> 
            <div className="hover:scale-110 ml-[6rem]">
            <Pagelink text={<Image className="" src={homepic} width={50} height={50} alt="github icon"></Image>}
             page="/"></Pagelink>
                </div>
            <div className="flex flex-row margin-top:10px space-x-4 mr-8 mt-10">
                <div className="hover:scale-105"> <Pagelink text="Experience" page="/experience"></Pagelink></div>
                <div className="hover:scale-105"><Pagelink text="Leadership" page="/leadership"></Pagelink></div>
                <div className="hover:scale-105"><Pagelink text="About Me" page="/aboutme"></Pagelink></div>

            </div>  
        </main>

    );
}