"use client"

import { ExternalLink } from "lucide-react"

interface HeroProps {
  setCurrentPage: (page: "home" | "about" | "contact") => void
  theme: "dark" | "light"
}

export function Hero({ setCurrentPage, theme }: HeroProps) {
  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 overflow-hidden pt-24">
      {/* Background Text */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="text-[12rem] lg:text-[16rem] font-bold text-transparent select-none whitespace-nowrap opacity-[0.05]">
          <span className="block">Innovation</span>
          <span className="block">Architecture</span>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-4xl w-full relative z-10">
        <div className="mb-8">
          <p className={`${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
            <span className="inline-block mr-2">👋</span>
            Hey! I'm Sruthy
          </p>
        </div>

        {/* Heading with Gradient Text */}
        <h1 className="text-4xl md:text-5xl lg:text-6xl mb-8">
          <div className="flex flex-col space-y-1.5 p-6 max-md:absolute max-md:w-full max-md:transform max-md:-translate-x-1/2 max-md:-translate-y-1/2 max-md:top-1/2 max-md:left-1/2 max-md:pb-[200px]">
            <div className="w-full" style={{ opacity: 1 }}>
              <div
                className={`flex items-center justify-center w-full h-6 md:py-1 mb-[10px] max-md:text-[14px] text-[16px] ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}
              >
                <span
                  style={{
                    background: "linear-gradient(rgb(0, 255, 102) 0%, rgb(98, 236, 254) 100%)",
                    WebkitTextFillColor: "transparent",
                    backgroundClip: "text",
                    textShadow: "rgba(98, 236, 254, 0.2) 0px 0px 22.43px, rgba(0, 255, 102, 0.5) 0px 0px 22.43px",
                    fontWeight: "400",
                    lineHeight: "24px",
                    letterSpacing: "1.6px",
                    textTransform: "uppercase",
                    textAlign: "center",
                    opacity: 1,
                    transform: "none",
                    fontFamily: "monospace",
                  }}
                >
                  <span className="font-mono">Hey! It's me, Sruthy...Welcome, to my portfolio</span>
                </span>
              </div>
            </div>
          </div>

          <span className={`block ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            <span
              style={{
                background: "linear-gradient(90deg, #949ad7 0%, #5E64B8 100%)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
                backgroundClip: "text",
                fontSize: "inherit",
                fontWeight: "inherit",
              }}
            >
              Learning fast. Building better. Preparing for real-world impact.
            </span>
          </span>
        </h1>

        {/* Description */}
        <div className="max-w-md mb-12">
          <p className={`leading-relaxed ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
            Evolving as a developer with a focus on performance, reliability, and continuous improvement.
          </p>
        </div>

        {/* Social Links and CTA */}
        <div className="flex flex-wrap items-center gap-6">
          {/* Social Links */}
          <a
            href="https://www.linkedin.com/in/sruthys444/"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${theme === "dark" ? "text-gray-400 hover:text-[#9fa2de]" : "text-gray-700 hover:text-[#949ad7]"}`}
          >
            <span className="text-sm">LINKEDIN</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="https://github.com/sruthy405"
            target="_blank"
            rel="noopener noreferrer"
            className={`flex items-center gap-2 transition-colors ${theme === "dark" ? "text-gray-400 hover:text-[#9fa2de]" : "text-gray-700 hover:text-[#949ad7]"}`}
          >
            <span className="text-sm">GITHUB</span>
            <ExternalLink className="w-4 h-4" />
          </a>
          <a
            href="mailto:sruthysojan444@gmail.com"
            className={`flex items-center gap-2 transition-colors ${theme === "dark" ? "text-gray-400 hover:text-[#9fa2de]" : "text-gray-700 hover:text-[#949ad7]"}`}
          >
            <span className="text-sm">EMAIL</span>
            <ExternalLink className="w-4 h-4" />
          </a>

          {/* CTA Button */}
          <button
            onClick={() => setCurrentPage("about")}
            className={`ml-auto px-6 py-3 border-2 transition-all duration-300 rounded ${
              theme === "dark"
                ? "border-[#9fa2de] text-[#9fa2de] hover:bg-[#9fa2de] hover:text-[#1a1f2e]"
                : "border-[#949ad7] text-[#949ad7] hover:bg-[#949ad7] hover:text-white"
            }`}
          >
            Know me better
          </button>
        </div>
      </div>
    </section>
  )
}
