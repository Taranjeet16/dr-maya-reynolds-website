'use client'

import { useState } from 'react'
import Link from 'next/link'
import { X } from 'lucide-react'

interface Resource {
  id: number
  title: string
  category: string
  date: string
  image: string
  excerpt: string
  content: string
}

const resources: Resource[] = [
  {
    id: 1,
    title: 'Understanding Anxiety: What It Is and How to Manage It',
    category: 'Anxiety',
    date: 'December 15, 2024',
    image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=600&h=400&fit=crop',
    excerpt: 'Anxiety is one of the most common mental health challenges. Learn what it really is and simple strategies to manage it.',
    content: 'Anxiety is a natural response to stress, but when it becomes overwhelming, it can interfere with daily life. Understanding the difference between normal worry and clinical anxiety is the first step toward finding relief.\n\nCommon symptoms of anxiety include persistent worry, restlessness, difficulty concentrating, sleep problems, and physical symptoms like muscle tension or rapid heartbeat. If these symptoms are affecting your quality of life, you\'re not alone—and help is available.\n\nSimple strategies can help manage anxiety: practice deep breathing, limit caffeine intake, establish a consistent sleep routine, and consider talking to a therapist who specializes in anxiety disorders. Remember, seeking support is a sign of strength, not weakness.'
  },
  {
    id: 2,
    title: '5 Signs You Might Benefit from Therapy',
    category: 'Getting Started',
    date: 'November 28, 2024',
    image: 'https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=600&h=400&fit=crop',
    excerpt: 'Wondering if therapy is right for you? Here are five common signs that working with a therapist could help.',
    content: 'Many people wonder whether their struggles are "serious enough" for therapy. The truth is, you don\'t need to be in crisis to benefit from working with a therapist.\n\nHere are five signs that therapy might help: 1) You\'re feeling stuck in patterns that no longer serve you. 2) Your relationships are causing consistent stress or pain. 3) You\'re experiencing anxiety, depression, or overwhelming emotions. 4) A major life transition has left you feeling lost. 5) You want to better understand yourself and grow as a person.\n\nTherapy isn\'t just for difficult times—it\'s also a powerful tool for self-discovery, personal growth, and building a more fulfilling life. If any of these resonate with you, reaching out to a therapist could be a meaningful next step.'
  },
  {
    id: 3,
    title: 'How to Support a Partner with Depression',
    category: 'Relationships',
    date: 'October 12, 2024',
    image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=600&h=400&fit=crop',
    excerpt: 'When someone you love is struggling with depression, knowing how to help can feel overwhelming. Here are some ways to offer meaningful support.',
    content: 'Watching a partner struggle with depression can feel helpless and exhausting. You want to fix things, but depression isn\'t something that can be "fixed" with love alone. That said, your support matters more than you might realize.\n\nStart by educating yourself about depression—understanding that it\'s a medical condition, not a character flaw, can shift how you respond. Be patient and avoid taking their withdrawal personally. Offer specific help instead of vague offers ("I\'ll do the dishes tonight" vs. "Let me know if you need anything").\n\nMost importantly, encourage professional help while respecting their autonomy. And don\'t forget to care for yourself—supporting someone with depression is emotionally demanding, and you deserve support too.'
  },
  {
    id: 4,
    title: 'Grounding Techniques for When Anxiety Strikes',
    category: 'Anxiety',
    date: 'September 5, 2024',
    image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=600&h=400&fit=crop',
    excerpt: 'Practical grounding exercises you can use anywhere to help calm your nervous system during anxious moments.',
    content: 'When anxiety hits, your nervous system goes into overdrive. Grounding techniques can help bring you back to the present moment and calm the stress response.\n\nTry the 5-4-3-2-1 technique: Identify 5 things you can see, 4 things you can touch, 3 things you can hear, 2 things you can smell, and 1 thing you can taste. This engages your senses and pulls your attention away from anxious thoughts.\n\nOther helpful techniques include deep belly breathing (inhale for 4 counts, hold for 4, exhale for 6), progressive muscle relaxation, or simply placing your feet firmly on the ground and noticing the sensation. Practice these when you\'re calm so they become automatic when you need them most.'
  },
]

