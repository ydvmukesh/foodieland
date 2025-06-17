import Link from "next/link"
import { Facebook, Twitter, Instagram } from "lucide-react"
import { FOOTER_LINKS } from "@/lib/constants";
import Image from "next/image";
export default function Footer() {
  return (
    <footer className="bg-white mt-20">
      <div className="container">
        <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
          {/* Logo and Description */}
          <div className="space-y-3 sm:space-y-4">
            <Link href="/" className="flex items-center">
              <Image src="/images/Foodieland.svg"   width={110} height={30} alt="foolieland"/> 
            </Link>
            <p className="text-gray-600 text-sm">
              Lorem ipsum dolor sit amet, consectetuipisicing elit,
            </p>
          </div>

          {/* Navigation Links */}
          <nav className=" md:flex space-x-8">
            {FOOTER_LINKS.map((link: { label: string; href: string }) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-gray-900 hover:text-orange-500 transition-colors font-medium"
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>

        <div className="border-t border-gray-200 mt-8 py-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-600 text-sm mx-auto">© 2025 Flowbase. Powered by <span className="text-orange-500">Webflow</span></p>

          <div className="flex items-center space-x-8 mt-4 md:mt-0">
            <Link href="#" className="text-gray-600" aria-label="Facebook">
              <Image src="/images/facebook.svg" alt="facbook" className="w-4 h-4 md:w-5 md:h-5"  width={16} height={12}/>
            </Link>
            <Link href="#" className="text-gray-600" aria-label="Twitter">
              <Image src="/images/twitter.svg" alt="twitter" className="w-4 h-4 md:w-5 md:h-5" width={16} height={16}/>

            </Link>
            <Link href="#" className="text-gray-600" aria-label="Instagram">
              <Image src="/images/instagram.svg" alt="instagram" className="w-4 h-4 md:w-5 md:h-5"  width={16} height={16}/>

            </Link>
          </div>
        </div>
      </div>
    </footer>
  )
}
