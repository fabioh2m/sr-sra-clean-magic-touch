import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";

interface ServiceCardProps {
  title: string;
  description: string;
  image: string;
  isActive: boolean;
  onClick: () => void;
  className?: string;
}

export const ServiceCard = ({ 
  title, 
  description, 
  image, 
  isActive, 
  onClick, 
  className 
}: ServiceCardProps) => {
  return (
    <Card 
      className={cn(
        "service-card cursor-pointer overflow-hidden",
        "border-2 transition-all duration-300",
        isActive 
          ? "border-primary bg-gradient-to-br from-primary/5 to-accent/5 shadow-lg" 
          : "border-border hover:border-primary/50",
        className
      )}
      onClick={onClick}
    >
      <CardContent className="p-0">
        <div className="relative">
          <img 
            src={image} 
            alt={title}
            className="w-full h-48 object-cover transition-transform duration-300 group-hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
          <div className="absolute bottom-4 left-4 right-4 text-white">
            <h3 className="text-xl font-bold mb-2">{title}</h3>
            <p className="text-sm opacity-90">{description}</p>
          </div>
        </div>
        <div className="p-4">
          <Button 
            variant={isActive ? "default" : "outline"} 
            className="w-full transition-all duration-300"
          >
            {isActive ? "Selecionado" : "Selecionar Serviço"}
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};