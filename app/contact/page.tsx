'use client'

import React from "react"
import { useState } from 'react'
import Link from 'next/link'
import { Mail, MapPin, Clock, Phone } from 'lucide-react'

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitted, setSubmitted] = useState(false)

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    setIsSubmitting(true)
    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000))
    setSubmitted(true)
    setIsSubmitting(false)
    setFormData({ name: '', email: '', phone: '', message: '' })
  }

  return (
    <main className="min-h-screen bg-background">
      {/* Header */}
      <header className="fixed top-0 z-50 w-full bg-background/95 backdrop-blur-sm border-b border-border/50">
        <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-8 py-4 sm:py-5 flex justify-between items-center">
          <Link href="/" className="text-lg sm:text-xl lg:text-2xl font-serif font-semibold text-foreground tracking-wide hover:text-primary transition-colors">
            Dr. Maya Reynolds
          </Link>
          <nav className="flex items-center gap-5 sm:gap-8 lg:gap-10" aria-label="Main navigation">
            <Link href="/blog" className="text-sm text-foreground/80 hover:text-primary transition-colors tracking-wide">
              Resources
            </Link>
            <Link href="/contact" className="text-sm text-foreground underline tracking-wide">
              Contact
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="pt-28 sm:pt-32 pb-12 sm:pb-16 px-5 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif font-semibold text-foreground mb-6 sm:mb-8 leading-[1.08]">
            Let's Connect
          </h1>
          <p className="text-base sm:text-lg lg:text-xl text-foreground/65 max-w-2xl mx-auto leading-relaxed">
            Reaching out takes courage. Whether you have questions or you're ready to schedule a free 15-minute consultation, I'm here to help you take the next step.
          </p>
        </div>
      </section>

      {/* Contact Form Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-3 gap-12 lg:gap-16 xl:gap-20">
          {/* Form */}
          <div className="lg:col-span-2">
            <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8 sm:mb-10 leading-[1.12]">
              Send me a message
            </h2>
            
            {submitted ? (
              <div className="bg-secondary/50 border border-primary/20 rounded-xl p-8 sm:p-10 text-center">
                <h3 className="text-2xl font-serif font-semibold text-foreground mb-4">Thank you for reaching out</h3>
                <p className="text-foreground/65 leading-relaxed">
                  I've received your message and will respond within 1-2 business days. If you need immediate support, please contact a crisis helpline.
                </p>
                <button 
                  onClick={() => setSubmitted(false)}
                  className="mt-6 text-primary underline hover:text-primary/80 transition-colors"
                >
                  Send another message
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6 sm:space-y-8">
                <div>
                  <label htmlFor="name" className="sr-only">Your Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    placeholder="Your Name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 sm:py-4 border-b-2 border-border bg-transparent text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none transition text-base"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="sr-only">Your Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="Your Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-0 py-3 sm:py-4 border-b-2 border-border bg-transparent text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none transition text-base"
                  />
                </div>
                <div>
                  <label htmlFor="phone" className="sr-only">Your Phone (optional)</label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    placeholder="Your Phone (optional)"
                    value={formData.phone}
                    onChange={handleInputChange}
                    className="w-full px-0 py-3 sm:py-4 border-b-2 border-border bg-transparent text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none transition text-base"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="sr-only">Your Message</label>
                  <textarea
                    id="message"
                    name="message"
                    placeholder="Tell me a little about what you're looking for..."
                    value={formData.message}
                    onChange={handleInputChange}
                    required
                    rows={5}
                    className="w-full px-0 py-3 sm:py-4 border-b-2 border-border bg-transparent text-foreground placeholder:text-foreground/50 focus:border-primary focus:outline-none transition resize-none text-base leading-relaxed"
                  />
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 border-2 border-foreground text-foreground text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors hover:bg-primary hover:text-primary-foreground hover:border-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? 'SENDING...' : 'SEND MESSAGE'}
                </button>
              </form>
            )}
          </div>

          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-10 sm:space-y-12">
            <div>
              <h3 className="text-xl sm:text-2xl font-serif font-semibold text-foreground mb-5 sm:mb-6">My Office</h3>
              <div className="space-y-4 text-foreground/65">
                <div className="flex gap-4">
                  <MapPin className="w-5 h-5 flex-shrink-0 text-primary mt-1" aria-hidden="true" />
                  <address className="not-italic">
                    <p>1234 Healing Way, Suite 200</p>
                    <p>Austin, TX 78701</p>
                  </address>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-4 sm:mb-5">Hours</h4>
              <div className="space-y-3 text-foreground/65">
                <div className="flex gap-3">
                  <Clock className="w-5 h-5 flex-shrink-0 text-primary mt-0.5" aria-hidden="true" />
                  <div>
                    <p>Monday – Thursday: 9am – 6pm</p>
                    <p>Friday: 9am – 3pm</p>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-lg sm:text-xl font-serif font-semibold text-foreground mb-4 sm:mb-5">Contact</h4>
              <div className="space-y-3 text-foreground/65">
                <a href="mailto:hello@drmayareynolds.com" className="flex gap-3 hover:text-primary transition-colors">
                  <Mail className="w-5 h-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>hello@drmayareynolds.com</span>
                </a>
                <a href="tel:+15125550123" className="flex gap-3 hover:text-primary transition-colors">
                  <Phone className="w-5 h-5 flex-shrink-0 text-primary" aria-hidden="true" />
                  <span>(512) 555-0123</span>
                </a>
              </div>
            </div>

            <div className="pt-4">
              <p className="text-sm text-foreground/50 leading-relaxed">
                I see clients both in-person at my Central Austin office and via secure video throughout Texas.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Office Image Section */}
      <section className="py-12 sm:py-16 lg:py-20 px-5 sm:px-6 lg:px-8 bg-secondary/30">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-serif font-semibold text-foreground mb-8 sm:mb-12 text-center leading-[1.12]">
            A welcoming space for healing
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            <div className="aspect-[4/3] bg-muted rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&h=450&fit=crop"
                alt="Therapy office waiting area with comfortable seating and warm lighting"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-xl sm:rounded-2xl overflow-hidden">
              <img
                src="https://images.unsplash.com/photo-1524758631624-e2822e304c36?w=600&h=450&fit=crop"
                alt="Calm therapy room with natural light and comfortable furniture"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
            <div className="aspect-[4/3] bg-muted rounded-xl sm:rounded-2xl overflow-hidden sm:col-span-2 lg:col-span-1">
              <img
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?w=600&h=450&fit=crop"
                alt="Peaceful view from therapy office window"
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Subscribe Section */}
      <section className="py-16 sm:py-20 lg:py-24 px-5 sm:px-6 lg:px-8 bg-primary">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-serif font-semibold text-primary-foreground mb-6 sm:mb-8 leading-[1.12]">
            Free 15-Minute Consultation
          </h2>
          <p className="text-primary-foreground/85 mb-8 sm:mb-10 text-base sm:text-lg leading-relaxed">
            Not sure if therapy is right for you? Let's chat. Schedule a free phone consultation to discuss your needs and see if we're a good fit.
          </p>
          <button className="w-full sm:w-auto px-8 sm:px-10 lg:px-12 py-4 border-2 border-primary-foreground text-primary-foreground text-xs sm:text-sm tracking-[0.2em] font-medium transition-colors hover:bg-primary-foreground hover:text-primary focus:outline-none focus:ring-2 focus:ring-primary-foreground focus:ring-offset-2 focus:ring-offset-primary">
            SCHEDULE CONSULTATION
          </button>
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
