"use client"

import type React from "react"

import { ArrowRight, Gift, Zap, Users, MapPin, TrendingUp, Award, Handshake } from "lucide-react"
import { useState } from "react"

export function AnndootCampaign() {
  const [email, setEmail] = useState("")
  const [joined, setJoined] = useState(false)
  const [activeTab, setActiveTab] = useState<"members" | "benefits" | "agents">("members")
  const [hoveredBenefit, setHoveredBenefit] = useState<number | null>(null)

  const handleJoin = (e: React.FormEvent) => {
    e.preventDefault()
    if (email) {
      setJoined(true)
      setTimeout(() => {
        setEmail("")
        setJoined(false)
      }, 3000)
    }
  }

  const benefits = [
    {
      icon: Gift,
      title: "Exclusive Rewards",
      description: "Earn commission on community sales and unlock special bonuses",
    },
    {
      icon: Zap,
      title: "Early Access",
      description: "First to launch campaigns and access premium inventory",
    },
    {
      icon: Users,
      title: "Community Leader",
      description: "Build your local network and grow as a trusted snacks brand ambassador",
    },
  ]

  const stats = [
    { label: "Active Agents", value: "500+", icon: Handshake },
    { label: "Communities Served", value: "1000+", icon: MapPin },
    { label: "Monthly Growth", value: "45%", icon: TrendingUp },
    { label: "Agent Satisfaction", value: "4.9/5", icon: Award },
  ]

  const agentShowcase = [
    { name: "Khush Shah", location: "Ahmedabad - Maninagar", members: "25", title: "Top Agent" },
    { name: "Parv Shah", location: "Vadodara - Pratapgunj", members: "18", title: "Rising Star" },
    { name: "Hetal Shah", location: "Ahmedabad - Prahladnagar", members: "32", title: "Top Agent" },
  ]

  return (
    <section id="anndoot" className="py-20 bg-gradient-to-br from-primary/10 via-accent/10 to-primary/10">
      <div className="max-w-7xl mx-auto px-4">
        {/* Enhanced Campaign Banner with Animation */}
        <div
          className="rounded-2xl p-8 md:p-12 mb-16 relative overflow-hidden"
          style={{
            backgroundImage: "url(/anndoot-bg.png)",
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundBlendMode: "overlay",
          }}
        >
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-96 h-96 rounded-full bg-primary blur-3xl animate-pulse"></div>
            <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full bg-accent blur-3xl animate-pulse delay-1000"></div>
          </div>

          <div className="relative z-10">
            <div className="inline-block bg-white/40 backdrop-blur-sm px-4 py-2 rounded-full mb-4 text-zinc-850 text-sm font-semibold animate-in">
              ⭐ Become a Local Community Agent
            </div>
            <h2 className="text-4xl md:text-5xl font-bold text-zinc-850 mb-4 text-balance">
              Join the Anndoot Family
            </h2>
            <p className="text-xl text-zinc-850/90 mb-8 max-w-3xl text-balance">
              Be the trusted connection between your locality and premium Indian snacks. Build your community, earn
              rewards, and become a brand ambassador in your neighborhood.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={() => setActiveTab("members")}
                className="px-6 py-3 bg-white/50 hover:bg-white/30 text-zinc-850 rounded-lg font-semibold transition-all transform hover:scale-105 backdrop-blur-sm"
              >
                Learn More
              </button>
              <button
                onClick={() => setActiveTab("agents")}
                className="px-6 py-3 bg-white text-primary rounded-lg font-semibold transition-all transform hover:scale-105 shadow-lg"
              >
                Become an Agent
              </button>
            </div>
          </div>
        </div>

        {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          {stats.map((stat, index) => {
            const Icon = stat.icon
            return (
              <div
                key={index}
                className="bg-card rounded-xl p-6 text-center hover:shadow-xl transition-all transform hover:scale-105 hover:bg-primary/5 cursor-pointer"
              >
                <Icon className="w-8 h-8 text-primary mx-auto mb-3" />
                <div className="text-2xl font-bold text-primary mb-1">{stat.value}</div>
                <div className="text-sm text-foreground/60 font-medium">{stat.label}</div>
              </div>
            )
          })}
        </div> */}

        <div className="mb-16">
          <div className="flex gap-2 justify-center mb-8 flex-wrap">
            <button
              onClick={() => setActiveTab("benefits")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "benefits"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-card/80"
              }`}
            >
              Agent Benefits
            </button>
            <button
              onClick={() => setActiveTab("agents")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "agents"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-card/80"
              }`}
            >
              Top Agents
            </button>
            <button
              onClick={() => setActiveTab("members")}
              className={`px-6 py-3 rounded-lg font-semibold transition-all ${
                activeTab === "members"
                  ? "bg-primary text-primary-foreground shadow-lg"
                  : "bg-card text-foreground hover:bg-card/80"
              }`}
            >
              Community Members
            </button>
          </div>

          {/* Benefits Content */}
          {activeTab === "benefits" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon
                return (
                  <div
                    key={index}
                    onMouseEnter={() => setHoveredBenefit(index)}
                    onMouseLeave={() => setHoveredBenefit(null)}
                    className={`bg-card rounded-xl p-8 transition-all transform ${
                      hoveredBenefit === index
                        ? "scale-105 shadow-2xl bg-primary/5 border-2 border-primary"
                        : "shadow-lg hover:shadow-xl"
                    }`}
                  >
                    <div className="inline-flex items-center justify-center w-16 h-16 bg-primary/10 rounded-full mb-4 group-hover:bg-primary/20">
                      <Icon className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold text-foreground mb-2">{benefit.title}</h3>
                    <p className="text-foreground/60 mb-4">{benefit.description}</p>
                    <div className="text-primary font-semibold flex items-center gap-2 cursor-pointer hover:gap-3 transition-all">
                      Learn more <ArrowRight className="w-4 h-4" />
                    </div>
                  </div>
                )
              })}
            </div>
          )}

          {/* Top Agents Showcase */}
          {activeTab === "agents" && (
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {agentShowcase.map((agent, index) => (
                <div
                  key={index}
                  className="bg-card rounded-xl p-8 text-center hover:shadow-2xl transition-all transform hover:scale-105 border-2 border-transparent hover:border-primary/30"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4 flex items-center justify-center">
                    <span className="text-2xl font-bold text-primary-foreground">{agent.name.charAt(0)}</span>
                  </div>
                  <h3 className="text-lg font-bold text-foreground mb-1">{agent.name}</h3>
                  <p className="text-primary font-semibold text-sm mb-2">{agent.title}</p>
                  <div className="flex items-center justify-center gap-2 text-foreground/70 mb-3">
                    <MapPin className="w-4 h-4" />
                    <span className="text-sm">{agent.location}</span>
                  </div>
                  <div className="bg-primary/10 rounded-lg p-3 mb-4">
                    <div className="text-2xl font-bold text-primary">{agent.members}</div>
                    <div className="text-xs text-foreground/60">Community Members</div>
                  </div>
                  {/* <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition-all text-sm">
                    View Profile
                  </button> */}
                </div>
              ))}
            </div>
          )}

          {/* Community Members Info */}
          {activeTab === "members" && (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-card rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4 flex items-center gap-2">
                  <Users className="w-6 h-6 text-primary" />
                  Why Join Anndoot?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Connect with local agents in your community",
                    "Get exclusive member-only deals and discounts",
                    "Early access to limited edition snacks",
                    "Earn loyalty points on every purchase",
                    "Join a community of snack enthusiasts",
                  ].map((item, idx) => (
                    <li key={idx} className="flex items-start gap-3 text-foreground/80">
                      <span className="text-primary font-bold mt-1">✓</span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-gradient-to-br from-primary/20 to-accent/20 rounded-xl p-8 shadow-lg">
                <h3 className="text-2xl font-bold text-foreground mb-4">Community Perks</h3>
                <div className="space-y-4">
                  <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-bold text-primary mb-1">15% Discount</div>
                    <div className="text-sm text-foreground/70">All member purchases</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-bold text-primary mb-1">Referral Bonus</div>
                    <div className="text-sm text-foreground/70">₹100 for each friend referred</div>
                  </div>
                  <div className="bg-white/50 rounded-lg p-4 backdrop-blur-sm">
                    <div className="font-bold text-primary mb-1">Monthly Giveaways</div>
                    <div className="text-sm text-foreground/70">Exclusive prizes for members</div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* Enhanced Join Form */}
        <div className="max-w-md mx-auto">
          <form onSubmit={handleJoin} className="bg-card rounded-xl p-8 shadow-2xl border-2 border-primary/20">
            <h3 className="text-2xl font-bold text-foreground mb-2 text-center">
              {activeTab === "agents" ? "Become an Agent" : "Join Anndoot"}
            </h3>
            <p className="text-foreground/60 text-center text-sm mb-6">
              {activeTab === "agents"
                ? "Fill in your details to become a local community agent."
                : "Enter your email to join the Anndoot community and unlock exclusive benefits."}
            </p>
            <div className="space-y-4">
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                className="w-full px-4 py-3 rounded-lg bg-input border border-border text-foreground placeholder:text-foreground/50 focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button
                type="submit"
                className="w-full bg-primary text-primary-foreground py-3 rounded-lg font-semibold hover:opacity-90 transition-all transform hover:scale-105 flex items-center justify-center gap-2 shadow-lg"
              >
                {activeTab === "agents" ? "Apply as Agent" : "Join Now"} <ArrowRight className="w-4 h-4" />
              </button>
            </div>

            {joined && (
              <div className="mt-4 p-4 bg-green-100 text-green-800 rounded-lg text-center font-medium animate-in border border-green-200">
                ✓ Welcome to Anndoot! Check your email for next steps.
              </div>
            )}
          </form>
        </div>
      </div>
    </section>
  )
}
