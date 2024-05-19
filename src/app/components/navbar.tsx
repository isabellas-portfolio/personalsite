import Pagelink from "./pagelink";
import homepic from "/public/homepage.png"
import Image from "next/image";

export default function Navbar() {
    return (
        <main className="flex flex-row justify-between bg-bella-pink font-serif text-xl"> 
            <div className="hover:scale-110">
            <Pagelink text={<Image className="" src={homepic} width={75} height={75} alt="github icon"></Image>}
             page="/"></Pagelink>
                </div>
            <div className="italic text-my-gray mt-7 ml-20 text-3xl">Isabella's Portfolio</div>
            <div className="flex flex-row space-x-4 mt-7 mr-6">
                <div className="hover:scale-105"> <Pagelink text="Experience" page="/experience"></Pagelink></div>
                <div className="hover:scale-105"><Pagelink text="Leadership" page="/leadership"></Pagelink></div>
                <div className="hover:scale-105"><Pagelink text="About Me" page="/aboutme"></Pagelink></div>

            </div>  
        </main>

    );
}