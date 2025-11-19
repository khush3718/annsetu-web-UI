"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import Image from "next/image"

export function Header() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 bg-background border-b border-border">
      <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image 
            src="/annsetu-logo.png"      
            alt="AnnSetu Logo"
            width={40}
            height={40}
            className="object-contain"
          />
          <h1 className="text-2xl font-bold text-foreground">AnnSetu by eDravya</h1>
        </div>

        <nav className="hidden md:flex items-center gap-8">
          <a href="#products" className="text-foreground hover:text-primary transition-colors">
            Products
          </a>
          <a href="#anndoot" className="text-foreground hover:text-primary transition-colors">
            Anndoot
          </a>
          <a href="#about" className="text-foreground hover:text-primary transition-colors">
            About
          </a>
          <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium hover:opacity-90 transition-opacity">
            Contact
          </button>
        </nav>

        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X /> : <Menu />}
        </button>

        {isOpen && (
          <div className="absolute top-full left-0 right-0 bg-background border-b border-border md:hidden">
            <nav className="flex flex-col p-4 gap-4">
              <a href="#products" className="text-foreground hover:text-primary">
                Products
              </a>
              <a href="#anndoot" className="text-foreground hover:text-primary">
                Anndoot
              </a>
              <a href="#about" className="text-foreground hover:text-primary">
                About
              </a>
              <button className="bg-primary text-primary-foreground px-6 py-2 rounded-lg font-medium w-full">
                Contact
              </button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
