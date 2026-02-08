import Link from 'next/link'

export function CTASection() {
  return (
    <section id="contact" className="py-20 md:py-32 bg-accent">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-4xl md:text-5xl font-serif font-semibold text-accent-foreground mb-6 text-balance">
          Ready to bring your vision to life?
        </h2>

        <p className="text-lg md:text-xl text-accent-foreground/80 mb-10 max-w-2xl mx-auto leading-relaxed text-balance">
          Let&apos;s work together to create something beautiful and meaningful. Get in touch with us today and let&apos;s
          discuss your project.
        </p>

        <Link
          href="mailto:hello@lilac.com"
          className="inline-block bg-accent-foreground text-accent px-10 py-5 rounded-full font-semibold hover:shadow-lg transition-all hover:scale-105"
        >
          Get in Touch
        </Link>
      </div>
    </section>
  )
}
