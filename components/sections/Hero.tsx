"use client";

import Image from "next/image"
import {Button} from "@/components/ui/button"

export function Hero() {
    return (
        <section className="w-full py-12 md:py-24 lg:py-32 bg-primary">
            <div className="container px-4 md:px-6">
                <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                    <div className="space-y-4">
                        <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-primary-foreground">
                            Bem-vindo à ASAPA
                        </h1>
                        <p className="max-w-[600px] text-primary-foreground md:text-xl">
                            A Associação dos Surfistas e Amigos da Praia das Areias é mais que uma entidade esportiva -
                            somos uma comunidade apaixonada pelo mar e pelo surf desde 2011.
                            Nascemos da união entre surfistas locais e amantes da praia, transformando vidas através do
                            esporte.
                        </p>
                        <p className="max-w-[600px] text-primary-foreground md:text-xl">
                            Promovemos o surf como estilo de vida e ferramenta de transformação social,
                            incentivando a prática esportiva, o respeito ao meio ambiente e o fortalecimento da cultura
                            praiana local. Junte-se a nós nessa jornada de conexão com o mar e com a comunidade.
                        </p>
                        <div className="flex flex-col gap-2 min-[400px]:flex-row">
                            <Button
                                className="bg-white text-primary hover:bg-gray-100 font-bold text-lg px-6 py-5 transition-all hover:scale-105 shadow-lg"
                                onClick={() => window.location.href = "#associe-se"}>Associe-se</Button>
                        </div>
                    </div>
                    <div
                        className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl hidden md:block">
                        <Image
                            src="/imagens/foto-capa.png?height=500&width=800"
                            alt="Equipe"
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                </div>
            </div>
        </section>
    )
}
