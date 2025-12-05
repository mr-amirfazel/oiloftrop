import Silk from '../../../components/Silk';
import BlurText from "@/components/BlurText";
import ScrambledText from "@/components/ScrambledText";
import { GlowDivider } from "@/components/Divider";
import { AboutSection } from "./AboutSection";
import LogoLoop from '../../../components/LogoLoop';
import { SiReact, SiAngular, 
  SiTypescript, SiTailwindcss, 
  SiGnubash, SiRedux, SiReactivex, 
  SiDocker, SiKubernetes, SiPython, SiFlask,
  SiMysql , SiGit, SiGo
} from 'react-icons/si';
import { VerticalTimeline } from "@/components/VerticalTimeLine";
import { description, education, interests, pfp, titles, workExperience } from "@/constants/about";
import FlowingMenu from "@/components/FlowingMenu";
import { FaGithub, FaMedium, FaLinkedin, FaTelegram, FaEnvelope  } from "react-icons/fa";
import RotatingText from "@/components/RotatingText";




const techLogos = [
  { node: <SiReact />, title: "React", href: "https://react.dev" },
  { node: <SiTypescript />, title: "TypeScript", href: "https://www.typescriptlang.org" },
  { node: <SiTailwindcss />, title: "Tailwind CSS", href: "https://tailwindcss.com" },
  { node: <SiAngular />, title: "Angular", href: "" },
  { node: <SiGnubash />, title: "Bash", href: "" },

  { node: <SiRedux />, title: "Redux", href: "" },
  { node: <SiReactivex />, title: "RxJs", href: "" },
  { node: <SiDocker />, title: "Docker", href: "" },
  { node: <SiKubernetes />, title: "Kubernetes", href: "" },

  { node: <SiPython />, title: "Python", href: "" },
  { node: <SiFlask />, title: "Flask", href: "" },
  { node: <SiMysql />, title: "Mysql", href: "" },

  { node: <SiGit />, title: "Git", href: "" },
  { node: <SiGo />, title: "Golang", href: "" },
];

