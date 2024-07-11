"use client"

import { useState, useEffect } from 'react';
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react';
import { MenuIcon, XIcon } from 'lucide-react';
import { cn } from '@/lib/utils';
import Link from 'next/link';
import { ModeToggle } from './theme-toggle';

const navigation = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Education', href: '#education' },
  { name: 'Gallery', href: '#gallery' },
  { name: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const [active, setActive] = useState('Home');

  useEffect(() => {
    const handleScroll = () => {
      const sections = document.querySelectorAll('section');
      let currentSection = 'Home';
      
      sections.forEach(section => {
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 60) { // Adjust offset for navbar height
          currentSection = section.getAttribute('id');
        }
      });
      
      setActive(currentSection.charAt(0).toUpperCase() + currentSection.slice(1));
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <Disclosure as="nav" className="bg-stone-100 dark:bg-stone-900 shadow sticky top-0 z-50">
      {({ open }) => (
        <>
          <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
            <div className="relative flex justify-between h-16">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button */}
                <DisclosureButton className="inline-flex items-center justify-center p-2 rounded-md hover:text-stone-600 bg-stone-50 hover:bg-stone-200 dark:hover:text-stone-400 dark:bg-stone-950 dark:hover:bg-stone-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <MenuIcon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </DisclosureButton>
              </div>
              <div className="flex-1 flex items-center justify-center sm:items-stretch sm:justify-start">
                <div className="flex-shrink-0 flex items-center">
                  <Link href="#home"><p className="text-2xl font-bold text-accent cursor-pointer" >KavindiDev</p></Link>
                </div>
                <div className="hidden sm:ml-6 sm:flex sm:space-x-8">
                  {navigation.map((item) => (
                    <a
                      href={item.href}
                      key={item.name}
                      className={cn(active === item.name ? "text-accent border-accent" : "border-transparent", "hover:border-gray-300 hover:text-gray-700 inline-flex items-center px-1 pt-1 border-b-2 text-sm font-medium")}
                    >
                      {item.name}
                    </a>
                  ))}
                </div>
              </div>
              <div className="flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <ModeToggle />
              </div>
            </div>
          </div>

          <DisclosurePanel className="sm:hidden">
            <div className="pt-2 pb-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  href={item.href}
                  key={item.name}
                  className={cn(active === item.name ? "text-accent border-accent" : "border-transparent", "hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium")}
                >
                  {item.name}
                </Link>
              ))}
            </div>
          </DisclosurePanel>
        </>
      )}
    </Disclosure>
  );
}
