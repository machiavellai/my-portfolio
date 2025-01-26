"use client"
import Link from "next/link"
import { useEffect } from "react"

const Navbar = () => {
  useEffect(() => {
    const handleScroll = (e: Event) => {
      e.preventDefault()
      const target = e.target as HTMLAnchorElement
      const targetId = target.getAttribute("href")?.slice(1)
      if (targetId) {
        const targetElement = document.getElementById(targetId)
        if (targetElement) {
          targetElement.scrollIntoView({ behavior: "smooth" })
        }
      }
    }

    const links = document.querySelectorAll('nav a[href^="#"]')
    links.forEach((link) => {
      link.addEventListener("click", handleScroll)
    })

    return () => {
      links.forEach((link) => {
        link.removeEventListener("click", handleScroll)
      })
    }
  }, [])

  return (
    <nav className="bg-[#050a30] w-full text-blue p-4 rounded-full mx-4 my-4 shadow-lg">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center">
          <span className="text-3xl font-bold text-[#7ec8e3] logo-text">Velli._</span>
        </Link>
        <ul className="flex space-x-4">
          <li>
            <a href="/about" className="hover:text-[#7ec8e3] transition-colors">
              About
            </a>
          </li>
          <li>
            <a href="/projects" className="hover:text-[#7ec8e3] transition-colors">
              Projects
            </a>
          </li>
          <li>
            <Link href="/services" className="hover:text-[#7ec8e3] transition-colors">
              Services
            </Link>
          </li>
          <li>
            <a href="/contact" className="hover:text-[#7ec8e3] transition-colors">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <style jsx>{`
        .logo-text {
          background: linear-gradient(to bottom, #7ec8e3, #0000ff);
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          text-shadow: 
            2px 2px 4px rgba(0, 0, 0, 0.1),
            -2px -2px 4px rgba(255, 255, 255, 0.1);
          letter-spacing: 1px;
        }
      `}</style>
    </nav>
  )
}

export default Navbar

