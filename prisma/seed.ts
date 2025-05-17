const {PrismaClient} = require("@prisma/client")

const prisma = new PrismaClient()

async function main() {
    // Clear existing data
    await prisma.event.deleteMany({})

    // Create future events
    const futureEvents = [
        {
            title: "Campeonato Regional de Surf",
            date: "15-16 de Junho, 2025",
            location: "Praia Grande",
            description: "Competição aberta para surfistas de todos os níveis com premiação para diversas categorias.",
            image: "/placeholder.svg?height=200&width=300&text=Campeonato",
            isFuture: true
        },
        {
            title: "Workshop de Técnicas Avançadas",
            date: "22 de Junho, 2025",
            location: "Sede da Associação",
            description: "Workshop ministrado por surfistas profissionais com dicas para aprimorar suas manobras.",
            image: "/placeholder.svg?height=200&width=300&text=Workshop",
            isFuture: true
        },
        {
            title: "Mutirão de Limpeza da Praia",
            date: "29 de Junho, 2025",
            location: "Praia do Sol",
            description: "Ação ambiental para preservação do nosso principal espaço de prática do surf.",
            image: "/placeholder.svg?height=200&width=300&text=Limpeza",
            isFuture: true
        },
        {
            title: "Festival de Surf e Música",
            date: "13-14 de Julho, 2025",
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
            date: "10-12 de Março, 2025",
            location: "Praia do Forte",
            description: "Competição que reuniu os melhores surfistas do estado com premiação total de R$ 50.000.",
            image: "/placeholder.svg?height=200&width=300&text=Estadual",
            isFuture: false
        },
        {
            title: "Curso de Primeiros Socorros",
            date: "25 de Fevereiro, 2025",
            location: "Sede da Associação",
            description: "Treinamento essencial para surfistas sobre como agir em situações de emergência no mar.",
            image: "/placeholder.svg?height=200&width=300&text=Primeiros+Socorros",
            isFuture: false
        },
        {
            title: "Ação de Reflorestamento de Dunas",
            date: "15 de Janeiro, 2025",
            location: "Dunas da Praia Grande",
            description: "Plantio de vegetação nativa para preservação das dunas e do ecossistema costeiro.",
            image: "/placeholder.svg?height=200&width=300&text=Reflorestamento",
            isFuture: false
        },
        {
            title: "Confraternização de Fim de Ano",
            date: "18 de Dezembro, 2024",
            location: "Clube Náutico",
            description: "Celebração com todos os associados, familiares e apoiadores da ASAPA.",
            image: "/placeholder.svg?height=200&width=300&text=Confraternização",
            isFuture: false
        }
    ]

    // Insert all events
    for (const event of [...futureEvents, ...pastEvents]) {
        await prisma.event.create({
            data: event
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
