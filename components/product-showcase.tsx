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
    name: "Jira Khakhra",
    category: "Crispy Snacks",
    image: "/yash namkeen/Yash Jira K.png",
    description: "Classic roasted crispy snack with the earthy flavor of cumin seeds.",
    liked: false,
  },
  {
    id: 2,
    name: "Masala Khakhra",
    category: "Crispy Snacks",
    image: "/yash namkeen/Yash Masala.png",
    description: "Spiced handmade roasted wheat crisps with traditional Indian spices.",
    liked: false,
  },
  {
    id: 3,
    name: "Lasan Sev",
    category: "Crispy Snacks",
    image: "/yash namkeen/yash lasan s.png",
    description: "Garlicky, spicy, and crunchy chickpea flour noodles.",
    liked: false,
  },
  {
    id: 4,
    name: "Ratlami Sev",
    category: "Crispy Snacks",
    image: "/yash namkeen/yash ratlami.png",
    description: "Moderately thin, crunchy sev seasoned with mild signature spices.",
    liked: false,
  },
  {
    id: 5,
    name: "Papad Chavanu",
    category: "Crispy Snacks",
    image: "/yash namkeen/yash papad c.png",
    description: "A delightful mix of crushed papad, sev, and savory spices.",
    liked: false,
  },
  {
    id: 6,
    name: "Methi Khakhra",
    category: "Crispy Snacks",
    image: "/yash namkeen/Yash Methi.png",
    description: "Roasted crispy snack infused with the distinct flavor of fenugreek leaves.",
    liked: false,
  },
  {
    id: 7,
    name: "Nadiadi Chavanu",
    category: "Crispy Snacks",
    image: "/yash namkeen/Yash Nadiadi c.png",
    description: "Authentic sweet and spicy trail mix from Nadiad, Gujarat.",
    liked: false,
  },
  {
    id: 8,
    name: "Peri Peri Khakhra",
    category: "Crispy Snacks",
    image: "/yash namkeen/Yash Peri Peri.png",
    description: "Spicy and tangy Peri Peri flavored crispy Indian snack.",
    liked: false,
  },
  {
    id: 9,
    name: "Pizza Khakhra",
    category: "Crispy Snacks",
    image: "/yash namkeen/Yash Pizza.png",
    description: "Crispy snack bursting with the flavors of Italian pizza spices.",
    liked: false,
  },
  {
    id: 10,
    name: "Ragi Khakhra",
    category: "Crispy Snacks",
    image: "/yash namkeen/Yash Ragi.png",
    description: "Healthy and nutritious khakhra made with ragi (finger millet) flour.",
    liked: false,
  },
  {
    id: 11,
    name: "Spicy Chavanu",
    category: "Crispy Snacks",
    image: "/yash namkeen/Yash spicy c.png",
    description: "A spicy, crunchy, and savory mix of sev, boondi, and spices.",
    liked: false,
  },
  {
    id: 12,
    name: "Loung Sev",
    category: "Crispy Snacks",
    image: "/yash namkeen/yash loung sev.png",
    description: "Thick sev flavored with an aromatic punch of cloves (loung) and spices.",
    liked: false,
  },
  {
    id: 13,
    name: "Palak Khakhra",
    category: "Crispy Snacks",
    image: "/yash namkeen/yash palak.png",
    description: "Wholesome and green khakhra infused with the natural goodness of spinach.",
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

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {products.map((product) => (
            <div
              key={product.id}
              className="group bg-white dark:bg-card rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border border-border/50"
            >
              <div className="relative overflow-hidden bg-white dark:bg-card h-64 p-6 flex justify-center items-center">
                <img
                  src={product.image || "/placeholder.svg"}
                  alt={product.name}
                  className="w-full h-full object-contain group-hover:scale-110 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
                <button
                  onClick={() => toggleLike(product.id)}
                  className="absolute top-4 right-4 bg-white/90 p-2 rounded-full hover:bg-white transition-all z-10 shadow-sm"
                >
                  <Heart
                    className={`w-5 h-5 transition-colors ${likedProducts.has(product.id) ? "fill-primary text-primary" : "text-foreground"
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
                {/* <button className="w-full bg-primary text-primary-foreground py-2 rounded-lg font-semibold hover:opacity-90 transition-opacity">
                  Add to Cart
                </button> */}
              </div>
            </div>
          ))}
        </div>

        <div className="flex justify-center">
          <a
            href="/products"
            className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground px-8 py-3 rounded-xl font-bold hover:scale-105 transition-all shadow-lg"
          >
            See More Products
          </a>
        </div>
      </div>
    </section>
  )
}
