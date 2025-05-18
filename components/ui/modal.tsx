"use client";

import {ReactNode, useEffect} from "react";
import {X} from "lucide-react";
import {Button} from "./button";

interface ModalProps {
    isOpen: boolean;
    onClose: () => void;
    title?: string;
    description?: string;
    icon?: ReactNode;
    children?: ReactNode;
    autoCloseTimeout?: number;
    closeButtonText?: string;
}

export function Modal({
                          isOpen,
                          onClose,
                          title,
                          description,
                          icon,
                          children,
                          autoCloseTimeout = 5000,
                          closeButtonText = "Fechar"
                      }: ModalProps) {
    // Auto-close modal after specified timeout
    useEffect(() => {
        if (isOpen && autoCloseTimeout > 0) {
            const timer = setTimeout(() => {
                onClose();
            }, autoCloseTimeout);

            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose, autoCloseTimeout]);

    if (!isOpen) return null;

    return (
        <div
            className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out"
            onClick={(e) => {
                // Close modal when clicking on the backdrop
                if (e.target === e.currentTarget) {
                    onClose();
                }
            }}
            role="dialog"
            aria-modal="true"
            aria-labelledby={title ? "modal-title" : undefined}
            aria-describedby={description ? "modal-description" : undefined}
        >
            <div
                className="bg-white text-[#1d4ed8] p-6 rounded-lg shadow-lg max-w-4xl w-full relative animate-fade-in"
                onClick={(e) => e.stopPropagation()}
            >
                <button
                    onClick={onClose}
                    className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                    aria-label="Fechar"
                >
                    <X className="h-5 w-5"/>
                </button>

                <div className="text-center">
                    {icon && (
                        <div
                            className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                            {icon}
                        </div>
                    )}

                    {title && (
                        <h3 id="modal-title" className="text-xl font-bold mb-2">
                            {title}
                        </h3>
                    )}

                    {description && (
                        <p id="modal-description" className="mb-4 text-gray-600">
                            {description}
                        </p>
                    )}

                    {children}

                    {!children && (
                        <Button
                            onClick={onClose}
                            className="bg-[#1d4ed8] text-white hover:bg-[#1e40af]"
                        >
                            {closeButtonText}
                        </Button>
                    )}
                </div>
            </div>
        </div>
    );
}
