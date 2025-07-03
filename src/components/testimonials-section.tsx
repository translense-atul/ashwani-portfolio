import { Star } from "lucide-react";

export default function TestimonialsSection() {
  const testimonials = [
    {
      name: "Rajesh Kumar",
      title: "Software Engineer",
      rating: 5,
      text: "Ashwani's scientific approach to fitness transformed my body and mindset. Lost 15kg in 4 months while building lean muscle!",
      initial: "R"
    },
    {
      name: "Priya Sharma",
      title: "Marketing Manager",
      rating: 5,
      text: "The personalized nutrition plan was a game-changer. I gained 8kg of muscle mass and improved my overall health significantly.",
      initial: "P"
    },
    {
      name: "Arjun Patel",
      title: "Business Owner",
      rating: 5,
      text: "Best investment I made for my health. Ashwani's mind-muscle connection coaching helped me achieve results I never thought possible.",
      initial: "A"
    }
  ];

  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }, (_, i) => (
      <Star
        key={i}
        className={`w-4 h-4 ${i < rating ? "text-accent fill-current" : "text-gray-300"}`}
      />
    ));
  };

  return (
    <section id="testimonials" className="section-padding bg-gray-50">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Client Testimonials</h2>
          <p className="text-gray-700 text-lg">Success stories from satisfied clients</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl transition-shadow">
              <div className="flex items-center mb-4">
                <div className="flex space-x-1">
                  {renderStars(testimonial.rating)}
                </div>
                <span className="ml-2 text-gray-600">({testimonial.rating}.0)</span>
              </div>
              <p className="text-gray-700 mb-4 italic">"{testimonial.text}"</p>
              <div className="flex items-center">
                <div className="w-10 h-10 bg-accent rounded-full flex items-center justify-center text-white font-bold">
                  {testimonial.initial}
                </div>
                <div className="ml-3">
                  <p className="font-semibold text-primary">{testimonial.name}</p>
                  <p className="text-gray-600 text-sm">{testimonial.title}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
