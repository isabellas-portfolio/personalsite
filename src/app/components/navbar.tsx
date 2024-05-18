import Pagelink from "./pagelink";

export default function Navbar() {
    return (
        <main className="flex flex-row justify-between bg-bella-pink pb-10 font-serif text-xl"> 
            <div className="mt-7 ml-4">
            <Pagelink text="Home" page="/"></Pagelink>
                </div>

            <div className="mt-7"> Isabella Iype </div>
            <div className="flex flex-row space-x-4 mt-7 mr-6">
                <Pagelink text="Experience" page="/experience"></Pagelink>
                <Pagelink text="Leadership" page="/leadership"></Pagelink>
                <Pagelink text="About Me" page="/aboutme"></Pagelink>

            </div>  
        </main>

    );
}