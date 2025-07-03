import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";

export default function PricingSection() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const plans = [
    {
      name: "Monthly Plan",
      price: "₹5,999",
      period: "/month",
      features: [
        "Personalized Diet & Workout",
        "Weekly Check-ins",
        "Direct WhatsApp Support",
        "3-Day Free Trial"
      ],
      highlighted: false
    },
    {
      name: "Quarterly Plan",
      price: "₹15,999",
      period: "/3 months",
      features: [
        "Personalized Diet & Workout",
        "Weekly Check-ins",
        "Direct WhatsApp Support",
        "3-Day Free Trial",
        "Monthly Progress Reports"
      ],
      highlighted: true,
      badge: "Most Popular"
    },
    {
      name: "Yearly Plan",
      price: "₹49,999",
      period: "/year",
      features: [
        "Personalized Diet & Workout",
        "Weekly Check-ins",
        "Direct WhatsApp Support",
        "3-Day Free Trial",
        "Quarterly Reassessments"
      ],
      highlighted: false
    }
  ];

  return (
    <section id="pricing" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Training Plans</h2>
          <p className="text-gray-700 text-lg">Choose the plan that fits your commitment level</p>
        </div>
        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`p-8 rounded-xl transition-all duration-300 ${
                plan.highlighted
                  ? "bg-accent text-white shadow-lg transform scale-105 relative"
                  : "bg-gray-50 hover:shadow-lg"
              }`}
            >
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-white px-4 py-1 rounded-full text-sm font-semibold">
                  {plan.badge}
                </div>
              )}
              <h3 className={`text-2xl font-bold mb-4 ${plan.highlighted ? "text-white" : "text-primary"}`}>
                {plan.name}
              </h3>
              <div className={`text-4xl font-bold mb-6 ${plan.highlighted ? "text-white" : "text-accent"}`}>
                {plan.price}
                <span className={`text-lg font-normal ${plan.highlighted ? "opacity-75" : "text-gray-600"}`}>
                  {plan.period}
                </span>
              </div>
              <ul className="space-y-3 mb-8">
                {plan.features.map((feature, featureIndex) => (
                  <li key={featureIndex} className="flex items-center space-x-3">
                    <Check className={`w-5 h-5 ${plan.highlighted ? "text-white" : "text-whatsapp"}`} />
                    <span className={plan.highlighted ? "text-white" : "text-gray-700"}>
                      {feature}
                    </span>
                  </li>
                ))}
              </ul>
              <Button
                onClick={scrollToContact}
                className={`w-full py-3 font-semibold transition-colors ${
                  plan.highlighted
                    ? "bg-white text-accent hover:bg-gray-100"
                    : "bg-primary text-white hover:bg-primary/90"
                }`}
              >
                Get Started
              </Button>
            </div>
          ))}
        </div>
        <div className="text-center mt-12">
          <div className="bg-primary text-white p-6 rounded-xl inline-block">
            <p className="text-lg font-semibold">
              No Satisfaction = Full Refund Guarantee (within first week)
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
