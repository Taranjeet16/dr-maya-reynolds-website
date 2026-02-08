import Link from 'next/link'

export function HeroSection() {
  return (
    <section className="pt-32 pb-20 md:pt-48 md:pb-32 bg-gradient-to-b from-secondary to-background">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h1 className="text-5xl md:text-7xl font-serif font-semibold text-foreground mb-6 text-balance leading-tight">
          Design that speaks volumes
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed text-balance">
          Creative solutions for brands that want to make an impact. We combine strategy, design, and storytelling to create unforgettable experiences.
        </p>

        <Link
          href="#services"
          className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
        >
          Explore Our Work
        </Link>
      </div>
    </section>
  )
}
