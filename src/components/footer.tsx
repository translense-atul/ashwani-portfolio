export default function Footer() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <footer className="bg-primary text-white py-12">
      <div className="container-padding">
        <div className="grid md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">Ashwani Upadhyay</h3>
            <p className="text-gray-300 mb-4">
              Certified fitness trainer dedicated to helping you build your best self through science-based training.
            </p>
            <a
              href="https://wa.me/918795705808"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center space-x-2 text-whatsapp hover:text-green-400 transition-colors"
            >
              <i className="fab fa-whatsapp"></i>
              <span>WhatsApp: +91 8795705808</span>
            </a>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => scrollToSection("home")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("about")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("services")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("pricing")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Pricing
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection("testimonials")}
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Testimonials
                </button>
              </li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              <li><span className="text-gray-300">Personal Training</span></li>
              <li><span className="text-gray-300">Body Transformation</span></li>
              <li><span className="text-gray-300">Nutrition Guidance</span></li>
              <li><span className="text-gray-300">Online Coaching</span></li>
              <li><span className="text-gray-300">Mind-Muscle Connection</span></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <ul className="space-y-2">
              <li className="text-gray-300">aupadhyay045@gmail.com</li>
              <li className="text-gray-300">Mon-Sat: 6:00 AM - 10:00 PM</li>
              <li className="text-gray-300">WhatsApp: +91 8795705808</li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-600 mt-8 pt-8 text-center">
          <p className="text-gray-300">
            &copy; 2024 Ashwani Upadhyay. All rights reserved. | Professional Fitness Training Services
          </p>
        </div>
      </div>
    </footer>
  );
}
