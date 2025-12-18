"use client"
import { Page } from "@/types/page";
import type React from "react"
import { Mail, Linkedin, Github, Send } from "lucide-react"
import { useState } from "react"
import { useToast } from "@/hooks/use-toast"

interface GetInTouchProps {
  theme: "dark" | "light"
 setCurrentPage: (page: Page) => void;
}

export function GetInTouch({ theme, setCurrentPage }: GetInTouchProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle")
  const [errorMessage, setErrorMessage] = useState("")
  const { toast } = useToast()

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setStatus("loading")
    setErrorMessage("")

    try {
      const response = await fetch("/api/send-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          ...formData,
          type: "contact",
        }),
      })

      const data = await response.json()

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message")
      }

      setStatus("success")
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
      })

      toast({
        title: "Success",
        description: "Your message has been sent successfully!",
      })

      setTimeout(() => setStatus("idle"), 5000)
    } catch (error) {
      console.error("Error sending email:", error)
      const errorMsg = error instanceof Error ? error.message : "Failed to send message. Please try again."
      setErrorMessage(errorMsg)
      setStatus("error")

      toast({
        title: "Error",
        description: errorMsg,
        variant: "destructive",
      })
    }
  }

  return (
    <div
      className={`min-h-screen py-24 px-6 transition-colors pt-32 ${
        theme === "dark" ? "bg-[#1a1f2e] text-white" : "bg-[#f5f4f9] text-gray-900"
      }`}
    >
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className={`text-5xl md:text-6xl font-bold mb-6 ${theme === "dark" ? "text-white" : "text-gray-900"}`}>
            Get In Touch
          </h1>
          <p className={`text-lg max-w-2xl mx-auto ${theme === "dark" ? "text-gray-400" : "text-gray-700"}`}>
            Have a question or want to work together? Fill out the form below, and I'll get back to you shortly.
          </p>
        </div>

        {/* Form and Contact Info Grid */}
        <div className="grid md:grid-cols-3 gap-8">
          {/* Form Section */}
          <div className="md:col-span-2">
            <form
              onSubmit={handleSubmit}
              className={`p-8 rounded-2xl border ${
                theme === "dark" ? "bg-[#242d42] border-[#31366c]" : "bg-white border-gray-200"
              }`}
            >
              <div className="space-y-6">
                {/* Name and Email */}
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Name</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Enter your name"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        theme === "dark"
                          ? "bg-[#1a1f2e] border-[#31366c] text-white placeholder-gray-500 focus:border-[#9fa2de]"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#949ad7]"
                      } focus:outline-none`}
                      required
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Your Email</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="Enter your email address"
                      className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                        theme === "dark"
                          ? "bg-[#1a1f2e] border-[#31366c] text-white placeholder-gray-500 focus:border-[#9fa2de]"
                          : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#949ad7]"
                      } focus:outline-none`}
                      required
                    />
                  </div>
                </div>

                {/* Subject */}
                <div>
                  <label className="block text-sm font-medium mb-2">Subject</label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    placeholder="What is this about?"
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === "dark"
                        ? "bg-[#1a1f2e] border-[#31366c] text-white placeholder-gray-500 focus:border-[#9fa2de]"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#949ad7]"
                    } focus:outline-none`}
                    required
                  />
                </div>

                {/* Message */}
                <div>
                  <label className="block text-sm font-medium mb-2">Your Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Enter your message here..."
                    rows={6}
                    className={`w-full px-4 py-3 rounded-lg border transition-colors ${
                      theme === "dark"
                        ? "bg-[#1a1f2e] border-[#31366c] text-white placeholder-gray-500 focus:border-[#9fa2de]"
                        : "bg-gray-50 border-gray-200 text-gray-900 placeholder-gray-400 focus:border-[#949ad7]"
                    } focus:outline-none resize-none`}
                    required
                  />
                </div>

                {/* Success Message */}
                {status === "success" && (
                  <div
                    className={`p-4 rounded-lg border ${
                      theme === "dark"
                        ? "bg-green-900/20 border-green-800 text-green-200"
                        : "bg-green-50 border-green-200 text-green-800"
                    }`}
                  >
                    Thank you for your message! I'll get back to you soon.
                  </div>
                )}

                {/* Error Message */}
                {status === "error" && (
                  <div
                    className={`p-4 rounded-lg border ${
                      theme === "dark"
                        ? "bg-red-900/20 border-red-800 text-red-200"
                        : "bg-red-50 border-red-200 text-red-800"
                    }`}
                  >
                    {errorMessage}
                  </div>
                )}

                {/* Submit Button */}
                <button
                  type="submit"
                  disabled={status === "loading"}
                  className={`w-full px-6 py-3 rounded-lg font-medium transition-all duration-300 flex items-center justify-center gap-2 ${
                    status === "loading" ? "opacity-50 cursor-not-allowed" : "hover:brightness-110"
                  }`}
                  style={{
                    backgroundColor: "#4b4698",
                    color: "white",
                  }}
                  onMouseEnter={(e) => {
                    if (status !== "loading") e.currentTarget.style.backgroundColor = "#3d3673"
                  }}
                  onMouseLeave={(e) => {
                    if (status !== "loading") e.currentTarget.style.backgroundColor = "#4b4698"
                  }}
                >
                  {status === "loading" ? (
                    "Sending..."
                  ) : (
                    <>
                      Send Message
                      <Send className="w-4 h-4" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Contact Information */}
          <div>
            <div className="mb-12">
              <h3 className="text-xl font-bold mb-6">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Mail
                    className="w-5 h-5 flex-shrink-0 mt-1"
                    style={{ color: theme === "dark" ? "#9fa2de" : "#949ad7" }}
                  />
                  <a
                    href="mailto:sruthysojan444@gmail.com"
                    className={`hover:underline transition-colors ${
                      theme === "dark" ? "text-gray-400 hover:text-[#9fa2de]" : "text-gray-600 hover:text-[#949ad7]"
                    }`}
                  >
                    sruthysojan444@gmail.com
                  </a>
                </div>
              </div>
            </div>

            {/* Professional Networks */}
            <div>
              <h3 className="text-xl font-bold mb-6">Professional Networks</h3>
              <div className="flex gap-4">
                <a
                  href="https://linkedin.com/in/sruthys444"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all ${
                    theme === "dark"
                      ? "bg-[#242d42] text-[#9fa2de] hover:bg-[#9fa2de] hover:text-[#1a1f2e]"
                      : "bg-gray-200 text-[#949ad7] hover:bg-[#949ad7] hover:text-white"
                  }`}
                  aria-label="LinkedIn"
                >
                  <Linkedin className="w-5 h-5" />
                </a>
                <a
                  href="https://github.com/sruthy405"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`p-3 rounded-lg transition-all ${
                    theme === "dark"
                      ? "bg-[#242d42] text-[#9fa2de] hover:bg-[#9fa2de] hover:text-[#1a1f2e]"
                      : "bg-gray-200 text-[#949ad7] hover:bg-[#949ad7] hover:text-white"
                  }`}
                  aria-label="GitHub"
                >
                  <Github className="w-5 h-5" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
