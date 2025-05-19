// Define the Event interface
export interface Event {
    id: string;
    title: string;
    startDate: string | Date;
    endDate: string | Date;
    location: string;
    description: string;
    image: string;
    createdAt?: Date;
    updatedAt?: Date;
}

// Future events
export const futureEvents: Event[] = [
    {
        id: "clq1234abcd1",
        title: "Dia das Crianças - 2025",
        startDate: "2025-10-12T00:00:00Z",
        endDate: "2025-10-12T00:00:00Z",
        location: "Areias do Campeche - Florianópolis/SC",
        description: "",
        image: "/imagens/eventos/dia_das_criancas_25.png",
        createdAt: new Date("2023-01-01T00:00:00Z"),
        updatedAt: new Date("2023-01-01T00:00:00Z")
    },
];

// Past events
export const pastEvents: Event[] = [
    {
        id: "clq1234abcd2",
        title: "Areias Classic - 3ª edição",
        startDate: "2024-12-14T00:00:00Z",
        endDate: "2024-12-14T00:00:00Z",
        location: "Areias do Campeche - Florianópolis/SC",
        description: "O Retorno apos 26 anos edição do Areias Classic.",
        image: "/imagens/eventos/areias_classic_2.jpg",
        createdAt: new Date("2023-01-01T00:00:00Z"),
        updatedAt: new Date("2023-01-01T00:00:00Z")
    },
    {
        id: "clq1234abcd3",
        title: "Pós Tainha",
        startDate: "2024-07-27T00:00:00Z",
        endDate: "2024-07-27T00:00:00Z",
        location: "Praça das Areias - Florianópolis/SC",
        description: "Praia das Areias - Florianópolis/SC",
        image: "",
        createdAt: new Date("2023-01-01T00:00:00Z"),
        updatedAt: new Date("2023-01-01T00:00:00Z")
    },
    {
        id: "clq1234abcd4",
        title: "Dia das Crianças - 2023",
        startDate: "2023-10-12T00:00:00Z",
        endDate: "2023-10-12T00:00:00Z",
        location: "Praça das Areias - Florianópolis/SC",
        description: "",
        image: "/imagens/eventos/dia_das_criancas_23.png",
        createdAt: new Date("2023-01-01T00:00:00Z"),
        updatedAt: new Date("2023-01-01T00:00:00Z")
    },
    {
        id: "clq1234abcd5",
        title: "Pós Tainha",
        startDate: "2023-07-30T00:00:00Z",
        endDate: "2023-07-30T00:00:00Z",
        location: "Praia das Areias - Florianópolis/SC",
        description: "Evento de integração pós treino.",
        image: "/imagens/eventos/pos_tainha.jpeg",
        createdAt: new Date("2023-01-01T00:00:00Z"),
        updatedAt: new Date("2023-01-01T00:00:00Z")
    },
    {
        id: "clq1234abcd6",
        title: "3ª Etapa Circuito Adriano de Souza",
        startDate: "2018-09-22T00:00:00Z",
        endDate: "2018-09-23T00:00:00Z",
        location: "Morro das Pedras - Florianópolis/SC",
        description: "Etapa do circuito em homenagem a Adriano de Souza.",
        image: "/imagens/eventos/ads_3.jpeg",
        createdAt: new Date("2018-01-01T00:00:00Z"),
        updatedAt: new Date("2018-01-01T00:00:00Z")
    },
    {
        id: "clq1234abcd7",
        title: "Etapa Local Roots",
        startDate: "2018-08-11T00:00:00Z",
        endDate: "2018-08-11T00:00:00Z",
        location: "Praia das Areias",
        description: "Etapa Local Roots de Surf.",
        image: "/imagens/eventos/local_roots.jpeg",
        createdAt: new Date("2018-01-01T00:00:00Z"),
        updatedAt: new Date("2018-01-01T00:00:00Z")
    },
    {
        id: "clq1234abcd8",
        title: "Areias Classic Jamaica - 3ª edição",
        startDate: "2017-04-29T00:00:00Z",
        endDate: "2017-04-29T00:00:00Z",
        location: "Areias do Campeche - Florianópolis/SC",
        description: "Terceira edição do Areias Classic Jamaica.",
        image: "/placeholder.svg",
        createdAt: new Date("2017-01-01T00:00:00Z"),
        updatedAt: new Date("2017-01-01T00:00:00Z")
    },
    {
        id: "clq1234abcd9",
        title: "Areias Classic Jamaica - 2ª edição",
        startDate: "2016-09-17T00:00:00Z",
        endDate: "2016-09-17T00:00:00Z",
        location: "Areias do Campeche - Florianópolis/SC",
        description: "Segunda edição do Areias Classic Jamaica.",
        image: "/imagens/eventos/areias_classic_jamaica_2.jpg",
        createdAt: new Date("2016-01-01T00:00:00Z"),
        updatedAt: new Date("2016-01-01T00:00:00Z")
    },
    {
        id: "clq1234abcd10",
        title: "Areias Classic Jamaica - 1ª edição",
        startDate: "2016-05-14T00:00:00Z",
        endDate: "2016-05-14T00:00:00Z",
        location: "Areias do Campeche - Florianópolis/SC",
        description: "Primeira edição do Areias Classic Jamaica.",
        image: "/imagens/eventos/areias_classic_jamaica.jpg",
        createdAt: new Date("2016-01-01T00:00:00Z"),
        updatedAt: new Date("2016-01-01T00:00:00Z")
    }
];
