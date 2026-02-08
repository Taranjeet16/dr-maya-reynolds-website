'use client'

import { useState } from 'react'
import { ChevronDown } from 'lucide-react'

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  const faqs = [
    {
      question: 'What is your design process?',
      answer:
        'Our process begins with understanding your brand, goals, and audience. We conduct research, develop strategy, create multiple design directions, and refine based on your feedback until we achieve perfection.'
    },
    {
      question: 'How long does a project typically take?',
      answer:
        'Project timelines vary based on scope and complexity. A branding project might take 6-12 weeks, while a website redesign could range from 8-16 weeks. We provide detailed timelines after the initial consultation.'
    },
    {
      question: 'Do you offer revisions?',
      answer:
        'Yes, revisions are included in our standard packages. We believe in collaboration and want to ensure you&apos;re completely satisfied with the final deliverables.'
    },
    {
      question: 'What industries do you work with?',
      answer:
        'We work with a diverse range of industries including tech, lifestyle, healthcare, retail, and nonprofit organizations. Our expertise spans multiple sectors, and we bring fresh perspectives to every project.'
    },
    {
      question: 'Can you help with ongoing design support?',
      answer:
        'Absolutely. We offer ongoing design and creative support through monthly retainer agreements. This allows us to become an extension of your team and maintain consistency across all your creative needs.'
    },
    {
      question: 'How do we get started?',
      answer:
        'Getting started is simple. Reach out through our contact form or email, and we&apos;ll schedule a discovery call to discuss your project, goals, and see if we&apos;re the right fit for your needs.'
    }
  ]

  return (
    <section id="faq" className="py-20 md:py-32 bg-background">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4 text-balance">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services and process.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div key={index} className="border border-border rounded-lg overflow-hidden">
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-5 flex items-center justify-between bg-card hover:bg-secondary transition-colors text-left"
                aria-expanded={openIndex === index}
              >
                <h3 className="text-lg font-serif font-semibold text-foreground">{faq.question}</h3>
                <ChevronDown
                  size={20}
                  className={`flex-shrink-0 text-muted-foreground transition-transform duration-300 ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div className="px-6 py-5 bg-secondary border-t border-border">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
