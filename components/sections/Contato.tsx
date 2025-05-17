import {Button} from "@/components/ui/button"
import {Facebook, Instagram, Twitter} from "lucide-react"

export function Contato() {
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
                                    <p className="text-white/80">Av. Beira Mar, 1000 - Praia Grande</p>
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
                                    <p className="text-white/80">(00) 1234-5678</p>
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
                                    <p className="text-white/80">contato@associacaosurf.com.br</p>
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
                            <a
                                href="#"
                                className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                            >
                                <Twitter className="h-5 w-5"/>
                            </a>
                        </div>
                    </div>
                    <div className="space-y-4">
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div className="space-y-2">
                                <label htmlFor="name" className="text-sm font-medium">
                                    Nome
                                </label>
                                <input
                                    id="name"
                                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                    placeholder="Seu nome"
                                />
                            </div>
                            <div className="space-y-2">
                                <label htmlFor="email" className="text-sm font-medium">
                                    Email
                                </label>
                                <input
                                    id="email"
                                    type="email"
                                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="subject" className="text-sm font-medium">
                                Assunto
                            </label>
                            <input
                                id="subject"
                                className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                placeholder="Assunto da mensagem"
                            />
                        </div>
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-medium">
                                Mensagem
                            </label>
                            <textarea
                                id="message"
                                className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                placeholder="Sua mensagem..."
                            ></textarea>
                        </div>
                        <Button className="w-full bg-white text-[#1d4ed8] hover:bg-white/90">Enviar
                            Mensagem</Button>
                    </div>
                </div>
            </div>
        </section>
    )
}
