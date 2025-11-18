"use client"

import { ChevronDown } from "lucide-react"

export function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-br from-background via-secondary/30 to-background">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-72 h-72 rounded-full bg-accent blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
        <div className="mb-6 inline-block bg-secondary/50 text-foreground px-4 py-2 rounded-full text-sm font-medium">
          ✨ Authentic Indian Snacks Delivered
        </div>

        <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-foreground">
          Taste the <span className="text-primary">Flavors</span> of India
        </h1>

        <p className="text-xl text-foreground/70 mb-8 text-balance max-w-2xl mx-auto">
          Premium, handcrafted Indian snacks delivered fresh to your doorstep. Experience authentic taste with every
          bite.
        </p>

        <div className="flex flex-col md:flex-row gap-4 justify-center mb-12">
          <button className="bg-primary text-primary-foreground px-8 py-4 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 text-lg">
            Explore Collection
          </button>
          <button className="border-2 border-primary text-primary px-8 py-4 rounded-lg font-semibold hover:bg-primary/10 transition-all">
            Learn More
          </button>
        </div>

        <div className="flex justify-center animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  )
}
