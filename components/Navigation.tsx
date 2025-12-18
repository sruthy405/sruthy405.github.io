"use client"
import { Page } from "@/types/page";
import { Home, Sun, Moon, User, Mail } from "lucide-react"

interface NavigationProps {
  currentPage: "home" | "about" | "contact"
setCurrentPage: (page: Page) => void;
  theme: "dark" | "light"
  toggleTheme: () => void
}

export function Navigation({ currentPage, setCurrentPage, theme, toggleTheme }: NavigationProps) {
  return (
    /* Moved navigation to top with fixed positioning */
    <nav
      className={`fixed top-0 left-0 right-0 z-50 px-6 py-4 backdrop-blur-lg transition-colors ${
        theme === "dark" ? "bg-[#1a1f2e]/80 border-b border-gray-700" : "bg-white/80 border-b border-gray-200"
      }`}
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo - Changed from JB to SS */}
        <button
          onClick={() => setCurrentPage("home")}
          className={`text-xl font-bold hover:opacity-80 transition-opacity ${
            theme === "dark" ? "text-[#9fa2de]" : "text-[#949ad7]"
          }`}
          aria-label="Home"
        >
          SS
        </button>

        {/* Nav Links */}
        <div className="flex items-center gap-12 absolute left-1/2 -translate-x-1/2">
          <button
            onClick={() => setCurrentPage("home")}
            className={`flex items-center gap-2 transition-colors text-sm ${
              currentPage === "home"
                ? theme === "dark"
                  ? "text-[#9fa2de]"
                  : "text-[#949ad7]"
                : theme === "dark"
                  ? "text-gray-400 hover:text-[#9fa2de]"
                  : "text-gray-500 hover:text-[#949ad7]"
            }`}
            aria-current={currentPage === "home" ? "page" : undefined}
          >
            <Home className="w-5 h-5" />
            <span className="hidden md:inline">Home</span>
          </button>
          <button
            onClick={() => setCurrentPage("about")}
            className={`flex items-center gap-2 transition-colors text-sm ${
              currentPage === "about"
                ? theme === "dark"
                  ? "text-[#9fa2de]"
                  : "text-[#949ad7]"
                : theme === "dark"
                  ? "text-gray-400 hover:text-[#9fa2de]"
                  : "text-gray-500 hover:text-[#949ad7]"
            }`}
            aria-current={currentPage === "about" ? "page" : undefined}
          >
            <User className="w-5 h-5" />
            <span className="hidden md:inline">About</span>
          </button>
          <button
            onClick={() => setCurrentPage("contact")}
            className={`flex items-center gap-2 transition-colors text-sm ${
              currentPage === "contact"
                ? theme === "dark"
                  ? "text-[#9fa2de]"
                  : "text-[#949ad7]"
                : theme === "dark"
                  ? "text-gray-400 hover:text-[#9fa2de]"
                  : "text-gray-500 hover:text-[#949ad7]"
            }`}
            aria-current={currentPage === "contact" ? "page" : undefined}
          >
            <Mail className="w-5 h-5" />
            <span className="hidden md:inline">Contact</span>
          </button>
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggleTheme}
          className={`transition-colors ${
            theme === "dark" ? "text-gray-400 hover:text-[#9fa2de]" : "text-gray-600 hover:text-[#949ad7]"
          }`}
          aria-label="Toggle theme"
        >
          {theme === "dark" ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
        </button>
      </div>
    </nav>
  )
}
