'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [openFAQ, setOpenFAQ] = useState<number | null>(0)
  const [openBg, setOpenBg] = useState<string | null>('Education')

  const faqs = [
    {
      question: 'What can I expect in my first session?',
      answer: 'Your first session is all about getting to know each other. We\'ll discuss what brought you to therapy, your goals, and any questions you have. There\'s no pressure to dive deep right away—this is a space to feel comfortable and see if we\'re a good fit.',
    },
    {
      question: 'Who do you work with?',
      answer: 'I work with adults experiencing anxiety, depression, relationship challenges, life transitions, and burnout. Whether you\'re navigating a specific issue or seeking personal growth, I\'m here to support you.',
    },
    {
      question: 'Do you offer virtual sessions?',
      answer: 'Yes, I offer both in-person sessions at my Austin office and secure video sessions for clients throughout Texas. Many clients find virtual therapy just as effective and more convenient for their schedules.',
    },
    {
      question: 'How do I know if therapy is right for me?',
      answer: 'If you\'re feeling stuck, overwhelmed, or simply want support navigating life\'s challenges, therapy can help. You don\'t need to be in crisis to benefit—many clients come to me seeking clarity, growth, and a safe space to process their experiences.',
    },
  ]

  const backgroundItems = [
    {
      title: 'Education',
      content: 'Ph.D. in Clinical Psychology from the University of Texas at Austin. Completed advanced training in evidence-based approaches including CBT, EMDR, and attachment-focused therapies.'
    },
    {
      title: 'Licensure',
      content: 'Licensed Psychologist in the State of Texas (License #38472). Member of the American Psychological Association and Texas Psychological Association.'
    },
    {
      title: 'Approach',
      content: 'I integrate multiple therapeutic modalities tailored to each client\'s unique needs. My approach is warm, collaborative, and grounded in the belief that healing happens within a trusting relationship.'
    }
  ]

  return (
    <main className="overflow-x-hidden">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-foreground tracking-wide">
            Dr. Maya Reynolds
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8 lg:gap-10" aria-label="Main navigation">
            <Link href="/blog" className="text-sm text-foreground/80 hover:text-primary transition-colors tracking-wide">
              Resources
            </Link>
            <Link href="/contact" className="text-sm text-foreground/80 hover:text-primary transition-colors tracking-wide">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Section 1: Hero */}
      <section
        className="min-h-screen w-full flex items-center bg-background pt-28 pb-16 sm:pt-32 sm:pb-20 md:pt-36 md:pb-28 lg:pt-40 lg:pb-36"
        aria-labelledby="hero-heading"
      >
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h1
                id="hero-heading"
                className="text-4xl sm:text-5xl md:text-6xl lg:text-6xl xl:text-7xl font-serif font-semibold text-foreground mb-6 sm:mb-8 lg:mb-10 leading-[1.08] tracking-tight text-balance"
              >
                Find your path to peace and clarity
              </h1>
              <p className="text-base sm:text-lg lg:text-xl text-foreground/65 mb-8 sm:mb-10 lg:mb-12 leading-relaxed max-w-md">
                Compassionate therapy for anxiety, depression, and relationships in Austin, Texas.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 sm:py-4 border-2 border-foreground text-foreground text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
                aria-label="Schedule a consultation with Dr. Maya Reynolds"
              >
                SCHEDULE A CONSULTATION
              </Link>
            </div>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary rounded-full flex items-center justify-center overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&h=400&fit=crop"
                  alt="Dr. Maya Reynolds, licensed psychologist in Austin Texas"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 2: Therapeutic Approach */}
      <section
        className="w-full bg-background py-16 sm:py-20 md:py-28 lg:py-36"
        aria-labelledby="approach-heading"
      >
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="order-2 lg:order-1">
              <h2
                id="approach-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 sm:mb-8 leading-[1.12] text-balance"
              >
                A safe space to be heard.
              </h2>
              <p className="text-base sm:text-lg text-foreground/65 leading-relaxed mb-5 sm:mb-6 max-w-lg">
                Therapy is a place where you can show up exactly as you are. No judgment, no pressure—just a supportive space to explore your thoughts and feelings.
              </p>
              <p className="text-base sm:text-lg text-foreground/65 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-lg">
                Together, we'll work collaboratively to understand your patterns, build on your strengths, and create meaningful change in your life.
              </p>
              <Link
                href="/blog"
                className="inline-block w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 border-2 border-foreground text-foreground text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
              >
                LEARN MORE
              </Link>

            </div>
            <div className="flex justify-center lg:justify-end order-1 lg:order-2">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?w=400&h=400&fit=crop"
                  alt="Calm therapy environment with natural light"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 3: Services */}
      <section
        className="w-full bg-background py-16 sm:py-20 md:py-28 lg:py-36"
        aria-labelledby="services-heading"
      >
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8">
          <h2
            id="services-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-12 sm:mb-16 lg:mb-20 leading-[1.12]"
          >
            How I Can Help
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 lg:gap-10">
            {[
              {
                title: 'Anxiety & Stress',
                description: 'Learn to quiet the racing thoughts and find calm. We\'ll develop practical tools to manage worry and build resilience in your daily life.',
                image: 'https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=300&h=300&fit=crop',
              },
              {
                title: 'Relationship Support',
                description: 'Whether you\'re working through conflict, healing from past relationships, or building healthier connections, I\'m here to guide you.',
                image: 'https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=300&h=300&fit=crop',
              },
              {
                title: 'Life Transitions',
                description: 'Change can feel overwhelming. Together, we\'ll navigate career shifts, loss, identity questions, and other major life moments with care.',
                image: 'https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=300&h=300&fit=crop',
              },
            ].map((specialty, idx) => (
              <article key={idx} className="border border-border p-6 sm:p-8 lg:p-10 bg-background">
                <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground mb-4 sm:mb-5 leading-tight">
                  {specialty.title}
                </h3>
                <p className="text-foreground/65 mb-8 sm:mb-10 text-base leading-relaxed">
                  {specialty.description}
                </p>
                <div className="w-full aspect-square bg-secondary rounded-full overflow-hidden">
                  <img
                    src={specialty.image || "/placeholder.svg"}
                    alt={`Illustration representing ${specialty.title}`}
                    className="w-full h-full object-cover"
                  />
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* Section 4: You don't have to do this alone */}
      <section
        className="w-full bg-background py-16 sm:py-20 md:py-28 lg:py-36"
        aria-labelledby="support-heading"
      >
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
            <div className="w-full aspect-[4/5] sm:aspect-[3/4] lg:aspect-auto lg:h-[500px] bg-secondary rounded-2xl overflow-hidden order-1">
              <img
                src="https://images.unsplash.com/photo-1518495973542-4542c06a5843?w=400&h=500&fit=crop"
                alt="Sunlight through leaves representing hope and growth"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-2">
              <h2
                id="support-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 sm:mb-8 leading-[1.12] text-balance"
              >
                You don't have to carry this <em className="font-serif">alone</em>.
              </h2>
              <p className="text-base sm:text-lg text-foreground/65 mb-6 sm:mb-8 leading-relaxed">
                If any of these feel familiar, I want you to know there is hope:
              </p>
              <ul className="space-y-3 sm:space-y-4 text-foreground/65 mb-8 sm:mb-10 lg:mb-12" role="list">
                <li className="flex gap-3 sm:gap-4">
                  <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                  <span className="leading-relaxed">Constant worry that something bad is about to happen</span>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                  <span className="leading-relaxed">Feeling disconnected from yourself or your loved ones</span>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                  <span className="leading-relaxed">Struggling to find motivation or joy in daily life</span>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                  <span className="leading-relaxed">Repeating patterns in relationships that leave you hurt</span>
                </li>
                <li className="flex gap-3 sm:gap-4">
                  <span className="text-primary mt-0.5 flex-shrink-0" aria-hidden="true">•</span>
                  <span className="leading-relaxed">Feeling overwhelmed by work, family, or life demands</span>
                </li>
              </ul>
              <p className="text-foreground/65 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-lg">
                These experiences are more common than you might think. With the right support, you can find your way through.
              </p>
              <Link
                href="/contact"
                className="inline-block w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 border-2 border-foreground text-foreground text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
              >
                START YOUR JOURNEY
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Section 5: About Maya */}
      <section
        id="about"
        className="w-full bg-background py-16 sm:py-20 md:py-28 lg:py-36"
        aria-labelledby="about-heading"
      >

        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-center">
            <div className="flex justify-center lg:justify-start order-1">
              <div className="w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 bg-secondary rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?w=400&h=400&fit=crop"
                  alt="Dr. Maya Reynolds, therapist"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
            <div className="order-2">
              <h2
                id="about-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 sm:mb-8 leading-[1.12]"
              >
                Hi, I'm Maya.
              </h2>
              <p className="text-base sm:text-lg text-foreground/65 leading-relaxed mb-5 sm:mb-6 max-w-lg">
                I believe that everyone deserves a space where they feel truly seen and understood. As a licensed psychologist in Austin, Texas, I've spent over a decade helping adults navigate anxiety, depression, relationship struggles, and life's difficult transitions.
              </p>
              <p className="text-base sm:text-lg text-foreground/65 leading-relaxed mb-8 sm:mb-10 lg:mb-12 max-w-lg">
                My approach is warm, collaborative, and tailored to you. I don't believe in one-size-fits-all therapy—I believe in meeting you where you are and walking alongside you toward where you want to be.
              </p>
              <Link
                href="/#about"
                className="inline-block w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 border-2 border-foreground text-foreground text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 text-center"
              >
                GET TO KNOW ME
              </Link>

            </div>
          </div>
        </div>
      </section>

      {/* Section 6: Professional Background */}
      <section
        className="w-full bg-background py-16 sm:py-20 md:py-28 lg:py-36"
        aria-labelledby="background-heading"
      >
        <div className="max-w-3xl mx-auto w-full px-5 sm:px-6 lg:px-8">
          <h2
            id="background-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-center text-foreground mb-12 sm:mb-16 lg:mb-20 leading-[1.12]"
          >
            My Professional Background
          </h2>
          <div className="space-y-0">
            {backgroundItems.map((item, idx) => (
              <div key={idx} className="border-b border-foreground/15 py-6 sm:py-8 first:pt-0 last:border-b-0">
                <button
                  onClick={() => setOpenBg(openBg === item.title ? null : item.title)}
                  className="w-full flex justify-between items-center text-left group"
                  aria-expanded={openBg === item.title}
                  aria-controls={`bg-content-${idx}`}
                >
                  <h3 className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                    {item.title}
                  </h3>
                  <span className="text-xl sm:text-2xl text-foreground/50 flex-shrink-0" aria-hidden="true">
                    {openBg === item.title ? '−' : '+'}
                  </span>
                </button>
                {openBg === item.title && (
                  <p
                    id={`bg-content-${idx}`}
                    className="text-foreground/65 mt-4 sm:mt-6 leading-relaxed text-base"
                  >
                    {item.content}
                  </p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Section 7: Our Office */}
      <section
        className="w-full bg-secondary py-16 sm:py-20 md:py-28 lg:py-36"
        aria-labelledby="office-heading"
      >
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8">
          <div className="text-center mb-12 sm:mb-16 lg:mb-20">
            <h2
              id="office-heading"
              className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-6 sm:mb-8 leading-[1.12]"
            >
              A Calm Space for Healing
            </h2>
            <p className="text-base sm:text-lg text-foreground/65 leading-relaxed max-w-2xl mx-auto">
              My office in Central Austin is designed to feel warm, private, and welcoming. Natural light, comfortable seating, and a quiet atmosphere create the ideal environment for meaningful therapeutic work. I also offer secure video sessions for clients who prefer the flexibility of virtual therapy.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            <div className="aspect-[4/3] bg-muted rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&h=300&fit=crop"
                alt="Therapy office waiting area with comfortable seating"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=400&h=300&fit=crop"
                alt="Calm therapy room with natural light"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-xl sm:rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1505577058444-a3dab90d4253?w=400&h=300&fit=crop"
                alt="Peaceful window view from therapy office"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
          <div className="text-center mt-10 sm:mt-12 lg:mt-16">
            <p className="text-foreground/60 text-sm sm:text-base leading-relaxed">
              Located in Central Austin, Texas | In-person and virtual sessions available
            </p>
          </div>
        </div>
      </section>

      {/* Section 8: FAQs */}
      <section
        className="w-full bg-background py-16 sm:py-20 md:py-28 lg:py-36"
        aria-labelledby="faq-heading"
      >
        <div className="max-w-6xl mx-auto w-full px-5 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-12 lg:gap-16 xl:gap-20 items-start">
            <div className="w-full aspect-square sm:aspect-[4/3] lg:aspect-square lg:max-h-[400px] bg-secondary rounded-2xl overflow-hidden flex-shrink-0 order-1">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=400&fit=crop"
                alt="Peaceful nature scene"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-2">
              <h2
                id="faq-heading"
                className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-foreground mb-8 sm:mb-10 lg:mb-12 leading-[1.12]"
              >
                Common Questions
              </h2>
              <div className="space-y-0">
                {faqs.map((faq, idx) => (
                  <div key={idx} className="border-b border-foreground/15 last:border-b-0">
                    <button
                      onClick={() => setOpenFAQ(openFAQ === idx ? null : idx)}
                      className="w-full py-5 sm:py-6 flex justify-between items-center text-left group"
                      aria-expanded={openFAQ === idx}
                      aria-controls={`faq-answer-${idx}`}
                    >
                      <h3 className="text-base sm:text-lg lg:text-xl font-serif font-semibold text-foreground group-hover:text-primary transition-colors pr-4">
                        {faq.question}
                      </h3>
                      <span className="text-xl sm:text-2xl text-foreground/50 flex-shrink-0" aria-hidden="true">
                        {openFAQ === idx ? '−' : '+'}
                      </span>
                    </button>
                    {openFAQ === idx && (
                      <p
                        id={`faq-answer-${idx}`}
                        className="pb-5 sm:pb-6 text-foreground/65 leading-relaxed text-base"
                      >
                        {faq.answer}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Section 9: CTA */}
      <section
        className="w-full bg-primary py-20 sm:py-24 md:py-32 lg:py-40"
        aria-labelledby="cta-heading"
      >
        <div className="max-w-3xl mx-auto w-full px-5 sm:px-6 lg:px-8 text-center">
          <h2
            id="cta-heading"
            className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground mb-6 sm:mb-8 leading-[1.12]"
          >
            Ready to take the first step?
          </h2>
          <p className="text-base sm:text-lg text-primary-foreground/85 mb-10 sm:mb-12 lg:mb-14 leading-relaxed max-w-xl mx-auto">
            You don't have to have it all figured out. Reaching out is the hardest part—and I'm here to make it as easy as possible. Let's talk about what you're going through and how I can help.
          </p>
          <Link
            href="/contact"
            className="inline-block w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 border-2 border-primary-foreground text-primary-foreground text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary text-center"
          >
            BOOK A CONSULTATION
          </Link>

        </div>
      </section>

      {/* Footer */}
      <footer className="w-full bg-muted py-16 sm:py-20 lg:py-24" role="contentinfo">
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
                  <Link href="mailto:hello@drmayareynolds.com" className="underline hover:text-primary transition-colors">
                    hello@drmayareynolds.com
                  </Link>
                </p>
                <p>
                  <Link href="tel:+15125550123" className="underline hover:text-primary transition-colors">
                    (512) 555-0123
                  </Link>
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
              <span className="mx-2" aria-hidden="true">•</span>
              <Link href="#" className="hover:text-primary transition-colors">
                Informed Consent
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
