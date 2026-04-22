import ReviewsCarousel from '@/components/ReviewsCarousel/ReviewsCarousel';
import type { Review } from '@/components/ReviewsCarousel/ReviewsCarousel';

const reviews: Review[] = [
  {
    name: 'Lais Koller',
    initials: 'LK',
    date: '2 meses atrás',
    text: 'Excelente profissional! Responde as dúvidas com muita rapidez e eficiência. Sempre disposta a ajudar!',
  },
  {
    name: 'Ana Júlia Malheiros',
    initials: 'AJ',
    date: '2 meses atrás',
    text: 'Foi perfeito! Giovanna me ajudou em todo o processo e me tirou todas as dúvidas! Desde o começo até a aprovação do meu status!',
  },
  {
    name: 'Jocassia Tonini',
    initials: 'JT',
    date: '2 meses atrás',
    text: 'Giovanna sempre super prestativa respondendo todas as minhas perguntas e me orientando na aplicação e nas dúvidas sobre qual universidade escolher, sobre as aulas, CPT. Super recomendo! 💯',
  },
  {
    name: 'Jennifer Benner',
    initials: 'JB',
    date: '2 meses atrás',
    text: 'Giovanna é excepcional! Muito querida e disposta a ajudar com qualquer problema ou dúvida! Ela foi sem dúvida a melhor pessoa que já me ajudou em algo relacionado a visto/estudos aqui nos EUA. Recomendo muito mesmo. Atenciosa, gentil e muito simpática!',
  },
  {
    name: 'Caroline',
    initials: 'CA',
    date: '2 meses atrás',
    text: 'Quero deixar meu agradecimento e minha recomendação para a assessoria da Giovanna. Ela foi simplesmente incrível durante todo o processo: super solicita, sempre pronta para ajudar, responde tudo muito rápido e te deixa extremamente tranquila em cada etapa. Gi, você foi fundamental para que tudo desse certo! ✨',
  },
  {
    name: 'Alexandre Melo',
    initials: 'AM',
    date: '3 meses atrás',
    text: 'O serviço prestado pela MAKE IT EASY é espetacular. Recomendo com absoluta convicção. A Giovanna sempre muito prestativa e cordial, com pleno conhecimento dos trâmites necessários para esclarecer e resolver os assuntos acadêmicos. SUPER RECOMENDO - serviço VIP 5 estrelas.',
  },
  {
    name: 'Joyce Goncalves',
    initials: 'JG',
    date: '3 meses atrás',
    text: 'A minha experiência com a Giovanna foi incrível. Sou imensamente grata por todo o suporte, atenção e empatia. Ela me ajudou a encontrar a faculdade e o curso alinhado com minhas expectativas. Recomendo e confio de olhos fechados no trabalho dela.',
  },
];

export default function ReviewsSection() {
  return (
    <ReviewsCarousel
      reviews={reviews}
      title="O que estão falando de nós?"
      googleLink="https://www.google.com"
      totalReviews={196}
      score="5.0"
    />
  );
}
