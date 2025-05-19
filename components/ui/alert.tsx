"use client";

import {ReactNode, useEffect} from "react";
import {motion, AnimatePresence} from "framer-motion";
import {AlertCircle, CheckCircle, Info, X} from "lucide-react";

type AlertVariant = "error" | "success" | "info" | "warning";

interface AlertProps {
    variant?: AlertVariant;
    title?: string;
    message: string;
    isOpen?: boolean;
    onClose?: () => void;
    icon?: ReactNode;
    autoCloseTimeout?: number;
}

const variantStyles = {
    error: {
        container: "bg-red-50 border-red-200 text-red-800",
        icon: "text-red-500",
        title: "text-red-800",
        closeButton: "text-red-500 hover:bg-red-100"
    },
    success: {
        container: "bg-green-50 border-green-200 text-green-800",
        icon: "text-green-500",
        title: "text-green-800",
        closeButton: "text-green-500 hover:bg-green-100"
    },
    info: {
        container: "bg-blue-50 border-blue-200 text-blue-800",
        icon: "text-blue-500",
        title: "text-blue-800",
        closeButton: "text-blue-500 hover:bg-blue-100"
    },
    warning: {
        container: "bg-yellow-50 border-yellow-200 text-yellow-800",
        icon: "text-yellow-500",
        title: "text-yellow-800",
        closeButton: "text-yellow-500 hover:bg-yellow-100"
    }
};

const defaultIcons = {
    error: <AlertCircle className="h-5 w-5"/>,
    success: <CheckCircle className="h-5 w-5"/>,
    info: <Info className="h-5 w-5"/>,
    warning: <AlertCircle className="h-5 w-5"/>
};

export function Alert({
                          variant = "info",
                          title,
                          message,
                          isOpen = true,
                          onClose,
                          icon,
                          autoCloseTimeout
                      }: AlertProps) {
    // Use the provided icon or the default one for the variant
    const alertIcon = icon || defaultIcons[variant];
    const styles = variantStyles[variant];

    // Auto-close functionality
    useEffect(() => {
        if (isOpen && autoCloseTimeout && onClose) {
            const timer = setTimeout(() => {
                onClose();
            }, autoCloseTimeout);

            return () => clearTimeout(timer);
        }
    }, [isOpen, autoCloseTimeout, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    initial={{opacity: 0, y: -10}}
                    animate={{opacity: 1, y: 0}}
                    exit={{opacity: 0, y: -10}}
                    transition={{
                        type: "spring",
                        stiffness: 500,
                        damping: 30,
                        duration: 0.3
                    }}
                    className={`rounded-lg border p-4 shadow-sm ${styles.container} relative`}
                    role="alert"
                >
                    <div className="flex items-start gap-3">
                        <div className={styles.icon}>
                            {alertIcon}
                        </div>
                        <div className="flex-1">
                            {title && (
                                <h3 className={`font-semibold ${styles.title}`}>
                                    {title}
                                </h3>
                            )}
                            <div className="text-sm mt-1">
                                {message}
                            </div>
                        </div>
                        {onClose && (
                            <button
                                onClick={onClose}
                                className={`rounded-full p-1 ${styles.closeButton}`}
                                aria-label="Fechar"
                            >
                                <X className="h-4 w-4"/>
                            </button>
                        )}
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
