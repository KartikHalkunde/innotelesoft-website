import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0081D4] text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold hover:text-[#FFB300] transition-colors">
              Innotelesoft
            </Link>
            <p className="text-sm text-white/70 mt-2">
              © {currentYear} Innotelesoft. All rights reserved.
            </p>
          </div>

          {/* Essential Links */}
          <div className="flex items-center space-x-6">
            <Link href="/about" className="text-white/80 hover:text-[#FFB300] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white/80 hover:text-[#FFB300] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-[#FFB300] transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <a href="mailto:innotelesoft@gmail.com" className="text-white/80 hover:text-[#FFB300] transition-colors block md:inline-block">
              innotelesoft@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 