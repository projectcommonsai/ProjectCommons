import { Card, CardContent } from "@/components/ui/card"
import Link from "next/link"
import { withBasePath } from "@/lib/base-path"

export function TeamSection() {
  const officers = [
    {
      name: "TBD",
      role: "Head of Mentorship",
      specialty: "Computer Vision",
      image: "/professional-headshot-of-young-hispanic-male-stude.jpg",
    },
    {
      name: "TBD",
      role: "Senior Mentor",
      specialty: "Natural Language Processing",
      image: "/professional-headshot-of-young-asian-female-studen.jpg",
    },
    {
      name: "TBD",
      role: "Senior Mentor",
      specialty: "Reinforcement Learning",
      image: "/professional-headshot-of-young-korean-male-student.jpg",
    },
    {
      name: "TBD",
      role: "Junior Mentor",
      specialty: "AI Ethics",
      image: "/professional-headshot-of-young-indian-female-stude.jpg",
    },
    {
      name: "TBD",
      role: "Mentor",
      specialty: "Machine Learning Infrastructure",
      image: "/professional-headshot-of-young-black-male-student-.jpg",
    },
    {
      name: "TBD",
      role: "Mentor",
      specialty: "AI Applications",
      image: "/professional-headshot-of-young-latina-female-stude.jpg",
    },
  ]

  return (
    <section id="team" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Our Team of Mentors</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            Meet the dedicated leaders who help make Project Commons an incredible community for AI research and
            learning.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {officers.map((officer, index) => (
            <Card key={index} className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card4/50 to-background/50">
              <CardContent className="p-6 text-center space-y-4">
                <div className="w-20 h-20 mx-auto rounded-full overflow-hidden bg-muted">
                  <img
                    src={withBasePath(officer.image || "/placeholder.svg")}
                    alt={officer.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-1">
                  <h3 className="font-semibold text-lg">{officer.name}</h3>
                  <p className="text-secondary font-medium text-sm">{officer.role}</p>
                  <p className="text-muted-foreground text-xs">{officer.specialty}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/mentors"
            className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-md text-lg font-medium transition-all bg-gradient-to-r from-blue-600 to-purple-600 text-white hover:from-blue-700 hover:to-purple-700 shadow-md hover:shadow-lg transform hover:scale-105 duration-200 border-0"
          >
            Join Our Team
          </Link>
        </div>
      </div>
    </section>
  )
}
