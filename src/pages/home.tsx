import Navigation from "@/components/navigation";
import HeroSection from "@/components/hero-section";
import AboutSection from "@/components/about-section";
import CertificationsSection from "@/components/certifications-section";
import ServicesSection from "@/components/services-section";
import PricingSection from "@/components/pricing-section";
import TestimonialsSection from "@/components/testimonials-section";
import ContactSection from "@/components/contact-section";
import Footer from "@/components/footer";
import WhatsAppButton from "@/components/whatsapp-button";
import FaqSection from "@/components/faq-section";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navigation />
      <HeroSection />
      <AboutSection />
      <CertificationsSection />
      <ServicesSection />
      <PricingSection />
      <TestimonialsSection />
      <FaqSection />
      {/* <ContactSection /> */}
      <Footer />
      <WhatsAppButton />
    </div>
  );
}
