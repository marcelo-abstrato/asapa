"use client"

import Link from "next/link"
import Image from "next/image"
import {CheckCircle, Facebook, Instagram} from "lucide-react"
import WaveDivider from "@/components/wave-divider"
import {useEffect, useState} from "react"
import {Modal} from "@/components/ui"

export function Footer() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState({
        submitting: false,
        submitted: false,
        success: false,
        error: ""
    })
    const [showThankYouPopup, setShowThankYouPopup] = useState(false)

    // Auto-close popup after 5 seconds
    useEffect(() => {
        if (showThankYouPopup) {
            const timer = setTimeout(() => {
                setShowThankYouPopup(false)
            }, 5000)

            return () => clearTimeout(timer)
        }
    }, [showThankYouPopup])

    const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(e.target.value)
    }

    const closeThankYouPopup = () => {
        setShowThankYouPopup(false)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()

        if (!email) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                error: "Por favor, informe seu e-mail."
            })
            return
        }

        setStatus({...status, submitting: true})

        try {
            const response = await fetch('/api/newsletter', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({email}),
            })

            const data = await response.json()

            if (!response.ok) {
                throw new Error(data.error || 'Ocorreu um erro ao processar sua inscrição')
            }

            setStatus({
                submitting: false,
                submitted: true,
                success: true,
                error: ""
            })

            // Show thank you popup
            setShowThankYouPopup(true)

            // Reset form
            setEmail("")
        } catch (error) {
            setStatus({
                submitting: false,
                submitted: true,
                success: false,
                error: error instanceof Error ? error.message : 'Ocorreu um erro ao processar sua inscrição'
            })
        }
    }

    return (
        <footer className="w-full bg-[#1e40af] text-white relative">
            <WaveDivider className="text-[#1d4ed8] transform rotate-180"/>
            <div className="container px-4 md:px-6 py-12">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                    <div className="space-y-4">
                        <div className="flex items-center gap-3">
                            <Image
                                src="/imagens/logo-asapa.png"
                                alt="ASAPA Logo"
                                width={80}
                                height={80}
                                className="bg-white rounded-full p-1"
                            />
                            <div>
                                <h3 className="text-xl font-bold">ASAPA</h3>
                                <p className="text-sm text-blue-100">Associação dos Surfistas e Amigos da Praia das
                                    Areias</p>
                            </div>
                        </div>
                        <p className="text-blue-100">
                            Promovendo o surf, preservando o meio ambiente e desenvolvendo nossa comunidade desde
                            2011.
                        </p>
                        <div className="flex gap-4">
                            <a
                                href="https://www.instagram.com/asapaoficial/"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Instagram className="h-5 w-5"/>
                            </a>
                            <a
                                href="https://www.facebook.com/asapasurf/"
                                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                            >
                                <Facebook className="h-5 w-5"/>
                            </a>
                        </div>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 border-b border-blue-600 pb-2">Navegação</h4>
                        <ul className="space-y-2">
                            <li>
                                <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                                    Início
                                </Link>
                            </li>
                            <li>
                                <Link href="#quem-somos" className="text-blue-100 hover:text-white transition-colors">
                                    Quem Somos
                                </Link>
                            </li>
                            <li>
                                <Link href="#diretoria" className="text-blue-100 hover:text-white transition-colors">
                                    Diretoria
                                </Link>
                            </li>
                            <li>
                                <Link href="#eventos" className="text-blue-100 hover:text-white transition-colors">
                                    Eventos
                                </Link>
                            </li>
                            <li>
                                <Link href="#associe-se" className="text-blue-100 hover:text-white transition-colors">
                                    Associe-se
                                </Link>
                            </li>
                            <li>
                                <Link href="#contato" className="text-blue-100 hover:text-white transition-colors">
                                    Contato
                                </Link>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 border-b border-blue-600 pb-2">Contato</h4>
                        <ul className="space-y-2">
                            <li className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-200"
                                >
                                    <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                    <circle cx="12" cy="10" r="3"/>
                                </svg>
                                <span className="text-blue-100">Rua Francisco Vieira, 701 - Florianópolis - SC</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-200"
                                >
                                    <path
                                        d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                </svg>
                                <span className="text-blue-100">(48) 9 9951-2253</span>
                            </li>
                            <li className="flex items-center gap-2">
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    width="16"
                                    height="16"
                                    viewBox="0 0 24 24"
                                    fill="none"
                                    stroke="currentColor"
                                    strokeWidth="2"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    className="text-blue-200"
                                >
                                    <rect width="20" height="16" x="2" y="4" rx="2"/>
                                    <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                </svg>
                                <span className="text-blue-100">contato@asapa.com.br</span>
                            </li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-bold text-lg mb-4 border-b border-blue-600 pb-2">Newsletter</h4>
                        <p className="text-blue-100 mb-4">
                            Receba novidades sobre eventos, projetos e oportunidades.
                        </p>
                        <form onSubmit={handleSubmit} className="flex flex-col gap-2">
                            {status.submitted && status.error ? (
                                <div className="text-red-300 text-sm mb-2">{status.error}</div>
                            ) : null}
                            <input
                                type="email"
                                value={email}
                                onChange={handleEmailChange}
                                placeholder="Seu e-mail"
                                className="px-3 py-2 rounded-md bg-white/10 border border-white/20 text-white placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                            />
                            <button
                                type="submit"
                                disabled={status.submitting}
                                className="px-4 py-2 rounded-md bg-white text-[#1d4ed8] font-medium hover:bg-white/90 transition-colors">
                                {status.submitting ? 'Enviando...' : 'Inscrever-se'}
                            </button>
                        </form>
                    </div>
                </div>

                <div className="mt-12 pt-6 border-t border-blue-600 text-center text-blue-100">
                    <p>© {new Date().getFullYear()} ASAPA - Associação dos Surfistas e Amigos da Praia das Areias. Todos
                        os direitos
                        reservados.</p>
                </div>
            </div>

            {/* Thank You Modal */}
            <Modal
                isOpen={showThankYouPopup}
                onClose={closeThankYouPopup}
                title="Obrigado por se inscrever!"
                description="Você agora receberá atualizações sobre eventos, projetos e oportunidades da ASAPA."
                icon={<CheckCircle className="h-8 w-8 text-[#1d4ed8]"/>}
                autoCloseTimeout={5000}
            />
        </footer>
    )
}
