"use client";
import { Page } from "@/types/page";
import { useState, useEffect } from "react";
import { Navigation } from "@/components/Navigation";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { GetInTouch } from "@/components/GetInTouch";



export default function Page() {
  
const [currentPage, setCurrentPage] = useState<Page>("home");
  const [theme, setTheme] = useState<"dark" | "light">("light");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const savedTheme = localStorage.getItem("theme") as "dark" | "light" | null;
    const initialTheme = savedTheme || "light";
    setTheme(initialTheme);
    if (initialTheme === "dark") {
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    localStorage.setItem("theme", newTheme);
    if (newTheme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  if (!mounted) return null;

  return (
    <div className="min-h-screen transition-colors duration-300 bg-background text-foreground">
      <Navigation
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
        theme={theme}
        toggleTheme={toggleTheme}
      />

      <main className="space-y-20">
       {currentPage === "home" && <Hero setCurrentPage={setCurrentPage} theme={theme} />}
{currentPage === "about" && <About setCurrentPage={setCurrentPage} theme={theme} />}
{currentPage === "contact" && <GetInTouch setCurrentPage={setCurrentPage} theme={theme} />}

      </main>
    </div>
  );
}
