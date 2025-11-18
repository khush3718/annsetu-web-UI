"use client"

import { Truck, Shield, Leaf, Award } from "lucide-react"

export function Features() {
  const features = [
    {
      icon: Truck,
      title: "Fast Delivery",
      description: "Get your snacks delivered within 24-48 hours",
    },
    {
      icon: Shield,
      title: "Quality Guaranteed",
      description: "100% authentic and freshly prepared snacks",
    },
    {
      icon: Leaf,
      title: "Pure Ingredients",
      description: "No artificial additives or preservatives",
    },
    {
      icon: Award,
      title: "Award Winning",
      description: "Recognized for excellence in taste and quality",
    },
  ]

  return (
    <section id="about" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-foreground text-center mb-16">Why Choose AnnSetu?</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => {
            const Icon = feature.icon
            return (
              <div
                key={index}
                className="group p-8 bg-card rounded-xl border border-border hover:border-primary hover:shadow-lg transition-all"
              >
                <div className="inline-flex items-center justify-center w-14 h-14 bg-primary/10 rounded-lg group-hover:bg-primary group-hover:text-primary-foreground transition-all mb-4">
                  <Icon className="w-7 h-7 text-primary group-hover:text-primary-foreground" />
                </div>
                <h3 className="text-lg font-bold text-foreground mb-2">{feature.title}</h3>
                <p className="text-foreground/60 text-sm">{feature.description}</p>
              </div>
            )
          })}
        </div>
      </div>
    </section>
  )
}
