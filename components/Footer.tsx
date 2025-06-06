import Link from 'next/link'

const Footer = () => {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-[#0F1C30] text-white py-8">
      <div className="container-custom">
        <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          {/* Logo and Copyright */}
          <div className="text-center md:text-left">
            <Link href="/" className="text-xl font-bold hover:text-[#DA8637] transition-colors">
              Innotelesoft
            </Link>
            <p className="text-sm text-white/70 mt-2">
              © {currentYear} Innotelesoft. All rights reserved.
            </p>
          </div>

          {/* Essential Links */}
          <div className="flex items-center space-x-6">
            <Link href="/about" className="text-white/80 hover:text-[#DA8637] transition-colors">
              About
            </Link>
            <Link href="/services" className="text-white/80 hover:text-[#DA8637] transition-colors">
              Services
            </Link>
            <Link href="/contact" className="text-white/80 hover:text-[#DA8637] transition-colors">
              Contact
            </Link>
          </div>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <a href="tel:1234567890" className="text-white/80 hover:text-[#DA8637] transition-colors block md:inline-block">
              1234567890
            </a>
            <span className="hidden md:inline mx-2 text-white/40">|</span>
            <a href="mailto:abc@gmail.com" className="text-white/80 hover:text-[#DA8637] transition-colors block md:inline-block">
              abc@gmail.com
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer 