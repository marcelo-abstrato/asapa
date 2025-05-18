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
    const futureEvents: EventData[] = [];

    // Past events
    const pastEvents: EventData[] = [
        {
            title: "Areias Classic - 2ª edição",
            startDate: "2008-09-17T00:00:00Z",
            endDate: "2008-09-17T00:00:00Z",
            location: "Igarassu",
            description: "Segunda edição do Areias Classic.",
            image: "/imagens/eventos/areias_classic_2.jpg",
            date: "17 de September, 2008"
        },
        {
            title: "Areias Classic - 1ª edição",
            startDate: "2007-11-11T00:00:00Z",
            endDate: "2007-11-11T23:59:59Z",
            location: "Praia das Areias",
            description: "Primeira edição do Areias Classic.",
            image: "/imagens/eventos/areias_classic.jpg",
            date: "11 de Novembro, 2007",
        },
        // {
        //     title: "Pós Treino",
        //     startDate: "2023-07-30T00:00:00Z",
        //     endDate: "2023-07-30T00:00:00Z",
        //     location: "Praia das Areias",
        //     description: "Evento de integração pós treino.",
        //     image: "/placeholder.svg?text=Pos+Treino+2023",
        //     date: "30 de July, 2023",
        // },

        // {
        //     title: "Circuito Filho do Surf",
        //     startDate: "2013-11-30T00:00:00Z",
        //     endDate: "2013-11-30T00:00:00Z",
        //     location: "Praia das Areias",
        //     description: "Evento voltado para jovens surfistas.",
        //     image: "/placeholder.svg?text=Filho+do+Surf",
        //     date: "30 de November, 2013"
        // },
        // {
        //     title: "Areeiros Classic Igarassu 1ª edição",
        //     startDate: "2016-05-14T00:00:00Z",
        //     endDate: "2016-05-14T00:00:00Z",
        //     location: "Igarassu",
        //     description: "Primeira edição do Areeiros Classic em Igarassu.",
        //     image: "/placeholder.svg?text=Igarassu+1",
        //     date: "14 de May, 2016"
        // },
        // {
        //     title: "Areeiros Classic Igarassu 3ª edição",
        //     startDate: "2017-04-29T00:00:00Z",
        //     endDate: "2017-04-29T00:00:00Z",
        //     location: "Igarassu",
        //     description: "Terceira edição do Areeiros Classic em Igarassu.",
        //     image: "/placeholder.svg?text=Igarassu+3",
        //     date: "29 de April, 2017"
        // },
        // {
        //     title: "Etapa Local Roots",
        //     startDate: "2018-08-11T00:00:00Z",
        //     endDate: "2018-08-11T00:00:00Z",
        //     location: "Praia das Areias",
        //     description: "Etapa Local Roots de Surf.",
        //     image: "/placeholder.svg?text=Local+Roots",
        //     date: "11 de August, 2018"
        // },
        // {
        //     title: "3ª Etapa Circuito Adriano de Souza",
        //     startDate: "2018-09-22T00:00:00Z",
        //     endDate: "2018-09-23T00:00:00Z",
        //     location: "Praia das Areias",
        //     description: "Etapa do circuito em homenagem a Adriano de Souza.",
        //     image: "/placeholder.svg?text=Adriano+Souza",
        //     date: "22 de September, 2018"
        // },

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
