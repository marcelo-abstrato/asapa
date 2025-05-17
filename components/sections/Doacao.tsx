import {Button} from "@/components/ui/button"

export function Doacao() {
    return (
        <section id="doacao" className="w-full py-12 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                        Apoie nossa causa
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
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
                            <path
                                d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                        </svg>
                        Faça uma Doação
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                        Sua contribuição ajuda a manter nossos projetos sociais, ambientais e esportivos.
                    </p>
                </div>

                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start max-w-5xl mx-auto">
                    <div className="space-y-4">
                        <div className="bg-white p-6 rounded-lg shadow-sm border">
                            <h3 className="text-xl font-bold mb-4">Como sua doação ajuda</h3>

                            <div className="space-y-4">
                                <div className="flex gap-3 items-start">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
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
                                            className="text-[#1d4ed8]"
                                        >
                                            <path d="M2 22a8 8 0 0 1 8-8h12a8 8 0 0 1-8 8Z"/>
                                            <path d="M2 22a8 8 0 0 0 8-8h12a8 8 0 0 0-8 8Z"/>
                                            <circle cx="16" cy="8" r="6"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Escola de Surf Social</h4>
                                        <p className="text-gray-600">
                                            Oferecemos aulas gratuitas para crianças e jovens de comunidades
                                            carentes.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
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
                                            className="text-[#1d4ed8]"
                                        >
                                            <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"/>
                                            <circle cx="12" cy="8" r="2"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Preservação Ambiental</h4>
                                        <p className="text-gray-600">
                                            Realizamos ações de limpeza e conscientização para proteger nossas
                                            praias.
                                        </p>
                                    </div>
                                </div>

                                <div className="flex gap-3 items-start">
                                    <div
                                        className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
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
                                            className="text-[#1d4ed8]"
                                        >
                                            <path
                                                d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                                        </svg>
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-lg">Educação e Pesquisa</h4>
                                        <p className="text-gray-600">
                                            Apoiamos estudos sobre o impacto do surf na saúde física e mental.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="mt-6 pt-6 border-t">
                                <h4 className="font-bold text-lg mb-2">Prestação de Contas</h4>
                                <p className="text-gray-600">
                                    Todas as doações são documentadas e os relatórios financeiros estão
                                    disponíveis na seção de
                                    Transparência.
                                </p>
                                {/*Todo: Link para relatórios financeiros*/}
                                {/*<Button variant="link" className="text-[#1d4ed8] p-0 h-auto mt-2">*/}
                                {/*    Ver relatórios de doações*/}
                                {/*    <ChevronRight className="ml-1 h-4 w-4"/>*/}
                                {/*</Button>*/}
                            </div>
                        </div>
                    </div>

                    <div className="bg-white p-6 rounded-lg shadow-sm border relative">
                        {/* Banner "Em Breve" */}
                        <div
                            className="absolute inset-0 bg-gray-800 bg-opacity-70 flex items-center justify-center rounded-lg z-10">
                            <div className="text-white text-center">
                                <h4 className="text-2xl font-bold mb-2">EM BREVE</h4>
                                <p>Esta funcionalidade estará disponível em breve.</p>
                            </div>
                        </div>

                        <h3 className="text-xl font-bold mb-4">Faça sua contribuição</h3>

                        <div className="space-y-4">
                            <div className="space-y-2">
                                <label className="text-sm font-medium">Escolha um valor</label>
                                <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                    {["R$ 25", "R$ 50", "R$ 100", "R$ 200"].map((amount, index) => (
                                        <Button
                                            key={index}
                                            variant="outline"
                                            className="border-blue-200 hover:bg-blue-50 hover:text-[#1d4ed8] hover:border-blue-300 text-sm sm:text-base"
                                        >
                                            {amount}
                                        </Button>
                                    ))}
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="custom-amount" className="text-sm font-medium">
                                    Ou digite um valor personalizado
                                </label>
                                <div className="relative">
                  <span
                      className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                                    <input
                                        id="custom-amount"
                                        type="number"
                                        className="flex h-10 w-full rounded-md border border-gray-200 bg-white pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                                        placeholder="Outro valor"
                                    />
                                </div>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="donation-type" className="text-sm font-medium">
                                    Tipo de doação
                                </label>
                                <select
                                    id="donation-type"
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                                >
                                    <option value="single">Doação única</option>
                                    <option value="monthly">Doação mensal</option>
                                    <option value="quarterly">Doação trimestral</option>
                                    <option value="annual">Doação anual</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="payment-method" className="text-sm font-medium">
                                    Forma de pagamento
                                </label>
                                <select
                                    id="payment-method"
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                                >
                                    <option value="credit-card">Cartão de Crédito</option>
                                    <option value="pix">PIX</option>
                                    <option value="bank-transfer">Transferência Bancária</option>
                                    <option value="boleto">Boleto</option>
                                </select>
                            </div>

                            <div className="space-y-2">
                                <label htmlFor="donor-name" className="text-sm font-medium">
                                    Seu nome (opcional)
                                </label>
                                <input
                                    id="donor-name"
                                    className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                                    placeholder="Como deseja ser reconhecido"
                                />
                            </div>

                            <div className="flex items-center space-x-2">
                                <input
                                    type="checkbox"
                                    id="anonymous"
                                    className="h-4 w-4 rounded border-gray-300 text-[#1d4ed8] focus:ring-[#1d4ed8]"
                                />
                                <label htmlFor="anonymous" className="text-sm">
                                    Fazer doação anônima
                                </label>
                            </div>

                            <Button className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] mt-2">Doar Agora</Button>

                            <p className="text-xs text-gray-500 text-center mt-4">
                                Sua doação é segura e processada com criptografia. Ao doar, você concorda com
                                nossos termos de
                                serviço.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
