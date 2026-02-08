import Link from 'next/link'

export function Footer() {
  return (
    <footer className="bg-secondary border-t border-border">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h3 className="text-xl font-serif font-semibold text-foreground mb-2">Lilac</h3>
            <p className="text-sm text-muted-foreground">Design & Creative Services</p>
          </div>

          <nav className="flex items-center gap-6 md:gap-8">
            <Link href="#services" className="text-sm text-foreground hover:text-primary transition-colors">
              Services
            </Link>
            <Link href="#about" className="text-sm text-foreground hover:text-primary transition-colors">
              About
            </Link>
            <Link href="#faq" className="text-sm text-foreground hover:text-primary transition-colors">
              FAQ
            </Link>
            <Link href="#contact" className="text-sm text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>
        </div>

        <div className="mt-8 pt-8 border-t border-border text-center text-xs text-muted-foreground">
          <p>&copy; 2024 Lilac. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
