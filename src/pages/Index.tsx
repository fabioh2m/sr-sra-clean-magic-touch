import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { ServiceCard } from "@/components/ServiceCard";
import { SchedulingForm } from "@/components/SchedulingForm";
import { ChatbotEmbed } from "@/components/ChatbotEmbed";
import { 
  PhoneIcon, 
  MessageCircleIcon, 
  SparklesIcon, 
  ChefHatIcon, 
  StarIcon,
  WheatIcon,
  HomeIcon
} from "lucide-react";

// Import images
import faxinaService from "@/assets/faxina-service.png";
import personalChefService from "@/assets/personal-chef-service.png";
import cleaningWork from "@/assets/cleaning-work.png";
import mealPrep from "@/assets/meal-prep.png";

const Index = () => {
  const [selectedService, setSelectedService] = useState<"faxina" | "chef" | null>(null);
  const [showScheduling, setShowScheduling] = useState(false);

  const services = [
    {
      id: "faxina" as const,
      title: "Faxina Pesada",
      description: "Limpeza profissional completa para sua casa ou escritório",
      image: faxinaService,
      icon: <HomeIcon className="w-8 h-8" />,
      features: ["Limpeza profunda", "Produtos especializados", "Equipe qualificada", "Garantia de qualidade"]
    },
    {
      id: "chef" as const,
      title: "Personal Chef",
      description: "Marmitas personalizadas e refeições sob medida",
      image: personalChefService,
      icon: <ChefHatIcon className="w-8 h-8" />,
      features: ["Cardápio personalizado", "Ingredientes frescos", "Entrega programada", "Opções saudáveis"]
    }
  ];

  const handleServiceSelect = (serviceId: "faxina" | "chef") => {
    setSelectedService(serviceId);
    setShowScheduling(true);
  };

  const handleWhatsApp = (phone: string) => {
    const message = "Olá! Gostaria de saber mais sobre os serviços da Sr. & Sra. Clean!";
    window.open(`https://wa.me/55${phone}?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <div className="min-h-screen">
      <ChatbotEmbed />
      
      {/* Hero Section with Animated Gradient Background */}
      <section className="relative min-h-screen flex items-center justify-center gradient-hero overflow-hidden">
        <div className="absolute inset-0 bg-black/20"></div>
        
        {/* Floating Elements */}
        <div className="absolute top-20 left-10 animate-float">
          <SparklesIcon className="w-12 h-12 text-white/30" />
        </div>
        <div className="absolute bottom-20 right-10 animate-float" style={{animationDelay: '2s'}}>
          <HomeIcon className="w-16 h-16 text-white/20" />
        </div>
        <div className="absolute top-1/3 right-20 animate-float" style={{animationDelay: '4s'}}>
          <WheatIcon className="w-10 h-10 text-white/25" />
        </div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center text-white max-w-4xl mx-auto animate-fade-in-up">
            <div className="mb-8 animate-bounce-in">
              <h1 className="text-6xl md:text-8xl font-bold mb-6 drop-shadow-lg">
                Sr. & Sra.
                <span className="block text-accent-light animate-pulse-glow">
                  Clean!
                </span>
              </h1>
              <div className="text-2xl md:text-3xl font-semibold mb-4 opacity-95">
                🏠 Faxina de Verdade! 👨‍🍳 Personal Chef
              </div>
            </div>
            
            <p className="text-xl md:text-2xl mb-8 opacity-90 leading-relaxed">
              Transformamos sua casa em um lar perfeito com nossos serviços de 
              <strong> limpeza profissional</strong> e <strong>culinária personalizada</strong>
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
              <Button 
                onClick={() => handleWhatsApp("21985567788")}
                className="bg-green-600 hover:bg-green-700 text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                (21) 98556-7788
              </Button>
              
              <Button 
                onClick={() => handleWhatsApp("21988586634")}
                className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 px-8 text-lg rounded-full transition-all duration-300 hover:scale-105 shadow-lg"
              >
                <PhoneIcon className="w-5 h-5 mr-2" />
                (21) 98858-6634
              </Button>
            </div>

            <div className="glass-card p-6 rounded-2xl backdrop-blur-md max-w-2xl mx-auto">
              <div className="flex items-center justify-center gap-3 mb-4">
                <MessageCircleIcon className="w-6 h-6 text-accent-light animate-pulse" />
                <h3 className="text-xl font-semibold">💬 Precisa de Ajuda?</h3>
              </div>
              <p className="text-lg opacity-90">
                Nosso chatbot inteligente está aqui para tirar todas suas dúvidas! 
                <strong> 👉 CONVERSE COMIGO AQUI! 👈</strong> Clique no ícone de chat no canto da tela.
              </p>
              <div className="text-center mt-4">
                <div className="inline-flex items-center gap-2 bg-white/20 rounded-full px-4 py-2 animate-bounce">
                  <MessageCircleIcon className="w-5 h-5 animate-pulse" />
                  <span className="font-bold">Chat disponível 24h!</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-gradient-to-br from-background to-secondary/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-bold text-foreground mb-6">
              Nossos Serviços
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Escolha o serviço que precisa e transforme seu dia a dia com qualidade profissional
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto mb-16">
            {services.map((service) => (
              <div key={service.id} className="animate-fade-in-up">
                <ServiceCard
                  title={service.title}
                  description={service.description}
                  image={service.image}
                  isActive={selectedService === service.id}
                  onClick={() => handleServiceSelect(service.id)}
                />
                
                <Card className="mt-4 border-t-0 rounded-t-none">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <div className="p-2 bg-primary/10 rounded-lg">
                        {service.icon}
                      </div>
                      <h4 className="text-lg font-semibold">Por que escolher?</h4>
                    </div>
                    <ul className="space-y-2">
                      {service.features.map((feature, index) => (
                        <li key={index} className="flex items-center gap-2">
                          <StarIcon className="w-4 h-4 text-primary fill-current" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>

          {/* Call to Action */}
          {!showScheduling && (
            <div className="text-center">
              <Button 
                onClick={() => setShowScheduling(true)}
                className="bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent text-white font-bold py-4 px-12 text-xl rounded-full transition-all duration-300 hover:scale-105 shadow-lg animate-pulse-glow"
              >
                📅 Agendar Serviço Agora
              </Button>
            </div>
          )}
        </div>
      </section>

      {/* Scheduling Section */}
      {showScheduling && (
        <section className="py-20 bg-gradient-to-br from-primary/5 to-accent/5">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12">
              <h2 className="text-4xl font-bold text-foreground mb-4">
                Vamos Agendar!
              </h2>
              <p className="text-xl text-muted-foreground">
                Preencha os dados e confirmaremos via WhatsApp
              </p>
            </div>
            
            <SchedulingForm 
              selectedService={
                selectedService === "faxina" ? "Faxina Pesada" : 
                selectedService === "chef" ? "Personal Chef" : 
                "Selecione um serviço"
              } 
            />
          </div>
        </section>
      )}

      {/* Gallery Section */}
      <section className="py-20 bg-gradient-to-br from-background to-primary/5">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-foreground mb-6">
              Nosso Trabalho
            </h2>
            <p className="text-xl text-muted-foreground">
              Veja alguns exemplos dos nossos serviços realizados com excelência
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <Card className="overflow-hidden service-card">
              <img 
                src={cleaningWork} 
                alt="Trabalho de limpeza realizado"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6 cursor-pointer hover:bg-primary/5 transition-colors" onClick={() => window.open(faxinaService, '_blank')}>
                <h3 className="text-xl font-semibold mb-2">Faxina Completa</h3>
                <p className="text-muted-foreground">
                  Limpeza profunda e organização de áreas internas com resultados impecáveis
                </p>
              </CardContent>
            </Card>

            <Card className="overflow-hidden service-card">
              <img 
                src={mealPrep} 
                alt="Marmitas preparadas"
                className="w-full h-64 object-cover"
              />
              <CardContent className="p-6 cursor-pointer hover:bg-primary/5 transition-colors" onClick={() => window.open(mealPrep, '_blank')}>
                <h3 className="text-xl font-semibold mb-2">Marmitas Saudáveis</h3>
                <p className="text-muted-foreground">
                  Refeições balanceadas e saborosas preparadas com ingredientes frescos
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Observações Section */}
      <section className="py-16 bg-gradient-to-br from-yellow-50 to-orange-50 border-t-4 border-yellow-400">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl shadow-lg p-8 border-l-8 border-yellow-400">
              <div className="flex items-center gap-3 mb-6">
                <div className="w-12 h-12 bg-yellow-400 rounded-full flex items-center justify-center">
                  <span className="text-2xl">⚠️</span>
                </div>
                <h2 className="text-3xl font-bold text-gray-800">OBSERVAÇÕES IMPORTANTES!</h2>
              </div>
              
              <div className="space-y-4 text-gray-700">
                <div className="flex items-start gap-4 p-4 bg-yellow-50 rounded-lg border-l-4 border-yellow-400">
                  <span className="text-yellow-600 font-bold text-lg">1.</span>
                  <p className="text-lg">
                    <strong>A faxina é realizada prioritariamente no INTERIOR do imóvel</strong> - áreas externas à combinar!
                  </p>
                </div>
                
                <div className="flex items-start gap-4 p-4 bg-orange-50 rounded-lg border-l-4 border-orange-400">
                  <span className="text-orange-600 font-bold text-lg">2.</span>
                  <p className="text-lg">
                    <strong>Limpezas no interior de guarda-roupas, armários de cozinha, geladeiras</strong> são realizadas à parte e serão cobradas de acordo com o valor de tabela!
                  </p>
                </div>
              </div>
              
              <div className="mt-6 text-center">
                <p className="text-sm text-gray-600">
                  Para mais informações sobre valores e serviços adicionais, entre em contato conosco!
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gradient-to-r from-primary to-accent text-white py-12">
        <div className="container mx-auto px-4 text-center">
          <h3 className="text-3xl font-bold mb-6">Sr. & Sra. Clean!</h3>
          
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl mx-auto mb-8">
            <div>
              <h4 className="text-xl font-semibold mb-4">📞 Contatos</h4>
              <div className="space-y-2">
                <Button 
                  variant="ghost" 
                  onClick={() => handleWhatsApp("21985567788")}
                  className="text-white hover:bg-white/20 w-full"
                >
                  (21) 98556-7788
                </Button>
                <Button 
                  variant="ghost" 
                  onClick={() => handleWhatsApp("21988586634")}
                  className="text-white hover:bg-white/20 w-full"
                >
                  (21) 98858-6634
                </Button>
              </div>
            </div>
            
            <div>
              <h4 className="text-xl font-semibold mb-4">💬 Chatbot Inteligente</h4>
              <p className="text-white/90 mb-3">
                👉 <strong>CONVERSE COMIGO AQUI!</strong> 👈
              </p>
              <p className="text-white/80 text-sm">
                Chatbot disponível 24h para tirar suas dúvidas instantaneamente!
              </p>
              <div className="text-center mt-3">
                <span className="text-xs bg-white/20 px-3 py-1 rounded-full">
                  ⏰ Atualizado em tempo real
                </span>
              </div>
            </div>
          </div>
          
          <div className="border-t border-white/20 pt-6">
            <p className="text-white/80">
              © 2024 Sr. & Sra. Clean! - Transformando casas, criando lares.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;