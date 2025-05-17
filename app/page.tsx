import Link from "next/link"
import Image from "next/image"
import {Button} from "@/components/ui/button"
import {Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle} from "@/components/ui/card"
import {Tabs, TabsContent, TabsList, TabsTrigger} from "@/components/ui/tabs"
import {
    ArrowRight,
    ChevronRight,
    Facebook,
    FileText,
    Heart,
    Info,
    Instagram,
    Newspaper,
    Target,
    Twitter,
    Users,
} from "lucide-react"
import MobileMenu from "./mobile-menu"
import WaveDivider from "@/components/wave-divider"
import DesktopNav from "./desktop-nav"

export default function Home() {
    const navLinks = [
        {
            href: "#quem-somos",
            label: "Quem Somos",
            submenu: [
                {href: "#historia", label: "Nossa História"},
                {href: "#missao-visao-valores", label: "Missão, Visão e Valores"},
            ],
        },
        {
            href: "#diretoria",
            label: "Diretoria",
            submenu: [
                {href: "#diretoria-atual", label: "Diretoria Atual"},
                {href: "#ex-presidentes", label: "Ex-Presidentes"},
                {href: "#conselho", label: "Conselho Consultivo"},
            ],
        },
        {
            href: "#eventos",
            label: "Eventos",
            submenu: [
                {href: "#eventos-futuros", label: "Eventos Futuros"},
                {href: "#eventos-passados", label: "Eventos Passados"},
                {href: "#calendario", label: "Calendário Anual"},
            ],
        },
        {
            href: "#associe-se",
            label: "Associe-se",
            submenu: [
                {href: "#beneficios", label: "Benefícios"},
                {href: "#planos", label: "Planos"},
                {href: "#faq-associados", label: "FAQ"},
            ],
        },
        {
            href: "#doacao",
            label: "Doação",
            submenu: [
                {href: "#como-doar", label: "Como Doar"},
                {href: "#projetos-apoiados", label: "Projetos Apoiados"},
                {href: "#prestacao-contas", label: "Prestação de Contas"},
            ],
        },
        {
            href: "#transparencia",
            label: "Transparência",
            submenu: [
                {href: "#relatorios", label: "Relatórios Financeiros"},
                {href: "#atas", label: "Atas de Reuniões"},
                {href: "#estatuto", label: "Estatuto"},
            ],
        },
        {
            href: "#noticias",
            label: "Notícias",
            submenu: [
                {href: "#ultimas-noticias", label: "Últimas Notícias"},
                {href: "#blog", label: "Blog"},
                {href: "#midia", label: "ASAPA na Mídia"},
            ],
        },
        {
            href: "#contato",
            label: "Contato",
            submenu: [
                {href: "#fale-conosco", label: "Fale Conosco"},
                {href: "#localizacao", label: "Localização"},
                {href: "#trabalhe-conosco", label: "Trabalhe Conosco"},
            ],
        },
    ]

  return (
      <div className="flex flex-col min-h-screen">
          <header
              className="sticky top-0 z-50 w-full border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
              <div className="container flex h-16 items-center justify-between">
                  <div className="flex items-center gap-2 font-bold text-xl text-[#1d4ed8]">
                      <Image src="/images/logo-asapa.png" alt="ASAPA Logo" width={40} height={40}
                             className="rounded-full"/>
                      <span>ASAPA</span>
                  </div>

                  {/* Menu para desktop com submenus */}
                  <DesktopNav links={navLinks}/>

                  {/* Menu mobile */}
                  <MobileMenu links={navLinks}/>
              </div>
          </header>
          <main className="flex-1">
              <section className="w-full py-12 md:py-24 lg:py-32 bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6]">
                  <div className="container px-4 md:px-6">
                      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                          <div className="space-y-4">
                              <h1 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl text-white">
                                  Bem-vindo à ASAPA
                              </h1>
                              <p className="max-w-[600px] text-white md:text-xl">
                                  Associação dos Surfistas e Amigos da Praia das Areias, promovendo o surf como esporte,
                                  estilo de vida
                                  e conexão com a natureza desde 2005.
                              </p>
                              <div className="flex flex-col gap-2 min-[400px]:flex-row">
                                  <Button className="bg-white text-[#1d4ed8] hover:bg-gray-100">Associe-se</Button>
                                  <Button variant="outline" className="text-white border-white hover:bg-white/20">
                                      Conheça Nossos Projetos
                                      <ArrowRight className="ml-2 h-4 w-4"/>
                                  </Button>
                              </div>
                          </div>
                          <div
                              className="mx-auto w-full max-w-[500px] aspect-video relative rounded-xl overflow-hidden shadow-xl">
                              <Image
                                  src="/placeholder.svg?height=500&width=800"
                                  alt="Surfista em ação"
                                  fill
                                  className="object-cover"
                                  priority
                              />
                          </div>
                      </div>
                  </div>
              </section>

              {/* Seção Quem Somos */}
              <section id="quem-somos" className="w-full py-12 md:py-24 bg-white">
                  <div className="container px-4 md:px-6">
                      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">Nossa
                              História
                          </div>
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                              <Info className="h-8 w-8 text-[#1d4ed8]"/>
                              Quem Somos
                          </h2>
                          <p className="max-w-[700px] text-gray-500 md:text-xl">
                              Conheça a história da Associação dos Surfistas e Amigos da Praia das Areias
                          </p>
                      </div>

                      <div className="grid gap-10 lg:grid-cols-2 lg:gap-16 items-center">
                          <div className="space-y-5">
                              <h3 className="text-2xl font-bold text-[#1d4ed8]">Nossa Jornada</h3>
                              <p className="text-gray-600">
                                  Fundada em 2005 por um grupo de surfistas apaixonados, a ASAPA nasceu da necessidade
                                  de organizar e
                                  fortalecer a comunidade do surf na Praia das Areias. O que começou como um pequeno
                                  grupo de amigos
                                  transformou-se em uma associação reconhecida nacionalmente.
                              </p>
                              <p className="text-gray-600">
                                  Ao longo dos anos, expandimos nossa atuação para além do esporte, abraçando causas
                                  ambientais, sociais
                                  e educacionais. Hoje, somos uma referência no desenvolvimento do surf e na preservação
                                  do ecossistema
                                  costeiro.
                              </p>
                              <p className="text-gray-600">
                                  Nossa associação reúne surfistas de todas as idades e níveis, desde iniciantes até
                                  profissionais,
                                  unidos pelo amor ao mar e pelo compromisso com a sustentabilidade e o desenvolvimento
                                  da comunidade
                                  local.
                              </p>
                              <div className="pt-2">
                                  <Button className="bg-[#1d4ed8] hover:bg-[#1e40af] text-white">
                                      Conheça Nossa História Completa
                                  </Button>
                              </div>
                          </div>
                          <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                              <Image
                                  src="/placeholder.svg?height=400&width=600&text=Fundadores+da+ASAPA"
                                  alt="Fundadores da ASAPA"
                                  fill
                                  className="object-cover"
                              />
                          </div>
                      </div>
                  </div>
              </section>

              {/* Seção Missão, Visão e Valores */}
              <section id="missao-visao-valores" className="w-full py-12 md:py-24 bg-gray-50">
                  <div className="container px-4 md:px-6">
                      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                              Nossos Princípios
                          </div>
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                              <Target className="h-8 w-8 text-[#1d4ed8]"/>
                              Missão, Visão e Valores
                          </h2>
                          <p className="max-w-[700px] text-gray-500 md:text-xl">
                              Os princípios que norteiam nossas ações e definem quem somos
                          </p>
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                          <Card className="border-t-4 border-t-[#1d4ed8]">
                              <CardHeader>
                                  <div
                                      className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                      <Target className="h-6 w-6 text-[#1d4ed8]"/>
                                  </div>
                                  <CardTitle className="text-2xl">Missão</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-gray-600">
                                      Promover o surf como esporte, estilo de vida e ferramenta de transformação social,
                                      fomentando a
                                      prática responsável, a preservação ambiental e o desenvolvimento da comunidade
                                      local.
                                  </p>
                              </CardContent>
                          </Card>

                          <Card className="border-t-4 border-t-[#1d4ed8]">
                              <CardHeader>
                                  <div
                                      className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                      <svg
                                          xmlns="http://www.w3.org/2000/svg"
                                          width="24"
                                          height="24"
                                          viewBox="0 0 24 24"
                                          fill="none"
                                          stroke="currentColor"
                                          strokeWidth="2"
                                          strokeLinecap="round"
                                          strokeLinejoin="round"
                                          className="h-6 w-6 text-[#1d4ed8]"
                                      >
                                          <circle cx="12" cy="12" r="10"/>
                                          <line x1="12" y1="8" x2="12" y2="12"/>
                                          <line x1="12" y1="16" x2="12.01" y2="16"/>
                                      </svg>
                                  </div>
                                  <CardTitle className="text-2xl">Visão</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <p className="text-gray-600">
                                      Ser reconhecida como a principal referência em desenvolvimento sustentável do surf
                                      no Brasil,
                                      inspirando outras comunidades a adotarem práticas que equilibrem esporte, meio
                                      ambiente e bem-estar
                                      social.
                                  </p>
                              </CardContent>
                          </Card>

                          <Card className="border-t-4 border-t-[#1d4ed8]">
                              <CardHeader>
                                  <div
                                      className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mb-2">
                                      <Heart className="h-6 w-6 text-[#1d4ed8]"/>
                                  </div>
                                  <CardTitle className="text-2xl">Valores</CardTitle>
                              </CardHeader>
                              <CardContent>
                                  <ul className="space-y-2 text-gray-600">
                                      <li className="flex items-start gap-2">
                                          <span className="text-[#1d4ed8] font-bold">•</span>
                                          <span>Respeito ao meio ambiente e às pessoas</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                          <span className="text-[#1d4ed8] font-bold">•</span>
                                          <span>Ética e transparência em todas as ações</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                          <span className="text-[#1d4ed8] font-bold">•</span>
                                          <span>Inclusão e diversidade no esporte</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                          <span className="text-[#1d4ed8] font-bold">•</span>
                                          <span>Compromisso com a comunidade local</span>
                                      </li>
                                      <li className="flex items-start gap-2">
                                          <span className="text-[#1d4ed8] font-bold">•</span>
                                          <span>Excelência e inovação constante</span>
                                      </li>
                                  </ul>
                              </CardContent>
                          </Card>
                      </div>
                  </div>
              </section>

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
                          {[
                              {
                                  name: "Carlos Silva",
                                  role: "Presidente",
                                  bio: "Surfista há mais de 20 anos e apaixonado pelo mar.",
                              },
                              {
                                  name: "Mariana Costa",
                                  role: "Vice-Presidente",
                                  bio: "Campeã estadual e defensora do meio ambiente marinho.",
                              },
                              {
                                  name: "Roberto Alves",
                                  role: "Diretor Financeiro",
                                  bio: "Administrador com experiência em gestão de organizações esportivas.",
                              },
                              {
                                  name: "Juliana Santos",
                                  role: "Diretora de Eventos",
                                  bio: "Organizadora de campeonatos nacionais e internacionais.",
                              },
                              {
                                  name: "Pedro Mendes",
                                  role: "Diretor Técnico",
                                  bio: "Ex-atleta profissional e treinador certificado.",
                              },
                              {
                                  name: "Fernanda Lima",
                                  role: "Diretora de Comunicação",
                                  bio: "Jornalista especializada em esportes aquáticos.",
                              },
                          ].map((member, index) => (
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

              <section id="eventos" className="w-full py-12 md:py-24">
                  <div className="container px-4 md:px-6">
                      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                          <div
                              className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">Calendário
                          </div>
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-[#1d4ed8]"
                              >
                                  <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                  <line x1="16" x2="16" y1="2" y2="6"/>
                                  <line x1="8" x2="8" y1="2" y2="6"/>
                                  <line x1="3" x2="21" y1="10" y2="10"/>
                              </svg>
                              Eventos
                          </h2>
                          <p className="max-w-[700px] text-gray-500 md:text-xl">
                              Confira nossa agenda de campeonatos, workshops e encontros da comunidade do surf.
                          </p>
                      </div>

                      <Tabs defaultValue="futuros" className="w-full max-w-4xl mx-auto">
                          <TabsList className="grid w-full grid-cols-2 mb-8">
                              <TabsTrigger value="futuros">Eventos Futuros</TabsTrigger>
                              <TabsTrigger value="passados">Eventos Passados</TabsTrigger>
                          </TabsList>

                          <TabsContent value="futuros" className="space-y-6">
                              {[
                                  {
                                      title: "Campeonato Regional de Surf",
                                      date: "15-16 de Junho, 2025",
                                      location: "Praia Grande",
                                      description:
                                          "Competição aberta para surfistas de todos os níveis com premiação para diversas categorias.",
                                      image: "/placeholder.svg?height=200&width=300&text=Campeonato",
                                  },
                                  {
                                      title: "Workshop de Técnicas Avançadas",
                                      date: "22 de Junho, 2025",
                                      location: "Sede da Associação",
                                      description:
                                          "Workshop ministrado por surfistas profissionais com dicas para aprimorar suas manobras.",
                                      image: "/placeholder.svg?height=200&width=300&text=Workshop",
                                  },
                                  {
                                      title: "Mutirão de Limpeza da Praia",
                                      date: "29 de Junho, 2025",
                                      location: "Praia do Sol",
                                      description: "Ação ambiental para preservação do nosso principal espaço de prática do surf.",
                                      image: "/placeholder.svg?height=200&width=300&text=Limpeza",
                                  },
                                  {
                                      title: "Festival de Surf e Música",
                                      date: "13-14 de Julho, 2025",
                                      location: "Praia Central",
                                      description: "Dois dias de competições, apresentações musicais, gastronomia e muito mais.",
                                      image: "/placeholder.svg?height=200&width=300&text=Festival",
                                  },
                              ].map((event, index) => (
                                  <div
                                      key={index}
                                      className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm"
                                  >
                                      <div className="md:w-1/3 h-48 md:h-auto relative">
                                          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill
                                                 className="object-cover"/>
                                      </div>
                                      <div className="flex-1 p-4 sm:p-6 flex flex-col">
                                          <h3 className="text-xl font-bold">{event.title}</h3>
                                          <div className="flex flex-wrap gap-4 my-2">
                                              <div className="flex items-center text-gray-500">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="16"
                                                      height="16"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth="2"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="mr-2"
                                                  >
                                                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                                      <line x1="16" x2="16" y1="2" y2="6"/>
                                                      <line x1="8" x2="8" y1="2" y2="6"/>
                                                      <line x1="3" x2="21" y1="10" y2="10"/>
                                                  </svg>
                                                  {event.date}
                                              </div>
                                              <div className="flex items-center text-gray-500">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="16"
                                                      height="16"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth="2"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="mr-2"
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                      <circle cx="12" cy="10" r="3"/>
                                                  </svg>
                                                  {event.location}
                                              </div>
                                          </div>
                                          <p className="text-gray-600 flex-grow">{event.description}</p>
                                          <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                              <Button className="bg-[#1d4ed8] hover:bg-[#1e40af]">Inscrever-se</Button>
                                              <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                                                  Mais Informações
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </TabsContent>

                          <TabsContent value="passados" className="space-y-6">
                              {[
                                  {
                                      title: "Campeonato Estadual de Surf",
                                      date: "10-12 de Março, 2025",
                                      location: "Praia do Forte",
                                      description:
                                          "Competição que reuniu os melhores surfistas do estado com premiação total de R$ 50.000.",
                                      image: "/placeholder.svg?height=200&width=300&text=Estadual",
                                  },
                                  {
                                      title: "Curso de Primeiros Socorros",
                                      date: "25 de Fevereiro, 2025",
                                      location: "Sede da Associação",
                                      description:
                                          "Treinamento essencial para surfistas sobre como agir em situações de emergência no mar.",
                                      image: "/placeholder.svg?height=200&width=300&text=Primeiros+Socorros",
                                  },
                                  {
                                      title: "Ação de Reflorestamento de Dunas",
                                      date: "15 de Janeiro, 2025",
                                      location: "Dunas da Praia Grande",
                                      description: "Plantio de vegetação nativa para preservação das dunas e do ecossistema costeiro.",
                                      image: "/placeholder.svg?height=200&width=300&text=Reflorestamento",
                                  },
                                  {
                                      title: "Confraternização de Fim de Ano",
                                      date: "18 de Dezembro, 2024",
                                      location: "Clube Náutico",
                                      description: "Celebração com todos os associados, familiares e apoiadores da ASAPA.",
                                      image: "/placeholder.svg?height=200&width=300&text=Confraternização",
                                  },
                              ].map((event, index) => (
                                  <div
                                      key={index}
                                      className="flex flex-col md:flex-row gap-6 border rounded-lg overflow-hidden bg-white shadow-sm"
                                  >
                                      <div className="md:w-1/3 h-48 md:h-auto relative">
                                          <Image src={event.image || "/placeholder.svg"} alt={event.title} fill
                                                 className="object-cover"/>
                                      </div>
                                      <div className="flex-1 p-4 sm:p-6 flex flex-col">
                                          <h3 className="text-xl font-bold">{event.title}</h3>
                                          <div className="flex flex-wrap gap-4 my-2">
                                              <div className="flex items-center text-gray-500">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="16"
                                                      height="16"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth="2"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="mr-2"
                                                  >
                                                      <rect width="18" height="18" x="3" y="4" rx="2" ry="2"/>
                                                      <line x1="16" x2="16" y1="2" y2="6"/>
                                                      <line x1="8" x2="8" y1="2" y2="6"/>
                                                      <line x1="3" x2="21" y1="10" y2="10"/>
                                                  </svg>
                                                  {event.date}
                                              </div>
                                              <div className="flex items-center text-gray-500">
                                                  <svg
                                                      xmlns="http://www.w3.org/2000/svg"
                                                      width="16"
                                                      height="16"
                                                      viewBox="0 0 24 24"
                                                      fill="none"
                                                      stroke="currentColor"
                                                      strokeWidth="2"
                                                      strokeLinecap="round"
                                                      strokeLinejoin="round"
                                                      className="mr-2"
                                                  >
                                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                                      <circle cx="12" cy="10" r="3"/>
                                                  </svg>
                                                  {event.location}
                                              </div>
                                          </div>
                                          <p className="text-gray-600 flex-grow">{event.description}</p>
                                          <div className="flex flex-col sm:flex-row gap-3 mt-4">
                                              <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                                                  Ver Galeria de Fotos
                                              </Button>
                                              <Button variant="ghost" className="text-[#1d4ed8]">
                                                  Resultados
                                              </Button>
                                          </div>
                                      </div>
                                  </div>
                              ))}
                          </TabsContent>
                      </Tabs>

                      <div className="flex justify-center mt-10">
                          <Button variant="outline" className="text-[#1d4ed8] border-[#1d4ed8]">
                              Ver Todos os Eventos
                              <ChevronRight className="ml-2 h-4 w-4"/>
                          </Button>
                      </div>
                  </div>
              </section>

              <section
                  id="associe-se"
                  className="w-full py-12 md:py-24 bg-gradient-to-r from-[#1d4ed8] to-[#3b82f6] text-white"
              >
                  <div className="container px-4 md:px-6">
                      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                          <div className="space-y-4">
                              <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm">Junte-se a nós
                              </div>
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl">Torne-se um
                                  Associado</h2>
                              <p className="max-w-[600px] md:text-xl">
                                  Faça parte da nossa comunidade e aproveite todos os benefícios exclusivos para
                                  associados.
                              </p>

                              <div className="space-y-4 mt-6">
                                  <div className="flex gap-3 items-start">
                                      <div
                                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                          >
                                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                              <polyline points="22 4 12 14.01 9 11.01"/>
                                          </svg>
                                      </div>
                                      <div>
                                          <h3 className="font-bold text-lg">Acesso a Eventos Exclusivos</h3>
                                          <p className="text-white/80">
                                              Participe de competições, workshops e encontros exclusivos para
                                              associados.
                                          </p>
                                      </div>
                                  </div>

                                  <div className="flex gap-3 items-start">
                                      <div
                                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                          >
                                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                              <polyline points="22 4 12 14.01 9 11.01"/>
                                          </svg>
                                      </div>
                                      <div>
                                          <h3 className="font-bold text-lg">Descontos em Parceiros</h3>
                                          <p className="text-white/80">
                                              Aproveite descontos especiais em lojas, escolas e serviços relacionados ao
                                              surf.
                                          </p>
                                      </div>
                                  </div>

                                  <div className="flex gap-3 items-start">
                                      <div
                                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                          >
                                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                              <polyline points="22 4 12 14.01 9 11.01"/>
                                          </svg>
                                      </div>
                                      <div>
                                          <h3 className="font-bold text-lg">Aulas e Treinamentos</h3>
                                          <p className="text-white/80">
                                              Tenha acesso a aulas com profissionais e treinamentos especializados.
                                          </p>
                                      </div>
                                  </div>

                                  <div className="flex gap-3 items-start">
                                      <div
                                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center shrink-0">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                          >
                                              <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/>
                                              <polyline points="22 4 12 14.01 9 11.01"/>
                                          </svg>
                                      </div>
                                      <div>
                                          <h3 className="font-bold text-lg">Voz na Comunidade</h3>
                                          <p className="text-white/80">
                                              Participe das decisões da associação e contribua para o desenvolvimento do
                                              surf na região.
                                          </p>
                                      </div>
                                  </div>
                              </div>
                          </div>

                          <div className="bg-white/10 rounded-lg p-6 backdrop-blur-sm">
                              <h3 className="text-xl font-bold mb-4">Formulário de Associação</h3>
                              <div className="space-y-4">
                                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                      <div className="space-y-2">
                                          <label htmlFor="first-name" className="text-sm font-medium">
                                              Nome
                                          </label>
                                          <input
                                              id="first-name"
                                              className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                              placeholder="Seu nome"
                                          />
                                      </div>
                                      <div className="space-y-2">
                                          <label htmlFor="last-name" className="text-sm font-medium">
                                              Sobrenome
                                          </label>
                                          <input
                                              id="last-name"
                                              className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                              placeholder="Seu sobrenome"
                                          />
                                      </div>
                                  </div>

                                  <div className="space-y-2">
                                      <label htmlFor="email" className="text-sm font-medium">
                                          Email
                                      </label>
                                      <input
                                          id="email"
                                          type="email"
                                          className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                          placeholder="seu@email.com"
                                      />
                                  </div>

                                  <div className="space-y-2">
                                      <label htmlFor="phone" className="text-sm font-medium">
                                          Telefone
                                      </label>
                                      <input
                                          id="phone"
                                          type="tel"
                                          className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                          placeholder="(00) 00000-0000"
                                      />
                                  </div>

                                  <div className="space-y-2">
                                      <label htmlFor="experience" className="text-sm font-medium">
                                          Experiência com Surf
                                      </label>
                                      <select
                                          id="experience"
                                          className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                                      >
                                          <option value="" className="bg-cyan-600">
                                              Selecione seu nível
                                          </option>
                                          <option value="beginner" className="bg-cyan-600">
                                              Iniciante
                                          </option>
                                          <option value="intermediate" className="bg-cyan-600">
                                              Intermediário
                                          </option>
                                          <option value="advanced" className="bg-cyan-600">
                                              Avançado
                                          </option>
                                          <option value="professional" className="bg-cyan-600">
                                              Profissional
                                          </option>
                                      </select>
                                  </div>

                                  <div className="space-y-2">
                                      <label htmlFor="membership" className="text-sm font-medium">
                                          Tipo de Associação
                                      </label>
                                      <select
                                          id="membership"
                                          className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-white/30"
                                      >
                                          <option value="" className="bg-cyan-600">
                                              Selecione o tipo
                                          </option>
                                          <option value="standard" className="bg-cyan-600">
                                              Padrão (R$ 50/mês)
                                          </option>
                                          <option value="family" className="bg-cyan-600">
                                              Família (R$ 80/mês)
                                          </option>
                                          <option value="student" className="bg-cyan-600">
                                              Estudante (R$ 30/mês)
                                          </option>
                                          <option value="professional" className="bg-cyan-600">
                                              Profissional (R$ 100/mês)
                                          </option>
                                      </select>
                                  </div>

                                  <div className="flex items-center space-x-2">
                                      <input
                                          type="checkbox"
                                          id="terms"
                                          className="h-4 w-4 rounded border-white/20 bg-white/10 text-cyan-600 focus:ring-cyan-600"
                                      />
                                      <label htmlFor="terms" className="text-sm">
                                          Concordo com os{" "}
                                          <a href="#" className="underline">
                                              termos e condições
                                          </a>
                                      </label>
                                  </div>

                                  <Button className="w-full bg-white text-[#1d4ed8] hover:bg-white/90">Enviar
                                      Inscrição</Button>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section id="doacao" className="w-full py-12 md:py-24 bg-gray-50">
                  <div className="container px-4 md:px-6">
                      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                              Apoie nossa causa
                          </div>
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                              <svg
                                  xmlns="http://www.w3.org/2000/svg"
                                  width="32"
                                  height="32"
                                  viewBox="0 0 24 24"
                                  fill="none"
                                  stroke="currentColor"
                                  strokeWidth="2"
                                  strokeLinecap="round"
                                  strokeLinejoin="round"
                                  className="text-[#1d4ed8]"
                              >
                                  <path
                                      d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/>
                              </svg>
                              Faça uma Doação
                          </h2>
                          <p className="max-w-[700px] text-gray-500 md:text-xl">
                              Sua contribuição ajuda a manter nossos projetos sociais, ambientais e esportivos.
                          </p>
                      </div>

                      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-start max-w-5xl mx-auto">
                          <div className="space-y-4">
                              <div className="bg-white p-6 rounded-lg shadow-sm border">
                                  <h3 className="text-xl font-bold mb-4">Como sua doação ajuda</h3>

                                  <div className="space-y-4">
                                      <div className="flex gap-3 items-start">
                                          <div
                                              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="20"
                                                  height="20"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="text-[#1d4ed8]"
                                              >
                                                  <path d="M2 22a8 8 0 0 1 8-8h12a8 8 0 0 1-8 8Z"/>
                                                  <path d="M2 22a8 8 0 0 0 8-8h12a8 8 0 0 0-8 8Z"/>
                                                  <circle cx="16" cy="8" r="6"/>
                                              </svg>
                                          </div>
                                          <div>
                                              <h4 className="font-bold text-lg">Escola de Surf Social</h4>
                                              <p className="text-gray-600">
                                                  Oferecemos aulas gratuitas para crianças e jovens de comunidades
                                                  carentes.
                                              </p>
                                          </div>
                                      </div>

                                      <div className="flex gap-3 items-start">
                                          <div
                                              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="20"
                                                  height="20"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="text-[#1d4ed8]"
                                              >
                                                  <path d="M18 8a6 6 0 0 0-6-6 6 6 0 0 0-6 6c0 7 6 13 6 13s6-6 6-13Z"/>
                                                  <circle cx="12" cy="8" r="2"/>
                                              </svg>
                                          </div>
                                          <div>
                                              <h4 className="font-bold text-lg">Preservação Ambiental</h4>
                                              <p className="text-gray-600">
                                                  Realizamos ações de limpeza e conscientização para proteger nossas
                                                  praias.
                                              </p>
                                          </div>
                                      </div>

                                      <div className="flex gap-3 items-start">
                                          <div
                                              className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center shrink-0">
                                              <svg
                                                  xmlns="http://www.w3.org/2000/svg"
                                                  width="20"
                                                  height="20"
                                                  viewBox="0 0 24 24"
                                                  fill="none"
                                                  stroke="currentColor"
                                                  strokeWidth="2"
                                                  strokeLinecap="round"
                                                  strokeLinejoin="round"
                                                  className="text-[#1d4ed8]"
                                              >
                                                  <path
                                                      d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"/>
                                              </svg>
                                          </div>
                                          <div>
                                              <h4 className="font-bold text-lg">Educação e Pesquisa</h4>
                                              <p className="text-gray-600">
                                                  Apoiamos estudos sobre o impacto do surf na saúde física e mental.
                                              </p>
                                          </div>
                                      </div>
                                  </div>

                                  <div className="mt-6 pt-6 border-t">
                                      <h4 className="font-bold text-lg mb-2">Prestação de Contas</h4>
                                      <p className="text-gray-600">
                                          Todas as doações são documentadas e os relatórios financeiros estão
                                          disponíveis na seção de
                                          Transparência.
                                      </p>
                                      <Button variant="link" className="text-[#1d4ed8] p-0 h-auto mt-2">
                                          Ver relatórios de doações
                                          <ChevronRight className="ml-1 h-4 w-4"/>
                                      </Button>
                                  </div>
                              </div>
                          </div>

                          <div className="bg-white p-6 rounded-lg shadow-sm border">
                              <h3 className="text-xl font-bold mb-4">Faça sua contribuição</h3>

                              <div className="space-y-4">
                                  <div className="space-y-2">
                                      <label className="text-sm font-medium">Escolha um valor</label>
                                      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2">
                                          {["R$ 25", "R$ 50", "R$ 100", "R$ 200"].map((amount, index) => (
                                              <Button
                                                  key={index}
                                                  variant="outline"
                                                  className="border-blue-200 hover:bg-blue-50 hover:text-[#1d4ed8] hover:border-blue-300 text-sm sm:text-base"
                                              >
                                                  {amount}
                                              </Button>
                                          ))}
                                      </div>
                                  </div>

                                  <div className="space-y-2">
                                      <label htmlFor="custom-amount" className="text-sm font-medium">
                                          Ou digite um valor personalizado
                                      </label>
                                      <div className="relative">
                                          <span
                                              className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-500">R$</span>
                                          <input
                                              id="custom-amount"
                                              type="number"
                                              className="flex h-10 w-full rounded-md border border-gray-200 bg-white pl-8 pr-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                                              placeholder="Outro valor"
                                          />
                                      </div>
                                  </div>

                                  <div className="space-y-2">
                                      <label htmlFor="donation-type" className="text-sm font-medium">
                                          Tipo de doação
                                      </label>
                                      <select
                                          id="donation-type"
                                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                                      >
                                          <option value="single">Doação única</option>
                                          <option value="monthly">Doação mensal</option>
                                          <option value="quarterly">Doação trimestral</option>
                                          <option value="annual">Doação anual</option>
                                      </select>
                                  </div>

                                  <div className="space-y-2">
                                      <label htmlFor="payment-method" className="text-sm font-medium">
                                          Forma de pagamento
                                      </label>
                                      <select
                                          id="payment-method"
                                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                                      >
                                          <option value="credit-card">Cartão de Crédito</option>
                                          <option value="pix">PIX</option>
                                          <option value="bank-transfer">Transferência Bancária</option>
                                          <option value="boleto">Boleto</option>
                                      </select>
                                  </div>

                                  <div className="space-y-2">
                                      <label htmlFor="donor-name" className="text-sm font-medium">
                                          Seu nome (opcional)
                                      </label>
                                      <input
                                          id="donor-name"
                                          className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#1d4ed8]"
                                          placeholder="Como deseja ser reconhecido"
                                      />
                                  </div>

                                  <div className="flex items-center space-x-2">
                                      <input
                                          type="checkbox"
                                          id="anonymous"
                                          className="h-4 w-4 rounded border-gray-300 text-[#1d4ed8] focus:ring-[#1d4ed8]"
                                      />
                                      <label htmlFor="anonymous" className="text-sm">
                                          Fazer doação anônima
                                      </label>
                                  </div>

                                  <Button className="w-full bg-[#1d4ed8] hover:bg-[#1e40af] mt-2">Doar Agora</Button>

                                  <p className="text-xs text-gray-500 text-center mt-4">
                                      Sua doação é segura e processada com criptografia. Ao doar, você concorda com
                                      nossos termos de
                                      serviço.
                                  </p>
                              </div>
                          </div>
                      </div>
                  </div>
              </section>

              <section id="transparencia" className="w-full py-12 md:py-24">
                  <div className="container px-4 md:px-6">
                      <div className="flex flex-col items-center justify-center space-y-4 text-center mb-12">
                          <div className="inline-block rounded-lg bg-blue-100 px-3 py-1 text-sm text-[#1d4ed8]">
                              Prestação de Contas
                          </div>
                          <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl flex items-center gap-2">
                              <FileText className="h-8 w-8 text-[#1d4ed8]"/>
                              Transparência
                          </h2>
                          <p className="max-w-[700px] text-gray-500 md:text-xl">
                              Acesso a todos os relatórios financeiros, atas de reuniões e decisões da diretoria.
                          </p>
                      </div>

                      <Tabs defaultValue="financeiro" className="w-full max-w-4xl mx-auto">
                          <TabsList className="grid w-full grid-cols-3">
                              <TabsTrigger value="financeiro">Relatórios Financeiros</TabsTrigger>
                              <TabsTrigger value="atas">Atas de Reuniões</TabsTrigger>
                              <TabsTrigger value="projetos">Projetos</TabsTrigger>
                          </TabsList>
                          <TabsContent value="financeiro" className="p-4 border rounded-lg mt-4">
                              <div className="space-y-4">
                                  <h3 className="text-xl font-bold">Relatórios Financeiros</h3>
                                  <div className="space-y-2">
                                      {[
                                          {title: "Balanço Anual 2024", date: "31/03/2025"},
                                          {title: "Relatório Financeiro - 1º Trimestre 2025", date: "15/04/2025"},
                                          {title: "Prestação de Contas - Campeonato Regional", date: "02/03/2025"},
                                          {title: "Orçamento Anual 2025", date: "10/01/2025"},
                                      ].map((report, index) => (
                                          <div
                                              key={index}
                                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 border rounded hover:bg-gray-50 gap-2"
                                          >
                                              <div>
                                                  <h4 className="font-medium">{report.title}</h4>
                                                  <p className="text-sm text-gray-500">Publicado em: {report.date}</p>
                                              </div>
                                              <Button variant="ghost" size="sm" className="text-[#1d4ed8]">
                                                  <FileText className="h-4 w-4 mr-2"/>
                                                  Visualizar
                                              </Button>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </TabsContent>
                          <TabsContent value="atas" className="p-4 border rounded-lg mt-4">
                              <div className="space-y-4">
                                  <h3 className="text-xl font-bold">Atas de Reuniões</h3>
                                  <div className="space-y-2">
                                      {[
                                          {title: "Reunião Ordinária da Diretoria", date: "25/04/2025"},
                                          {title: "Assembleia Geral Extraordinária", date: "10/03/2025"},
                                          {title: "Reunião de Planejamento Anual", date: "15/01/2025"},
                                          {title: "Reunião com Patrocinadores", date: "05/02/2025"},
                                      ].map((meeting, index) => (
                                          <div
                                              key={index}
                                              className="flex flex-col sm:flex-row sm:justify-between sm:items-center p-3 border rounded hover:bg-gray-50 gap-2"
                                          >
                                              <div>
                                                  <h4 className="font-medium">{meeting.title}</h4>
                                                  <p className="text-sm text-gray-500">Realizada em: {meeting.date}</p>
                                              </div>
                                              <Button variant="ghost" size="sm" className="text-[#1d4ed8]">
                                                  <FileText className="h-4 w-4 mr-2"/>
                                                  Visualizar
                                              </Button>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </TabsContent>
                          <TabsContent value="projetos" className="p-4 border rounded-lg mt-4">
                              <div className="space-y-4">
                                  <h3 className="text-xl font-bold">Projetos em Andamento</h3>
                                  <div className="space-y-2">
                                      {[
                                          {title: "Escola de Surf para Crianças", progress: 75},
                                          {title: "Limpeza de Praias", progress: 90},
                                          {title: "Reforma da Sede", progress: 30},
                                          {title: "Campeonato Regional", progress: 60},
                                      ].map((project, index) => (
                                          <div key={index} className="p-3 border rounded hover:bg-gray-50">
                                              <div className="flex justify-between items-center mb-2">
                                                  <h4 className="font-medium">{project.title}</h4>
                                                  <span className="text-sm font-medium">{project.progress}%</span>
                                              </div>
                                              <div className="w-full bg-gray-200 rounded-full h-2.5">
                                                  <div
                                                      className="bg-[#1d4ed8] h-2.5 rounded-full"
                                                      style={{width: `${project.progress}%`}}
                                                  ></div>
                                              </div>
                                          </div>
                                      ))}
                                  </div>
                              </div>
                          </TabsContent>
                      </Tabs>
                  </div>
              </section>

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
                          {[
                              {
                                  title: "Campeonato Estadual de Surf 2025",
                                  date: "10 de Maio, 2025",
                                  excerpt: "A Associação de Surf organizará o Campeonato Esta  2025",
                                  excerpt:
                                      "A Associação de Surf organizará o Campeonato Estadual com mais de 100 atletas participantes.",
                                  image: "/placeholder.svg?height=200&width=300&text=Campeonato",
                              },
                              {
                                  title: "Projeto de Preservação das Praias",
                                  date: "25 de Abril, 2025",
                                  excerpt: "Iniciativa de limpeza e conscientização ambiental nas praias da região foi um sucesso.",
                                  image: "/placeholder.svg?height=200&width=300&text=Preservação",
                              },
                              {
                                  title: "Novos Equipamentos para Escola de Surf",
                                  date: "15 de Abril, 2025",
                                  excerpt: "A escola de surf recebeu doação de novos equipamentos para atender mais alunos.",
                                  image: "/placeholder.svg?height=200&width=300&text=Equipamentos",
                              },
                              {
                                  title: "Atletas da Associação Classificados para Torneio Internacional",
                                  date: "02 de Abril, 2025",
                                  excerpt: "Três atletas da nossa associação garantiram vaga no prestigiado torneio internacional.",
                                  image: "/placeholder.svg?height=200&width=300&text=Atletas",
                              },
                              {
                                  title: "Workshop de Segurança no Mar",
                                  date: "20 de Março, 2025",
                                  excerpt: "Workshop gratuito sobre segurança no mar será realizado na sede da associação.",
                                  image: "/placeholder.svg?height=200&width=300&text=Workshop",
                              },
                              {
                                  title: "Nova Parceria com Marca de Equipamentos",
                                  date: "05 de Março, 2025",
                                  excerpt: "Associação firma parceria com marca renomada de equipamentos de surf.",
                                  image: "/placeholder.svg?height=200&width=300&text=Parceria",
                              },
                          ].map((news, index) => (
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

              <section id="contato" className="w-full py-12 md:py-24 bg-[#1d4ed8] text-white">
                  <div className="container px-4 md:px-6">
                      <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
                          <div className="space-y-4">
                              <h2 className="text-3xl font-bold tracking-tighter sm:text-4xl">Entre em Contato</h2>
                              <p className="max-w-[600px] md:text-xl">
                                  Estamos sempre disponíveis para responder suas dúvidas, receber sugestões ou conversar
                                  sobre
                                  parcerias.
                              </p>
                              <div className="space-y-2">
                                  <div className="flex items-center gap-2">
                                      <div
                                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="lucide lucide-map-pin"
                                          >
                                              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                              <circle cx="12" cy="10" r="3"/>
                                          </svg>
                                      </div>
                                      <div>
                                          <p className="font-medium">Endereço</p>
                                          <p className="text-white/80">Av. Beira Mar, 1000 - Praia Grande</p>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <div
                                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="lucide lucide-phone"
                                          >
                                              <path
                                                  d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                          </svg>
                                      </div>
                                      <div>
                                          <p className="font-medium">Telefone</p>
                                          <p className="text-white/80">(00) 1234-5678</p>
                                      </div>
                                  </div>
                                  <div className="flex items-center gap-2">
                                      <div
                                          className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                                          <svg
                                              xmlns="http://www.w3.org/2000/svg"
                                              width="20"
                                              height="20"
                                              viewBox="0 0 24 24"
                                              fill="none"
                                              stroke="currentColor"
                                              strokeWidth="2"
                                              strokeLinecap="round"
                                              strokeLinejoin="round"
                                              className="lucide lucide-mail"
                                          >
                                              <rect width="20" height="16" x="2" y="4" rx="2"/>
                                              <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                          </svg>
                                      </div>
                                      <div>
                                          <p className="font-medium">Email</p>
                                          <p className="text-white/80">contato@associacaosurf.com.br</p>
                                      </div>
                                  </div>
                              </div>
                              <div className="flex gap-4 mt-6">
                                  <a
                                      href="#"
                                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                  >
                                      <Instagram className="h-5 w-5"/>
                                  </a>
                                  <a
                                      href="#"
                                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                  >
                                      <Facebook className="h-5 w-5"/>
                                  </a>
                                  <a
                                      href="#"
                                      className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center hover:bg-white/30 transition-colors"
                                  >
                                      <Twitter className="h-5 w-5"/>
                                  </a>
                              </div>
                          </div>
                          <div className="space-y-4">
                              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                  <div className="space-y-2">
                                      <label htmlFor="name" className="text-sm font-medium">
                                          Nome
                                      </label>
                                      <input
                                          id="name"
                                          className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                          placeholder="Seu nome"
                                      />
                                  </div>
                                  <div className="space-y-2">
                                      <label htmlFor="email" className="text-sm font-medium">
                                          Email
                                      </label>
                                      <input
                                          id="email"
                                          type="email"
                                          className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                          placeholder="seu@email.com"
                                      />
                                  </div>
                              </div>
                              <div className="space-y-2">
                                  <label htmlFor="subject" className="text-sm font-medium">
                                      Assunto
                                  </label>
                                  <input
                                      id="subject"
                                      className="flex h-10 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                      placeholder="Assunto da mensagem"
                                  />
                              </div>
                              <div className="space-y-2">
                                  <label htmlFor="message" className="text-sm font-medium">
                                      Mensagem
                                  </label>
                                  <textarea
                                      id="message"
                                      className="flex min-h-[120px] w-full rounded-md border border-white/20 bg-white/10 px-3 py-2 text-sm placeholder:text-white/50 focus:outline-none focus:ring-2 focus:ring-white/30"
                                      placeholder="Sua mensagem..."
                                  ></textarea>
                              </div>
                              <Button className="w-full bg-white text-[#1d4ed8] hover:bg-white/90">Enviar
                                  Mensagem</Button>
                          </div>
                      </div>
                  </div>
              </section>
      </main>

          {/* Novo Footer com textura de ondas */}
          <footer className="w-full bg-[#1d4ed8] text-white relative">
              <WaveDivider className="text-white transform rotate-180"/>

              <div className="container px-4 md:px-6 py-12">
                  <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                      <div className="space-y-4">
                          <div className="flex items-center gap-3">
                              <Image
                                  src="/images/logo-asapa.png"
                                  alt="ASAPA Logo"
                                  width={80}
                                  height={80}
                                  className="bg-white rounded-full p-1"
                              />
                              <div>
                                  <h3 className="text-xl font-bold">ASAPA</h3>
                                  <p className="text-sm text-blue-100">Associação dos Surfistas e Amigos da Praia das
                                      Areias</p>
                              </div>
                          </div>
                          <p className="text-blue-100">
                              Promovendo o surf, preservando o meio ambiente e desenvolvendo nossa comunidade desde
                              2005.
                          </p>
                          <div className="flex gap-4">
                              <a
                                  href="#"
                                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                              >
                                  <Instagram className="h-5 w-5"/>
                              </a>
                              <a
                                  href="#"
                                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                              >
                                  <Facebook className="h-5 w-5"/>
                              </a>
                              <a
                                  href="#"
                                  className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
                              >
                                  <Twitter className="h-5 w-5"/>
                              </a>
                          </div>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg mb-4 border-b border-blue-600 pb-2">Navegação</h4>
                          <ul className="space-y-2">
                              <li>
                                  <Link href="#" className="text-blue-100 hover:text-white transition-colors">
                                      Início
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#quem-somos" className="text-blue-100 hover:text-white transition-colors">
                                      Quem Somos
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#diretoria" className="text-blue-100 hover:text-white transition-colors">
                                      Diretoria
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#eventos" className="text-blue-100 hover:text-white transition-colors">
                                      Eventos
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#associe-se" className="text-blue-100 hover:text-white transition-colors">
                                      Associe-se
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#doacao" className="text-blue-100 hover:text-white transition-colors">
                                      Doação
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#transparencia"
                                        className="text-blue-100 hover:text-white transition-colors">
                                      Transparência
                                  </Link>
                              </li>
                              <li>
                                  <Link href="#noticias" className="text-blue-100 hover:text-white transition-colors">
                                      Notícias
                                  </Link>
                              </li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg mb-4 border-b border-blue-600 pb-2">Contato</h4>
                          <ul className="space-y-3">
                              <li className="flex items-start gap-3">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="mt-1 shrink-0"
                                  >
                                      <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"/>
                                      <circle cx="12" cy="10" r="3"/>
                                  </svg>
                                  <span className="text-blue-100">Av. Beira Mar, 1000 - Praia das Areias</span>
                              </li>
                              <li className="flex items-start gap-3">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="mt-1 shrink-0"
                                  >
                                      <path
                                          d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/>
                                  </svg>
                                  <span className="text-blue-100">(00) 1234-5678</span>
                              </li>
                              <li className="flex items-start gap-3">
                                  <svg
                                      xmlns="http://www.w3.org/2000/svg"
                                      width="20"
                                      height="20"
                                      viewBox="0 0 24 24"
                                      fill="none"
                                      stroke="currentColor"
                                      strokeWidth="2"
                                      strokeLinecap="round"
                                      strokeLinejoin="round"
                                      className="mt-1 shrink-0"
                                  >
                                      <rect width="20" height="16" x="2" y="4" rx="2"/>
                                      <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/>
                                  </svg>
                                  <span className="text-blue-100">contato@asapa.org.br</span>
                              </li>
                          </ul>
                      </div>

                      <div>
                          <h4 className="font-bold text-lg mb-4 border-b border-blue-600 pb-2">Horário de
                              Funcionamento</h4>
                          <ul className="space-y-2">
                              <li className="text-blue-100">Segunda a Sexta: 9h às 18h</li>
                              <li className="text-blue-100">Sábado: 9h às 14h</li>
                              <li className="text-blue-100">Domingo: Fechado</li>
                          </ul>
                          <div className="mt-6">
                              <Button className="bg-white text-[#1d4ed8] hover:bg-blue-50 w-full">Associe-se
                                  Agora</Button>
                          </div>
                      </div>
                  </div>

                  <div
                      className="mt-12 pt-6 border-t border-blue-600 flex flex-col md:flex-row justify-between items-center gap-4">
                      <p className="text-center text-sm text-blue-100 md:text-left">
                          &copy; {new Date().getFullYear()} ASAPA - Associação dos Surfistas e Amigos da Praia das
                          Areias. Todos os
                          direitos reservados.
                      </p>
                      <div className="flex gap-4">
                          <Link href="#" className="text-sm text-blue-100 hover:text-white">
                              Política de Privacidade
                          </Link>
                          <Link href="#" className="text-sm text-blue-100 hover:text-white">
                              Termos de Uso
                          </Link>
                      </div>
                  </div>
              </div>

              <div
                  className="absolute bottom-0 left-0 w-full h-2 bg-gradient-to-r from-blue-400 via-blue-300 to-blue-400"></div>
      </footer>
    </div>
  )
}
