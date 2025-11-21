"use client"

import { Mail, MapPin, Phone } from "lucide-react"

export function Footer() {
  return (
    <footer className="bg-foreground text-background py-12">
      <div className="max-w-7xl mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">AnnSetu by eDravya</h3>
            <p className="text-background/80 text-sm">
              Bringing authentic Indian snacks to your table with love and tradition.
            </p>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a href="#products" className="hover:text-primary transition-colors">
                  Products
                </a>
              </li>
              <li>
                <a href="#anndoot" className="hover:text-primary transition-colors">
                  Anndoot
                </a>
              </li>
              <li>
                <a href="https://wa.me/918511408789?text=Hello%20I%20want%20to%20know%20more"   target="_blank"
  rel="noopener noreferrer" className="hover:text-primary transition-colors">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Blog
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-primary transition-colors">
                  Press
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4">Contact</h4>
            <ul className="space-y-3 text-sm">
              <li className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:hello@snacklodge.com" className="hover:text-primary transition-colors">
                  query.annsetu@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+918511408789" className="hover:text-primary transition-colors">
                  +91 851140 8789
                </a>
              </li>
              <li className="flex items-gap-2 gap-2">
                <MapPin className="w-4 h-4" />
                <span>Ahmedabad, India</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-background/20 pt-8 flex flex-col md:flex-row items-center justify-between text-sm text-background/70">
          <p>&copy; 2025 eDravya LLP. All rights reserved.</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Terms of Service
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Cookie Policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
