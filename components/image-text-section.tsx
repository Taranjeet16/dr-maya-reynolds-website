import Image from 'next/image'
import Link from 'next/link'

export function ImageTextSection() {
  return (
    <section className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div className="order-2 md:order-1">
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=600&fit=crop"
                alt="Design workspace"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div className="order-1 md:order-2">
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
              Crafted with intention
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Every project we undertake is a collaboration between strategy and creativity. We believe that great
              design is more than aesthetics—it&apos;s about creating meaningful connections between brands and their
              audiences.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              Our process combines research, innovation, and meticulous attention to detail to deliver solutions that
              not only look beautiful but also drive results.
            </p>

            <Link
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
            >
              Start a Project
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
