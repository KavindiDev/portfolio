import { LinkedinIcon } from "lucide-react";
import { TwitterIcon } from "lucide-react";
import { GithubIcon } from "lucide-react";
import Link from "next/link";

export default function Footer() {
    return (
        <footer className="py-6 shadow">
        <div className="container mx-auto flex items-center justify-between px-4 md:px-6">
          <p className="text-sm">&copy; {new Date().getFullYear()} Made with ❤️ by Dewmini Thakshila.</p>
          <div className="flex space-x-4">
            <Link href="https://github.com/KavindiDev" className="hover:text-accent" prefetch={false}>
              <GithubIcon className="h-6 w-6" />
            </Link>
            <Link href="https://linkedin.com/in/dewminithakshila" className="hover:text-accent" prefetch={false}>
              <LinkedinIcon className="h-6 w-6" />
            </Link>
            <Link href="https://x.com/_KavindiADT" className="hover:text-accent" prefetch={false}>
              <TwitterIcon />
            </Link>
          </div>
        </div>
      </footer>
    );
}