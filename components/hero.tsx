"use client"

export function Hero() {
  return (
    <section className="relative min-h-[90vh] flex items-center overflow-hidden bg-foreground text-background pt-16">
      {/* Decorative background elements */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-20 left-10 w-72 h-72 rounded-full bg-primary/20 blur-3xl"></div>
        <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-secondary/10 blur-3xl"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center w-full">
        <div className="text-left animate-in fade-in slide-in-from-left duration-1000">
          <div className="mb-6 inline-block bg-primary/20 text-background px-4 py-2 rounded-full text-sm font-semibold border border-primary/30">
            ✨ Premium Indian Snacks
          </div>

          <h1 className="text-5xl md:text-7xl font-bold text-balance mb-6 text-background leading-tight">
            Authentic Flavor in <span className="text-primary italic">Every Bite</span>
          </h1>

          <p className="text-xl text-background/80 mb-8 text-balance max-w-xl">
            Experience the rich heritage of Indian snacks with Yash Namkeen. Handcrafted with love, traditional recipes, and the finest ingredients.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 mb-12">
            <button className="bg-primary text-primary-foreground px-8 py-4 rounded-xl font-bold hover:scale-105 transition-all text-lg shadow-lg shadow-primary/20">
              Explore Collection
            </button>
            <button className="border-2 border-primary text-primary px-8 py-4 rounded-xl font-bold hover:bg-primary/5 transition-all">
              Our Story
            </button>
          </div>
        </div>

        <div className="relative flex justify-center items-center animate-in fade-in slide-in-from-right duration-1000">
          <div className="relative w-full max-w-lg aspect-square">
            {/* Circular background decoration for mascot */}
            <div className="absolute inset-0 bg-primary/10 rounded-full animate-pulse"></div>
            <img
              src="/yash-namkeen.png"
              alt="Yash Namkeen Mascot"
              className="relative z-10 w-full h-full object-contain drop-shadow-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
