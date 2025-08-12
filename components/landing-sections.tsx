import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Star, Play, BookOpen, Video, Gift, Users, Clock, Shield, CheckCircle, AlertCircle } from "lucide-react"
import Image from "next/image"

// Componente para seções com background
interface SectionProps {
  children: React.ReactNode
  backgroundImage?: string
  className?: string
  overlay?: boolean | string
}

export function Section({ children, backgroundImage, className = "", overlay = true }: SectionProps) {
  return (
    <section 
      className={`py-16 sm:py-20 lg:py-24 px-4 relative ${className}`}
      style={backgroundImage ? {
        backgroundImage: `url('${backgroundImage}')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
      } : {}}
    >
      {overlay && (
        <div className={`absolute inset-0 ${typeof overlay === 'string' ? overlay : 'bg-gradient-to-b from-stone-50/90 to-neutral-50/90'}`}></div>
      )}
      <div className="container mx-auto max-w-5xl relative z-10 px-4 sm:px-6">
        {children}
      </div>
    </section>
  )
}

// Componente para títulos principais
interface TitleProps {
  children: React.ReactNode
  className?: string
}

export function MainTitle({ children, className = "" }: TitleProps) {
  return (
    <h2 className={`text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-bold text-center mb-16 bg-gradient-to-r from-yellow-500 to-amber-500 bg-clip-text text-transparent drop-shadow-sm leading-tight ${className}`}>
      {children}
    </h2>
  )
}

// Componente para cards de benefícios
interface BenefitCardProps {
  icon: React.ReactNode
  title: string
  description: string
}

export function BenefitCard({ icon, title, description }: BenefitCardProps) {
  return (
    <Card className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 shadow-xl hover:shadow-2xl transition-all duration-300 backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex items-center space-x-6 mb-6">
          <div className="w-12 h-12 bg-gradient-to-r from-yellow-400 to-amber-500 rounded-full flex items-center justify-center">
            {icon}
          </div>
          <h3 className="text-2xl font-bold text-gray-800">{title}</h3>
        </div>
        <p className="text-gray-700 text-lg leading-relaxed">{description}</p>
      </CardContent>
    </Card>
  )
}

// Componente para CTA principal
interface CTAButtonProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function CTAButton({ href, children, className = "" }: CTAButtonProps) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer">
      <Button className={`bg-gradient-to-r from-yellow-400 to-amber-500 hover:from-yellow-500 hover:to-amber-600 text-gray-900 font-bold text-lg sm:text-xl px-8 sm:px-12 py-4 sm:py-6 rounded-full transform hover:scale-105 transition-all duration-300 shadow-2xl border-2 border-yellow-300 w-full sm:w-auto ${className}`}>
        {children}
      </Button>
    </a>
  )
}

// Componente para depoimentos
interface TestimonialProps {
  stars: number
  text: string
  author: string
  result: string
}

export function Testimonial({ stars, text, author, result }: TestimonialProps) {
  return (
    <Card className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 shadow-xl backdrop-blur-sm">
      <CardContent className="p-8">
        <div className="flex mb-6">
          {[...Array(stars)].map((_, i) => (
            <Star key={i} className="w-5 h-5 text-yellow-500 fill-current" />
          ))}
        </div>
        <p className="text-gray-700 mb-6 italic text-lg leading-relaxed">{text}</p>
        <p className="text-yellow-600 font-bold text-lg">— {author}</p>
        <p className="text-sm text-gray-500 mt-2">{result}</p>
      </CardContent>
    </Card>
  )
}

// Componente para FAQ
interface FAQItemProps {
  question: string
  answer: string
}

export function FAQItem({ question, answer }: FAQItemProps) {
  return (
    <Card className="bg-gradient-to-br from-white/90 to-stone-50/90 border-yellow-400/40 shadow-xl backdrop-blur-sm">
      <CardContent className="p-8">
        <h3 className="text-2xl font-bold text-yellow-600 mb-4 leading-tight">{question}</h3>
        <p className="text-gray-700 text-lg leading-relaxed">{answer}</p>
      </CardContent>
    </Card>
  )
}

// Componente para estatísticas
interface StatProps {
  value: string
  label: string
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-yellow-600 mb-2">{value}</div>
      <div className="text-sm md:text-base text-gray-600 font-medium">{label}</div>
    </div>
  )
}

// Componente para módulos
interface ModuleProps {
  src: string
  alt: string
  width?: number
  height?: number
  className?: string
}

export function Module({ src, alt, width = 380, height = 480, className = "" }: ModuleProps) {
  return (
    <div className={`relative group ${className}`}>
      <div className="absolute -inset-2 bg-gradient-to-r from-yellow-400/30 to-amber-500/30 blur-xl group-hover:blur-2xl transition-all duration-500 opacity-0 group-hover:opacity-100"></div>
      <Image
        src={src}
        alt={alt}
        width={width}
        height={height}
        className="relative z-10 rounded-xl transform group-hover:scale-105 transition-transform duration-500 shadow-xl w-full opacity-100"
      />
    </div>
  )
} 