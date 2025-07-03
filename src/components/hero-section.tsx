import { Button } from "@/components/ui/button";

export default function HeroSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="home" className="bg-gradient-to-r from-primary to-secondary text-white section-padding">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
              Build Your Best Self with{" "}
              <span className="text-accent">Ashwani Upadhyay</span>
            </h1>
            <p className="text-xl md:text-2xl mb-8 opacity-90">
              10+ years of expert training backed by science, discipline, and mental clarity
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                onClick={scrollToContact}
                className="bg-accent text-white px-8 py-6 text-lg font-semibold hover:bg-accent/90 transition-colors"
              >
                Book Free 3-Day Trial
              </Button>
              <Button
                asChild
                variant="outline"
                className="bg-whatsapp border-whatsapp text-white px-8 py-6 text-lg font-semibold hover:bg-whatsapp/90 transition-colors"
              >
                <a
                  href="https://wa.me/918400408888"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center"
                >
                  <i className="fab fa-whatsapp mr-2"></i>
                  WhatsApp Consultation
                </a>
              </Button>
            </div>
          </div>
          <div className="text-center">
            <img
              src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Professional fitness trainer working with client"
              className="rounded-xl shadow-2xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
