'use client';

import ReviewsCarousel from '@/components/ReviewsCarousel/ReviewsCarousel';
import type { Review } from '@/components/ReviewsCarousel/ReviewsCarousel';
import { useLanguage } from '@/lib/i18n/LanguageContext';

const reviews: Review[] = [
  { name: 'Lais Koller', initials: 'LK', date: '2 meses atrás', text: 'Excelente profissional! Responde as dúvidas com muita rapidez e eficiência. Sempre disposta a ajudar!' },
  { name: 'Ana Júlia Malheiros', initials: 'AJ', date: '2 meses atrás', text: 'Foi perfeito! Giovanna me ajudou em todo o processo e me tirou todas as dúvidas! Desde o começo até a aprovação do meu status!' },
  { name: 'Jocassia Tonini', initials: 'JT', date: '2 meses atrás', text: 'Giovanna sempre super prestativa respondendo todas as minhas perguntas e me orientando na aplicação e nas dúvidas sobre qual universidade escolher, sobre as aulas, CPT. Super recomendo! 💯' },
  { name: 'Jennifer Benner', initials: 'JB', date: '2 meses atrás', text: 'Giovanna é excepcional! Muito querida e disposta a ajudar com qualquer problema ou dúvida! Ela foi sem dúvida a melhor pessoa que já me ajudou em algo relacionado a visto/estudos aqui nos EUA. Recomendo muito mesmo. Atenciosa, gentil e muito simpática!' },
  { name: 'Caroline', initials: 'CA', date: '2 meses atrás', text: 'Quero deixar meu agradecimento e minha recomendação para a assessoria da Giovanna. Ela foi simplesmente incrível durante todo o processo: super solicita, sempre pronta para ajudar, responde tudo muito rápido e te deixa extremamente tranquila em cada etapa.' },
  { name: 'Alexandre Melo', initials: 'AM', date: '3 meses atrás', text: 'O serviço prestado pela MAKE IT EASY é espetacular. Recomendo com absoluta convicção. A Giovanna sempre muito prestativa e cordial, com pleno conhecimento dos trâmites necessários para esclarecer e resolver os assuntos acadêmicos. SUPER RECOMENDO - serviço VIP 5 estrelas.' },
  { name: 'Joyce Goncalves', initials: 'JG', date: '3 meses atrás', text: 'A minha experiência com a Giovanna foi incrível. Sou imensamente grata por todo o suporte, atenção e empatia. Ela me ajudou a encontrar a faculdade e o curso alinhado com minhas expectativas. Recomendo e confio de olhos fechados no trabalho dela.' },
];

const titles = {
  pt: 'O que estão falando de nós?',
  en: 'What our students are saying',
};

export default function ReviewsSection() {
  const { language } = useLanguage();

  return (
    <ReviewsCarousel
      reviews={reviews}
      title={titles[language]}
      googleLink="https://www.google.com/maps/place/Make+It+Easy+USA/@38.4017657,-171.152481,3z/data=!4m8!3m7!1s0xa2174742d14909b5:0x48e8c97ce75b332!8m2!3d46.423669!4d-129.9427086!9m1!1b1!16s%2Fg%2F11ld37ffv4?entry=ttu&g_ep=EgoyMDI2MDQyNi4wIKXMDSoASAFQAw%3D%3D"
      score="5.0"
    />
  );
}
