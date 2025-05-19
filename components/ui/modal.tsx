"use client";

import {ReactNode, useEffect} from "react";
import {X} from "lucide-react";
import {Button} from "./button";
import * as Dialog from "@radix-ui/react-dialog";

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

    return (
        <Dialog.Root open={isOpen} onOpenChange={(open) => !open && onClose()}>
            <Dialog.Portal>
                <Dialog.Overlay
                    className="fixed inset-0 bg-gray-800 bg-opacity-40 backdrop-blur-sm z-50 transition-opacity duration-300 ease-in-out"/>
                <Dialog.Content
                    className="fixed inset-0 flex items-center justify-center z-50"
                    onEscapeKeyDown={onClose}
                    onInteractOutside={onClose}
                >
                    <div
                        className="bg-white text-[#1d4ed8] p-6 rounded-lg shadow-lg max-w-4xl w-full relative animate-fade-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <Dialog.Close asChild>
                            <button
                                className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                                aria-label="Fechar"
                            >
                                <X className="h-5 w-5"/>
                            </button>
                        </Dialog.Close>

                        <div className="text-center">
                            {icon && (
                                <div
                                    className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                    {icon}
                                </div>
                            )}

                            {title && (
                                <Dialog.Title className="text-xl font-bold mb-2">
                                    {title}
                                </Dialog.Title>
                            )}

                            {description && (
                                <Dialog.Description className="mb-4 text-gray-600">
                                    {description}
                                </Dialog.Description>
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
                </Dialog.Content>
            </Dialog.Portal>
        </Dialog.Root>
    );
}
