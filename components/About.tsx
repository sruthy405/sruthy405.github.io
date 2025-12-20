"use client"
import { Page } from "@/types/page";
import { ProjectCard } from "./ProjectCard"
import { FaLocationDot } from "react-icons/fa6";


import { useState } from "react";



interface AboutProps {
  theme: "dark" | "light"
setCurrentPage: (page: Page) => void;
}

const skills = [
  { name: "HTML", image: "/html.svg" },
  { name: "CSS", image: "/css.svg" },
  { name: "JavaScript", image: "/images/javascript.png" },
  { name: "React", image: "/react.svg" },
  { name: "Node.js", image: "/node.svg" },
  { name: "Java", image: "/images/java.png" },
  { name: "PHP", image: "/php.svg" },
  { name: "SQL", image: "/sql.svg" },
  { name: "Flutter", image: "/placeholder.svg" },
  { name: "Python", image: "/placeholder.svg" },
  { name: "TypeScript", image: "/placeholder.svg" },
  { name: "MongoDB", image: "/placeholder.svg" },
]

export function About({ theme, setCurrentPage }: AboutProps) {
 const handleResumeClick = () => {
  window.open("/Sruthy_Sojan_CV.pdf", "_blank");
};


  return (
    <div
      className={`min-h-screen py-24 px-6 transition-colors pt-32 ${
        theme === "dark" ? "bg-[#1a1f2e] text-white" : "bg-[#f5f4f9] text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Profile Section */}
        <div className="flex flex-col items-center md:items-start md:flex-row gap-12 mb-20">
          {/* Profile Image with Circle Text */}
          <div className="relative w-48 h-48 flex-shrink-0">
            <div className="absolute inset-0 flex items-center justify-center">
              <svg className="w-full h-full animate-spin-slow" viewBox="0 0 180 180">
  <defs>
    <path
      id="circlePath"
      d="
        M90,90
        m -70,0
        a 70,70 0 1,1 140,0
        a 70,70 0 1,1 -140,0
      "
      fill="none"
    />
  </defs>

  <text
    className={`text-[10px] font-bold tracking-[0.15em] uppercase ${
      theme === 'dark' ? 'fill-gray-500' : 'fill-gray-600'
    }`}
    textAnchor="middle"
  >
    <textPath href="#circlePath" startOffset="50%">
      • computer science engineer • aspiring developer • fresher •
    </textPath>
  </text>
</svg>

            </div>
            <div
              className={`absolute inset-6 rounded-full overflow-hidden border-4 flex items-center justify-center text-6xl ${theme === "dark" ? "border-[#9fa2de]" : "border-[#949ad7]"}`}
            >
              👩‍💻
            </div>
          </div>

          {/* Profile Info */}
          <div className="flex-1">
            <h1 className={`text-4xl md:text-5xl mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
              Sruthy Sojan
            </h1>
            <p className={`mb-6 leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
  Crafting clean, user-focused web experiences while learning to build scalable solutions that support real-world needs and foster continuous growth.
</p>

<p className={`mb-6 flex items-center gap-2 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
  <FaLocationDot className="text-lg" />
  Based in India
</p>


            <button
              onClick={handleResumeClick}
              className={`px-6 py-2 border transition-all duration-300 rounded flex items-center gap-2 ${
                theme === "dark"
                  ? "border-[#9fa2de] text-[#9fa2de] hover:bg-[#9fa2de] hover:text-[#1a1f2e]"
                  : "border-[#949ad7] text-[#949ad7] hover:bg-[#949ad7] hover:text-white"
              }`}
            >
              <img src="/resume-icon.svg" alt="Resume" className="w-4 h-4 flex-shrink-0" />
              My Resume
            </button>
          </div>
        </div>
{/* About Me Section */}
<div className="mb-20 max-w-3xl">
  <div className="flex items-center gap-2 mb-4">
    <span className={`text-sm ${theme === "dark" ? "text-[#9fa2de]" : "text-[#949ad7]"}`}>
      ✦ ABOUT ME
    </span>
  </div>

  <h2 className={`text-4xl md:text-5xl mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
    About Me
  </h2>

  <p className={`leading-relaxed mb-6 ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
    I'm a creative front-end developer passionate about building modern and responsive web experiences.
    My journey began with a love for design and evolved into a deep curiosity for how the web works —
    combining logic with creativity to bring ideas to life.
  </p>

  <p className={`leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
    When I'm not coding, I enjoy learning new technologies, improving my projects,
    and exploring better ways to make the web faster and more engaging.
    I believe in continuous learning, attention to detail, and the power of clean, meaningful design.
  </p>
</div>

        {/* Skills Section */}
        <div className="mb-20">
          <div className="flex items-center gap-2 mb-8">
            <span className={`text-sm ${theme === "dark" ? "text-[#9fa2de]" : "text-[#949ad7]"}`}>
              ✦ TECHNICAL SKILLS
            </span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>Skills</h2>

          <div className="relative overflow-hidden">
            <div className="flex whitespace-nowrap font-sans tracking-[-0.02em] items-center text-xs md:text-sm">
              {/* First set */}
              <span className="flex-shrink-0 animate-marquee">
                <div className="flex flex-row gap-4 md:gap-6 items-center px-3">
                  {skills.map((skill, index) => (
                    <span
                      key={`skill-1-${index}`}
                      className={`relative cursor-default px-3 py-1.5 rounded-2xl flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                        theme === "dark"
                          ? "bg-[#242d42] text-white border border-[#31366c]"
                          : "bg-white text-gray-900 border border-[#e8e5f5]"
                      }`}
                    >
                      <img
                        src={skill.image || "/placeholder.svg"}
                        alt={skill.name}
                        className="size-5 flex-shrink-0 object-contain"
                      />
                      <span className="text-xs md:text-sm">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </span>

              {/* Duplicate sets for seamless loop */}
              <span className="flex-shrink-0 animate-marquee" aria-hidden="true">
                <div className="flex flex-row gap-4 md:gap-6 items-center px-3">
                  {skills.map((skill, index) => (
                    <span
                      key={`skill-2-${index}`}
                      className={`relative cursor-default px-3 py-1.5 rounded-2xl flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                        theme === "dark"
                          ? "bg-[#242d42] text-white border border-[#31366c]"
                          : "bg-white text-gray-900 border border-[#e8e5f5]"
                      }`}
                    >
                      <img
                        src={skill.image || "/placeholder.svg"}
                        alt={skill.name}
                        className="size-5 flex-shrink-0 object-contain"
                      />
                      <span className="text-xs md:text-sm">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </span>

              <span className="flex-shrink-0 animate-marquee" aria-hidden="true">
                <div className="flex flex-row gap-4 md:gap-6 items-center px-3">
                  {skills.map((skill, index) => (
                    <span
                      key={`skill-3-${index}`}
                      className={`relative cursor-default px-3 py-1.5 rounded-2xl flex items-center gap-2 whitespace-nowrap flex-shrink-0 ${
                        theme === "dark"
                          ? "bg-[#242d42] text-white border border-[#31366c]"
                          : "bg-white text-gray-900 border border-[#e8e5f5]"
                      }`}
                    >
                      <img
                        src={skill.image || "/placeholder.svg"}
                        alt={skill.name}
                        className="size-5 flex-shrink-0 object-contain"
                      />
                      <span className="text-xs md:text-sm">{skill.name}</span>
                    </span>
                  ))}
                </div>
              </span>
            </div>
          </div>
        </div>

       
{/* What Drives Me Section */}
<div className="mb-20">
  <div className="flex items-center gap-2 mb-4">
    <span className={`text-sm ${theme === "dark" ? "text-[#9fa2de]" : "text-[#949ad7]"}`}>
      ✦ MY BACKGROUND
    </span>
  </div>

  <h2 className={`text-4xl md:text-5xl mb-10 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
    What Drives Me
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
    {/* Card 1 */}
    <div
      className={`
        rounded-xl p-6 border transition-transform hover:-translate-y-1 hover:shadow-lg
        ${theme === "dark"
          ? "bg-[#242d42] border-[#31366c] text-white"
          : "bg-white border-[#e8e5f5] text-gray-900"}
      `}
    >
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <i className="fa-solid fa-code"></i> Languages
      </h3>
      <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
        HTML, CSS, JavaScript, Java, C, React
      </p>
    </div>

    {/* Card 2 */}
    <div
      className={`
        rounded-xl p-6 border transition-transform hover:-translate-y-1 hover:shadow-lg
        ${theme === "dark"
          ? "bg-[#242d42] border-[#31366c] text-white"
          : "bg-white border-[#e8e5f5] text-gray-900"}
      `}
    >
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <i className="fa-solid fa-graduation-cap"></i> Education
      </h3>
      <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
        BTech in Computer Science
      </p>
    </div>

    {/* Card 3 */}
    <div
      className={`
        rounded-xl p-6 border transition-transform hover:-translate-y-1 hover:shadow-lg
        ${theme === "dark"
          ? "bg-[#242d42] border-[#31366c] text-white"
          : "bg-white border-[#e8e5f5] text-gray-900"}
      `}
    >
      <h3 className="text-xl font-semibold mb-2 flex items-center gap-2">
        <i className="fa-solid fa-folder-open"></i> Projects
      </h3>
      <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
        Built more than 5 projects
      </p>
    </div>
  </div>
</div>

        {/* Projects Section */}
        <div
          id="Projects"
          className={`mb-20 pb-20 ${theme === "dark" ? "border-b border-gray-700" : "border-b border-gray-400"}`}
        >
          <div className="flex items-center gap-2 mb-8">
            <span className={`text-sm ${theme === "dark" ? "text-[#9fa2de]" : "text-[#949ad7]"}`}>✦ MY WORK</span>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-12 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Projects
          </h2>
          <p className={`mb-12 max-w-2xl ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
            Here are some of the projects I've worked on, showcasing my skills and creativity.
          </p>

          {/* Projects Grid */}
          <div className="py-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            <ProjectCard
  theme={theme}
  title="Portfolio Website"
  main="A modern, responsive portfolio website built with React and Tailwind CSS featuring smooth animations and theme switching."
  image="/project_1.png"
  tags={["React", "Tailwind CSS", "JavaScript", "Responsive Design"]}
  github="https://github.com/sruthy405/sruthy405.github.io"
  demo="https://sruthy405githubio.vercel.app/"
  
/>

           <ProjectCard
  theme={theme}
  title="Weather App"
  main="Responsive app showing real-time weather data using API integration."
  image="/project_2.png"
  tags={["HTML", "CSS", "JS","API"]}
  github="https://github.com/sruthy405/weather-forecast-app"
  demo="https://sruthy405.github.io/weather-forecast-app/"
/>


            <ProjectCard theme={theme} 
            title="Flip Card Game" 
            main="A Simple Flip Card Web Game." 
            image="/project_3.png" 
            tags={["HTML", "CSS", "JS"]}
             github="https://github.com/sruthy405/Flip-Card-Game" 
             demo="https://sruthy405.github.io/Flip-Card-Game/" />

             <ProjectCard
  theme={theme}
  title="Number Pop - Math Challenge Game"
  main="A fast, fun math puzzle game built with React + TypeScript."
  image="/project_4.png"
  tags={["React", "TypeScript", "NextJS"]}
  github="https://github.com/sruthy405/number-pop"
  demo="https://sruthy405.github.io/number-pop/"
/>

             <ProjectCard theme={theme} 
            title="Weather App2" 
            main="Responsive app showing real-time weather data using API integration." 
            image="/images/weather.jpg" tags={["HTML", "CSS", "API"]}
             github="https://github.com/yourrepo" 
             demo="https://yourdemo.com" />

             <ProjectCard theme={theme} 
            title="Weather App3" 
            main="Responsive app showing real-time weather data using API integration." 
            image="/images/weather.jpg" tags={["HTML", "CSS", "API"]}
             github="https://github.com/yourrepo" 
             demo="https://yourdemo.com" />

            

          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center py-16">
          <div
            className={`relative cursor-default inline-flex items-center gap-2 px-3 py-1.5 border border-dashed rounded-full text-sm mb-8 ${
              theme === "dark"
                ? "border-[#9fa2de] text-[#9fa2de] bg-[#2e3147]"
                : "border-[#949ad7] text-[#949ad7] bg-[#e8e5f5]"
            }`}
          >
            <span className="relative size-1.5">
              <span
                className={`absolute flex h-full w-full animate-ping rounded-full opacity-75 ${
                  theme === "dark" ? "bg-[#9fa2de]" : "bg-[#949ad7]"
                }`}
              ></span>
              <span
                className={`relative flex w-full h-full rounded-full ${
                  theme === "dark" ? "bg-[#9fa2de]" : "bg-[#949ad7]"
                }`}
              ></span>
            </span>
            <span className="font-medium">Available for work</span>

            {/* Decorative SVG corners */}
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className={`z-50 absolute fill-current top-0 left-0 -translate-x-[58%] -translate-y-[58%] size-1.5`}
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className={`z-50 absolute fill-current top-0 right-0 translate-x-[58%] -translate-y-[58%] size-1.5`}
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className={`z-50 absolute fill-current bottom-0 left-0 -translate-x-[58%] translate-y-[58%] size-1.5`}
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
            </svg>
            <svg
              width="5"
              height="5"
              viewBox="0 0 5 5"
              className={`z-50 absolute fill-current bottom-0 right-0 translate-x-[58%] translate-y-[58%] size-1.5`}
            >
              <path d="M2 0h1v2h2v1h-2v2h-1v-2h-2v-1h2z"></path>
            </svg>
          </div>
          <h2 className={`text-4xl md:text-5xl mb-8 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Let's Work Together
          </h2>
          <button
            onClick={() => setCurrentPage("contact")}
            className={`px-8 py-3 border-2 transition-all duration-300 rounded ${
              theme === "dark"
                ? "border-[#9fa2de] text-[#9fa2de] hover:bg-[#9fa2de] hover:text-[#1a1f2e]"
                : "border-[#949ad7] text-[#949ad7] hover:bg-[#949ad7] hover:text-white"
            }`}
          >
            Get In Touch
          </button>
        </div>

        {/* Contact Section - Footer Style */}
        <section
          id="contact"
          className={`flex flex-col md:flex-row justify-between items-start md:items-center gap-8 p-10 md:p-12 rounded-2xl ${
            theme === "dark" ? "bg-[#242d42] text-white" : "bg-[#949ad7] text-white"
          }`}
        >
          <div>
            <h2 className="text-3xl md:text-5xl lg:text-6xl mb-2">Contact</h2>
            <h3 className="text-base md:text-xl lg:text-2xl">Feel Free to reach out!</h3>
          </div>

          <ul className="text-sm md:text-base lg:text-xl space-y-3">
            <li className="flex gap-2 items-center">
              <img src="/mail.svg" alt="Mail" className="w-5 h-5 flex-shrink-0" />
              <a href="mailto:sruthysojan444@gmail.com" className="hover:underline transition-all break-all">
                sruthysojan444@gmail.com
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <img src="/linkedin.svg" alt="Linkedin" className="w-5 h-5 flex-shrink-0" />
              <a
                href="https://linkedin.com/in/sruthys444"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-all"
              >
                linkedin.com/in/sruthys444
              </a>
            </li>
            <li className="flex gap-2 items-center">
              <img src="/github.svg" alt="Github" className="w-5 h-5 flex-shrink-0" />
              <a
                href="https://github.com/sruthy405"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline transition-all"
              >
                github.com/sruthy405
              </a>
            </li>
          </ul>
         
        </section>
        {/* Back To Top Button */}
<div
  onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
  className={`
    fixed bottom-10 right-10 w-12 h-12 rounded-full cursor-pointer z-50
    flex items-center justify-center transition-transform duration-300
    hover:scale-110 shadow-lg
    ${theme === "dark" ? "bg-[#9fa2de] text-[#1a1f2e]" : "bg-[#949ad7] text-white"}
  `}
>
  <i className="fa-solid fa-chevron-up text-lg"></i>
</div>
      </div>
    </div>
  )
}
