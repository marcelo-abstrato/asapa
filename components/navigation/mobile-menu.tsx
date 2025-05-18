"use client"

import {useState} from "react"
import Link from "next/link"
import {Button} from "@/components/ui"
import {
    Award,
    Calendar,
    ChevronDown,
    ChevronRight,
    FileText,
    HeartHandshake,
    Home,
    Info,
    Mail,
    Menu,
    UserPlus,
    Users,
    Users2,
    X
} from "lucide-react"
import {AnimatePresence, motion} from "framer-motion"

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

    // Function to get the appropriate icon based on the link label
    const getIconForLink = (label: string) => {
        switch (label.toLowerCase()) {
            case "início":
            case "home":
                return <Home className="h-5 w-5 mr-2" aria-hidden="true"/>;
            case "quem somos":
            case "sobre":
            case "história":
                return <Info className="h-5 w-5 mr-2" aria-hidden="true"/>;
            case "eventos":
                return <Calendar className="h-5 w-5 mr-2" aria-hidden="true"/>;
            case "associados":
            case "membros":
                return <Users className="h-5 w-5 mr-2" aria-hidden="true"/>;
            case "conquistas":
            case "prêmios":
                return <Award className="h-5 w-5 mr-2" aria-hidden="true"/>;
            case "contato":
                return <Mail className="h-5 w-5 mr-2" aria-hidden="true"/>;
            case "associe-se":
                return <UserPlus className="h-6 w-6" aria-hidden="true"/>;
            case "diretoria":
                return <Users2 className="h-5 w-5 mr-2" aria-hidden="true"/>;
            case "doacao":
            case "doação":
                return <HeartHandshake className="h-5 w-5 mr-2" aria-hidden="true"/>;
            case "transparencia":
            case "transparência":
                return <FileText className="h-5 w-5 mr-2" aria-hidden="true"/>;
            default:
                return null;
        }
    }

    return (
        <div className="md:hidden mr-[5px]">
            <Button variant="ghost" size="icon" className="relative p-2 bg-[#1d4ed8] hover:bg-[#1e40af]"
                    aria-label="Menu de navegação"
                    onClick={toggleMenu}>
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
                                                className="text-base font-medium hover:text-[#1d4ed8] transition-colors px-3 py-2 flex items-center justify-between w-full rounded-md hover:bg-[#dbeafe]"
                                                onClick={() => toggleSubmenu(link.label)}
                                            >
                                                <span className="flex items-center">
                                                    {getIconForLink(link.label)}
                                                    {link.label}
                                                </span>
                                                {openSubmenus[link.label] ? (
                                                    <ChevronDown className="h-5 w-5 ml-1 text-[#1d4ed8]"/>
                                                ) : (
                                                    <ChevronRight className="h-5 w-5 ml-1 text-[#1d4ed8]"/>
                                                )}
                                            </button>
                                        ) : (
                                            <Link
                                                href={link.href}
                                                className={`
                                                    ${link.label === "Associe-se"
                                                    ? "bg-[#1d4ed8] text-white px-5 py-3 rounded-full font-bold hover:bg-[#1e40af] transition-colors inline-flex items-center justify-between shadow-sm w-full"
                                                    : "text-base font-medium hover:text-[#1d4ed8] transition-colors px-3 py-2 rounded-md hover:bg-[#dbeafe] w-full flex items-center"
                                                }
                                                `}
                                                onClick={closeMenu}
                                            >
                                                {link.label === "Associe-se" ? (
                                                    <>
                                                        <span>{link.label}</span>
                                                        <UserPlus className="h-7 w-7 ml-2" aria-hidden="true"/>
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

                                    <AnimatePresence>
                                        {link.submenu && openSubmenus[link.label] && (
                                            <motion.div
                                                className="pl-4 mt-2 space-y-2 border-l-2 border-[#dbeafe] ml-3 bg-[#f3f4f6] rounded-l-md"
                                                initial={{opacity: 0, height: 0}}
                                                animate={{opacity: 1, height: "auto"}}
                                                exit={{opacity: 0, height: 0}}
                                                transition={{duration: 0.2}}
                                            >
                                                {link.submenu.map((subItem, subIndex) => (
                                                    <Link
                                                        key={subIndex}
                                                        href={subItem.href}
                                                        className="text-base text-[#4b5563] hover:text-[#1d4ed8] transition-colors flex items-center px-3 py-2 rounded-md hover:bg-white"
                                                        onClick={closeMenu}
                                                    >
                                                        {getIconForLink(subItem.label)}
                                                        {subItem.label}
                                                    </Link>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            ))}
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
