import React from "react";
import Image from "next/image";
import Link from "next/link";
import {DesktopNav, MobileMenu} from "@/components/navigation";
import {navLinks} from "@/mocks/navigation";
import {Footer} from "@/components/sections";

export default function HistoriaPage() {
    return (
        <div className="flex flex-col min-h-screen">
            <header
                className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
                <div className="container flex h-20 md:h-16 items-center justify-between">
                    <div className="flex items-center gap-2 font-bold text-xl text-[#1d4ed8]">
                        <Link href="/">
                            <Image src="/images/logo-asapa.png" alt="ASAPA Logo" width={40} height={40}
                                   className="rounded-full"/>
                        </Link>
                    </div>
                    <DesktopNav links={navLinks}/>
                    <MobileMenu links={navLinks}/>
                </div>
            </header>
            <main className="flex-1">
                <div className="container mx-auto px-4 py-12 md:py-24">
                    <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                        <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                            Nossa Trajetória
                        </div>
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">
                            História da ASAPA
                        </h1>
                        <p className="max-w-[700px] text-gray-500 md:text-xl">
                            Conheça a trajetória da Associação dos Surfistas e Amigos da Praia das Areias
                        </p>
                    </div>

                    <div className="max-w-4xl mx-auto">
                        {/* Timeline */}
                        <div className="relative">
                            {/* Vertical line */}
                            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-blue-200"></div>

                            {/* Timeline items */}
                            <div className="space-y-16">
                                {/* Founding */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Fundação</h3>
                                                <p className="text-gray-600 mb-1">6 de novembro de 2011</p>
                                                <p className="text-gray-700">
                                                    A ASAPA foi fundada por um grupo de surfistas locais e entusiastas
                                                    do mar da
                                                    Praia das Areias,
                                                    unidos pelo amor ao surf e pela vontade de fortalecer a comunidade
                                                    local.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8"></div>
                                    </div>
                                </div>

                                {/* Mission */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8"></div>
                                        <div className="md:w-1/2 md:pl-8 md:text-left mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Missão e
                                                    Objetivos</h3>
                                                <p className="text-gray-700">
                                                    Desde o início, o objetivo da ASAPA foi promover o surf como
                                                    esporte, estilo
                                                    de vida e
                                                    ferramenta de transformação social, incentivando a prática
                                                    esportiva, o
                                                    respeito ao meio
                                                    ambiente e o fortalecimento da cultura praiana local.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Activities */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Atividades e
                                                    Eventos</h3>
                                                <p className="text-gray-700">
                                                    A ASAPA organiza campeonatos, treinamentos, encontros e ações
                                                    comunitárias,
                                                    tornando-se
                                                    referência no incentivo ao surf amador e profissional na região.
                                                    Eventos
                                                    tradicionais como
                                                    o Areeiros Classic e os treinos de surf são marcos importantes na
                                                    comunidade.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8"></div>
                                    </div>
                                </div>

                                {/* Management */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8"></div>
                                        <div className="md:w-1/2 md:pl-8 md:text-left mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Gestão e
                                                    Transparência</h3>
                                                <p className="text-gray-700">
                                                    A associação realiza assembleias e reuniões regulares para a
                                                    prestação de
                                                    contas e
                                                    planejamento de suas ações, mantendo uma gestão transparente e
                                                    participativa. Ao longo
                                                    dos anos, a ASAPA já passou por três gestões distintas, sempre com
                                                    líderes
                                                    comprometidos
                                                    com a causa do surf e com o bem-estar da comunidade.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Present */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Atualidade</h3>
                                                <p className="text-gray-700">
                                                    Hoje, a ASAPA se consolidou como pilar na formação de novos talentos
                                                    e na
                                                    valorização do
                                                    esporte na cidade. Continuamos trabalhando para promover o surf,
                                                    proteger o
                                                    meio ambiente
                                                    e fortalecer nossa comunidade, sempre fiéis aos valores que nos
                                                    uniram desde
                                                    o início.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8"></div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer/>
        </div>
    );
}
