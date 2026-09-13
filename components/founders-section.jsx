"use client"

import { Card, CardContent } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Linkedin, Instagram, Mail } from "lucide-react"
import { withBasePath } from "@/lib/base-path"

export function FoundersSection() {
  const founders = [
    {
      name: "Joshua Dong",
      title: "Co-Founder",
      bio: "Robotics nerd enthusiastic about spreading AI education for the next generation of high school students. Also loves to eat potatoes.",
      image: "/Joshua_Picture.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/joshua-dong-78b2a92b6/",
        instagram: "https://www.instagram.com/dogeypatato/",
        email: "awesomejoshua2008@gmail.com",
      },
    },
    {
      name: "Josh Karthikeyan",
      title: "Co-Founder",
      bio: "A passionate student researcher who believes in free mentoring for all students. Also likes chess a lot.",
      image: "/Josh_PFP.jpg",
      social: {
        linkedin: "https://www.linkedin.com/in/josh-karthikeyan-a81722311/",
        instagram: "https://www.instagram.com/k_joosh/",
        email: "joshkarthik1229@gmail.com",
      },
    },
  ]

  const openSocialLink = (url) => {
    if (url.startsWith("mailto:")) {
      window.location.href = url
    } else {
      window.open(url, "_blank")
    }
  }

  return (
    <section id="founders" className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center space-y-4 mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-balance">Meet Our Founders</h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto text-pretty">
            The visionaries behind Project Commons, dedicated to making AI research accessible to every high school
            student.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {founders.map((founder, index) => (
            <Card key={index} 
            className="border-border/50 hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 bg-gradient-to-br from-card3/50 to-background/50">
              <CardContent className="p-8 text-center space-y-6">
                <div className="w-32 h-32 mx-auto rounded-full overflow-hidden bg-muted">
                  <img
                    src={withBasePath(founder.image || "/Joshua_Picture.jpg")}
                    alt={founder.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="space-y-2">
                  <h3 className="text-2xl font-bold">{founder.name}</h3>
                  <p className="text-primary font-medium">{founder.title}</p>
                </div>
                <p className="text-muted-foreground leading-relaxed">{founder.bio}</p>
                <div className="flex justify-center space-x-4">
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent"
                    onClick={() => openSocialLink(founder.social.linkedin)}
                  >
                    <Linkedin className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent"
                    onClick={() => openSocialLink(founder.social.instagram)}
                  >
                    <Instagram className="h-4 w-4" />
                  </Button>
                  <Button
                    size="sm"
                    variant="outline"
                    className="p-2 bg-transparent"
                    onClick={() => openSocialLink(`mailto:${founder.social.email}`)}
                  >
                    <Mail className="h-4 w-4" />
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
