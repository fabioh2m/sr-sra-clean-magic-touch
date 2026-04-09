import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { CalendarIcon, ClockIcon, UserIcon, PhoneIcon } from "lucide-react";
import { toast } from "@/hooks/use-toast";

interface SchedulingFormProps {
  selectedService: string;
}

export const SchedulingForm = ({ selectedService }: SchedulingFormProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    date: '',
    time: '',
    address: '',
    notes: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Create WhatsApp message
    const message = `🏠 *Agendamento Sr. & Sra. Clean!*

📋 *Serviço:* ${selectedService}
👤 *Nome:* ${formData.name}
📞 *Telefone:* ${formData.phone}
📅 *Data:* ${formData.date}
⏰ *Horário:* ${formData.time}
📍 *Endereço:* ${formData.address}
📝 *Observações:* ${formData.notes || 'Nenhuma'}

Gostaria de confirmar este agendamento. Obrigado!`;

    const whatsappUrl = `https://wa.me/5521985567788?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    toast({
      title: "Agendamento enviado!",
      description: "Você será redirecionado para o WhatsApp para confirmar seu agendamento.",
    });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Card className="w-full max-w-2xl mx-auto shadow-lg">
      <CardHeader className="text-center bg-gradient-to-r from-primary to-accent text-white rounded-t-lg">
        <CardTitle className="text-2xl font-bold">
          📅 Agendar {selectedService}
        </CardTitle>
        <p className="text-primary-foreground/90">
          Preencha os dados e confirme pelo WhatsApp
        </p>
      </CardHeader>
      <CardContent className="p-6">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="space-y-2">
              <Label htmlFor="name" className="flex items-center gap-2">
                <UserIcon className="w-4 h-4" />
                Nome Completo
              </Label>
              <Input
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Seu nome completo"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="phone" className="flex items-center gap-2">
                <PhoneIcon className="w-4 h-4" />
                Telefone
              </Label>
              <Input
                id="phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                required
                placeholder="(21) 9 9999-9999"
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="date" className="flex items-center gap-2">
                <CalendarIcon className="w-4 h-4" />
                Data
              </Label>
              <Input
                id="date"
                name="date"
                type="date"
                value={formData.date}
                onChange={handleChange}
                required
                min={new Date().toISOString().split('T')[0]}
              />
            </div>
            
            <div className="space-y-2">
              <Label htmlFor="time" className="flex items-center gap-2">
                <ClockIcon className="w-4 h-4" />
                Horário
              </Label>
              <Input
                id="time"
                name="time"
                type="time"
                value={formData.time}
                onChange={handleChange}
                required
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="address">Endereço Completo</Label>
            <Textarea
              id="address"
              name="address"
              value={formData.address}
              onChange={handleChange}
              required
              placeholder="Rua, número, bairro, cidade..."
              rows={3}
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="notes">Observações (opcional)</Label>
            <Textarea
              id="notes"
              name="notes"
              value={formData.notes}
              onChange={handleChange}
              placeholder="Alguma informação adicional sobre o serviço..."
              rows={3}
            />
          </div>
          
          <Button 
            type="submit" 
            className="w-full bg-gradient-to-r from-primary to-accent hover:from-primary-dark hover:to-accent text-white font-bold py-3 text-lg transition-all duration-300 hover:shadow-lg"
          >
            📱 Confirmar via WhatsApp
          </Button>
        </form>
      </CardContent>
    </Card>
  );
};