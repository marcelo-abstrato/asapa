import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {ChevronRight, Newspaper} from "lucide-react"
import {noticias} from "@/mocks/noticias"

export function Noticias() {
    return (
        <section id="noticias" className="w-full py-12 md:py-24 bg-gray-50">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div
                        className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">Atualizações
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                        <Newspaper className="h-8 w-8 text-[#1d4ed8]"/>
                        Notícias
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                        Fique por dentro das últimas novidades, eventos e conquistas da nossa associação.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {noticias.map((news, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="h-48 bg-gray-200 relative">
                                <Image src={news.image || "/placeholder.svg"} alt={news.title} fill
                                       className="object-cover"/>
                            </div>
                            <CardHeader>
                                <CardTitle>{news.title}</CardTitle>
                                <CardDescription>{news.date}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{news.excerpt}</p>
                            </CardContent>
                            <CardFooter>
                                <Button variant="ghost" className="text-[#1d4ed8]">
                                    Ler mais
                                    <ChevronRight className="ml-2 h-4 w-4"/>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>

                <div className="flex justify-center mt-10">
                    <Button className="bg-[#1d4ed8] hover:bg-[#1e40af]">Ver Todas as Notícias</Button>
                </div>
            </div>
        </section>
    )
}
