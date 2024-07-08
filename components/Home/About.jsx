export default function About() {
    return (
        <section id="about" className="py-16 md:py-24 mx-auto items-center justify-center">
            <div className="container mx-auto flex flex-col items-center justify-center px-4 md:flex-row md:px-6">
                <div className="md:w-1/2">
                    <h2 className="text-3xl font-bold tracking-tight md:text-4xl">About Me</h2>
                    <p className="mt-4 md:text-lg">
                        I am a passionate software engineer with a strong background in full-stack development. I specialize in
                        building high-performance, scalable, and user-friendly web applications. My expertise includes modern
                        JavaScript frameworks, cloud infrastructure, and agile development practices.
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