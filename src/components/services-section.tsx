export default function ServicesSection() {
  const services = [
    {
      icon: "fas fa-dumbbell",
      title: "Personal Training",
      description: "One-on-one coaching sessions both offline and online via Zoom/Google Meet",
      features: [
        "Customized workout plans",
        "Form correction and technique",
        "Progress tracking and adjustments"
      ]
    },
    {
      icon: "fas fa-chart-line",
      title: "Body Transformation",
      description: "Customized body transformation plans based on scientific principles",
      features: [
        "Goal-specific training programs",
        "Before/after photo tracking",
        "Measurement and progress reports"
      ]
    },
    {
      icon: "fas fa-apple-alt",
      title: "Nutrition Guidance",
      description: "Scientific nutrition guidance tailored to your fitness goals",
      features: [
        "Personalized meal plans",
        "Macro and calorie calculations",
        "Supplement recommendations"
      ]
    },
    {
      icon: "fas fa-brain",
      title: "Mind-Muscle Connection",
      description: "Mental coaching for better workout performance and focus",
      features: [
        "Meditation techniques",
        "Mindfulness training",
        "Mental clarity coaching"
      ]
    },
    {
      icon: "fas fa-video",
      title: "Online Coaching",
      description: "Virtual training sessions and consultations worldwide",
      features: [
        "Video call sessions",
        "Exercise demonstration videos",
        "24/7 WhatsApp support"
      ]
    },
    {
      icon: "fas fa-clipboard-check",
      title: "Progress Tracking",
      description: "Comprehensive monitoring and adjustment of your fitness journey",
      features: [
        "Weekly check-ins",
        "Customized progress charts",
        "Goal reassessment"
      ]
    }
  ];

  return (
    <section id="services" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Services Offered</h2>
          <p className="text-gray-700 text-lg">Comprehensive fitness solutions tailored to your goals</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="text-accent text-3xl mb-4">
                <i className={service.icon}></i>
              </div>
              <h3 className="text-xl font-semibold text-primary mb-3">{service.title}</h3>
              <p className="text-gray-700 mb-4">{service.description}</p>
              <ul className="text-gray-600 text-sm space-y-1">
                {service.features.map((feature, featureIndex) => (
                  <li key={featureIndex}>• {feature}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-accent text-white p-6 rounded-xl inline-block">
            <p className="text-lg font-semibold">
              All training includes weekly follow-ups, customized charts, and progress tracking.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
