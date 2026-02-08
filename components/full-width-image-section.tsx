import Image from 'next/image'

export function FullWidthImageSection() {
  return (
    <section className="py-12 md:py-20 bg-background">
      <div className="max-w-7xl mx-auto px-6">
        <div className="relative aspect-video bg-muted rounded-lg overflow-hidden shadow-xl">
          <Image
            src="https://images.unsplash.com/photo-1552664730-d307ca884978?w=1200&h=675&fit=crop"
            alt="Design showcase"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  )
}
