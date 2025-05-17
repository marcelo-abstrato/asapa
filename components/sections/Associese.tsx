import {Button} from "@/components/ui/button"

export function Associese() {
    return (
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
                        <div className="space-y-4">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                <div className="space-y-2">
                                    <label htmlFor="first-name" className="text-sm font-medium">
                                        Nome
                                    </label>
                                    <input
                                        id="first-name"
                                        className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                        placeholder="Seu nome"
                                    />
                                </div>
                                <div className="space-y-2">
                                    <label htmlFor="last-name" className="text-sm font-medium">
                                        Sobrenome
                                    </label>
                                    <input
                                        id="last-name"
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

                            <div className="space-y-2">
                                <label htmlFor="membership" className="text-sm font-medium">
                                    Tipo de Associação
                                </label>
                                <select
                                    id="membership"
                                    className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                                >
                                    <option value="" className="bg-cyan-600">
                                        Selecione o tipo
                                    </option>
                                    <option value="standard" className="bg-cyan-600">
                                        Padrão (R$ 50/mês)
                                    </option>
                                    <option value="family" className="bg-cyan-600">
                                        Família (R$ 80/mês)
                                    </option>
                                    <option value="student" className="bg-cyan-600">
                                        Estudante (R$ 30/mês)
                                    </option>
                                    <option value="professional" className="bg-cyan-600">
                                        Profissional (R$ 100/mês)
                                    </option>
                                </select>
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="terms"
                                    className="h-4 w-4 rounded border-white/20 bg-white/10 text-cyan-600 focus:ring-cyan-600"
                                />
                                <label htmlFor="terms" className="text-sm">
                                    Concordo com os{" "}
                                    <a href="#" className="underline">
                                        termos e condições
                                    </a>
                                </label>
                            </div>

                            <Button className="w-full bg-white text-[#1d4ed8] hover:bg-white/90">Enviar
                                Inscrição</Button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
