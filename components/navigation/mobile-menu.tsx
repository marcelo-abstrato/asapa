"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui"
import {ChevronDown, ChevronRight, Menu} from "lucide-react"

interface MobileMenuProps {
    links: {
        href: string
        label: string
        submenu?: {
            href: string
            label: string
        }[]
    }[]
}

export default function MobileMenu({links}: MobileMenuProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})

    const toggleMenu = () => {
        setIsOpen(!isOpen)
    }

    const closeMenu = () => {
        setIsOpen(false)
    }

    const toggleSubmenu = (label: string) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [label]: !prev[label],
        }))
    }

    return (
        <div className="md:hidden">
            <Button variant="ghost" size="icon" className="relative" aria-label="Menu de navegação"
                    onClick={toggleMenu}>
                <Menu className="h-6 w-6 text-[#1d4ed8]"/>
            </Button>

            {isOpen && (
                <div className="absolute top-16 right-0 left-0 bg-white shadow-md z-50 border-b">
                    <div className="container py-4 flex flex-col space-y-2">
                        {links.map((link, index) => (
                            <div key={index} className="border-b border-gray-100 pb-2">
                                <div className="flex justify-between items-center">
                                    {link.submenu ? (
                                        <button
                                            className="text-sm font-medium hover:text-[#1d4ed8] transition-colors px-2 py-1 flex items-center justify-between w-full"
                                            onClick={() => toggleSubmenu(link.label)}
                                        >
                                            {link.label}
                                            {openSubmenus[link.label] ? (
                                                <ChevronDown className="h-4 w-4 ml-1"/>
                                            ) : (
                                                <ChevronRight className="h-4 w-4 ml-1"/>
                                            )}
                                        </button>
                                    ) : (
                                        <Link
                                            href={link.href}
                                            className="text-sm font-medium hover:text-[#1d4ed8] transition-colors px-2 py-1"
                                            onClick={closeMenu}
                                        >
                                            {link.label}
                                        </Link>
                                    )}
                                </div>

                                {link.submenu && openSubmenus[link.label] && (
                                    <div className="pl-4 mt-1 space-y-1 border-l-2 border-blue-100 ml-2">
                                        {link.submenu.map((subItem, subIndex) => (
                                            <Link
                                                key={subIndex}
                                                href={subItem.href}
                                                className="text-sm text-gray-600 hover:text-[#1d4ed8] transition-colors block px-2 py-1"
                                                onClick={closeMenu}
                                            >
                                                {subItem.label}
                                            </Link>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
