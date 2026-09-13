"use client"

import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Users, BookOpen, Zap } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

export function HeroSection() {
  const joinCommunity = () => {
    const element = document.getElementById("community")
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
    <section className="bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20 py-20 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 via-purple-500/10 to-red-500/10 animate-pulse"></div>
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-balance leading-tight">
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent animate-pulse">
                  AI Research Community
                </span>{" "}
                for High School Students
              </h1>
              <p className="text-xl text-muted-foreground text-pretty leading-relaxed">
                Join Project Commons, a free community where high school students dive into AI research with expert
                mentorship. No experience required – just curiosity and passion.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <button
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium transition-all bg-purple-600 text-white hover:bg-purple-700 shadow-lg hover:shadow-xl transform hover:scale-105 duration-200 border-0"
                onClick={joinCommunity}
              >
                Join Our Community
                <ArrowRight className="ml-2 h-5 w-5" />
              </button>
              <Link
                href="/about"
                className="inline-flex items-center justify-center gap-2 h-10 px-6 rounded-md text-sm font-medium transition-all border-2 border-primary/50 bg-gradient-to-r from-primary/5 to-accent/5 hover:from-primary/15 hover:to-accent/15 hover:border-primary/80 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary/50 shadow-md hover:shadow-lg"
              >
                Learn More
              </Link>
            </div>

            <div className="flex items-center gap-8 pt-4">
              <div className="flex items-center gap-2">
                <Users className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">Growing Community</span>
              </div>
              <div className="flex items-center gap-2">
                <BookOpen className="h-5 w-5 text-red-600" />
                <span className="text-sm font-medium">Expert Mentors</span>
              </div>
              <div className="flex items-center gap-2">
                <Zap className="h-5 w-5 text-purple-600" />
                <span className="text-sm font-medium">100% Free</span>
              </div>
            </div>
          </div>

          <div className="relative">
            <div className="relative z-10">
              <Image
                src={withBasePath("/BlackVersionLogo.png")}
                alt="Project Commons"
                width={400}
                height={400}
                className="mx-auto drop-shadow-2xl rounded-xl"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/40 via-purple-500/30 to-red-500/40 blur-3xl rounded-full animate-pulse"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
