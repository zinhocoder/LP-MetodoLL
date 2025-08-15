"use client"

import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, BookOpen, Video, Gift, Users, Clock, Shield, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"
import { 
  Section, 
  MainTitle, 
  BenefitCard, 
  CTAButton, 
  Testimonial, 
  FAQItem, 
  Stat, 
  Module 
} from "@/components/landing-sections"
import { TermsPopup } from "@/components/terms-popup"
import { useState } from "react"

export default function MetodoLLLanding() {
  const [privacyOpen, setPrivacyOpen] = useState(false)
  const [termsOpen, setTermsOpen] = useState(false)
  const [refundOpen, setRefundOpen] = useState(false)
  const [contactOpen, setContactOpen] = useState(false)

  return (
    <div className="min-h-screen text-gray-900 overflow-x-hidden">


      {/* Hero Section */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/bghero.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-black/40 z-0"></div>

        <div className="relative z-10">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-2xl lg:max-w-3xl mx-auto text-center">
              <Image
                src="/images/metodovivilogo.png"
                alt="Método VIV"
                width={280}
                height={84}
                className="mx-auto mb-8 drop-shadow-lg"
                priority
              />

              <div className="space-y-6 mb-8">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
                  <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                    Destrave sua comunicação em vídeos
                  </span>
                  <br />
                  <span className="text-white drop-shadow-sm">e comece a </span>
                  <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                    vender todos os dias
                  </span>
                  <br />
                  <span className="text-white drop-shadow-sm">com estratégia — </span>
                  <span className="bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm">
                    mesmo que você nunca tenha gravado antes.
                  </span>
                </h1>

                <p className="text-lg sm:text-xl md:text-2xl text-white leading-relaxed drop-shadow-sm">
                  Com estratégia comprovada —{" "}
                  <span className="text-yellow-400 font-bold">mesmo que você nunca tenha gravado antes</span> e queira{" "}
                  <span className="text-yellow-400 font-bold">ganhar mais dinheiro</span> com o que você faz hoje
                </p>
              </div>

              <div className="space-y-4 mb-8">
                <CTAButton href="https://pay.hotmart.com/L100974143J">
                  QUERO DESTRAVAR E VENDER MAIS
                </CTAButton>

              </div>
            </div>
          </div>
        </div>


      </section>

      {/* Seção VSL */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 bg-gradient-to-r from-yellow-50/80 to-amber-50/80">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold mb-8 bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
            Assista ao vídeo e descubra como transformar sua comunicação
          </h2>
          <p className="text-lg md:text-xl text-gray-700 mb-12 leading-relaxed">
            Neste vídeo exclusivo, a Larissa revela a estratégia que já transformou mais de 500 pessoas
          </p>
          
          {/* Video Container */}
          <div className="relative w-full max-w-4xl mx-auto">
            <div className="relative aspect-video bg-gray-900 rounded-2xl overflow-hidden shadow-2xl">
              <iframe
                src="https://www.youtube.com/embed/xGd2JFC6-1E"
                title="Método VIV - Transforme sua Comunicação"
                className="absolute inset-0 w-full h-full"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>
          </div>

          {/* CTA após o vídeo */}
          <div className="mt-12 px-4">
            <a href="https://pay.hotmart.com/L100974143J" target="_blank" rel="noopener noreferrer">
              <Button className="bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold text-base sm:text-lg lg:text-xl px-6 sm:px-8 lg:px-12 py-3 sm:py-4 lg:py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-yellow-300 w-full sm:w-auto">
                QUERO APLICAR A ESTRATÉGIA AGORA
              </Button>
            </a>
          </div>
        </div>
      </section>

      {/* Seção de Prova Social */}
      <section className="py-12 px-4 bg-gradient-to-r from-yellow-50/80 to-amber-50/80 border-y border-yellow-200/50">
        <div className="container mx-auto max-w-6xl text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="500+" label="Alunas Transformadas" />
            <Stat value="R$ 2M+" label="Gerados pelas Alunas" />
            <Stat value="98%" label="Taxa de Satisfação" />
            <Stat value="7 dias" label="Garantia Total" />
          </div>
        </div>
      </section>

      {/* Seção 1 – Pergunta e dor */}
      <Section backgroundImage="/images/bg-1.png">
        <div className="text-center mb-20">
          <MainTitle>
            Você sente que seus conteúdos não trazem <span className="block">resultados reais?</span>
          </MainTitle>
        </div>

        <div className="grid md:grid-cols-3 gap-8 mb-16">
          <Card className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">🤔</span>
              </div>
              <p className="text-lg text-gray-700 font-medium">
                Ou não sabe nem por onde começar a <span className="font-bold text-gray-800">criar conteúdo?</span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">😰</span>
              </div>
              <p className="text-lg text-gray-700 font-medium">
                <span className="text-yellow-600 font-bold text-xl">
                  "Isso é um bicho de <span className="block">sete cabeças"</span>
                </span>
              </p>
            </CardContent>
          </Card>

          <Card className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 backdrop-blur-sm shadow-xl hover:shadow-2xl transition-all duration-300">
            <CardContent className="p-8 text-center">
              <div className="w-20 h-20 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center mx-auto mb-6 shadow-lg">
                <span className="text-3xl">😔</span>
              </div>
              <p className="text-lg text-gray-700 font-medium">
                <span className="text-yellow-600 font-bold text-xl">
                  "Deve ser muito difícil <span className="block">para mim"</span>
                </span>
              </p>
            </CardContent>
          </Card>
        </div>

        <div className="text-center">
          <div className="bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-2xl p-10 border-2 border-yellow-400/50 bg-white/70 backdrop-blur-sm shadow-xl max-w-4xl mx-auto">
            <p className="text-2xl md:text-3xl font-bold text-gray-800 leading-relaxed">
              Você <span className="text-yellow-600">não está sozinho(a)</span>, e eu vou te mostrar que criar
              conteúdos que vendem pode ser{" "}
              <span className="text-yellow-600 block mt-2">simples, prático e até divertido!</span>
            </p>
          </div>
        </div>
      </Section>

      {/* Seção 2 - Desejo */}
      <Section backgroundImage="/images/bg-2.png" overlay="bg-gradient-to-r from-stone-100/80 to-neutral-100/80">
        <MainTitle>
          Imagine criar conteúdos que <span className="block">não só conectam...</span>
        </MainTitle>
        
        <div className="text-center space-y-8 max-w-4xl mx-auto">
          <p className="text-xl md:text-2xl text-gray-700 font-medium leading-relaxed">
            Imagine criar conteúdos que não só conectam, mas que fazem seu cliente{" "}
            <span className="font-bold text-gray-800">confiar em você</span> e{" "}
            <span className="font-bold text-yellow-600">comprar seu produto.</span>
          </p>
          <p className="text-xl md:text-2xl font-bold text-gray-800 leading-relaxed">
            Imagine <span className="text-yellow-600">aumentar suas vendas</span>, ganhar dinheiro de verdade com o
            que você faz, e conquistar a <span className="text-yellow-600">liberdade para trabalhar</span> quando e
            onde quiser, investindo no que realmente importa para você e <span className="block">sua família.</span>
          </p>
        </div>

        <div className="text-center mt-12">
          <CTAButton href="https://pay.hotmart.com/L100974143J">
            QUERO APRENDER COM A LARISSA
          </CTAButton>
        </div>
      </Section>

      {/* Seção 3 - Objeção */}
      <Section backgroundImage="/images/bg-3.png" overlay="bg-gradient-to-b from-neutral-50/90 to-stone-50/90">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-16 text-yellow-600 drop-shadow-sm leading-tight">
          "Mas eu não sei nem por onde <span className="block">começar."</span>
        </h2>
        <div className="grid md:grid-cols-2 gap-10">
          <Card className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 shadow-xl backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg">
                <p className="font-bold text-yellow-600 text-xl">
                  "Não tenho tempo para ficar <span className="block">criando conteúdo."</span>
                </p>
                <p className="font-bold text-yellow-600 text-xl">
                  "Não sou bom(a) falando <span className="block">para a câmera."</span>
                </p>
              </div>
            </CardContent>
          </Card>
          <Card className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 shadow-xl backdrop-blur-sm">
            <CardContent className="p-8">
              <div className="space-y-6 text-lg">
                <p className="font-bold text-yellow-600 text-xl">
                  "Não tenho equipamentos ou <span className="block">edição profissional."</span>
                </p>
                <p className="text-gray-800 font-bold text-xl leading-relaxed">
                  Se você pensa assim, saiba que você <span className="text-yellow-600">não está sozinho(a)</span> — e
                  eu vou te mostrar um caminho <span className="block">simples e descomplicado.</span>
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </Section>

      {/* Seção 4 - Promessa */}
      <Section backgroundImage="/images/bg-4.png" overlay="bg-gradient-to-r from-stone-200/80 to-neutral-200/80" className="text-center">
        <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 text-xl font-bold px-8 py-3 mb-12 shadow-lg border border-yellow-300">
          PROMESSA
        </Badge>
        <MainTitle>
          Eu vou te ensinar a usar a estratégia <span className="block">que mais converte</span>
        </MainTitle>
        <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-medium max-w-4xl mx-auto">
          Para criar roteiros, gravar e editar conteúdos que{" "}
          <span className="font-bold text-gray-800">realmente vendem</span>, para que você{" "}
          <span className="font-bold text-yellow-600">ganhe mais dinheiro</span> e conquiste a liberdade{" "}
          <span className="block">que deseja.</span>
        </p>
      </Section>

      {/* Seção 5 - Autoridade */}
      <section 
        className="py-16 sm:py-20 lg:py-24 px-4 relative"
        style={{
          backgroundImage: "url('/images/especialista.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-white/70 via-white/60 to-white/70"></div>

        <div className="container mx-auto max-w-7xl relative z-10 px-4 sm:px-6">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            <div className="relative flex justify-center lg:justify-start order-2 lg:order-1">
              <div className="relative">
                {/* Imagem da Larissa pode ser adicionada aqui */}
              </div>
            </div>

            <div className="space-y-6 lg:space-y-8 lg:pl-8 order-1 lg:order-2">
              <div className="space-y-6">
                <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-gray-800 leading-tight">
                  Eu sou <span className="text-yellow-600">Larissa Lima</span>
                </h2>
                <div className="w-20 h-1 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full"></div>
              </div>

              <div className="space-y-6 text-lg text-gray-700 leading-relaxed">
                <p>
                  <span className="font-bold text-gray-800 text-xl">Mentora de comunicação</span> e ajudo empreendedores
                  a gravar seus conteúdos com ferramentas, conhecimento, estratégia e intenção certa — tudo de forma{" "}
                  <span className="font-bold text-yellow-600">simples e descomplicada.</span>
                </p>

                <p>
                  Comecei um grupo de network com <span className="font-bold text-yellow-600">20 mulheres</span>, e
                  depois de um ano, somos <span className="font-bold text-yellow-600">mais de 350 mulheres</span> unidas
                  e crescendo juntas.
                </p>

                <p>
                  Foi por isso que criei o <span className="text-yellow-600 font-bold text-2xl">Método VIV</span>, uma
                  metodologia <span className="font-bold text-gray-800">prática e fácil</span> para você aplicar hoje
                  mesmo e já começar a ver <span className="font-bold text-yellow-600">resultados reais.</span>
                </p>
              </div>

              <div className="bg-gradient-to-r from-yellow-50/80 to-amber-50/80 border-l-4 border-yellow-400 p-6 rounded-r-xl backdrop-blur-sm">
                <p className="text-xl font-bold text-gray-800 leading-relaxed italic">
                  "Comunicação <span className="text-yellow-600">transforma vidas</span> — e a sua pode ser a próxima."
                </p>
              </div>

              <div className="grid grid-cols-2 gap-6 pt-4">
                <Stat value="500+" label="Alunas Transformadas" />
                <Stat value="R$ 2M+" label="Gerados pelas Alunas" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 6 - O que você vai aprender */}
      <Section backgroundImage="/images/img-instagram.jpg" overlay="bg-gradient-to-r from-white/70 via-white/60 to-white/70">
        <MainTitle>
          O que você vai aprender <span className="block">no método</span>
        </MainTitle>
        <div className="space-y-8">
          {[
            "Como identificar as dores, desejos e objeções do seu cliente ideal para criar conteúdos que realmente conectam, com a estratégia certa.",
            "A estratégia que mais converte, aumenta seu engajamento e faz seu cliente comprar, independentemente do preço do seu produto.",
            "Como criar conteúdos infinitos e relevantes usando só o seu Instagram e o aplicativo CapCut.",
            "O prompt ideal para criar roteiros que prendem a atenção e geram vendas.",
            "Quais ferramentas e apps usar para facilitar sua gravação e edição, sem complicação.",
          ].map((item, index) => (
            <Card
              key={index}
              className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 font-bold text-xl px-4 py-2 rounded-full shadow-lg min-w-[3rem] h-12 flex items-center justify-center">
                    {index + 1}
                  </Badge>
                  <p className="text-gray-700 text-xl leading-relaxed font-medium">{item}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </Section>

      {/* Seção Módulos */}
      <Section backgroundImage="/images/bg-1.png" overlay="bg-gradient-to-b from-stone-50/90 via-neutral-50/90 to-stone-100/90">
        <div className="text-center mb-20">
          <MainTitle>
            Conheça todos <span className="block">os módulos</span>
          </MainTitle>
          <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto font-medium leading-relaxed">
            Um método <span className="font-bold text-gray-800">completo e estruturado</span> para você dominar a
            criação de conteúdos <span className="block font-bold text-yellow-600">que vendem</span>
          </p>
        </div>

        {/* Módulo Inicial */}
        <div className="mb-20">
          <div className="flex justify-center">
            <Module 
              src="/images/modulo-comece-aqui.jpeg"
              alt="Comece Aqui"
              width={450}
              height={550}
              className="relative group"
            />
          </div>
        </div>

        {/* Grid de Módulos */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 mb-20">
          {[
            { src: "/images/modulo-1.jpeg", alt: "Módulo 1 - Destravando a Câmera" },
            { src: "/images/modulo-2.jpeg", alt: "Módulo 2 - Posicionamento com Clareza" },
            { src: "/images/modulo-3.jpeg", alt: "Módulo 3 - Vídeos com Intenção" },
            { src: "/images/modulo-4.jpeg", alt: "Módulo 4 - Estratégia com IA" },
            { src: "/images/modulo-5.jpeg", alt: "Módulo 5 - Estrutura do Vídeo" },
            { src: "/images/modulo-6.jpeg", alt: "Módulo 6 - Produção e Edição" },
          ].map((modulo, index) => (
            <Module key={index} src={modulo.src} alt={modulo.alt} />
          ))}
        </div>

        {/* Módulo 7 - Destaque */}
        <div className="mb-20">
          <div className="flex justify-center">
            <Module 
              src="/images/modulo-7.jpeg"
              alt="Módulo 7 - Rotina de Conteúdo"
              width={450}
              height={550}
              className="relative group"
            />
          </div>
        </div>

        {/* Bônus */}
        <div className="text-center mb-16">
          <h3 className="text-4xl md:text-5xl font-bold mb-12 text-yellow-600 drop-shadow-sm">+ Bônus Exclusivos</h3>
        </div>

        <div className="grid md:grid-cols-2 gap-10 max-w-5xl mx-auto">
          <Module 
            src="/images/bonus-exclusivos.jpeg"
            alt="Bônus Exclusivos"
            width={400}
            height={500}
            className="relative group"
          />
          <Module 
            src="/images/mentalidade-forte.jpeg"
            alt="Mentalidade Forte"
            width={400}
            height={500}
            className="relative group"
          />
        </div>

        {/* CTA da seção */}
        <div className="text-center mt-20">
          <div className="bg-gradient-to-r from-yellow-400/30 to-amber-500/30 rounded-2xl p-10 border-2 border-yellow-400/50 max-w-3xl mx-auto bg-white/70 backdrop-blur-sm shadow-xl">
            <p className="text-2xl font-bold text-gray-800 mb-8 leading-relaxed">
              Mais de <span className="text-yellow-600 text-3xl">10 módulos completos</span> para você dominar a
              criação de conteúdos <span className="block text-yellow-600">que vendem</span>
            </p>
            <CTAButton href="https://pay.hotmart.com/L100974143J" className="text-lg sm:text-xl lg:text-2xl px-6 sm:px-12 lg:px-20 py-4 sm:py-6 lg:py-8 mb-4">
              <span className="block sm:hidden">COMEÇAR AGORA</span>
              <span className="hidden sm:block lg:hidden">COMEÇAR AGORA POR R$ 197</span>
              <span className="hidden lg:block">COMEÇAR AGORA POR R$ 197</span>
            </CTAButton>
          </div>
        </div>
      </Section>

      {/* Resto das seções permanecem iguais... */}
      {/* Seção 7 - O que está incluso */}
      <Section backgroundImage="/images/bg-2.png" overlay="bg-gradient-to-r from-stone-100/80 to-neutral-100/80">
        <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-16 text-yellow-600 drop-shadow-sm leading-tight">
          O que está incluso
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          {[
            {
              icon: <BookOpen className="w-10 h-10 text-yellow-600" />,
              title: "Ebook completo",
              description: "com todas as estratégias para criar conteúdo que vende",
            },
            {
              icon: <Video className="w-10 h-10 text-yellow-600" />,
              title: "Vídeo aula exclusiva",
              description: "para aplicar a estratégia e criar vídeos que convertem",
            },
            { 
              icon: <Gift className="w-10 h-10 text-yellow-600" />, 
              title: "Bônus especial", 
              description: "Guia para identificar conteúdos virais no seu nicho" 
            },
            { 
              icon: <Play className="w-10 h-10 text-yellow-600" />, 
              title: "Manual de prompts", 
              description: "para criar roteiros rápidos e eficazes" 
            },
            { 
              icon: <Star className="w-10 h-10 text-yellow-600" />, 
              title: "Lista de ferramentas", 
              description: "para gravar e editar seu conteúdo de forma simples" 
            },
          ].map((item, index) => (
            <BenefitCard
              key={index}
              icon={item.icon}
              title={item.title}
              description={item.description}
            />
          ))}
        </div>
      </Section>

      {/* Seção 8 - Resultado esperado */}
      <Section backgroundImage="/images/bg-3.png" overlay="bg-gradient-to-br from-slate-50/90 via-stone-50/90 to-neutral-100/90">
        <div className="text-center mb-20">
          <Badge className="bg-gradient-to-r from-yellow-400 to-amber-500 text-gray-900 text-lg font-bold px-6 py-2 mb-8 shadow-lg border border-yellow-300">
            RESULTADOS GARANTIDOS
          </Badge>
          <MainTitle>
            Ao aplicar esse método, <span className="block">você vai:</span>
          </MainTitle>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Transforme sua comunicação e conquiste os resultados que você sempre sonhou
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {[
            {
              icon: "💰",
              title: "Vender mais com conteúdos estratégicos",
              desc: "Conteúdos que realmente conectam seu público e geram vendas consistentes",
            },
            {
              icon: "🚀",
              title: "Ganhar mais dinheiro",
              desc: "Criar uma renda sustentável e escalável com seu conhecimento",
            },
            {
              icon: "🏖️",
              title: "Conquistar sua liberdade",
              desc: "Trabalhar onde e quando quiser, no seu próprio ritmo",
            },
            {
              icon: "👨‍👩‍👧‍👦",
              title: "Proporcionar vida melhor para sua família",
              desc: "Investir no que realmente importa e criar memórias especiais",
            },
            {
              icon: "👑",
              title: "Ser autoridade no seu segmento",
              desc: "Aumentar seu ticket médio e ser reconhecido como especialista",
            },
          ].map((result, index) => (
            <Card
              key={index}
              className="group bg-gradient-to-br from-white/90 via-stone-50/90 to-neutral-50/90 border border-yellow-200/50 shadow-lg hover:shadow-2xl transition-all duration-500 hover:border-yellow-300/70 backdrop-blur-sm"
            >
              <CardContent className="p-8">
                <div className="flex items-start space-x-6">
                  <div className="text-4xl mb-2 group-hover:scale-110 transition-transform duration-300">
                    {result.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-gray-800 mb-3 group-hover:text-yellow-600 transition-colors duration-300">
                      {result.title}
                    </h3>
                    <p className="text-gray-600 leading-relaxed">{result.desc}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <div className="bg-gradient-to-r from-yellow-50/90 to-amber-50/90 border-2 border-yellow-200 rounded-2xl p-8 max-w-2xl mx-auto shadow-xl backdrop-blur-sm">
            <p className="text-2xl font-bold text-gray-800 leading-relaxed">
              <span className="text-yellow-600">Mais de 500 pessoas</span> já transformaram suas vidas com o Método
              VIV
            </p>
          </div>
        </div>
      </Section>

      {/* Seção de Depoimentos */}
      <Section backgroundImage="/images/bg-4.png" overlay="bg-gradient-to-b from-neutral-100/90 to-stone-100/90">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 text-yellow-600 drop-shadow-sm leading-tight">
            Veja o que nossas alunas dizem
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Mais de <span className="font-bold text-yellow-600">500 alunas</span> já transformaram suas vidas e
            negócios
          </p>
        </div>

        <div className="max-w-4xl mx-auto mb-16">
          <div className="relative w-full" style={{ paddingBottom: '56.25%' }}>
            <iframe
              className="absolute top-0 left-0 w-full h-full rounded-2xl shadow-2xl"
              src="https://www.youtube.com/embed/HjIU_ZP6Qp4"
              title="Depoimento de Aluna - Método VIV"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            ></iframe>
          </div>
        </div>

        {/* Números de Prova Social */}
        <div className="bg-gradient-to-r from-yellow-50/90 to-amber-50/90 border-2 border-yellow-200 rounded-2xl p-8 text-center">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <Stat value="500+" label="Alunas Ativas" />
            <Stat value="98%" label="Satisfação" />
            <Stat value="R$ 2M+" label="Gerados pelas Alunas" />
            <Stat value="30 dias" label="Primeiros Resultados" />
          </div>
        </div>
      </Section>

      {/* Seção de Garantia e Escassez */}
      <section className="py-16 sm:py-20 lg:py-24 px-4 relative">
        <div className="absolute inset-0 bg-gradient-to-r from-green-50/80 to-emerald-50/80"></div>

        <div className="container mx-auto max-w-5xl relative z-10 px-4 sm:px-6">
          <div className="text-center mb-16">
            <Badge className="bg-gradient-to-r from-green-500 to-emerald-500 text-white text-xl font-bold px-8 py-3 mb-8 shadow-lg">
              🛡️ GARANTIA TOTAL
            </Badge>
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 text-green-700 drop-shadow-sm leading-tight">
              Risco Zero para Você
            </h2>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <Card className="bg-gradient-to-br from-white/90 to-green-50/90 border-green-300/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                      <Shield className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Garantia de 7 Dias</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Se por qualquer motivo você não ficar satisfeita com o método, devolvemos{" "}
                    <span className="font-bold text-green-600">100% do seu dinheiro</span> em até 7 dias, sem perguntas.
                  </p>
                </CardContent>
              </Card>

              <Card className="bg-gradient-to-br from-white/90 to-blue-50/90 border-blue-300/50 shadow-xl">
                <CardContent className="p-8">
                  <div className="flex items-center space-x-4 mb-6">
                    <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                      <Users className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-800">Suporte Exclusivo</h3>
                  </div>
                  <p className="text-gray-700 text-lg leading-relaxed">
                    Acesso direto ao nosso time de suporte por 7 dias para tirar todas as suas dúvidas e garantir{" "}
                    <span className="font-bold text-blue-600">seu sucesso</span>.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="text-center">
              <div className="bg-gradient-to-br from-red-50/90 to-pink-50/90 border-2 border-red-300 rounded-2xl p-8 shadow-xl">
                <div className="mb-6">
                  <AlertCircle className="w-16 h-16 text-red-500 mx-auto mb-4" />
                  <h3 className="text-2xl font-bold text-red-700 mb-4">⏰ OFERTA LIMITADA</h3>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="text-lg font-bold text-gray-800">
                    Apenas <span className="text-red-600 text-2xl">50 vagas</span> disponíveis com este preço especial
                  </p>
                  <p className="text-gray-600">
                    Após esgotar, o valor volta para <span className="font-bold">R$ 1297,00</span>
                  </p>
                </div>

                <div className="bg-white/80 rounded-xl p-6 border border-red-200">
                  <p className="text-sm text-gray-600 mb-2">Vagas restantes:</p>
                  <div className="flex justify-center items-center space-x-2 mb-4">
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-red-500 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                    <div className="w-4 h-4 bg-gray-300 rounded-full"></div>
                  </div>
                  <p className="text-2xl font-bold text-red-600">13 vagas restantes</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 9 - Oportunidade única */}
      <Section backgroundImage="/images/bg-1.png" overlay="bg-gradient-to-b from-stone-50/90 to-neutral-50/90" className="text-center">
        {/* Badge de Oferta */}
        <div className="mb-12">
          <Badge className="bg-gradient-to-r from-red-500 to-red-600 text-white text-xl font-bold px-8 py-4 shadow-xl border-2 border-red-400 animate-bounce">
            🔥 OFERTA ESPECIAL - TEMPO LIMITADO
          </Badge>
        </div>

        {/* Card Principal da Oferta */}
        <div className="bg-gradient-to-br from-white/95 to-stone-50/95 rounded-3xl p-12 shadow-2xl border-2 border-yellow-300/50 relative overflow-hidden max-w-3xl mx-auto backdrop-blur-sm">
          {/* Elementos decorativos sutis */}
          <div className="absolute top-4 right-4 w-20 h-20 bg-gradient-to-br from-yellow-400/10 to-amber-400/10 rounded-full blur-xl"></div>
          <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-tr from-yellow-400/10 to-amber-400/10 rounded-full blur-lg"></div>

          <div className="relative z-10">
            {/* Valor Original */}
            <div className="mb-10">
              <p className="text-xl text-gray-600 mb-4 font-medium">Valor individual de todos os módulos:</p>
              <div className="relative inline-block mb-4">
                <p className="text-5xl text-red-500 line-through font-bold">R$ 1.297,00</p>
              </div>
            </div>

            {/* Desconto Destacado */}
            <div className="bg-gradient-to-r from-green-50 to-emerald-50 border-2 border-green-300 rounded-2xl p-8 mb-12 shadow-lg">
              <div className="flex items-center justify-center space-x-4 mb-4">
                <span className="text-4xl">💰</span>
                <div>
                  <p className="text-3xl font-bold text-green-700">DESCONTO DE MAIS DE 80%</p>
                  <p className="text-xl text-green-600 font-semibold">Você economiza R$ 1.100,00</p>
                </div>
              </div>
            </div>

            {/* Preço Final com Destaque */}
            <div className="bg-gradient-to-r from-yellow-50 to-amber-50 border-3 border-yellow-400 rounded-2xl p-10 mb-8 shadow-xl">
              <p className="text-xl text-gray-700 mb-4 font-medium">Seu investimento hoje:</p>
              <div className="flex items-center justify-center space-x-1 sm:space-x-2 mb-4">
                <span className="text-2xl sm:text-3xl text-gray-700">R$</span>
                <h2 className="text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-lg">
                  197
                </h2>
                <div className="text-left">
                  <span className="text-xl sm:text-2xl text-gray-700 align-top">00</span>
                  <p className="text-sm sm:text-lg text-gray-600">à vista</p>
                </div>
              </div>

              {/* Destaque do Parcelamento */}
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 border-2 border-blue-300 rounded-xl p-6 mb-4">
                <p className="text-2xl font-bold text-blue-700 mb-2">OU PARCELE EM</p>
                <div className="flex items-center justify-center space-x-1 sm:space-x-2">
                  <span className="text-2xl sm:text-4xl font-bold text-blue-800">12x</span>
                  <span className="text-lg sm:text-2xl text-blue-600">de</span>
                  <span className="text-2xl sm:text-4xl font-bold text-blue-800">R$ 20,37</span>
                </div>
                <p className="text-lg text-blue-600 mt-2">no cartão de crédito</p>
              </div>
            </div>

            {/* Benefícios Inclusos em Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6 mb-12">
              <div className="bg-gradient-to-br from-blue-50 to-indigo-50 border-2 border-blue-200 rounded-xl p-6 text-left">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center">
                    <CheckCircle className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Acesso Completo</h4>
                </div>
                <p className="text-gray-600">Mais de 10 módulos + bônus exclusivos</p>
              </div>

              <div className="bg-gradient-to-br from-green-50 to-emerald-50 border-2 border-green-200 rounded-xl p-6 text-left">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center">
                    <Clock className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Acesso Imediato</h4>
                </div>
                <p className="text-gray-600">Comece agora mesmo, 24h por dia</p>
              </div>

              <div className="bg-gradient-to-br from-purple-50 to-violet-50 border-2 border-purple-200 rounded-xl p-6 text-left">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center">
                    <Shield className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Garantia Total</h4>
                </div>
                <p className="text-gray-600">7 dias para testar sem riscos</p>
              </div>

              <div className="bg-gradient-to-br from-orange-50 to-amber-50 border-2 border-orange-200 rounded-xl p-6 text-left">
                <div className="flex items-center space-x-4 mb-3">
                  <div className="w-12 h-12 bg-gradient-to-r from-orange-400 to-orange-500 rounded-full flex items-center justify-center">
                    <Users className="w-6 h-6 text-white" />
                  </div>
                  <h4 className="text-xl font-bold text-gray-800">Suporte Exclusivo</h4>
                </div>
                <p className="text-gray-600">Tire suas dúvidas por 7 dias</p>
              </div>
            </div>

            {/* CTA Principal */}
            <div className="text-center">
              <CTAButton href="https://pay.hotmart.com/L100974143J" className="text-lg sm:text-xl lg:text-2xl px-6 sm:px-12 lg:px-20 py-4 sm:py-6 lg:py-8 mb-4">
                <span className="block sm:hidden">COMEÇAR AGORA</span>
                <span className="hidden sm:block lg:hidden">COMEÇAR AGORA POR R$ 197</span>
                <span className="hidden lg:block">COMEÇAR AGORA POR R$ 197</span>
              </CTAButton>

              <div className="flex items-center justify-center space-x-6 text-gray-600">
                <div className="flex items-center space-x-2">
                  <Shield className="w-5 h-5" />
                  <span className="font-medium">Pagamento Seguro</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Clock className="w-5 h-5" />
                  <span className="font-medium">Acesso Imediato</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Urgência sutil */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-red-50/90 to-pink-50/90 border-2 border-red-200 rounded-xl p-6 max-w-2xl mx-auto backdrop-blur-sm">
            <p className="text-lg font-bold text-red-700">
              ⏰ Esta oferta especial pode sair do ar a qualquer momento
            </p>
            <p className="text-gray-600 mt-2">Mais de 500 pessoas já garantiram sua vaga este mês</p>
          </div>
        </div>
      </Section>

      {/* Seção FAQ */}
      <Section overlay="bg-gradient-to-b from-stone-50/90 to-neutral-50/90">
        <MainTitle>Perguntas Frequentes</MainTitle>
        <div className="space-y-8">
          {[
            {
              question: "Preciso ter experiência?",
              answer: "Não, o método é feito para quem está começando e quer resultados reais, com passos simples.",
            },
            {
              question: "Funciona para qualquer nicho?",
              answer: "Sim, você vai adaptar as estratégias para o seu público específico.",
            },
            {
              question: "Quanto tempo até ver resultados?",
              answer: "Com aplicação diária, os resultados aparecem nas primeiras semanas.",
            },
            { 
              question: "Posso pedir reembolso?", 
              answer: "Sim, tem garantia de 7 dias após a compra, sem complicação." 
            },
            {
              question: "Preciso de equipamentos caros?",
              answer: "Não! Você pode começar apenas com seu celular e apps gratuitos que ensinamos no método.",
            },
            {
              question: "Quanto tempo por dia preciso dedicar?",
              answer: "Apenas 30 minutos por dia são suficientes para aplicar as estratégias e ver resultados.",
            },
          ].map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </div>
      </Section>

      {/* Seção CTA Final */}
      <Section overlay="bg-gradient-to-br from-slate-100/90 via-stone-100/90 to-neutral-200/90" className="text-center">
        <div className="text-center mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold mb-8 text-gray-800 drop-shadow-sm leading-tight">
            Quer ganhar mais dinheiro, conquistar sua liberdade e proporcionar uma vida melhor{" "}
            <span className="block text-yellow-600">para sua família?</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            Esta é sua oportunidade de transformar sua comunicação e seus resultados
          </p>
        </div>

        {/* Card Elegante de Fechamento */}
        <div className="bg-gradient-to-br from-white/95 via-stone-50/95 to-neutral-100/95 rounded-3xl p-12 shadow-2xl border border-yellow-200/50 max-w-3xl mx-auto relative overflow-hidden backdrop-blur-sm">
          {/* Elemento decorativo */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-yellow-400/20 to-amber-400/20 rounded-full blur-2xl"></div>
          <div className="absolute bottom-0 left-0 w-24 h-24 bg-gradient-to-tr from-yellow-400/15 to-amber-400/15 rounded-full blur-xl"></div>

          <div className="relative z-10">
            {/* Comparação de Preços */}
            <div className="text-center mb-10">
              <div className="flex items-center justify-center space-x-4 mb-6">
                <div className="text-center">
                  <p className="text-sm text-gray-500 mb-1">Valor normal</p>
                  <p className="text-2xl text-red-500 line-through font-bold">R$ 1.297,00</p>
                </div>
                <div className="text-4xl text-yellow-500">→</div>
                <div className="text-center">
                  <p className="text-sm text-green-600 font-semibold mb-1">Seu investimento</p>
                  <p className="text-5xl font-bold bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent">
                    R$ 197,00
                  </p>
                </div>
              </div>

              <div className="bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-xl p-4 mb-8">
                <p className="text-lg font-bold text-green-700">
                  💰 Economia de R$ 1.100,00 (mais de 80% de desconto)
                </p>
              </div>
            </div>

            {/* Garantias */}
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-blue-400 to-blue-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Shield className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-gray-800">Garantia de 7 dias</p>
                <p className="text-sm text-gray-600">Risco zero para você</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-green-400 to-green-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Clock className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-gray-800">Acesso imediato</p>
                <p className="text-sm text-gray-600">Comece agora mesmo</p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-purple-400 to-purple-500 rounded-full flex items-center justify-center mx-auto mb-3">
                  <Users className="w-8 h-8 text-white" />
                </div>
                <p className="font-semibold text-gray-800">Suporte exclusivo</p>
                <p className="text-sm text-gray-600">Tire suas dúvidas</p>
              </div>
            </div>

            {/* CTA Final */}
            <div className="text-center">
              <CTAButton href="https://pay.hotmart.com/L100974143J" className="text-lg sm:text-xl lg:text-2xl px-6 sm:px-12 lg:px-20 py-4 sm:py-6 lg:py-8 mb-4">
                <span className="block sm:hidden">COMEÇAR AGORA</span>
                <span className="hidden sm:block lg:hidden">COMEÇAR AGORA POR R$ 197</span>
                <span className="hidden lg:block">COMEÇAR AGORA POR R$ 197</span>
              </CTAButton>

              <p className="text-sm text-gray-500">🔒 Compra segura • Acesso imediato • Garantia de 7 dias</p>
            </div>
          </div>
        </div>

        {/* Urgência sutil */}
        <div className="text-center mt-12">
          <p className="text-lg text-gray-600">
            ⏰ <span className="font-semibold">Oferta por tempo limitado</span> - Não perca esta oportunidade única
          </p>
        </div>
      </Section>

      {/* Footer */}
      <footer 
        className="py-16 px-4 border-t border-yellow-400/40 relative"
        style={{
          backgroundImage: "url('/images/bg-4.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-stone-50/95 to-neutral-50/95"></div>

        <div className="container mx-auto relative z-10">
          <div className="text-center mb-12">
            <Image
              src="/images/lllogo.png"
              alt="Método VIV"
              width={240}
              height={72}
              className="mx-auto mb-6 drop-shadow-lg"
            />
            <p className="text-gray-600 text-lg mb-8">Transformando vidas através da comunicação estratégica</p>
          </div>

          {/* Informações Legais */}
          <div className="grid md:grid-cols-4 gap-8 mb-12">
            <div className="text-center">
              <h4 className="font-bold text-gray-800 mb-4">Empresa</h4>
              <div className="space-y-2 text-gray-600">
                <p>Larissa Lima Comunicação LTDA</p>
                <p>CNPJ: 17.040.680/0001-70</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-bold text-gray-800 mb-4">Suporte</h4>
              <div className="space-y-2 text-gray-600">
                <p>Segunda a Sexta: 9h às 18h</p>
                <p>WhatsApp: +55 19 99769-4110</p>
                <p>Tempo de resposta: até 24h</p>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-bold text-gray-800 mb-4">Redes Sociais</h4>
              <div className="space-y-2 text-gray-600">
                <a 
                  href="https://www.instagram.com/larissalima.comunicacao" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-600 hover:text-yellow-700 transition-colors font-medium"
                >
                  @larissalima.comunicacao
                </a>
              </div>
            </div>

            <div className="text-center">
              <h4 className="font-bold text-gray-800 mb-4">Garantias</h4>
              <div className="space-y-2 text-gray-600">
                <p>7 dias de garantia total</p>
                <p>Acesso imediato ao conteúdo</p>
                <p>Suporte técnico incluso</p>
              </div>
            </div>
          </div>

          {/* Links Legais */}
          <div className="border-t border-gray-200 pt-8">
            <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
              <div className="flex flex-wrap justify-center md:justify-start space-x-6 text-sm text-gray-600">
                <button 
                  onClick={() => setPrivacyOpen(true)} 
                  className="hover:text-yellow-600 transition-colors cursor-pointer"
                >
                  Política de Privacidade
                </button>
                <button 
                  onClick={() => setTermsOpen(true)} 
                  className="hover:text-yellow-600 transition-colors cursor-pointer"
                >
                  Termos de Uso
                </button>
                <button 
                  onClick={() => setRefundOpen(true)} 
                  className="hover:text-yellow-600 transition-colors cursor-pointer"
                >
                  Política de Reembolso
                </button>
                <button 
                  onClick={() => setContactOpen(true)} 
                  className="hover:text-yellow-600 transition-colors cursor-pointer"
                >
                  Contato
                </button>
              </div>

              <div className="text-sm text-gray-500">
                © 2024 Método VIV. Todos os direitos reservados. | 
                <span className="text-gray-400"> Desenvolvido por </span>
                <a 
                  href="https://www.devpro.fun" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="text-yellow-600 font-semibold hover:text-yellow-700 transition-colors"
                >
                  DevPro
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>

      {/* Popups de Termos */}
      <TermsPopup 
        isOpen={privacyOpen} 
        onClose={() => setPrivacyOpen(false)} 
        type="privacy" 
      />
      <TermsPopup 
        isOpen={termsOpen} 
        onClose={() => setTermsOpen(false)} 
        type="terms" 
      />
      <TermsPopup 
        isOpen={refundOpen} 
        onClose={() => setRefundOpen(false)} 
        type="refund" 
      />
      <TermsPopup 
        isOpen={contactOpen} 
        onClose={() => setContactOpen(false)} 
        type="contact" 
      />
    </div>
  )
}
