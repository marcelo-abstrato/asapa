"use client"

import Link from "next/link"
import {AnimatePresence, motion} from "framer-motion"
import {NavigationLink} from "./types"
import {getIconForLink} from "./nav-icon"
import {cn} from "@/lib/helpers/css-utils"

interface MobileSubmenuProps {
    link: NavigationLink
    isOpen: boolean
    onClose: () => void
}

export function MobileSubmenu({link, isOpen, onClose}: MobileSubmenuProps) {
    if (!link.submenu) return null;

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="pl-4 mt-2 space-y-2 border-l-2 border-blue-50 ml-3 bg-gray-100 rounded-l-md"
                    initial={{opacity: 0, height: 0}}
                    animate={{opacity: 1, height: "auto"}}
                    exit={{opacity: 0, height: 0}}
                    transition={{duration: 0.2}}
                >
                    {link.submenu.map((subItem, subIndex) => (
                        <Link
                            key={subIndex}
                            href={subItem.href}
                            className={cn(
                                "text-base text-gray-600 hover:text-blue-700 transition-colors",
                                "flex items-center px-3 py-2 rounded-md hover:bg-white"
                            )}
                            onClick={onClose}
                        >
                            {getIconForLink(subItem.label)}
                            {subItem.label}
                        </Link>
                    ))}
                </motion.div>
            )}
        </AnimatePresence>
    );
}
