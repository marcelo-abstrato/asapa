"use client";

import {Button} from "@/components/ui/button"
import {useEffect, useState} from "react"
import {X} from "lucide-react"

export function Associese() {
    const [formData, setFormData] = useState({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        experience: "",
        terms: false
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

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const {id, value} = e.target;
        setFormData(prev => ({...prev, [id]: value}));
    };

    const handleCheckboxChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setFormData(prev => ({...prev, terms: e.target.checked}));
    };

    const closeThankYouPopup = () => {
        setShowThankYouPopup(false);
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        // Validate form
        if (!formData.firstName || !formData.lastName || !formData.email || !formData.phone || !formData.experience || !formData.terms) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                error: "Por favor, preencha todos os campos e aceite os termos."
            });
            return;
        }

        setStatus({...status, submitting: true});

        try {
            const response = await fetch('/api/register', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });

            const data = await response.json();

            if (!response.ok) {
                throw new Error(data.error || 'Ocorreu um erro ao enviar a inscrição');
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
                firstName: "",
                lastName: "",
                email: "",
                phone: "",
                experience: "",
                terms: false
            });

        } catch (error) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                error: error instanceof Error ? error.message : 'Ocorreu um erro ao enviar a inscrição'
            });
        }
    };

    return (
        <>
            <section
                id="associe-se"
                className="w-full py-12 md:py-24 bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white"
            >
                <div className="container px-4 md:px-6">
                    <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                        <div className="space-y-4">
                            <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">Junte-se a nós
                            </div>
                            <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Torne-se um
                                Associado</h2>
                            <p className="max-w-[600px] md:text-xl">
                                Faça parte da nossa comunidade e aproveite todos os benefícios exclusivos para
                                associados.
                            </p>

                            <div className="space-y-4 mt-6">
                                <div className="flex gap-3 items-start">
                                    <div
                                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
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
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                            <polyline points="22 4 12 14.01 9 11.01"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Acesso a Eventos Exclusivos</h3>
                                        <p className="text-white/80">
                                            Participe de competições, workshops e encontros exclusivos para
                                            associados.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <div
                                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
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
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                            <polyline points="22 4 12 14.01 9 11.01"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Descontos em Parceiros</h3>
                                        <p className="text-white/80">
                                            Aproveite descontos especiais em lojas, escolas e serviços relacionados ao
                                            surf.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <div
                                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
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
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                            <polyline points="22 4 12 14.01 9 11.01"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Aulas e Treinamentos</h3>
                                        <p className="text-white/80">
                                            Tenha acesso a aulas com profissionais e treinamentos especializados.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <div
                                        className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
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
                                        >
                                            <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                            <polyline points="22 4 12 14.01 9 11.01"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-lg">Voz na Comunidade</h3>
                                        <p className="text-white/80">
                                            Participe das decisões da associação e contribua para o desenvolvimento do
                                            surf na região.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                            <h3 className="text-xl font-bold mb-4">Formulário de Associação</h3>

                            {status.submitted && status.success && !showThankYouPopup ? (
                                <div
                                    className="bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded relative"
                                    role="alert">
                                    <strong className="font-bold">Sucesso!</strong>
                                    <span className="block sm:inline"> Sua inscrição foi enviada com sucesso.</span>
                                </div>
                            ) : status.submitted && !status.success ? (
                                <div
                                    className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative"
                                    role="alert">
                                    <strong className="font-bold">Erro!</strong>
                                    <span className="block sm:inline"> {status.error}</span>
                                </div>
                            ) : null}

                            <form onSubmit={handleSubmit} className="space-y-4">
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                    <div className="space-y-2">
                                        <label htmlFor="firstName" className="text-sm font-medium">
                                            Nome
                                        </label>
                                        <input
                                            id="firstName"
                                            value={formData.firstName}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                            placeholder="Seu nome"
                                        />
                                    </div>
                                    <div className="space-y-2">
                                        <label htmlFor="lastName" className="text-sm font-medium">
                                            Sobrenome
                                        </label>
                                        <input
                                            id="lastName"
                                            value={formData.lastName}
                                            onChange={handleChange}
                                            className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                            placeholder="Seu sobrenome"
                                        />
                                    </div>
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
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="phone" className="text-sm font-medium">
                                        Telefone
                                    </label>
                                    <input
                                        id="phone"
                                        type="tel"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                        placeholder="(00) 00000-0000"
                                    />
                                </div>

                                <div className="space-y-2">
                                    <label htmlFor="experience" className="text-sm font-medium">
                                        Experiência com Surf
                                    </label>
                                    <select
                                        id="experience"
                                        value={formData.experience}
                                        onChange={handleChange}
                                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                                    >
                                        <option value="" className="bg-cyan-600">
                                            Selecione seu nível
                                        </option>
                                        <option value="beginner" className="bg-cyan-600">
                                            Iniciante
                                        </option>
                                        <option value="intermediate" className="bg-cyan-600">
                                            Intermediário
                                        </option>
                                        <option value="advanced" className="bg-cyan-600">
                                            Avançado
                                        </option>
                                        <option value="professional" className="bg-cyan-600">
                                            Profissional
                                        </option>
                                    </select>
                                </div>


                                <div className="flex items-center space-x-2">
                                    <input
                                        type="checkbox"
                                        id="terms"
                                        checked={formData.terms}
                                        onChange={handleCheckboxChange}
                                        className="h-4 w-4 rounded border-white/20 bg-white/10 text-cyan-600 focus:ring-cyan-600"
                                    />
                                    <label htmlFor="terms" className="text-sm">
                                        Concordo com os{" "}
                                        <a href="#" className="underline">
                                            termos e condições
                                        </a>
                                    </label>
                                </div>

                                <Button
                                    type="submit"
                                    disabled={status.submitting}
                                    className="w-full bg-white text-[#1d4ed8] hover:bg-white/90">
                                    {status.submitting ? 'Enviando...' : 'Enviar Inscrição'}
                                </Button>
                            </form>
                        </div>
                    </div>
                </div>
            </section>

            {/* Thank You Popup */}
            {showThankYouPopup && (
                <div
                    className="fixed inset-0 bg-black bg-opacity-50 backdrop-blur-sm flex items-center justify-center z-50 transition-opacity duration-300 ease-in-out">
                    <div
                        className="bg-white text-[#1d4ed8] p-6 rounded-lg shadow-lg max-w-md w-full relative animate-fade-in">
                        <button
                            onClick={closeThankYouPopup}
                            className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
                            aria-label="Fechar"
                        >
                            <X className="h-5 w-5"/>
                        </button>
                        <div className="text-center">
                            <div
                                className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="32"
                                    height="32"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-[#1d4ed8]"
                                >
                                    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                    <polyline points="22 4 12 14.01 9 11.01"/>
                                </svg>
                            </div>
                            <h3 className="text-xl font-bold mb-2">Obrigado pela sua inscrição!</h3>
                            <p className="mb-4 text-gray-600">Recebemos sua inscrição e dentro de alguns instantes uma
                                pessoa entrará
                                em contato para finalizar o processo.</p>
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
        </>
    )
}
