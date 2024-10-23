import Image from "next/image";
import scoutpic from "/public/homebuyerguide (1).png"; 
import ivpic from "/public/saiv1.png"; 
import apopic from "/public/apo.png"; 
import choirpic from "/public/choir.png"; 

export default function Leadership() {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
      <h1 className="font-serif text-3xl lg:text-5xl text-my-pink font-bold text-center">
        Leadership & Involvement!
      </h1>
      <p className="font-serif text-center text-my-gray max-w-4xl mx-auto mt-5">
        Right now, I'm working on honing in my leadership skills in many different roles! From working with designers and back-end developers, to my own community service initiatives and faith-based ministry. I'm <span className="font-bold">passionate about effective leadership and communication</span> to facilitate projects between many different types of people.
      </p>
      <div className="grid grid-cols-1 gap-12 mt-12 place-items-center">
        {/* Developer + Journalist @ Scout */}
        <div className="flex justify-center items-start gap-4 max-w-4xl">
          <p className="text-my-gray font-serif min-w-[8rem]">Sept 2024 — PRESENT</p>
          <div className="flex flex-1 gap-4 items-start">
            <div>
              <h2 className="text-lg font-bold text-my-gray font-serif">Developer + Journalist @ Scout</h2>
              <p className="text-sm text-my-pink font-bold font-serif">Collaboration, Decision Making, Communication</p>
              <p className="text-base font-light text-my-gray font-serif max-w-[25rem]">
              Conducted extensive interviews with first-time homebuyers in Boston to gain insights into needs and challenges. Reworked a website to streamline the homebuying process for Bostonians. Developed strategies for streamlining the homebuying process and improving accessibility.
              </p>
            </div>
            <Image src={scoutpic} alt="Project Lead @ Scout" className="w-[12rem] h-auto object-cover" />
          </div>
        </div>
         

        {/* Social Media Manager @ South Asian InterVarsity */}
        <div className="flex justify-center items-start gap-4 max-w-4xl">
          <p className="text-my-gray font-serif min-w-[8rem]">Sept 2023 — PRESENT</p>
          <div className="flex flex-1 gap-4 items-start">
            <div className="font-serif">
              <h2 className="text-lg font-bold text-my-gray">Social Media Manager @ South Asian InterVarsity</h2>
              <p className="text-sm text-my-pink font-bold">Creativity, Design, Writing</p>
              <p className="text-base font-light text-my-gray max-w-[25rem]">
                Managing social media platform, grew Instagram to 100+ followers, gained 10+ new members, curated Instagram posts and stories.
              </p>
            </div>
            <Image src={ivpic} alt="Social Media Manager @ South Asian InterVarsity" className="w-[12rem] h-auto object-cover" />
          </div>
        </div>

        {/* Member @ Alpha Phi Omega */}
        <div className="flex justify-center items-start gap-4 max-w-4xl">
          <p className="text-my-gray font-serif min-w-[8rem]">Jan 2024 — PRESENT</p>
          <div className="flex flex-1 gap-4 items-start">
            <div className="font-serif">
              <h2 className="text-lg font-bold text-my-gray">Member @ Alpha Phi Omega</h2>
              <p className="text-sm text-my-pink font-bold">Service, Leadership, Fellowship</p>
              <p className="text-base font-light text-my-gray max-w-[25rem]">
                Engaging in community service projects, participating in leadership training, fostering fellowship among members.
              </p>
            </div>
            <Image src={apopic} alt="Brother/Member @ Alpha Phi Omega" className="w-[12rem] h-auto object-cover" />
          </div>
        </div>

        {/* Member @ NU Choral Society */}
        <div className="flex justify-center items-start gap-4 max-w-4xl">
          <p className="text-my-gray font-serif min-w-[8rem]">Sept 2023 — PRESENT</p>
          <div className="flex flex-1 gap-4 items-start">
            <div className="font-serif">
              <h2 className="text-lg font-bold text-my-gray">Member @ NU Choral Society</h2>
              <p className="text-sm text-my-pink font-bold">Music, Performance, Teamwork</p>
              <p className="text-base font-light text-my-gray max-w-[25rem]">
                Participating in choral performances, collaborating with fellow singers, developing musical skills.
              </p>
            </div>
            <Image src={choirpic} alt="Member @ NU Choral Society" className="w-[12rem] h-auto object-cover" />
          </div>
        </div>
      </div>
    </div>
  );
}
