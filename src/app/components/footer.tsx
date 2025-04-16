import Pagelink from "./pagelink";
import homepic from "/public/homepage.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="flex flex-row justify-between bg-anjana font-serif text-xl mt-6 w-full bottom-0 fixed">
            <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
                <span className="text-sm text-white sm:text-center dark:text-gray-400">
                    © 2025 Made by Isabella Iype ❀。• *₊°。 ❀°。. 
                </span>
                <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-white dark:text-gray-400 sm:mt-0">
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
                        <a className="hover:underline">isabellaiype@gmail.com</a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
