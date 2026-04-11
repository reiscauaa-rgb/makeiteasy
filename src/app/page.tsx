import HeroSection    from '@/components/home/HeroSection/HeroSection';
import StepsSection   from '@/components/home/StepsSection/StepsSection';
import BenefitsSection from '@/components/home/BenefitsSection/BenefitsSection';
import CTASection      from '@/components/home/CTASection/CTASection';
import ReviewsSection  from '@/components/home/ReviewsSection/ReviewsSection';

export default function HomePage() {
  return (
    <>
      <HeroSection />
      <StepsSection />
      <BenefitsSection />
      <CTASection />
      <ReviewsSection />
    </>
  );
}
