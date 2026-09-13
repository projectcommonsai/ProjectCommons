"use client"

import Image from "next/image"
import { Instagram, MessageCircle, Mail } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

export function Footer() {
  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" })
  }

  const openSocialLink = (url) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url
    } else {
      window.open(url, "_blank")
    }
  }

  return (
    <footer className="bg-foreground text-background py-12">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8">
          <div className="space-y-4">
            <div className="flex items-center space-x-3">
              <Image
                src={withBasePath("/BlackVersionLogo.png")}
                alt="Project Commons Logo"
                width={32}
                height={32}
                className="rounded-lg"
              />
              <div className="font-bold text-lg">Project Commons</div>
            </div>
            <p className="text-background/80 text-sm leading-relaxed">
              Empowering high school students to explore AI research through mentorship and community.
            </p>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Learning</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <button
                  onClick={() => scrollToSection("mentorship")}
                  className="hover:text-background transition-colors"
                >
                  Getting Started
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mentorship")}
                  className="hover:text-background transition-colors"
                >
                  Project-Based Learning
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("mentorship")}
                  className="hover:text-background transition-colors"
                >
                  Research Exploration
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("community")}
                  className="hover:text-background transition-colors"
                >
                  Community Learning
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Community</h4>
            <ul className="space-y-2 text-sm text-background/80">
              <li>
                <button onClick={() => scrollToSection("about")} className="hover:text-background transition-colors">
                  About Us
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("team")} className="hover:text-background transition-colors">
                  Our Team
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("founders")} className="hover:text-background transition-colors">
                  Founders
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("community")}
                  className="hover:text-background transition-colors"
                >
                  Join Us
                </button>
              </li>
            </ul>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold">Connect</h4>
            <div className="flex space-x-3">
              <button
                onClick={() => openSocialLink("https://www.instagram.com/projectcommons.ai/")}
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Instagram className="h-4 w-4" />
              </button>
              <button
                onClick={() => openSocialLink("https://discord.gg/RC97gBEFNp")}
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <MessageCircle className="h-4 w-4" />
              </button>
              <button
                onClick={() => openSocialLink("mailto:projectcommons.ai@gmail.com")}
                className="w-8 h-8 bg-background/10 rounded-lg flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </button>
            </div>
            <p className="text-xs text-background/60">projectcommons.ai@gmail.com</p>
          </div>
        </div>

        <div className="border-t border-background/20 mt-8 pt-8 text-center">
          <p className="text-sm text-background/60">
            © 2025 Project Commons. All rights reserved. Built with ❤️ for the next generation of AI researchers.
          </p>
        </div>
      </div>
    </footer>
  )
}