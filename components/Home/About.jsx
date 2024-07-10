export default function About() {
    return (
        <section id="about" className="pt-16 md:pt-24 mx-auto items-center justify-center">
            <div className="container mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:px-6">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
                    <p className="mt-4 md:text-lg">
                        I am a passionate Computer Science undergraduate at the University of Kelaniya. My passion lies in web technologies, software development, and protecting digital assets. I strive to combine creativity with technical skills to solve complex challenges and contribute to a safer digital world. As an active member of university communities like FOSS and ISACA, I am dedicated to promoting open-source software and best practices in information security.
                    </p>
                </div>
                <div className="flex my-auto justify-center mx-auto">
                    <img
                        src="/dewmini.webp"
                        width={400}
                        height={400}
                        alt="Dewmini | Profile"
                        className="pointer-events-none animated-border mx-auto h-64 w-64 object-cover md:h-80 md:w-80"
                    />
                </div>
            </div>
        </section>
    );
}