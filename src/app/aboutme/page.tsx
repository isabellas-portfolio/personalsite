import Image from "next/image";
import aboutmepic from "/public/aboutme.png"

export default function aboutme() {
    return(
        <div id= "create 2 columns "className="grid grid-cols-2 gap-2 ml-10 mt-10">
 <div id="about me content" className="font-serif">
 <h1 className="font-serif text-3xl lg:text-5xl text-my-pink font-bold"> About Me! 
    </h1>
    <p className="font-serif text-my-gray mt-4"> Hi, I'm Isabella! I'm a current third year at Northeastern University studying Computer Science and English 
    with a focus in Natural Language Processing. I'm from Long Island, New York. From a young age, I've loved to explore technology and all its new advancements! 
    Since coming to Northeastern, I've been able to explore technology through a humanities lens which has given me new perspectives on Artificial Intelligence and how it processes language. 
    This has driven me to a passion for user-centered thinking and design. Additionally, I always feel most like myself when in some sort of leadership role! Throughout high school and now in college I've
    been able to hone in on my leadership skills and how I can use them to improve the areas I'm passionate about. In whatever I do, I want to <span className="text-my-pink font-bold">improve technologies in a more unique way, by keeping humans at the center. </span>
    In my free time I'll be reading, writing, exploring cafes and bookstores, and baking! </p>  
    <p className="text-my-gray font-bold"> Looking for any Project Management, UX/UI, or Front-End Development Roles!</p>
    <h1 className="text-my-gray font-bold mt-4"> Skills: </h1>
    <p className="text-my-gray"> <span className="underline underline-offset-6">Languages:</span>  HTML | CSS | JavaScript | Java </p>
    <p className="text-my-gray"> <span className="underline underline-offset-6">Software & Tools:</span> Node.js | VS Code | IntelliJ | </p>
    <p className="text-my-gray "><span className="underline underline-offset-6">Other Relevant Skills:</span> Academic Writing | User Research | Desktop Imaging| Interviewing | Wireframing</p>

    <h1 className="text-my-gray font-bold mt-4"> I am Strong In: </h1>
    <p className="text-my-gray ">Leadership, Collaboration, Project Management, Communication, Editing, Problem Solving</p>


 </div>
 <div id= "about me pic">
   <Image className="rounded-lg ml-[8rem] mt-8" 
   src={aboutmepic} width={400} height={400} alt="github icon"></Image>
 </div>
        </div>
    

    );
}