export default function ResourcesPage() {
  const [selectedResource, setSelectedResource] = useState<Resource | null>(null)

  return (
    <main className="w-full bg-background overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-foreground tracking-wide hover:text-primary transition-colors">
            Dr. Maya Reynolds
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8 lg:gap-10" aria-label="Main navigation">
            <Link href="/blog" className="text-sm text-foreground underline tracking-wide">
              Resources
            </Link>
            <Link href="/contact" className="text-sm text-foreground/80 hover:text-primary transition-colors tracking-wide">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 lg:pb-20 px-5 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 items-center">
          <div className="flex justify-center lg:justify-start order-2 lg:order-1">
            <div className="w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[28rem] bg-secondary rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1544027993-37dbfe43562a?w=400&h=500&fit=crop"
                alt="Calm reading nook with soft natural light"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-5 sm:mb-6 leading-[1.08]">
              Resources
            </h1>
            <p className="text-base sm:text-lg lg:text-xl text-foreground/65 mb-4 leading-relaxed max-w-lg">
              A collection of articles and insights on anxiety, relationships, and emotional wellbeing. Helpful information to support your journey—whether or not we work together.
            </p>
            <p className="text-foreground font-medium">Take what resonates, leave what doesn't.</p>
          </div>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 sm:gap-12 lg:gap-14">
            {resources.map((resource, index) => (
              <article
                key={resource.id}
                className="group"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                <div className="overflow-hidden bg-secondary rounded-xl sm:rounded-2xl mb-5 sm:mb-6 aspect-[3/2]">
                  <img
                    src={resource.image || "/placeholder.svg"}
                    alt={`Illustration for ${resource.title}`}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="space-y-3 sm:space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-medium text-primary uppercase tracking-wider">
                      {resource.category}
                    </span>
                    <span className="text-foreground/40" aria-hidden="true">•</span>
                    <span className="text-xs text-foreground/50">
                      {resource.date}
                    </span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-serif font-semibold text-foreground leading-tight text-balance">
                    {resource.title}
                  </h2>
                  <p className="text-foreground/65 leading-relaxed text-base">
                    {resource.excerpt}
                  </p>
                  <button
                    onClick={() => setSelectedResource(resource)}
                    className="text-foreground font-medium underline hover:text-primary transition-colors text-base"
                  >
                    Read More
                  </button>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Modal for Resource */}
      {selectedResource && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedResource(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="resource-modal-title"
        >
          <div
            className="bg-background rounded-xl sm:rounded-2xl max-w-3xl w-full max-h-[90vh] overflow-y-auto"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 bg-background border-b border-border/50 p-5 sm:p-6 flex justify-between items-start gap-4">
              <div>
                <span className="text-xs font-medium text-primary uppercase tracking-wider">
                  {selectedResource.category}
                </span>
                <h2 id="resource-modal-title" className="text-2xl sm:text-3xl font-serif font-semibold text-foreground mt-2 leading-tight">
                  {selectedResource.title}
                </h2>
              </div>
              <button
                onClick={() => setSelectedResource(null)}
                className="p-2 hover:bg-muted rounded-full transition-colors flex-shrink-0"
                aria-label="Close article"
              >
                <X className="w-5 h-5 sm:w-6 sm:h-6 text-foreground" />
              </button>
            </div>

            {/* Modal Content */}
            <div className="p-5 sm:p-8 lg:p-10">
              <div className="mb-6 sm:mb-8">
                <img
                  src={selectedResource.image || "/placeholder.svg"}
                  alt={`Illustration for ${selectedResource.title}`}
                  className="w-full aspect-[2/1] object-cover rounded-xl"
                />
              </div>

              <div className="max-w-2xl mx-auto">
                <p className="text-sm text-foreground/50 mb-6 sm:mb-8">
                  {selectedResource.date}
                </p>

                <div className="space-y-5 sm:space-y-6">
                  {selectedResource.content.split('\n\n').map((paragraph, idx) => (
                    <p key={idx} className="text-foreground/75 leading-relaxed text-base sm:text-lg">
                      {paragraph}
                    </p>
                  ))}
                </div>

                <div className="mt-10 sm:mt-12 pt-8 border-t border-border/50">
                  <p className="text-foreground/65 text-sm leading-relaxed">
                    If you found this helpful and want to explore these topics further, I'm here to support you. 
                    <Link href="/contact" className="text-primary underline ml-1 hover:text-primary/80 transition-colors">
                      Reach out for a free consultation.
                    </Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* CTA Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground mb-6 sm:mb-8 leading-[1.12]">
            Ready to Talk?
          </h2>
          <p className="text-primary-foreground/85 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
            Reading can only take you so far. If you're ready for personalized support, I'd love to hear from you.
          </p>
          <Link 
            href="/contact"
            className="inline-block w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 border-2 border-primary-foreground text-primary-foreground text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary"
          >
            SCHEDULE CONSULTATION
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-muted py-16 sm:py-20 lg:py-24" role="contentinfo">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10 sm:gap-12 lg:gap-16 mb-12 sm:mb-16">
            <div>
              <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-foreground mb-5 sm:mb-6">
                Dr. Maya Reynolds
              </h3>
              <address className="not-italic space-y-2 text-foreground/65 text-base leading-relaxed">
                <p>1234 Healing Way, Suite 200</p>
                <p>Austin, TX 78701</p>
                <p className="pt-3 sm:pt-4">
                  <a href="mailto:hello@drmayareynolds.com" className="underline hover:text-primary transition-colors">
                    hello@drmayareynolds.com
                  </a>
                </p>
                <p>
                  <a href="tel:+15125550123" className="underline hover:text-primary transition-colors">
                    (512) 555-0123
                  </a>
                </p>
              </address>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-5 sm:mb-6">Office Hours</h4>
              <div className="space-y-2 text-foreground/65 text-base leading-relaxed">
                <p>Monday – Thursday</p>
                <p>9am – 6pm</p>
                <p className="pt-2">Friday</p>
                <p>9am – 3pm</p>
              </div>
            </div>
            <div>
              <h4 className="text-base sm:text-lg font-semibold text-foreground mb-5 sm:mb-6">Navigate</h4>
              <nav className="space-y-3" aria-label="Footer navigation">
                <Link href="/" className="block text-foreground/65 text-base underline hover:text-primary transition-colors">
                  Home
                </Link>
                <Link href="/contact" className="block text-foreground/65 text-base underline hover:text-primary transition-colors">
                  Contact
                </Link>
                <Link href="/blog" className="block text-foreground/65 text-base underline hover:text-primary transition-colors">
                  Resources
                </Link>
              </nav>
            </div>
          </div>
          <div className="border-t border-border pt-8 sm:pt-10 text-center text-sm text-foreground/50 space-y-3 sm:space-y-4">
            <nav aria-label="Legal links">
              <Link href="#" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span className="mx-2" aria-hidden="true">•</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Good Faith Estimate
              </Link>
              <span className="mx-2" aria-hidden="true">•</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Terms of Service
              </Link>
            </nav>
            <p className="text-foreground/40 text-xs sm:text-sm">
              This website is for informational purposes only and does not constitute medical advice.
            </p>
            <p className="text-xs sm:text-sm">© 2024 Dr. Maya Reynolds, Psy.D. All Rights Reserved.</p>
          </div>
        </div>
      </footer>
    </main>
  )
}
