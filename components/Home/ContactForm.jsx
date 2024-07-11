"use client"

import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";

const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_ACCESS_KEY;

export default function ContactForm() {
    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = new FormData(event.target);
        formData.append("access_key", ACCESS_KEY);
        const formJson = Object.fromEntries(formData);
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
              Accept: "application/json"
            },
            body: JSON.stringify(formJson)
        });
        const result = await response.json();
        if (result.success){
            alert("Message sent successfully");
        }else{
            alert("Failed to send message. Try again later.");
        }
    };
    return (
        <form className="space-y-4" onSubmit={handleSubmit}>
            <Input
                type="text"
                placeholder="Name"
                name="name"
                className="w-full rounded-md bg-accent px-4 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-accent-foreground"
            />
            <Input
                type="email"
                placeholder="Email"
                name="email"
                className="w-full rounded-md bg-accent px-4 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-accent-foreground"
            />
            <Textarea
                placeholder="Message"
                name="message"
                className="w-full rounded-md bg-accent px-4 py-2 text-black placeholder-black focus:outline-none focus:ring-2 focus:ring-accent-foreground"
            />
            <Button
                type="submit"
                className="inline-flex items-center rounded-md bg-accent px-4 py-2 text-sm font-medium text-black transition-colors hover:bg-accent-foreground"
            >
                Send Message
            </Button>
        </form>
    );
}