import { CodeIcon, ServerIcon, DatabaseIcon, CloudIcon } from "lucide-react";

const skills = [
  {
    title: "Front-end",
    description: "Next.js, React, Tailwind CSS, Javascript, HTML, CSS",
    icon: CodeIcon,
  },
  {
    title: "Back-end",
    description: "Node.js, Express, Django, Spring Boot, Java, Python, C",
    icon: ServerIcon,
  },
  {
    title: "Databases",
    description: "MongoDB, PostgreSQL, MySQL",
    icon: DatabaseIcon,
  },
  {
    title: "Cloud",
    description: "Vercel, GitHub, Azure, Supabase, Cybersecurity",
    icon: CloudIcon,
  },
]
export default function Skills() {
    return (
        <section id="skills" className="pt-16 md:pt-24">
          <div className="container mx-auto px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Skills</h2>
            <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
              {
                skills.map(skill => (
                  <div key={skill.title} className="flex flex-col items-center justify-center rounded-md bg-accent p-4 md:p-6 text-black transition-colors hover:bg-accent-foreground">
                    <skill.icon className="h-6 w-6 md:h-8 md:w-8" />
                    <h3 className="mt-2 text-base md:text-lg font-medium">{skill.title}</h3>
                    <p className="mt-1 text-xs md:text-sm text-stone-900">{skill.description}</p>
                  </div>
                ))
              }
            </div>
          </div>
        </section>
    );
}