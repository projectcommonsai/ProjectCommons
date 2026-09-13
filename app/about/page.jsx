import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { ArrowLeft, Target, Lightbulb, Heart } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-primary/20 via-accent/15 to-secondary/20">
      {/* Header */}
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

      {/* Main Content */}
      <main className="container mx-auto px-4 py-16">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Hero Section */}
          <div className="text-center space-y-6">
            <h1 className="text-4xl md:text-6xl font-bold text-balance">
              About{" "}
              <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-red-600 bg-clip-text text-transparent">
                Project Commons
              </span>
            </h1>
            <p className="text-xl text-muted-foreground text-pretty leading-relaxed max-w-3xl mx-auto">
              Discover the story behind our mission to democratize AI education for high school students worldwide.
            </p>
          </div>

          {/* Mission Section */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-6">
              <div className="flex items-center gap-3">
                <Target className="h-8 w-8 text-blue-600" />
                <h2 className="text-3xl font-bold">Our Mission</h2>
              </div>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Project Commons was founded with a simple yet powerful vision: to make AI education accessible to every
                high school student, regardless of their background or prior experience. We believe that the future of
                technology should be shaped by diverse voices and perspectives.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                We continuously strive for greatness, because we all deserve it. You. Me. The dogs. The cats. The goats. 
                Everyone wants a chance to achieve greatness, and we will help you. Gain research experience. Apply to college.
                Take charge of YOUR own life. Join Project Commons today.
              </p>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-blue-500/10 via-purple-500/5 to-red-500/10 rounded-2xl p-8 border border-border/50">
                <div className="grid grid-cols-2 gap-6 text-center">
                  <div>
                    <div className="text-3xl font-bold text-blue-600">100%</div>
                    <div className="text-sm text-muted-foreground">Free Access</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-purple-600">24/7</div>
                    <div className="text-sm text-muted-foreground">Community Support</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-red-600">Expert</div>
                    <div className="text-sm text-muted-foreground">Mentorship</div>
                  </div>
                  <div>
                    <div className="text-3xl font-bold text-blue-600">All Levels</div>
                    <div className="text-sm text-muted-foreground">Welcome</div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Origins Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Lightbulb className="h-8 w-8 text-purple-600" />
              <h2 className="text-3xl font-bold">Our Origins</h2>
            </div>
            <div className="bg-gradient-to-r from-blue-500/5 via-purple-500/10 to-red-500/5 rounded-2xl p-8 border border-border/50">
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                We saw all these cool AI Communities -- but they were behind a paywall. Everything so inaccessible, and 
                just so complicated. That's when we created Project Commons. The ultimate free, one-stop station dedicated to
                research, greatness, and beyond.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                The idea for Project Commons emerged from recognizing a gap in accessible AI education for high school
                students. While AI continues to transform every industry, quality educational resources remained limited
                to those with existing connections or expensive programs.
              </p>
              <p className="text-lg text-muted-foreground leading-relaxed">
                Our founders envisioned a community where curiosity is the only prerequisite, where students can explore
                cutting-edge AI concepts with guidance from experienced mentors, and where the next generation of AI
                innovators can begin their journey.
              </p>
            </div>
          </div>

          {/* Values Section */}
          <div className="space-y-8">
            <div className="flex items-center gap-3">
              <Heart className="h-8 w-8 text-red-600" />
              <h2 className="text-3xl font-bold">Our Values</h2>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              <div className="bg-gradient-to-br from-blue-500/5 to-blue-500/10 rounded-xl p-6 border border-blue-500/20">
                <h3 className="text-xl font-semibold text-blue-600 mb-3">Accessibility</h3>
                <p className="text-muted-foreground">
                  AI education should be free and available to everyone, regardless of background or experience level.
                </p>
              </div>
              <div className="bg-gradient-to-br from-purple-500/5 to-purple-500/10 rounded-xl p-6 border border-purple-500/20">
                <h3 className="text-xl font-semibold text-purple-600 mb-3">Community</h3>
                <p className="text-muted-foreground">
                  Learning happens best in supportive environments where students can collaborate and grow together.
                </p>
              </div>
              <div className="bg-gradient-to-br from-red-500/5 to-red-500/10 rounded-xl p-6 border border-red-500/20">
                <h3 className="text-xl font-semibold text-red-600 mb-3">Innovation</h3>
                <p className="text-muted-foreground">
                  We encourage creative thinking and hands-on exploration of AI technologies and applications.
                </p>
              </div>
            </div>
          </div>

          {/* Call to Action */}
          <div className="text-center space-y-6 bg-gradient-to-r from-blue-500/5 via-purple-500/5 to-red-500/5 rounded-2xl p-12 border border-border/50">
            <h2 className="text-3xl font-bold">Ready to Join Our Community?</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Take the first step in your AI journey. Connect with mentors, collaborate with peers, and explore the
              exciting world of artificial intelligence.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                className="bg-gradient-to-r from-blue-600 to-red-600 hover:from-blue-700 hover:to-red-700 text-white shadow-lg"
                asChild
              >
                <Link href="/#community">Join Now</Link>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-purple-600/20 hover:bg-purple-600/5 bg-transparent"
                asChild
              >
                <Link href="/#founders">Meet Our Founders</Link>
              </Button>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
