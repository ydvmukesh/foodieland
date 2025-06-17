"use client"

import Link from "next/link"
import { Menu, X } from "lucide-react"
import { useState, useEffect } from "react"
import { NAVIGATION_LINKS, SOCIAL_LINKS } from "@/lib/constants"
import { Button } from "@/components/ui/Button"
import Image from "next/image"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen)
  const closeMenu = () => setIsMenuOpen(false)

  return (
    <header className="w-full bg-white border-b border-gray-100 sticky top-0 z-50 shadow">
      <div className="container">
        <div className="flex items-center justify-between h-16 md:h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center z-50" onClick={closeMenu}>
            <Image src="/images/Foodieland.svg" width={110} height={30} alt="foolieland"/> 
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-12">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`${
                  link.href === "/" ? "text-black font-semibold" : "text-black fw-medium"
                } hover:text-orange-500 transition-colors`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Social Icons */}
          <div className="hidden md:flex items-center space-x-8">
            {SOCIAL_LINKS.map((social) => {
              return (
                <Link
                  key={social.name}
                  href={social.href}
                  className="text-black hover:text-orange-500 transition-colors"
                  aria-label={social.name}
                >
                  <Image src={social.icon} alt={social.name} className="w-4 h-4" width={16} height={12}/>
                </Link>
              )
            })}
          </div>

          {/* Mobile Menu Button */}
          <Button
            variant="ghost"
            size="sm"
            className="lg:hidden z-50 pr-0 justify-end"
            onClick={toggleMenu}
            aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            aria-expanded={isMenuOpen}
          >
            {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </Button>
        </div>

        {/* Mobile Navigation Overlay */}
        {isMounted && isMenuOpen && (
          <div className="fixed inset-0 bg-black/60 bg-opacity-20 lg:hidden z-40" onClick={closeMenu} aria-hidden="true" />
        )}

        {/* Mobile Navigation Menu */}
        {isMounted && (
          <div
            className={`fixed top-0 right-0 h-full w-80 max-w-[80vw] bg-white shadow-xl transform transition-transform duration-300 ease-in-out lg:hidden z-50 ${
              isMenuOpen ? "translate-x-0" : "translate-x-full"
            }`}
          >
            <div className="flex flex-col h-full">
              {/* Mobile Menu Header */}
              <div className="flex items-center justify-between p-4 border-b border-gray-200">
                <span className="text-xl font-bold text-gray-900">Menu</span>
                <Button variant="ghost" className="justify-end" size="sm" onClick={closeMenu} aria-label="Close menu">
                  <X className="w-5 h-5" />
                </Button>
              </div>

              {/* Mobile Navigation Links */}
              <nav className="flex-1 px-4 py-6">
                <ul className="space-y-1">
                  {NAVIGATION_LINKS.map((link) => (
                    <li key={link.href}>
                      <Link
                        href={link.href}
                        className={`block py-3 px-4 text-base ${
                          link.href === "/" ? "font-medium text-gray-900" : "text-gray-600"
                        } hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors`}
                        onClick={closeMenu}
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>

              {/* Mobile Social Icons */}
              <div className="p-4 border-t border-gray-200">
                <div className="flex items-center space-x-4">
                  <p className="text-sm font-medium text-gray-900">Follow us</p>
                  {SOCIAL_LINKS.map((social) => {
                    return (
                      <Link
                        key={social.name}
                        href={social.href}
                        className="p-2 text-gray-600 hover:text-orange-500 hover:bg-orange-50 rounded-lg transition-colors"
                        aria-label={social.name}
                        onClick={closeMenu}
                      >
                        <Image src={social.icon} alt={social.name} className="w-4 h-4" width={16} height={14}/>
                      </Link>
                    )
                  })}
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </header>
  )
}
