import { Hand, Scissors, Paintbrush, Sparkles } from 'lucide-react';

export const services = [
  {
    name: 'Saç Kesimi',
    price: 150,
    description: 'Modern teknikler ve kişiye özel tasarımlarla saçlarınıza yeni bir soluk getirin.',
    icon: Scissors,
  },
  {
    name: 'Manikür',
    price: 80,
    description: 'Profesyonel tırnak bakımı ve kalıcı oje seçenekleriyle elleriniz her zaman bakımlı görünsün.',
    icon: Hand,
  },
  {
    name: 'Cilt Bakımı',
    price: 200,
    description: 'Cildinizin ihtiyacına yönelik, yenileyici ve canlandırıcı profesyonel bakımlar.',
    icon: Sparkles,
  },
  {
    name: 'Boya',
    price: 250,
    description: 'En son trend renkler ve kaliteli ürünlerle saçlarınıza ışıltı katın.',
    icon: Paintbrush,
  },
];

export const timeSlots = [
  '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00'
];
