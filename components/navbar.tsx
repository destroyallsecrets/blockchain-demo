"use client"

import Link from "next/link"
import { usePathname } from "next/navigation"
import { BookOpen, Home } from "lucide-react"
import { Button } from "@/components/ui/button"

export function Navbar() {
  const pathname = usePathname()

  return (
    <header className="border-b">
      <div className="container flex h-16 items-center px-4">
        <div className="mr-4 flex">
          <Link href="/" className="flex items-center space-x-2">
            <span className="font-bold text-xl">Blockchain Demo</span>
          </Link>
        </div>
        <nav className="flex items-center space-x-4 lg:space-x-6 mx-6">
          <Link
            href="/"
            className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <Home className="h-4 w-4 mr-2" />
            Demo
          </Link>
          <Link
            href="/learn"
            className={`flex items-center text-sm font-medium transition-colors hover:text-primary ${
              pathname === "/learn" ? "text-primary" : "text-muted-foreground"
            }`}
          >
            <BookOpen className="h-4 w-4 mr-2" />
            Learn
          </Link>
        </nav>
        <div className="ml-auto flex items-center space-x-4">
          <Link href="https://github.com/your-username/blockchain-demo" target="_blank" rel="noopener noreferrer">
            <Button variant="outline" size="sm">
              GitHub
            </Button>
          </Link>
        </div>
      </div>
    </header>
  )
}

