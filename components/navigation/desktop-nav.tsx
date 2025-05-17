"use client"

import {useState} from "react"
import Link from "next/link"
import {ChevronDown} from "lucide-react"

interface DesktopNavProps {
    links: {
        href: string
        label: string
        submenu?: {
            href: string
            label: string
        }[]
    }[]
}

export default function DesktopNav({links}: DesktopNavProps) {
    const [hoveredItem, setHoveredItem] = useState<string | null>(null)

    return (
        <nav className="hidden md:flex gap-4 lg:gap-6 items-center">
            {links.map((link, index) => (
                <div
                    key={index}
                    className="relative"
                    onMouseEnter={() => setHoveredItem(link.label)}
                    onMouseLeave={() => setHoveredItem(null)}
                >
                    <Link
                        href={link.href}
                        className={`
                            ${link.label === "Associe-se"
                            ? "bg-[#1d4ed8] text-white px-4 py-2 rounded-full font-bold hover:bg-blue-700 transition-colors"
                            : `text-sm font-medium hover:text-[#1d4ed8] transition-colors flex items-center ${hoveredItem === link.label ? "text-[#1d4ed8]" : ""}`
                        }
                        `}
                    >
                        {link.label}
                        {link.submenu && link.label !== "Associe-se" && <ChevronDown className="ml-1 h-4 w-4"/>}
                    </Link>

                    {link.submenu && hoveredItem === link.label && (
                        <div
                            className="absolute left-0 top-full mt-1 py-2 bg-white rounded-md shadow-lg border z-50 min-w-[200px]">
                            {link.submenu.map((subItem, subIndex) => (
                                <Link
                                    key={subIndex}
                                    href={subItem.href}
                                    className="block px-4 py-2 text-sm text-gray-700 hover:bg-blue-50 hover:text-[#1d4ed8]"
                                >
                                    {subItem.label}
                                </Link>
                            ))}
                        </div>
                    )}
                </div>
            ))}
        </nav>
    )
}
