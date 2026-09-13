"use client"

import Image from "next/image"
import Link from "next/link"
import { withBasePath } from "@/lib/base-path"

export function Header() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      const headerHeight = 80
      const elementPosition = element.offsetTop - headerHeight
      window.scrollTo({
        top: elementPosition,
        behavior: "smooth",
      })
    }
  }

  return (
    <header className="bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-red-600/20 border-b-2 border-primary/30 backdrop-blur-md sticky top-0 z-50 shadow-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-3">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src={withBasePath("/BlackVersionLogo.png")}
                alt="Project Commons Logo"
                width={40}
                height={40}
                className="drop-shadow-lg rounded-lg"
              />
              <div className="font-bold text-xl bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Project Commons
              </div>
            </Link>
          </div>

          <nav className="hidden md:flex items-center space-x-6">
            <button
              onClick={() => scrollToSection("about")}
              className="text-foreground hover:text-blue-600 transition-colors font-medium hover:drop-shadow-sm"
            >
              About
            </button>
            <button
              onClick={() => scrollToSection("mentorship")}
              className="text-foreground hover:text-red-600 transition-colors font-medium hover:drop-shadow-sm"
            >
              Mentorship
            </button>
            <button
              onClick={() => scrollToSection("founders")}
              className="text-foreground hover:text-purple-600 transition-colors font-medium hover:drop-shadow-sm"
            >
              Founders
            </button>
            <button
              onClick={() => scrollToSection("team")}
              className="text-foreground hover:text-blue-600 transition-colors font-medium hover:drop-shadow-sm"
            >
              Team
            </button>
            <button
              onClick={() => scrollToSection("community")}
              className="text-foreground hover:text-red-600 transition-colors font-medium hover:drop-shadow-sm"
            >
              Community
            </button>
          </nav>

          <div className="flex items-center space-x-3">
            <Link
              href="/mentors"
              className="inline-flex items-center justify-center gap-2 h-8 px-3 rounded-md text-xs font-medium transition-all bg-red-600 text-white hover:bg-red-700 shadow-md hover:shadow-lg transform hover:scale-105 duration-200 border-0"
            >
              Join Our Team
            </Link>
          </div>
        </div>
      </div>
    </header>
  )
}
