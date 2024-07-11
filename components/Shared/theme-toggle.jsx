"use client"

import * as React from "react"
import { Moon, Sun } from "lucide-react"
import { useTheme } from "next-themes"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ModeToggle() {
  const { setTheme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="inline-flex items-center justify-center p-2 rounded-md text-neutral-900 dark:text-neutral-200 hover:text-neutral-600 bg-neutral-50 hover:bg-neutral-200 dark:hover:text-neutral-400 dark:bg-neutral-950 dark:hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-accent">
        <Button size="icon">
          <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
          <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
          <span className="sr-only">Toggle theme</span>
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className="bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 dark:border-neutral-900">
        <DropdownMenuItem onClick={() => setTheme("light")} className="hover:bg-accent focus:text-neutral-800 dark:focus:text-neutral-200">
          Light
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("dark")} className="hover:bg-accent focus:text-neutral-800 dark:focus:text-neutral-200">
          Dark
        </DropdownMenuItem>
        <DropdownMenuItem onClick={() => setTheme("system")} className="hover:bg-accent focus:text-neutral-800 dark:focus:text-neutral-200">
          System
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
