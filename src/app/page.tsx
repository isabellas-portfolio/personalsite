import Image from "next/image";
import Placeholder from "./components/placeholder";
import Link from "next/link";
import profilepic from "/public/profile.png"
import scoutpic from "/public/homebuyerguide (1).png"
import digitalwpic from "/public/digitalwriting.png"



export default function Home() {
  return (
    <main>
      <div id="first page start"className="mt-10 ml-[12rem] flex items-stretch gap-5 font-serif text-3xl lg:text-7xl">
      <div className="text-my-gray text-[50] font-light">✼❣❋</div>
        <div className="pl-2 text-my-gray"> Hi, I'm</div>
        <div className="text-my-pink">Isabella Iype!</div>
        <div className="text-my-gray text-[50] font-light">❋❣✼</div>

      </div>
      <div className="pl-4 gap-2 text-left lg:grid grid-cols-2">
        <div id="first column of grid" className="font-serif text-xl space-y-5 ml-[11.5rem] pt-10 text-my-gray "> 
          <h1> <span className="text-my-pink"> ❀˚ </span> Welcome to my Personal Website! <span className="text-my-pink">˚❀ </span> </h1> 
          <p className="max-w-[22rem] text-base"> <span className="text-my-pink">✧˚ · . </span> Pursuing a degree in Computer Science and English with a minor in Immersive Media @ 
          <span> <a target="_blank" rel="noopener noreferrer" 
               className="underline" 
               href="https://www.northeastern.edu"
               >Northeastern University</a></span>   
          <span className="text-my-pink"> .·˚✧</span> </p>
          <p className="max-w-[22rem] text-base"> <span className="font-bold" >Motivated </span> 
            by technology and the humanities <span className="font-bold">to find tech solutions </span> 
            that combine the analytical power of <span className="font-bold">Computer Science </span> 
            with the narratives of  <span className="font-bold">Language and Literature</span>. </p>
            <div id="Current positions">
              <h1 className="pl-2"> Currently:</h1>
              <div className="font-serif text-xl max-w-[230] pl-2">
               <p> <span className="animate-pulse text-my-pink">❀</span> IT Engineer @ <span> <a target="_blank" rel="noopener noreferrer" 
               className="text-my-pink underline underline-offset-6" 
               href="https://www.wayfair.com/gateway.php?&refid=GX281264597885.
               Wayfair~b&position=&network=g&pcrid=281264597885&device=c&targetid=
               kwd-3598608535&channel=GoogleBrand&gad_source=1&gbraid=
               0AAAAAD9ISC7kLJvWRXDDVBjYJigzZaqcx&gclid=CjwKCAjwo
               6GyBhBwEiwAzQTmc0isXH3SnABbw8GMXeSS06sS05bP387tfKjrGsFOzDGySSpDww0JwhoCnGUQAvD_BwE"
               >Wayfair</a></span> </p> 
              <p> <span className="animate-pulse text-my-pink">❀</span> Project Lead @ <span> <a target="_blank" rel="noopener noreferrer" 
               className="text-my-pink underline underline-offset-6" 
               href="https://scout.camd.northeastern.edu"
               >Scout</a></span> </p>
              <p> <span className="animate-pulse text-my-pink">❀</span> Small Group Leader & Social Media Manager @ <span> <a target="_blank" rel="noopener noreferrer" 
               className="text-my-pink underline underline-offset-6" 
               href="https://www.instagram.com/neusaiv/"
               >SAIV</a></span> </p>
              </div>
            </div>
            <div id="button" className="hover:scale-105">
              <Link href="/aboutme" className="bg-my-gray hover:bg-my-pink text-white font-bold py-1 px-2 border-b-2 border-neutral-800 hover:border-pink-700 rounded lg:py-2 px-4 border-b-4">
                More about me!
              </Link>
            </div>
        </div>
      
        <div id="second column of grid">
                    <Image className="rounded-lg ml-[8rem] mt-8" src={profilepic} width={400} height={400} alt="github icon"></Image>

                
                    </div>
        </div>

      <div className="font-serif text-center text-md mt-[5rem]"> <Link href={"#second_page_start"}>&#10597; my projects &#10597;</Link>
</div>
        <div 
            id="second_page_start"
            className="text-my-gray mt-[12rem] pt-10 flex flex-col font-serif text-3xl text-center font-bold lg:text-5xl">
              <h1 className="place-self-center">Projects: In and Out of the Classroom</h1>
              <div id="create_two_columns" className="grid grid-cols-2 gap-2 ml-10 mt-10">
                <div id="second_page_column1" className="space-y-[6rem] ml-14">
                <Image className="rounded-lg ml-[8rem] mt-8" src={scoutpic} width={400} height={400} alt="github icon"></Image>
                <Image className="rounded-lg ml-[8rem] mt-8" src={digitalwpic} width={400} height={400} alt="github icon"></Image>
                </div>

                <div id="second_page_column2" className="font-serif mr-40">
                    <div className="mt-[3rem]">
                    <h1 className="text-base text-nowrap font-bold lg: text-xl">Scout Labs 2024</h1>
                      <p className="text-sm text-my-pink font-bold font-serif lg:text-lg"> User Research, Academic Writing, User Interviewing</p>
                      <p className="text-base font-light"> Scout Labs is an interdisciplinary team that uses a human-centered design thinking process 
                        to research pressing civic issues and prototype creative solutions. 
                        As a part of Scout Labs as a Strategist + Journalist this semester, 
                        I aided in the research and narrative building for a website for first time homebuyers, 
                        partnered with City of Boston's Home Center and Housing Innovation Lab.  </p>
                        <Link href="/experience" className="text-base bg-my-gray hover:bg-my-pink text-white font-bold py-2 px-4 border-b-4 border-neutral-800 hover:border-pink-700 rounded">
                        View Full Description
                        </Link>
                      </div>  
                        
                        <div className="mt-[8rem]">
                        <h1 className="text-xl font-bold">Digital Writing Portfolio</h1>
                      <p className="text-lg text-my-pink font-bold font-serif"> Website Development, Website Design, UI/UX</p>
                      <p className="text-base font-light"> Final project for ENGL 2730- Digital Writing with 
                      Professor Lawrence Evalyn. Received an A on the final, and in the class! 
                      Had to develop and design the website from scratch using HTML/CSS and relevant technologies 
                      such as Github and Brackets.   </p>
                      <Link href="/experience" className="text-base bg-my-gray hover:bg-my-pink text-white font-bold py-2 px-4 border-b-4 border-neutral-800 hover:border-pink-700 rounded">
                        View Full Description
                        </Link>
                        </div>
                      
                       
                </div>

             
              </div>
            
        </div>
        <div className="mt-10 animate-bounce text-center font-serif"> <Link href="/experience" className="text-base bg-my-gray hover:bg-my-pink text-white font-bold py-2 px-4 border-b-4 border-neutral-800 hover:border-pink-700 rounded">
                        Explore More Projects!
                        </Link> </div>
        <div className="mt-20 font-serif text-center"> <Link href={"#first page start"}>&#10595; back to top &#10595;</Link>
</div>
    </main>
    
  );
}