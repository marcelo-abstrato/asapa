import Image from "next/image"
import {Card, CardContent, CardDescription, CardHeader, CardTitle} from "@/components/ui/card"
import {Users} from "lucide-react"
import {diretoriaMembers} from "@/mocks/diretoria"

export function Diretoria() {
    return (
        <section id="diretoria" className="w-full py-12 md:py-24 bg-white">
            <div className="container px-4 md:px-6">
                <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                    <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">Nossa
                        Equipe
                    </div>
                    <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                        <Users className="h-8 w-8 text-[#1d4ed8]"/>
                        Diretoria
                    </h2>
                    <p className="max-w-[700px] text-gray-500 md:text-xl">
                        Conheça os membros da diretoria que trabalham para promover e desenvolver o surf em nossa
                        comunidade.
                    </p>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {diretoriaMembers.map((member, index) => (
                        <Card key={index} className="overflow-hidden">
                            <div className="h-48 bg-gray-200 relative">
                                <Image
                                    src={`/placeholder.svg?height=200&width=300&text=${member.name}`}
                                    alt={member.name}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                            <CardHeader>
                                <CardTitle>{member.name}</CardTitle>
                                <CardDescription
                                    className="text-[#1d4ed8] font-medium">{member.role}</CardDescription>
                            </CardHeader>
                            <CardContent>
                                <p>{member.bio}</p>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    )
}
