import { Envelope, Phone, MapPin } from '@phosphor-icons/react'
import { Separator } from '@/components/ui/separator'
import { Logo } from '@/components/Logo'

export function Footer() {
  return (
    <footer className="bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <Logo className="text-primary-foreground mb-4" />
            <p className="text-primary-foreground/80 leading-relaxed">
              Empowering students to achieve academic excellence through personalized, expert tutoring.
            </p>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <a href="#services" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Services
                </a>
              </li>
              <li>
                <a href="#features" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#pricing" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Pricing
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  Testimonials
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Programs</h4>
            <ul className="space-y-3 text-primary-foreground/80">
              <li>Individual Tutoring</li>
              <li>Small Group Classes</li>
              <li>Exam Preparation</li>
              <li>College Counseling</li>
            </ul>
          </div>

          <div>
            <h4 className="font-bold text-lg mb-4">Contact Us</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-3">
                <Envelope size={20} className="flex-shrink-0 mt-1" />
                <a href="mailto:info@cestuition.com" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  info@cestuition.com
                </a>
              </li>
              <li className="flex items-start gap-3">
                <Phone size={20} className="flex-shrink-0 mt-1" />
                <a href="tel:+1234567890" className="text-primary-foreground/80 hover:text-primary-foreground transition-colors">
                  +1 (234) 567-890
                </a>
              </li>
              <li className="flex items-start gap-3">
                <MapPin size={20} className="flex-shrink-0 mt-1" />
                <span className="text-primary-foreground/80">
                  123 Education Street<br />Singapore
                </span>
              </li>
            </ul>
          </div>
        </div>

        <Separator className="bg-primary-foreground/20 mb-8" />

        <div className="flex flex-col md:flex-row justify-between items-center gap-4 text-primary-foreground/80 text-sm">
          <p>© {new Date().getFullYear()} CES Tuition. All rights reserved.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-primary-foreground transition-colors">
              Terms of Service
            </a>
            <a href="https://app.cestuition.com" className="hover:text-primary-foreground transition-colors font-medium">
              Student Portal
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}
