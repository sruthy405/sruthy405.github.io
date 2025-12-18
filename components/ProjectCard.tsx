interface ProjectCardProps {
  title: string
  main: string
  theme: "dark" | "light"
  image?: string
  tags?: string[]          // NEW
  github?: string          // NEW
  demo?: string            // NEW
}

export function ProjectCard({ title, main, theme, image, tags = [], github, demo }: ProjectCardProps) {
  return (
    <div
      className={`p-3 md:p-6 flex flex-col w-full max-w-sm shadow-xl rounded-2xl transition-colors ${
        theme === "dark" ? "bg-[#242d42] shadow-slate-900" : "bg-white shadow-gray-300"
      }`}
    >
      {/* IMAGE */}
      {image && (
        <img
          className="p-4 rounded-xl object-cover h-48 w-full"
          src={image || "/placeholder.svg"}
          alt={title}
        />
      )}

      {/* TITLE */}
      <h3
        className={`px-4 text-xl md:text-2xl leading-normal ${
          theme === "dark" ? "text-white" : "text-gray-900"
        }`}
      >
        {title}
      </h3>

      {/* DESCRIPTION */}
      <p
        className={`px-4 text-sm md:text-md leading-tight py-2 ${
          theme === "dark" ? "text-gray-400" : "text-gray-600"
        }`}
      >
        {main}
      </p>

      {/* TAGS */}
      {tags.length > 0 && (
        <div className="px-4 flex flex-wrap gap-2 py-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className={`
                text-xs px-3 py-1 rounded-full border
                ${theme === "dark"
                  ? "border-[#31366c] bg-[#2e3147] text-[#9fa2de]"
                  : "border-[#d9d6f2] bg-[#f3f1fc] text-[#6f6acb]"}
              `}
            >
              {tag}
            </span>
          ))}
        </div>
      )}

      {/* BUTTONS */}
      <div className="mt-auto p-2 md:p-4 flex gap-2 md:gap-4">
        {demo && (
          <a
            href={demo}
            target="_blank"
            className={`text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 rounded-3xl ${
              theme === "dark" ? "bg-[#9fa2de]" : "bg-[#949ad7]"
            }`}
          >
            <i className="fas fa-external-link-alt"></i> Demo
          </a>
        )}

        {github && (
          <a
            href={github}
            target="_blank"
            className={`text-white py-2 px-3 text-sm md:text-base hover:opacity-85 duration-300 hover:scale-105 rounded-3xl ${
              theme === "dark" ? "bg-[#9fa2de]" : "bg-[#949ad7]"
            }`}
          >
            <i className="fab fa-github"></i> Source
          </a>
        )}
      </div>
    </div>
  )
}
