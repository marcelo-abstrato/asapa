"use client"

import {Button} from "@/components/ui/button"
import {Facebook, Instagram, X} from "lucide-react"
import {useEffect, useState} from "react"

export function Contato() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
        newsletter: false
    });

    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        success: false,
        error: ""
    });

    const [showThankYouPopup, setShowThankYouPopup] = useState(false);

    // Auto-close popup after 5 seconds
    useEffect(() => {
        if (showThankYouPopup) {
            const timer = setTimeout(() => {
                setShowThankYouPopup(false);
            }, 5000);

            return () => clearTimeout(timer);
        }
    }, [showThankYouPopup]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const {id, value} = e.target;
        setFormData(prev => ({...prev, [id]: value}));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, newsletter: e.target.checked}));
    };

    const closeThankYouPopup = () => {
        setShowThankYouPopup(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        setStatus({...status, submitting: true});

        try {
            const response = await fetch('/api/contact', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Ocorreu um erro ao enviar a mensagem');
            }

            setStatus({
                submitting: false,
                submitted: true,
                success: true,
                error: ""
            });

            // Show thank you popup
            setShowThankYouPopup(true);

            // Reset form after successful submission
            setFormData({
                name: "",
                email: "",
                subject: "",
                message: "",
                newsletter: false
            });

        } catch (error) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                error: error instanceof Error ? error.message : 'Ocorreu um erro ao enviar a mensagem'
            });
        }
    };

    return (
        <section id="contato" className="w-full py-12 md:py-24 bg-[#1d4ed8] text-white">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entre em Contato</h2>
                        <p className="max-w-[600px] md:text-xl">
                            Estamos sempre disponíveis para responder suas dúvidas, receber sugestões ou conversar
                            sobre
                            parcerias.
                        </p>
                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-map-pin"
                                    >
                                        <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                        <circle cx="12" cy="10" r="3"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">Endereço</p>
                                    <p className="text-white/80">Rua Francisco Vieira, 701 - Florianópolis - SC</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-phone"
                                    >
                                        <path
                                            d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">Telefone</p>
                                    <p className="text-white/80">(48) 9 9988-3298</p>
                                </div>
                            </div>
                            <div className="flex items-center gap-2">
                                <div
                                    className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="20"
                                        height="20"
                                        viewBox="0 0 24 24"
                                        fill="none"
                                        stroke="currentColor"
                                        strokeWidth="2"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        className="lucide lucide-mail"
                                    >
                                        <rect width="20" height="16" x="2" y="4" rx="2"/>
                                        <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                    </svg>
                                </div>
                                <div>
                                    <p className="font-medium">Email</p>
                                    <p className="text-white/80">contato@asapa.com.br</p>
                                </div>
                            </div>
                        </div>
                        <div className="flex gap-4 mt-6">
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <Instagram className="h-5 w-5"/>
                            </a>
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <Facebook className="h-5 w-5"/>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        {status.submitted && status.success && !showThankYouPopup ? (
                            <div
                                className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                role="alert">
                                <strong className="font-bold">Sucesso!</strong>
                                <span className="block sm:inline"> Sua mensagem foi enviada com sucesso.</span>
                            </div>
                        ) : status.submitted && !status.success ? (
                            <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                                 role="alert">
                                <strong className="font-bold">Erro!</strong>
                                <span className="block sm:inline"> {status.error}</span>
                            </div>
                        ) : null}

                        <form onSubmit={handleSubmit}>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="name" className="text-sm font-medium">
                                        Nome
                                    </label>
                                    <input
                                        id="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                        placeholder="Seu nome"
                                        required
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="email" className="text-sm font-medium">
                                        Email
                                    </label>
                                    <input
                                        id="email"
                                        type="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                        placeholder="seu@email.com"
                                        required
                                    />
                                </div>
                            </div>
                            <div className="space-y-2 mt-4">
                                <label htmlFor="subject" className="text-sm font-medium">
                                    Assunto
                                </label>
                                <input
                                    id="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                    placeholder="Assunto da mensagem"
                                    required
                                />
                            </div>
                            <div className="space-y-2 mt-4">
                                <label htmlFor="message" className="text-sm font-medium">
                                    Mensagem
                                </label>
                                <textarea
                                    id="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                    placeholder="Sua mensagem..."
                                    required
                                ></textarea>
                            </div>
                            <div className="flex items-center space-x-2 mt-4">
                                <input
                                    type="checkbox"
                                    id="newsletter"
                                    checked={formData.newsletter}
                                    onChange={handleCheckboxChange}
                                    className="h-4 w-4 rounded border-white/20 bg-white/10 text-[#1d4ed8]"
                                />
                                <label htmlFor="newsletter" className="text-sm font-medium">
                                    Desejo receber a newsletter da ASAPA
                                </label>
                            </div>
                            <Button
                                type="submit"
                                disabled={status.submitting}
                                className="w-full mt-4 bg-white text-[#1d4ed8] hover:bg-white/90"
                            >
                                {status.submitting ? 'Enviando...' : 'Enviar Mensagem'}
                            </Button>
                        </form>
                    </div>
                </div>
            </div>
            {/* Thank You Popup */}
            {showThankYouPopup && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white text-[#1d4ed8] p-6 rounded-lg shadow-lg max-w-md w-full relative">
                        <button
                            onClick={closeThankYouPopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            aria-label="Fechar"
                        >
                            <X className="h-5 w-5"/>
                        </button>
                        <div className="text-center">
                            <h3 className="text-xl font-bold mb-2">Obrigado pelo seu contato!</h3>
                            <p className="mb-4">Recebemos sua mensagem e retornaremos em breve.</p>
                            <Button
                                onClick={closeThankYouPopup}
                                className="bg-[#1d4ed8] text-white hover:bg-[#1e40af]"
                            >
                                Fechar
                            </Button>
                        </div>
                    </div>
                </div>
            )}
        </section>
    )
}
