import { projects } from "@/data/projects";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
    return (
        <section id="projects" className="pt-16 md:pt-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Projects</h2>
                <div className="mt-8 flex flex-wrap -mx-4">
                    {
                        projects.map((project, index) => (
                            <div key={index} className="w-full md:w-1/2 lg:w-1/3 px-4 mb-8">
                                <div className="flex flex-col h-full bg-stone-200 text-stone-950 dark:text-stone-50 dark:bg-stone-900 border-0 rounded-md overflow-hidden">
                                    <div className="flex-grow flex flex-col p-4">
                                        <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                                        <div className="flex-shrink-0">
                                            <Image
                                                src={project.image}
                                                width={640}
                                                height={360}
                                                alt={project.title}
                                                className="aspect-video object-cover w-full p-2"
                                            />
                                        </div>
                                        <p className="flex-grow text-stone-900 dark:text-stone-300 mb-2">{project.description}</p>
                                    </div>
                                    <div className="flex justify-between p-4">
                                        {project.github ? (
                                            <Link
                                                href={project.github}
                                                className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-accent-foreground"
                                                prefetch={false}
                                            >
                                                View Project
                                            </Link>
                                        ) : (
                                            <div></div>
                                        )}
                                        {project.demo ? (
                                            <Link
                                                href={project.demo}
                                                className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-accent-foreground"
                                                prefetch={false}
                                            >
                                                Live Demo
                                            </Link>
                                        ) : (
                                            <div></div>
                                        )}
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}