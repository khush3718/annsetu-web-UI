import { Header } from "@/components/header"
import { Footer } from "@/components/footer"
import { ProductShowcase } from "@/components/product-showcase"

export default function ProductsPage() {
    return (
        <main className="min-h-screen pt-10">
            <Header />
            <div className="py-20">
                <div className="max-w-7xl mx-auto px-4 mb-12">
                    <h1 className="text-4xl md:text-5xl font-bold text-foreground">Our Entire Collection</h1>
                    <p className="text-lg text-foreground/60 mt-4">Browse through our full range of authentic Indian snacks.</p>
                </div>
                <ProductShowcase />
            </div>
            <Footer />
        </main>
    )
}
