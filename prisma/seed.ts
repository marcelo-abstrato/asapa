const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    // Clear existing data
    await prisma.event.deleteMany({})

    // Create future events
    const futureEvents = [
        {
            title: "Campeonato Regional de Surf",
            startDate: new Date("2025-06-15T09:00:00Z"),
            endDate: new Date("2025-06-16T18:00:00Z"),
            date: "15-16 de Junho, 2025", // Keeping for backward compatibility
            location: "Praia Grande",
            description: "Competição aberta para surfistas de todos os níveis com premiação para diversas categorias.",
            image: "/placeholder.svg?height=200&width=300&text=Campeonato",
            isFuture: true
        },
        {
            title: "Workshop de Técnicas Avançadas",
            startDate: new Date("2025-06-22T10:00:00Z"),
            endDate: new Date("2025-06-22T16:00:00Z"),
            date: "22 de Junho, 2025", // Keeping for backward compatibility
            location: "Sede da Associação",
            description: "Workshop ministrado por surfistas profissionais com dicas para aprimorar suas manobras.",
            image: "/placeholder.svg?height=200&width=300&text=Workshop",
            isFuture: true
        },
        {
            title: "Mutirão de Limpeza da Praia",
            startDate: new Date("2025-06-29T08:00:00Z"),
            endDate: new Date("2025-06-29T12:00:00Z"),
            date: "29 de Junho, 2025", // Keeping for backward compatibility
            location: "Praia do Sol",
            description: "Ação ambiental para preservação do nosso principal espaço de prática do surf.",
            image: "/placeholder.svg?height=200&width=300&text=Limpeza",
            isFuture: true
        },
        {
            title: "Festival de Surf e Música",
            startDate: new Date("2025-07-13T10:00:00Z"),
            endDate: new Date("2025-07-14T22:00:00Z"),
            date: "13-14 de Julho, 2025", // Keeping for backward compatibility
            location: "Praia Central",
            description: "Dois dias de competições, apresentações musicais, gastronomia e muito mais.",
            image: "/placeholder.svg?height=200&width=300&text=Festival",
            isFuture: true
        }
    ]

    // Create past events
    const pastEvents = [
        {
            title: "Campeonato Estadual de Surf",
            startDate: new Date("2025-03-10T09:00:00Z"),
            endDate: new Date("2025-03-12T18:00:00Z"),
            date: "10-12 de Março, 2025", // Keeping for backward compatibility
            location: "Praia do Forte",
            description: "Competição que reuniu os melhores surfistas do estado com premiação total de R$ 50.000.",
            image: "/placeholder.svg?height=200&width=300&text=Estadual",
            isFuture: false
        },
        {
            title: "Curso de Primeiros Socorros",
            startDate: new Date("2025-02-25T09:00:00Z"),
            endDate: new Date("2025-02-25T17:00:00Z"),
            date: "25 de Fevereiro, 2025", // Keeping for backward compatibility
            location: "Sede da Associação",
            description: "Treinamento essencial para surfistas sobre como agir em situações de emergência no mar.",
            image: "/placeholder.svg?height=200&width=300&text=Primeiros+Socorros",
            isFuture: false
        },
        {
            title: "Ação de Reflorestamento de Dunas",
            startDate: new Date("2025-01-15T08:00:00Z"),
            endDate: new Date("2025-01-15T12:00:00Z"),
            date: "15 de Janeiro, 2025", // Keeping for backward compatibility
            location: "Dunas da Praia Grande",
            description: "Plantio de vegetação nativa para preservação das dunas e do ecossistema costeiro.",
            image: "/placeholder.svg?height=200&width=300&text=Reflorestamento",
            isFuture: false
        },
        {
            title: "Confraternização de Fim de Ano",
            startDate: new Date("2024-12-18T19:00:00Z"),
            endDate: new Date("2024-12-18T23:59:00Z"),
            date: "18 de Dezembro, 2024", // Keeping for backward compatibility
            location: "Clube Náutico",
            description: "Celebração com todos os associados, familiares e apoiadores da ASAPA.",
            image: "/placeholder.svg?height=200&width=300&text=Confraternização",
            isFuture: false
        }
    ]

    // Insert all events
    for (const event of [...futureEvents, ...pastEvents]) {
        // Destructure to remove 'date' field which is not in the schema
        const {date, ...eventData} = event
        await prisma.event.create({
            data: eventData
        })
    }

    console.log('Database has been seeded with events data')
}

main()
    .catch((e) => {
        console.error(e)
        process.exit(1)
    })
    .finally(async () => {
        await prisma.$disconnect()
    })
