import { Download } from "lucide-react";
import Link from "next/link";

export default function Hero() {
    return (
        <section id="home" className="justify-center text-center">
            <div className="container mx-auto flex flex-col h-screen text-2xl md:text-xl relative -top-8 gap-4 md:gap-1 md:items-center justify-center px-4 md:px-6">
                <p className="mt-4  mx-auto max-w-2xl w-fit rounded-full border border-slate-700/50 dark:border-slate-300/50 px-4 mb-4">
                    Hi there! 👋 I&apos;m
                </p>
                <h1 className="text-7xl font-bold tracking-tight md:text-6xl">Dewmini Thakshila</h1>
                <p className="mt-4 max-w-2xl">
                    Feel free to explore my work and journey. <span className="font-bold">
                        Let&apos;s connect!
                    </span>
                </p>
                <div className="mt-8 flex flex-col justify-center gap-5 items-center md:flex-row md:items-start">
                    <Link
                        href="/assets/resume.pdf" download
                        className="block w-fit items-center rounded-full bg-accent px-6 py-3 font-medium text-stone-950 transition-colors hover:bg-accent-foreground"
                    >
                        <div className="flex items-center">
                            <Download className="w-6 h-6 mr-2" />
                            Download Resume
                        </div>
                    </Link>
                    <Link
                        href="https://www.linkedin.com/in/dewminithakshila/"
                        className="block w-fit items-center rounded-full border border-accent px-6 py-3 font-medium text-accent transition-colors hover:bg-accent hover:text-stone-950 group"
                        prefetch={false}
                    >
                        <div className="flex items-center">
                            <LinkedIn className="w-8 h-8 mr-2 fill-accent group-hover:fill-black" />
                            Connect on LinkedIn
                        </div>
                    </Link>
                </div>
            </div>
        </section>
    );
}
function LinkedIn(props) {
    return (
        <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            viewBox="0 0 48 48"
            {...props}
        >
            <path d="M 11.5 6 C 8.4802259 6 6 8.4802259 6 11.5 L 6 36.5 C 6 39.519774 8.4802259 42 11.5 42 L 36.5 42 C 39.519774 42 42 39.519774 42 36.5 L 42 11.5 C 42 8.4802259 39.519774 6 36.5 6 L 11.5 6 z M 11.5 9 L 36.5 9 C 37.898226 9 39 10.101774 39 11.5 L 39 36.5 C 39 37.898226 37.898226 39 36.5 39 L 11.5 39 C 10.101774 39 9 37.898226 9 36.5 L 9 11.5 C 9 10.101774 10.101774 9 11.5 9 z M 15.5 13 A 2.5 2.5 0 0 0 15.5 18 A 2.5 2.5 0 0 0 15.5 13 z M 14 20 C 13.447 20 13 20.447 13 21 L 13 34 C 13 34.553 13.447 35 14 35 L 17 35 C 17.553 35 18 34.553 18 34 L 18 21 C 18 20.447 17.553 20 17 20 L 14 20 z M 21 20 C 20.447 20 20 20.447 20 21 L 20 34 C 20 34.553 20.447 35 21 35 L 24 35 C 24.553 35 25 34.553 25 34 L 25 26.5 C 25 25.121 26.121 24 27.5 24 C 28.879 24 30 25.121 30 26.5 L 30 34 C 30 34.553 30.447 35 31 35 L 34 35 C 34.553 35 35 34.553 35 34 L 35 26 C 35 22.691 32.309 20 29 20 C 27.462 20 26.063 20.586016 25 21.541016 L 25 21 C 25 20.447 24.553 20 24 20 L 21 20 z"></path>
        </svg>
    );
}