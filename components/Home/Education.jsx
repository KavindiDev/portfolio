import { education } from "@/data/educations";

export default function Education() {
    return (
        <section id="education" className="pt-16 md:pt-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">My Education</h2>
                <div className="mt-8 space-y-8">
                    {
                        education.map((item, index) => (
                            <div key={item.slug} className="border-l-4 border-accent hover:border-accent-foreground pl-4">
                                <h3 className="text-xl font-bold">{item.title}</h3>
                                <p className="mt-1 text-neutral-800 dark:text-neutral-200">{item.subtitle}</p>
                                <p className="mt-1 text-neutral-800 dark:text-neutral-200">{item.date}</p>
                                <p className="mt-4 text-neutral-800 dark:text-neutral-200">{item.description}</p>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
}