export function ServicesSection() {
  const services = [
    {
      title: 'Brand Strategy',
      description:
        'Develop a cohesive brand identity that resonates with your audience and stands out in the market.'
    },
    {
      title: 'Visual Design',
      description:
        'Create stunning visual experiences through thoughtful design, color theory, and modern aesthetics.'
    },
    {
      title: 'Digital Solutions',
      description:
        'Build intuitive digital products and interfaces that engage users and drive meaningful results.'
    }
  ]

  return (
    <section id="services" className="py-20 md:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="text-4xl md:text-5xl font-serif font-semibold text-foreground mb-4 text-balance">
            Our Services
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            We offer a range of design and creative services tailored to your unique needs.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-6">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card border border-border rounded-lg p-8 md:p-10 hover:shadow-lg transition-shadow duration-300"
            >
              <h3 className="text-xl font-serif font-semibold text-foreground mb-4">{service.title}</h3>
              <p className="text-muted-foreground leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
