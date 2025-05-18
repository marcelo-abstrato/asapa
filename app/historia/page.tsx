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
                            <Image src="/imagens/logo-asapa.png" alt="ASAPA Logo" width={40} height={40}
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
                                {/* Primeiros Eventos */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Primeiros
                                                    Eventos</h3>
                                                <p className="text-gray-600 mb-1">11 de novembro de 2007</p>
                                                <p className="text-gray-700">
                                                    Marcelo Manoel Barbosa realiza o primeiro Areias Classic, trazendo
                                                    sua experiência
                                                    da ASMP (Associação de Surf do Morro das Pedras), onde foi
                                                    presidente.
                                                    Neste período, o nome ASAPA já era utilizado informalmente, embora a
                                                    associação
                                                    ainda não estivesse oficialmente registrada.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8"></div>
                                    </div>
                                </div>

                                {/* Fundação */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8"></div>
                                        <div className="md:w-1/2 md:pl-8 md:text-left mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Fundação
                                                    Oficial</h3>
                                                <p className="text-gray-600 mb-1">6 de novembro de 2011</p>
                                                <p className="text-gray-700">
                                                    A ASAPA é oficialmente fundada por Marcelo Manoel Barbosa,
                                                    consolidando
                                                    o trabalho que já vinha sendo realizado na comunidade. A associação
                                                    nasce
                                                    com o propósito de promover o surf como esporte, estilo de vida e
                                                    ferramenta
                                                    de transformação social na Praia das Areias.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Primeira Gestão */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Primeira
                                                    Gestão</h3>
                                                <p className="text-gray-600 mb-1">06 de novembro de 2011 a 11 de
                                                    dezembro de 2015</p>
                                                <p className="text-gray-700">
                                                    Sob a presidência de Marcelo Manoel Barbosa, este período foi
                                                    marcado pela
                                                    organização inicial da associação, formação dos primeiros membros,
                                                    estruturação
                                                    administrativa e realização de eventos importantes para a comunidade
                                                    surfista local.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8"></div>
                                    </div>
                                </div>

                                {/* Segunda Gestão */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8"></div>
                                        <div className="md:w-1/2 md:pl-8 md:text-left mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Segunda
                                                    Gestão</h3>
                                                <p className="text-gray-600 mb-1">11 de dezembro de 2015 a 11 de
                                                    dezembro de 2019</p>
                                                <p className="text-gray-700">
                                                    Durante a presidência de Bruno Felipe da Rosa de Moura, a ASAPA se
                                                    destacou pela
                                                    implementação dos surfs treinos, que se tornaram uma marca
                                                    registrada da associação.
                                                    Este período foi fundamental para o desenvolvimento técnico dos
                                                    surfistas locais e
                                                    para a formação de novos talentos.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Período de Hiato */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Período de
                                                    Hiato</h3>
                                                <p className="text-gray-600 mb-1">11 de dezembro de 2019 a 26 de maio de
                                                    2023</p>
                                                <p className="text-gray-700">
                                                    A ASAPA enfrentou um período de pausa em suas atividades devido a
                                                    problemas
                                                    de documentação e, posteriormente, aos desafios impostos pela
                                                    pandemia de COVID-19.
                                                    Durante este tempo, a associação não teve presidente oficial, mas
                                                    manteve sua
                                                    presença na comunidade através de ações pontuais.
                                                </p>
                                            </div>
                                        </div>
                                        <div className="md:w-1/2 md:pl-8"></div>
                                    </div>
                                </div>

                                {/* Retomada e Gestão Atual */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8"></div>
                                        <div className="md:w-1/2 md:pl-8 md:text-left mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Retomada e Gestão
                                                    Atual</h3>
                                                <p className="text-gray-600 mb-1">26 de maio de 2023 a 26 de junho de
                                                    2027</p>
                                                <p className="text-gray-700">
                                                    Em 26 de maio de 2023, uma Assembleia Geral Ordinária definiu a nova
                                                    diretoria,
                                                    com Marcelo Manoel Barbosa retornando à presidência. Esta nova fase
                                                    é marcada
                                                    pela reestruturação da associação, inovação nas atividades e forte
                                                    ênfase em
                                                    pautas sociais, reafirmando o compromisso da ASAPA com a comunidade
                                                    e o
                                                    desenvolvimento sustentável do surf na região.
                                                </p>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Legado e Futuro */}
                                <div className="relative">
                                    <div className="absolute left-1/2 transform -translate-x-1/2 -mt-3">
                                        <div
                                            className="h-6 w-6 rounded-full bg-[#1d4ed8] border-4 border-white shadow"></div>
                                    </div>
                                    <div className="flex flex-col md:flex-row items-center">
                                        <div className="md:w-1/2 md:pr-8 md:text-right mb-4 md:mb-0">
                                            <div className="bg-blue-50 p-6 rounded-lg shadow-md">
                                                <h3 className="text-xl font-bold text-[#1d4ed8] mb-2">Legado e
                                                    Futuro</h3>
                                                <p className="text-gray-700">
                                                    Ao longo de sua história, a ASAPA se consolidou como uma instituição
                                                    fundamental
                                                    para o desenvolvimento do surf nas Areias do Campeche. Dos primeiros
                                                    eventos
                                                    informais até a estrutura atual, a associação mantém vivo o espírito
                                                    de
                                                    comunidade e amor pelo mar que a originou. Olhando para o futuro, a
                                                    ASAPA
                                                    continua comprometida com a formação de novos talentos, a
                                                    preservação ambiental
                                                    e o fortalecimento dos laços comunitários através do esporte.
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
