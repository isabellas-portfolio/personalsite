import Pagelink from "./pagelink";
import homepic from "/public/homepage.png"
import Image from "next/image";

export default function Navbar() {
    return (
        <main className="flex flex-row justify-between bg-bella-pink font-serif text-xl"> 
            <div className="hover:scale-110 ml-[10rem]">
            <Pagelink text={<Image className="" src={homepic} width={50} height={50} alt="github icon"></Image>}
             page="/"></Pagelink>
                </div>
            <div className="flex flex-row space-x-4 mr-5 mt-2">
                <div className="hover:scale-105"> <Pagelink text="Experience" page="/experience"></Pagelink></div>
                <div className="hover:scale-105"><Pagelink text="Leadership" page="/leadership"></Pagelink></div>
                <div className="hover:scale-105"><Pagelink text="About Me" page="/aboutme"></Pagelink></div>

            </div>  
        </main>

    );
}