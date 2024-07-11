import {
  Fira_Sans,
  Inter_Tight
} from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import Navbar from "@/components/Shared/Navbar";
import Footer from "@/components/Shared/Footer";
import { ThemeProvider } from "@/components/Shared/theme-provider";

const fontHeading = Inter_Tight({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-heading',
  weight: ['600']
});
const fontBody = Fira_Sans({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-body',
  weight: ['300', '400', '700'],
});


export const metadata = {
  title: "Dewmini | Portfolio",
  description: "Dewmini is a passionate Computer Science undergraduate specializing in Cybersecurity at the University of Kelaniya. My passion lies in web technologies, software development, and protecting digital assets. I strive to combine creativity with technical skills to solve complex challenges and contribute to a safer digital world."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={cn(fontBody.variable, fontHeading.variable, 'antialiased bg-neutral-100 dark:bg-neutral-950 text-neutral-950 dark:text-neutral-100')}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}