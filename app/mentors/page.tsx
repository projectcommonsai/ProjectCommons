import { ArrowRight, Users, BookOpen, Heart, CheckCircle, ArrowLeft } from "lucide-react"
import Link from "next/link"
import Image from "next/image"
import { Footer } from "@/components/footer"
import { withBasePath } from "@/lib/base-path"

export default function MentorsPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20">
      <header className="bg-gradient-to-r from-blue-600/20 via-purple-600/15 to-red-600/20 border-b-2 border-primary/30 backdrop-blur-md sticky top-0 z-50 shadow-lg">
        <div className="container mx-auto px-4 py-4">
          <div className="flex items-center justify-between">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src={withBasePath("/BlackVersionLogo.png")}
                alt="Project Commons"
                width={40}
                height={40}
                className="drop-shadow-lg rounded-lg"
              />
              <span className="text-xl font-bold bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Project Commons
              </span>
            </Link>
            <Link
              href="/"
              className="inline-flex items-center justify-center gap-2 h-8 px-3 rounded-md text-sm font-medium transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:scale-105 duration-200 border-0"
            >
              <ArrowLeft className="mr-2 h-4 w-4" />
              Back to Home
            </Link>
          </div>
        </div>
      </header>

      <main className="py-20">
        <div className="container mx-auto px-4">
          {/* Hero Section */}
          <div className="text-center space-y-6 mb-16">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Join Our Team
              </span>{" "}
              of Mentors/Officers
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Help shape the next generation of AI researchers. We're looking for passionate team members to guide high
              school students on their journey into artificial intelligence.
            </p>
          </div>

          {/* Why We Need You */}
          <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
            <div className="space-y-6">
              <h2 className="text-3xl font-bold">Why We Need You</h2>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Project Commons is growing rapidly, and we need qualified team members to help teach and guide our students and our organization.
                Our mission is to make AI research accessible to every high school student, regardless of their
                background or experience level.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <Users className="h-6 w-6 text-blue-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Growing Community</h3>
                    <p className="text-muted-foreground">More students are joining every week, eager to learn</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <BookOpen className="h-6 w-6 text-purple-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Knowledge Gap</h3>
                    <p className="text-muted-foreground">Students need expert guidance to navigate AI research</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <Heart className="h-6 w-6 text-red-600 mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-semibold">Make an Impact</h3>
                    <p className="text-muted-foreground">Shape the future of AI by mentoring young researchers</p>
                  </div>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-br from-blue-500/5 via-purple-500/10 to-red-500/5 backdrop-blur-sm rounded-2xl p-8 border border-border/50">
              <h3 className="text-2xl font-bold mb-6">What We're Looking For</h3>
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Experience in AI/ML research or industry</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>Passion for teaching and mentoring</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-red-600" />
                  <span>Ability to explain complex concepts simply</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-blue-600" />
                  <span>Commitment to helping students succeed</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-purple-600" />
                  <span>Available for regular mentoring sessions</span>
                </div>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-8 bg-gradient-to-r from-blue-500/10 via-purple-500/5 to-red-500/10 rounded-3xl p-12">
            <div className="space-y-4">
              <h2 className="text-3xl font-bold">Ready to Make a Difference?</h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Join our team of dedicated mentors and help high school students discover their potential in AI
                research. Your expertise can change lives and shape the future of technology.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="https://forms.gle/hGCX3D1Mo6XKdVNLA"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-lg font-medium transition-all bg-blue-600 text-white hover:bg-blue-700 shadow-md hover:shadow-lg transform hover:scale-105 duration-200 border-0"
              >
                Apply for Mentor/Officer
                <ArrowRight className="h-5 w-5" />
              </a>
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-lg font-medium transition-all border border-purple-600/20 bg-transparent hover:bg-purple-600/5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-purple-600/50"
              >
                Back to Home
              </Link>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  )
}
