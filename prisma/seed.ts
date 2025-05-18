import {PrismaClient} from "@prisma/client";

// Define the Event interface
interface EventData {
    title: string;
    startDate: string | Date;
    endDate: string | Date;
    location: string;
    description: string;
    image: string;
    date?: string; // Optional as it's only used for reference
}

const prisma = new PrismaClient();

async function main() {
    // Clear existing events
    await prisma.event.deleteMany({});

    // Future events
    const futureEvents: EventData[] = [
        {
            title: "Dia das Crianças - 2025",
            startDate: "2025-10-12T00:00:00Z",
            endDate: "2025-10-12T00:00:00Z",
            location: "Areias do Campeche - Florianópolis/SC",
            description: "",
            image: "/imagens/eventos/dia_das_criancas_25.png",
            date: "12 de Outubro, 2025"
        },
    ];

    const pastEvents: EventData[] = [
        {
            title: "Pós Tainha",
            startDate: "2023-07-30T00:00:00Z",
            endDate: "2023-07-30T00:00:00Z",
            location: "Praia das Areias",
            description: "Evento de integração pós treino.",
            image: "/imagens/eventos/pos_tainha.jpeg",
            date: "30 de Julho, 2023",
        },
        {
            title: "3ª Etapa Circuito Adriano de Souza",
            startDate: "2018-09-22T00:00:00Z",
            endDate: "2018-09-23T00:00:00Z",
            location: "Morro das Pedras - Florianópolis/SC",
            description: "Etapa do circuito em homenagem a Adriano de Souza.",
            image: "/imagens/eventos/ads_3.jpeg",
            date: "22 de Setembro, 2018"
        },
        {
            title: "Etapa Local Roots",
            startDate: "2018-08-11T00:00:00Z",
            endDate: "2018-08-11T00:00:00Z",
            location: "Praia das Areias",
            description: "Etapa Local Roots de Surf.",
            image: "/imagens/eventos/local_roots.jpeg",
            date: "11 de August, 2018"
        },
        {
            title: "Areias Classic Jamaica - 3ª edição",
            startDate: "2017-04-29T00:00:00Z",
            endDate: "2017-04-29T00:00:00Z",
            location: "Areias do Campeche - Florianópolis/SC",
            description: "Terceira edição do Areias Classic Jamaica.",
            image: "/placeholder.svg",
            date: "29 de Abril, 2017"
        },
        {
            title: "Areias Classic Jamaica - 2ª edição",
            startDate: "2016-09-17T00:00:00Z",
            endDate: "2016-09-17T00:00:00Z",
            location: "Areias do Campeche - Florianópolis/SC",
            description: "Segunda edição do Areias Classic Jamaica.",
            image: "/imagens/eventos/areias_classic_jamaica_2.jpg",
            date: "17 de Setembro, 2016"
        },
        {
            title: "Areias Classic Jamaica - 1ª edição",
            startDate: "2016-05-14T00:00:00Z",
            endDate: "2016-05-14T00:00:00Z",
            location: "Areias do Campeche - Florianópolis/SC",
            description: "Primeira edição do Areias Classic Jamaica.",
            image: "/imagens/eventos/areias_classic_jamaica.jpg",
            date: "14 de Maio, 2016"
        },
        {
            title: "Circuito Ilha de Surf",
            startDate: "2013-11-30T00:00:00Z",
            endDate: "2013-11-30T00:00:00Z",
            location: "Areias do Campeche - Florianópolis/SC",
            description: "Evento voltado para jovens surfistas.",
            image: "/imagens/eventos/circuito_ilha.jpg",
            date: "30 de Novembro, 2013"
        },
        {
            title: "Areias Classic - 2ª edição",
            startDate: "2008-09-17T00:00:00Z",
            endDate: "2008-09-17T00:00:00Z",
            location: "Areias do Campeche - Florianópolis/SC",
            description: "Segunda edição do Areias Classic.",
            image: "/imagens/eventos/areias_classic_2.jpg",
            date: "17 de September, 2008"
        },
        {
            title: "Areias Classic - 1ª edição",
            startDate: "2007-11-11T00:00:00Z",
            endDate: "2007-11-11T00:00:00Z",
            location: "Areias do Campeche - Florianópolis/SC",
            description: "Primeira edição do Areias Classic.",
            image: "/imagens/eventos/areias_classic.jpg",
            date: "11 de Novembro, 2007",
        },
    ];

    // Insert all events into the database
    for (const event of [...futureEvents, ...pastEvents]) {
        const {date, ...eventData} = event;

        // Ensure dates are properly converted to Date objects
        eventData.startDate = new Date(eventData.startDate);
        eventData.endDate = new Date(eventData.endDate);

        // Create the event in the database
        await prisma.event.create({
            data: eventData
        });
    }

    console.log("Database has been seeded with events data");
}

main()
    .catch((e) => {
        console.error(e);
        process.exit(1);
    })
    .finally(async () => {
        await prisma.$disconnect();
    });
