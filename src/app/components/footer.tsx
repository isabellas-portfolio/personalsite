import Pagelink from "./pagelink";
import homepic from "/public/homepage.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-row justify-between bg-bella-pink font-serif text-xl mt-6 w-full bottom-0 fixed">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">
                    © 2024 Made by Isabella Iype ❀。• *₊°。 ❀°。. 
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
                    <li>
                        <div className="me-4 md:me-6">Want to chat? Let's Connect!</div>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com/in/isabella-iype-neu/" className="hover:underline me-4 md:me-6">
                            Linkedin
                        </a>
                    </li>
                    <li></li>
                    <li>
                        <a className="hover:underline">Contact: isabellaiype@gmail.com</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
