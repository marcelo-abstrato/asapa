"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui"
import {ChevronDown, ChevronRight, Menu, UserPlus, X} from "lucide-react"
import {AnimatePresence, motion} from "framer-motion"
import {NavigationProps} from "./types"
import {getIconForLink} from "./nav-icon"
import {MobileSubmenu} from "./mobile-submenu"
import {cn} from "@/lib/helpers/css-utils"

export default function MobileMenu({links}: NavigationProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [openSubmenus, setOpenSubmenus] = useState<Record<string, boolean>>({})

    const toggleMenu = () => setIsOpen(!isOpen)
    const closeMenu = () => setIsOpen(false)

    const toggleSubmenu = (label: string) => {
        setOpenSubmenus((prev) => ({
            ...prev,
            [label]: !prev[label],
        }))
    }

    return (
        <div className="md:hidden mr-[5px]">
            <Button
                variant="ghost"
                size="icon"
                className="relative p-2 bg-blue-700 hover:bg-blue-800"
                aria-label="Menu de navegação"
                onClick={toggleMenu}
            >
                <div className="relative w-6 h-6">
                    <AnimatePresence initial={false} mode="wait">
                        {isOpen ? (
                            <motion.div
                                key="close"
                                initial={{opacity: 0, rotate: -90}}
                                animate={{opacity: 1, rotate: 0}}
                                exit={{opacity: 0, rotate: 90}}
                                transition={{duration: 0.3}}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <X className="h-6 w-6 text-white" strokeWidth={2}/>
                            </motion.div>
                        ) : (
                            <motion.div
                                key="menu"
                                initial={{opacity: 0, rotate: 90}}
                                animate={{opacity: 1, rotate: 0}}
                                exit={{opacity: 0, rotate: -90}}
                                transition={{duration: 0.3}}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <Menu className="h-6 w-6 text-white" strokeWidth={2}/>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </div>
            </Button>

            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        className="absolute top-20 md:top-16 right-0 left-0 bg-white shadow-lg z-50 border-b rounded-b-lg mx-2"
                        initial={{opacity: 0, y: -20}}
                        animate={{opacity: 1, y: 0}}
                        exit={{opacity: 0, y: -20}}
                        transition={{duration: 0.2, ease: "easeInOut"}}
                    >
                        <div className="px-4 py-5 flex flex-col space-y-3">
                            {links.map((link, index) => (
                                <div key={index} className="border-b border-gray-100 pb-3">
                                    <div className="flex justify-between items-center">
                                        {link.submenu ? (
                                            <button
                                                className={cn(
                                                    "text-base font-medium transition-colors px-3 py-2",
                                                    "flex items-center justify-between w-full rounded-md",
                                                    "hover:text-blue-700 hover:bg-blue-50"
                                                )}
                                                onClick={() => toggleSubmenu(link.label)}
                                            >
                                                <span className="flex items-center">
                                                    {getIconForLink(link.label)}
                                                    {link.label}
                                                </span>
                                                {openSubmenus[link.label] ? (
                                                    <ChevronDown className="h-5 w-5 ml-1 text-blue-700"/>
                                                ) : (
                                                    <ChevronRight className="h-5 w-5 ml-1 text-blue-700"/>
                                                )}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className={cn(
                                                    "transition-colors",
                                                    link.label === "Associe-se"
                                                        ? "bg-blue-700 text-white px-5 py-3 rounded-full font-bold hover:bg-blue-800 inline-flex items-center justify-between shadow-sm w-full"
                                                        : "text-base font-medium hover:text-blue-700 px-3 py-2 rounded-md hover:bg-blue-50 w-full flex items-center"
                                                )}
                                                onClick={closeMenu}
                                            >
                                                {link.label === "Associe-se" ? (
                                                    <>
                                                        <span>{link.label}</span>
                                                        <UserPlus className="h-7 w-7 ml-2" aria-hidden={true}/>
                                                    </>
                                                ) : (
                                                    <>
                                                        {getIconForLink(link.label)}
                                                        {link.label}
                                                    </>
                                                )}
                                            </Link>
                                        )}
                                    </div>

                                    <MobileSubmenu
                                        link={link}
                                        isOpen={openSubmenus[link.label] || false}
                                        onClose={closeMenu}
                                    />
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
