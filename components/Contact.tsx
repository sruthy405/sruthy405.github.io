import { Mail, Linkedin, Github } from "lucide-react"

interface ContactProps {
  theme: "dark" | "light"
}

export function Contact({ theme }: ContactProps) {
  return (
    <section
      id="contact"
      className={`min-h-screen text-white flex items-center justify-center px-6 py-24 ${
        theme === "dark" ? "bg-[#1a1f2e]" : "bg-[#f5f4f9]"
      }`}
    >
      <div className="max-w-5xl w-full">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          {/* Left Side - Heading */}
          <div>
            <h1 className="text-6xl md:text-7xl mb-4">Contact</h1>
            <p className="text-xl text-gray-200">Feel Free to reach out!</p>
          </div>

          {/* Right Side - Contact Info */}
          <div className="space-y-6">
            {/* Email */}
            <a
              href="mailto:sruthysojan444@gmail.com"
              className={`flex items-center gap-4 text-lg transition-colors group ${
                theme === "dark" ? "text-gray-400 hover:text-[#9fa2de]" : "text-gray-700 hover:text-[#949ad7]"
              }`}
            >
              <Mail className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:underline">sruthysojan444@gmail.com</span>
            </a>

            {/* LinkedIn */}
            <a
              href="https://www.linkedin.com/in/sruthys444/"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 text-lg transition-colors group ${
                theme === "dark" ? "text-gray-400 hover:text-[#9fa2de]" : "text-gray-700 hover:text-[#949ad7]"
              }`}
            >
              <Linkedin className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:underline">linkedin.com/username</span>
            </a>

            {/* GitHub */}
            <a
              href="https://github.com/sruthy405"
              target="_blank"
              rel="noopener noreferrer"
              className={`flex items-center gap-4 text-lg transition-colors group ${
                theme === "dark" ? "text-gray-400 hover:text-[#9fa2de]" : "text-gray-700 hover:text-[#949ad7]"
              }`}
            >
              <Github className="w-5 h-5 flex-shrink-0" />
              <span className="group-hover:underline">github.com/username</span>
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}
