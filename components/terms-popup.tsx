"use client"

import { useState } from "react"
import { X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface TermsPopupProps {
  isOpen: boolean
  onClose: () => void
  type: "privacy" | "terms" | "refund" | "contact"
}

export function TermsPopup({ isOpen, onClose, type }: TermsPopupProps) {
  if (!isOpen) return null

  const refundContent = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Política de Reembolso</h2>
      
      <div className="space-y-4 text-gray-700">
        <p><strong>Última atualização:</strong> Janeiro de 2025</p>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Informações da Empresa</h3>
          <p><strong>CNPJ:</strong> 17.040.680/0001-70</p>
          <p><strong>Contato:</strong> +55 19 99769-4110</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Garantia Total de 7 Dias</h3>
          <p>Oferecemos uma <strong>garantia total de 7 dias</strong> para todos os nossos cursos. Se por qualquer motivo você não ficar satisfeita com o "Método VIV", devolvemos 100% do valor pago, sem perguntas.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Como Solicitar o Reembolso</h3>
          <p>Para solicitar o reembolso, entre em contato conosco:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Telefone:</strong> +55 19 99769-4110</li>
            <li><strong>E-mail:</strong> contato@metodoviv.com.br</li>
            <li><strong>Prazo:</strong> Até 7 dias após a compra</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Processo de Reembolso</h3>
          <p>Após recebermos sua solicitação:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Analisamos sua solicitação em até 24 horas</li>
            <li>Processamos o reembolso em até 5 dias úteis</li>
            <li>O valor será devolvido na mesma forma de pagamento</li>
            <li>Você receberá uma confirmação por e-mail</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Condições do Reembolso</h3>
          <p>O reembolso está disponível para:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Compras realizadas nos últimos 7 dias</li>
            <li>Qualquer motivo de insatisfação</li>
            <li>Problemas técnicos ou de acesso</li>
            <li>Expectativas não atendidas</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Exceções</h3>
          <p>O reembolso pode ser negado em casos de:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Uso inadequado da plataforma</li>
            <li>Compartilhamento não autorizado do conteúdo</li>
            <li>Violação dos termos de uso</li>
            <li>Solicitação após o prazo de 7 dias</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Contato</h3>
          <p>Para dúvidas sobre reembolso, entre em contato:</p>
          <p><strong>Telefone:</strong> +55 19 99769-4110</p>
          <p><strong>CNPJ:</strong> 17.040.680/0001-70</p>
        </div>
      </div>
    </div>
  )

  const contactContent = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Contato</h2>
      
      <div className="space-y-4 text-gray-700">
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Informações da Empresa</h3>
          <p><strong>Razão Social:</strong> Larissa Lima Comunicação LTDA</p>
          <p><strong>CNPJ:</strong> 17.040.680/0001-70</p>
          <p><strong>E-mail:</strong> contato@metodoviv.com.br</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Telefone</h3>
          <p><strong>Contato Principal:</strong> +55 19 99769-4110</p>
          <p><strong>Horário de Atendimento:</strong> Segunda a Sexta, das 9h às 18h</p>
          <p><strong>Tempo de Resposta:</strong> Até 24 horas</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Tipos de Suporte</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Suporte Técnico:</strong> Problemas de acesso à plataforma</li>
            <li><strong>Suporte Pedagógico:</strong> Dúvidas sobre o conteúdo do curso</li>
            <li><strong>Suporte Comercial:</strong> Questões sobre pagamento e reembolso</li>
            <li><strong>Suporte Geral:</strong> Outras dúvidas e informações</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Canais de Atendimento</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li><strong>Telefone:</strong> +55 19 99769-4110</li>
            <li><strong>E-mail:</strong> contato@metodoviv.com.br</li>
            <li><strong>WhatsApp:</strong> +55 19 99769-4110</li>
            <li><strong>Horário:</strong> Segunda a Sexta, 9h às 18h</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Informações Adicionais</h3>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Atendimento prioritário para alunas ativas</li>
            <li>Suporte em português brasileiro</li>
            <li>Resposta garantida em até 24 horas</li>
            <li>Atendimento personalizado e humanizado</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">Localização</h3>
          <p>Nossa empresa está localizada no Brasil e atendemos clientes de todo o território nacional.</p>
        </div>
      </div>
    </div>
  )

  const privacyContent = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Política de Privacidade</h2>
      
      <div className="space-y-4 text-gray-700">
        <p><strong>Última atualização:</strong> Janeiro de 2025</p>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Informações da Empresa</h3>
          <p><strong>CNPJ:</strong> 17.040.680/0001-70</p>
          <p><strong>Contato:</strong> +55 19 99769-4110</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Informações Coletadas</h3>
          <p>Coletamos informações que você nos fornece diretamente, como:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Nome completo</li>
            <li>Endereço de e-mail</li>
            <li>Informações de pagamento</li>
            <li>Dados de uso do nosso curso</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Como Usamos Suas Informações</h3>
          <p>Utilizamos suas informações para:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Fornecer acesso ao curso e materiais</li>
            <li>Processar pagamentos</li>
            <li>Enviar comunicações sobre o curso</li>
            <li>Melhorar nossos serviços</li>
            <li>Cumprir obrigações legais</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Compartilhamento de Dados</h3>
          <p>Não vendemos, alugamos ou compartilhamos suas informações pessoais com terceiros, exceto:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Com provedores de pagamento para processar transações</li>
            <li>Quando exigido por lei</li>
            <li>Com seu consentimento explícito</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Segurança dos Dados</h3>
          <p>Implementamos medidas de segurança técnicas e organizacionais para proteger suas informações pessoais contra acesso não autorizado, alteração, divulgação ou destruição.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Seus Direitos</h3>
          <p>Você tem o direito de:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Acessar suas informações pessoais</li>
            <li>Corrigir dados imprecisos</li>
            <li>Solicitar a exclusão de seus dados</li>
            <li>Retirar consentimento a qualquer momento</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Contato</h3>
          <p>Para questões sobre esta política de privacidade, entre em contato conosco:</p>
          <p><strong>Telefone:</strong> +55 19 99769-4110</p>
          <p><strong>CNPJ:</strong> 17.040.680/0001-70</p>
        </div>
      </div>
    </div>
  )

  const termsContent = (
    <div className="space-y-6">
      <h2 className="text-2xl font-bold text-gray-800 mb-6">Termos de Uso</h2>
      
      <div className="space-y-4 text-gray-700">
        <p><strong>Última atualização:</strong> Janeiro de 2025</p>
        
        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">1. Informações da Empresa</h3>
          <p><strong>CNPJ:</strong> 17.040.680/0001-70</p>
          <p><strong>Contato:</strong> +55 19 99769-4110</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">2. Aceitação dos Termos</h3>
          <p>Ao acessar e usar o curso "Método VIV", você concorda em cumprir e estar vinculado a estes Termos de Uso. Se você não concordar com qualquer parte destes termos, não deve usar nossos serviços.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">3. Descrição do Serviço</h3>
          <p>O "Método VIV" é um curso online que oferece:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Estratégias de comunicação em vídeo</li>
            <li>Técnicas de vendas através de conteúdo</li>
            <li>Materiais de apoio e roteiros</li>
            <li>Acesso à comunidade de alunas</li>
            <li>Suporte por 7 dias</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">4. Acesso e Uso</h3>
          <p>O acesso ao curso é pessoal e intransferível. Você concorda em:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Usar o conteúdo apenas para fins educacionais</li>
            <li>Não compartilhar suas credenciais de acesso</li>
            <li>Não reproduzir, distribuir ou comercializar o conteúdo</li>
            <li>Respeitar os direitos autorais</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">5. Pagamento e Reembolso</h3>
          <p><strong>Garantia de 7 dias:</strong> Oferecemos garantia total de 7 dias. Se você não ficar satisfeita com o curso, devolvemos 100% do valor pago, sem perguntas.</p>
          <p><strong>Formas de pagamento:</strong> Aceitamos cartões de crédito, PIX e boleto bancário.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">6. Limitação de Responsabilidade</h3>
          <p>O curso é fornecido "como está". Não garantimos resultados específicos, pois estes dependem do esforço e aplicação de cada aluna. Não nos responsabilizamos por:</p>
          <ul className="list-disc list-inside ml-4 space-y-1">
            <li>Resultados financeiros específicos</li>
            <li>Interrupções temporárias do serviço</li>
            <li>Danos indiretos ou consequenciais</li>
          </ul>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">7. Propriedade Intelectual</h3>
          <p>Todos os direitos autorais, marcas registradas e outros direitos de propriedade intelectual relacionados ao curso pertencem à empresa. É proibida a reprodução, distribuição ou modificação sem autorização.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">8. Modificações</h3>
          <p>Reservamo-nos o direito de modificar estes termos a qualquer momento. As alterações entrarão em vigor imediatamente após a publicação.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">9. Lei Aplicável</h3>
          <p>Estes termos são regidos pelas leis brasileiras. Qualquer disputa será resolvida nos tribunais competentes do Brasil.</p>
        </div>

        <div>
          <h3 className="text-lg font-semibold text-gray-800 mb-2">10. Contato</h3>
          <p>Para dúvidas sobre estes termos, entre em contato:</p>
          <p><strong>Telefone:</strong> +55 19 99769-4110</p>
          <p><strong>CNPJ:</strong> 17.040.680/0001-70</p>
        </div>
      </div>
    </div>
  )

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-y-auto">
        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4 flex justify-between items-center">
          <h1 className="text-xl font-bold text-gray-800">
            {type === "privacy" && "Política de Privacidade"}
            {type === "terms" && "Termos de Uso"}
            {type === "refund" && "Política de Reembolso"}
            {type === "contact" && "Contato"}
          </h1>
          <Button
            variant="ghost"
            size="sm"
            onClick={onClose}
            className="text-gray-500 hover:text-gray-700"
          >
            <X className="w-5 h-5" />
          </Button>
        </div>
        
        <div className="p-6">
          {type === "privacy" && privacyContent}
          {type === "terms" && termsContent}
          {type === "refund" && refundContent}
          {type === "contact" && contactContent}
        </div>
        
        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
          <Button onClick={onClose} className="w-full">
            Fechar
          </Button>
        </div>
      </div>
    </div>
  )
} 