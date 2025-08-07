import { useState } from 'react';
import { Dialog, DialogContent, DialogHeader, DialogTitle } from '@/components/ui/dialog';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { MessageCircle } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

interface LeadCaptureModalProps {
  isOpen: boolean;
  onClose: () => void;
  whatsappMessage?: string;
  whatsappPhone?: string;
}

const LeadCaptureModal = ({ 
  isOpen, 
  onClose, 
  whatsappMessage = "Oi, quero uma consultoria grátis!",
  whatsappPhone = "5571983419891"
}: LeadCaptureModalProps) => {
  const [formData, setFormData] = useState({
    name: '',
    phone: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name.trim() || !formData.phone.trim()) {
      toast({
        title: "Campos obrigatórios",
        description: "Por favor, preencha nome e telefone.",
        variant: "destructive"
      });
      return;
    }

    setIsSubmitting(true);

    try {

      await new Promise(resolve => setTimeout(resolve, 1000));
      if (window.dataLayer) {
        window.dataLayer.push({
          event: 'generate_lead', // Nome do evento que usaremos no GTM
        });
      }

      toast({
        title: "Tudo certo.",
        description: "Obrigado! Redirecionando para o WhatsApp...",
      });

      // Redirecionar para WhatsApp após capturar o lead
      setTimeout(() => {
        const encodedMessage = encodeURIComponent(whatsappMessage);
        window.open(`https://api.whatsapp.com/send?phone=${whatsappPhone}&text=${encodedMessage}`, '_blank');
        onClose();
        setFormData({ name: '', phone: '' });
      }, 1500);

    } catch (error) {
      toast({
        title: "Erro",
        description: "Houve um erro ao processar sua solicitação. Tente novamente.",
        variant: "destructive"
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-primary">
            <MessageCircle className="h-5 w-5" />
            Quase lá! Só mais um passo...
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="name">Nome completo *</Label>
            <Input
              id="name"
              name="name"
              type="text"
              placeholder="Digite seu nome"
              value={formData.name}
              onChange={handleInputChange}
              required
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="phone">Telefone/WhatsApp *</Label>
            <Input
              id="phone"
              name="phone"
              type="tel"
              placeholder="(11) 99999-9999"
              value={formData.phone}
              onChange={handleInputChange}
              required
            />
          </div>

          <div className="bg-primary/5 border border-primary/20 rounded-lg p-4">
            <p className="text-sm text-muted-foreground">
              ✅ Seus dados estão seguros<br/>
              ✅ Sem spam, apenas conteúdo relevante<br/>
              ✅ Redirecionamento automático para WhatsApp
            </p>
          </div>

          <div className="flex gap-3 pt-2">
            <Button
              type="button"
              variant="outline"
              onClick={onClose}
              className="flex-1"
              disabled={isSubmitting}
            >
              Cancelar
            </Button>
            <Button
              type="submit"
              className="flex-1"
              disabled={isSubmitting}
            >
              {isSubmitting ? 'Processando...' : 'Continuar para WhatsApp'}
            </Button>
          </div>
        </form>
      </DialogContent>
    </Dialog>
  );
};

export default LeadCaptureModal;