export const About = () => {
    return (

        <div className="relative w-full h-full overflow-hidden">
        {/* <SplashCursor /> */}

        {/* Background animation */}
        <div className="absolute inset-0">
        <Silk
                    speed={5}
                    scale={1}
                    color="#2263b3"
                    noiseIntensity={1.5}
                    rotation={0}
                >
                </Silk>
        </div>

        {/* Foreground content */}
      <div className="relative z-10 max-w-5xl mx-auto my-8 h-full overflow-y-auto pr-2 scrollbar-hide ">
        <div className="flex flex-col items-center gap-6 p-6 rounded-3xl bg-white/10 backdrop-blur-lg border border-white/20 shadow-xl">
          {/* Avatar */}
          <div className="flex gap-6">
            <div className="flex-shrink-0">
              <img
                className="w-28 h-28 rounded-full ring-4 ring-white/20 shadow-md"
                src={pfp}
                alt="Amirfazel"
              />
            </div>

            {/* Intro Text */}
            <div className="flex-1">
              <BlurText
                text="Hi! I'm Amirfazel"
                delay={150}
                animateBy="letters"
                direction="top"
                className="text-3xl font-bold mb-2 text-yellow-400 "
              />
              <ScrambledText
                radius={30}
                duration={1.2}
                speed={0.7}
                scrambleChars='**'
                >
                    {description}
                </ScrambledText>
            </div>

          </div>

          <GlowDivider />
          
          {/* <AboutSection title=""> */}
            <RotatingText
              texts={titles}
              className="w-full flex px-2 sm:px-2 md:px-3  bg-white/5 text-yellow-300 text-3xl font-mono overflow-hidden py-0.5 sm:py-1 md:py-2 justify-center items-center rounded-lg shadow-md"
              staggerFrom={"last"}
              initial={{ y: "100%" }}
              animate={{ y: 0 }}
              exit={{ x: "-120%", y: '100%' }}
              staggerDuration={0.025}
              splitLevelClassName="overflow-hidden pb-0.5 sm:pb-1 md:pb-1 text-center"
              transition={{ type: "spring", damping: 30, stiffness: 400 }}
              rotationInterval={3500}
            />
          {/* </AboutSection> */}

          <GlowDivider />


          <AboutSection title="My Skills">
            {/* <div style={{ height: '200px', position: 'relative', overflow: 'hidden'}}> */}
              <LogoLoop
                logos={techLogos}
                speed={120}
                direction="left"
                logoHeight={48}
                gap={40}
                pauseOnHover
                scaleOnHover
                fadeOut
                fadeOutColor="#8dbcf7"
                ariaLabel="Technology partners"
              />
            {/* </div> */}
          </AboutSection>

          <GlowDivider />


          <AboutSection title="Experience">
            <VerticalTimeline items={workExperience}/>
          </AboutSection>

          <GlowDivider />

          <AboutSection title="Education">
            <VerticalTimeline items={education}/>
          </AboutSection>

          <GlowDivider />

          <AboutSection title="Interests (changing day by day)">
            {/* <ul>
              <li>Distributed Systems</li>
              <li>Distributed Databases</li>
              <li>Cloud Computing</li>
              <li>Operating Systems</li>
              <li>Data Retreival Engines</li>
            </ul> */}
            {/* <div className="flex flex-wrap gap-3">
            {interests.map((interest, idx) => (
              <span
                key={idx}
                className="px-4 py-2 rounded-full bg-white/10 text-white/90 text-sm font-medium border border-white/20 backdrop-blur-md shadow-sm hover:bg-white/20 transition"
              >
                {interest}
              </span>
            ))}
          </div> */}
          <div className="h-[600px] relative rounded-lg overflow-clip">
            <FlowingMenu items={interests} />
          </div>
          </AboutSection>

          <GlowDivider />

          <AboutSection title="My Work">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 w-full">
              {/* Code Card */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-40 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold text-white">💻 I Code</h3>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-blue-500/20 to-purple-500/20 border border-white/20 backdrop-blur-md shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-white mb-3">See my Apps</p>
                    <a
                      href="https://github.com/mr-amirfazel"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition"
                    >
                      <FaGithub size={32} />
                    </a>
                  </div>
                </div>
              </div>

              {/* Write Card */}
              <div className="group [perspective:1000px]">
                <div className="relative w-full h-40 transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                  
                  {/* Front */}
                  <div className="absolute inset-0 flex items-center justify-center rounded-2xl bg-white/10 border border-white/20 backdrop-blur-md shadow-lg [backface-visibility:hidden]">
                    <h3 className="text-xl font-semibold text-white">✍️ I Write</h3>
                  </div>

                  {/* Back */}
                  <div className="absolute inset-0 flex flex-col items-center justify-center rounded-2xl bg-gradient-to-br from-green-500/20 to-teal-500/20 border border-white/20 backdrop-blur-md shadow-lg [transform:rotateY(180deg)] [backface-visibility:hidden]">
                    <p className="text-white mb-3">See my Articles!</p>
                    <a
                      href="https://medium.com/@amirfazel45"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white hover:text-yellow-400 transition"
                    >
                      <FaMedium size={32} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </AboutSection>

          <GlowDivider />

          <AboutSection title="Contact Me">
            <div className="flex justify-center gap-10 mt-4 p-4">
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/amirfazel-koozegar-kaleji-229682227/"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-blue-600/30">
                  <FaLinkedin className="text-white text-3xl transition-colors duration-300 group-hover:text-blue-400" />
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  LinkedIn
                </span>
              </a>

              {/* Telegram */}
              <a
                href="https://t.me/typical_live_wire"
                target="_blank"
                rel="noopener noreferrer"
                className="group relative"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-sky-600/30">
                  <FaTelegram className="text-white text-3xl transition-colors duration-300 group-hover:text-sky-400" />
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Telegram
                </span>
              </a>

              {/* Mail */}
              <a
                href="mailto:koozegar2000@gmail.com"
                className="group relative"
              >
                <div className="flex items-center justify-center w-16 h-16 rounded-full bg-white/10 border border-white/20 backdrop-blur-md shadow-lg transition-transform duration-300 group-hover:scale-110 group-hover:bg-yellow-600/30">
                  <FaEnvelope className="text-white text-3xl transition-colors duration-300 group-hover:text-yellow-400" />
                </div>
                <span className="absolute left-1/2 -translate-x-1/2 mt-2 text-sm text-gray-300 opacity-0 group-hover:opacity-100 transition-opacity">
                  Email
                </span>
              </a>
            </div>
        </AboutSection>
          <GlowDivider />

          
      </div>
       
      </div>

      </div>
    )
}

