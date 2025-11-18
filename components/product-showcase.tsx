"use client"

import { Heart } from "lucide-react"
import { useState } from "react"

interface Product {
  id: number
  name: string
  category: string
  image: string
  description: string
  liked: boolean
}

const products: Product[] = [
  {
    id: 1,
    name: "Masala Papad",
    category: "Crispy Snacks",
    image: "/masala-papad-crispy-indian-snack.jpg",
    description: "Thin, crispy wafers with aromatic spices",
    liked: false,
  },
  {
    id: 2,
    name: "Chikhalwali Mix",
    category: "Mixed Snacks",
    image: "/chikhalwali-mix-indian-snack-blend.jpg",
    description: "Traditional blend of roasted nuts and spices",
    liked: false,
  },
  {
    id: 3,
    name: "Bhujia",
    category: "Savory Snacks",
    image: "/bhujia-savory-indian-snack.jpg",
    description: "Golden, crunchy chickpea noodles",
    liked: false,
  },
  {
    id: 4,
    name: "Mathri",
    category: "Baked Snacks",
    image: "/mathri-traditional-indian-baked-snack.jpg",
    description: "Buttery, flaky diamond-shaped crackers",
    liked: false,
  },
  {
    id: 5,
    name: "Sev",
    category: "Extruded Snacks",
    image: "/sev-spicy-indian-snack-noodles.jpg",
    description: "Thin spiced noodles, perfectly seasoned",
    liked: false,
  },
  {
    id: 6,
    name: "Aloo Bhujia",
    category: "Root Vegetable",
    image: "/aloo-bhujia-potato-snack.jpg",
    description: "Crispy potato and chickpea snack",
    liked: false,
  },
]

export function ProductShowcase() {
  const [likedProducts, setLikedProducts] = useState<Set<number>>(new Set())

  const toggleLike = (id: number) => {
    const newLiked = new Set(likedProducts)
    if (newLiked.has(id)) {
      newLiked.delete(id)
    } else {
      newLiked.add(id)
    }
    setLikedProducts(newLiked)
  }

  return (
    <section id="products" className="py-20 bg-background">
      <div className="max-w-7xl mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">Our Premium Collection</h2>
          <p className="text-xl text-foreground/60 max-w-2xl mx-auto">
            Handpicked selection of authentic Indian snacks, crafted with traditional recipes and premium ingredients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-card rounded-xl overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2"
            >
              <div className="relative overflow-hidden bg-secondary/30 h-64">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-all z-10"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${
                      likedProducts.has(product.id) ? "fill-primary text-primary" : "text-foreground"
                    }`}
                  />
                </button>
              </div>
              <div className="p-6">
                <span className="inline-block bg-primary/10 text-primary text-xs font-semibold px-3 py-1 rounded-full mb-2">
                  {product.category}
                </span>
                <h3 className="text-xl font-bold text-foreground mb-2">{product.name}</h3>
                <p className="text-foreground/60 text-sm mb-4">{product.description}</p>
                <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
