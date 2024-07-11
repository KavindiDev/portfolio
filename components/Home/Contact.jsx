"use client"
import Link from "next/link";
import { MailIcon } from "lucide-react";
import ContactForm from "./ContactForm";

export default function Contact() {
    return (
        <section id="contact" className="pt-16 md:pt-24">
            <div className="container mx-auto px-4 md:px-6">
                <h2 className="text-3xl font-bold tracking-tight md:text-4xl">Get in Touch</h2>
                <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2">
                    <div>
                        <p>
                            Feel free to reach out to me if you have any questions or inquiries.
                            I'm always excited to connect with new people and explore new opportunities.
                        </p>
                        <div className="mt-4 flex space-x-4">
                            <Link
                                href="mailto:kavindi.adt@gmail.com"
                                className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-accent-foreground"
                                prefetch={false}
                            >
                                <MailIcon className="mr-2 h-5 w-5" />
                                Email Me
                            </Link>
                        </div>
                    </div>
                    <ContactForm />
                </div>
            </div>
        </section>
    );
}