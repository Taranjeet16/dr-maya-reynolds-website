import Image from 'next/image'
import Link from 'next/link'

export function AboutSection() {
  return (
    <section id="about" className="py-20 md:py-32 bg-gradient-to-b from-background to-secondary">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-2 gap-12 md:gap-16 items-center">
          {/* Image */}
          <div>
            <div className="relative aspect-square bg-muted rounded-lg overflow-hidden shadow-lg">
              <Image
                src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=600&h=600&fit=crop"
                alt="About Lilac"
                fill
                className="object-cover"
              />
            </div>
          </div>

          {/* Text Content */}
          <div>
            <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-6 text-balance">
              About Lilac
            </h2>

            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Lilac was founded with a simple mission: to help brands tell their stories through thoughtful design. We
              believe that every brand has a unique voice, and our job is to amplify it.
            </p>

            <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
              With years of experience working with businesses of all sizes, we&apos;ve learned that successful design
              is about understanding your goals, your audience, and creating solutions that bridge that gap.
            </p>

            <Link
              href="#contact"
              className="inline-block bg-primary text-primary-foreground px-8 py-4 rounded-full font-medium hover:bg-opacity-90 transition-all hover:shadow-lg"
            >
              Get in Touch
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}
