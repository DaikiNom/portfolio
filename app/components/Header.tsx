import type React from "react"

interface NavItem {
  name: string
  href: string
}

const Header: React.FC = () => {
  const navItems: NavItem[] = [
    { name: "About", href: "#about" },
    { name: "Skills", href: "#skills" },
    { name: "Creative", href: "#creative" },
    { name: "Works", href: "#works" },
    { name: "Career", href: "#career" },
    { name: "Contact", href: "#contact" },
  ]

  return (
    <header className="bg-gray-800 text-white py-4">
      <div className="container mx-auto flex justify-between items-center">
        <h1 className="text-2xl font-bold">My Portfolio</h1>
        <nav>
          <ul className="flex space-x-6">
            {navItems.map((item) => (
              <li key={item.name}>
                <a href={item.href} className="hover:text-gray-300">
                  {item.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  )
}

export default Header
