export default function CertificationsSection() {
  const certifications = [
    {
      image: "https://www.shutterstock.com/shutterstock/photos/330619865/display_1500/stock-photo-handsome-trainer-using-tablet-in-weights-room-at-the-gym-330619865.jpg",
      title: "NASM Certified",
      description: "Meditation & Mental Wellness"
    },
    {
      image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Level 4 certified trainer",
      description: "International Sports Sciences Association"
    },
    {
      image: "https://www.shutterstock.com/shutterstock/photos/1774837898/display_1500/stock-photo-calm-serene-sporty-young-african-american-ethnic-woman-meditate-sit-namaste-eyes-closed-doing-1774837898.jpg",
      title: "Sports Psychologist",
      description: "Meditation & Mental Wellness"
    },
    {
      image: "https://images.unsplash.com/photo-1494390248081-4e521a5940db?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Nutrition Specialist",
      description: "Diet Planning & Nutrition Guidance"
    },
    {
      image: "https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?ixlib=rb-4.0.3&auto=format&fit=crop&w=400&h=300",
      title: "Functional Training",
      description: "Movement & Mobility Specialist"
    },
    {
      image: "https://www.shutterstock.com/shutterstock/photos/2471712155/display_1500/stock-photo-strength-workout-handsome-athlete-working-out-with-dumbbell-at-gym-free-space-2471712155.jpg",
      title: "Mindfulness Coach",
      description: "Meditation & Mental Wellness"
    },


  ];

  return (
    <section id="certifications" className="section-padding bg-white">
      <div className="container-padding">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">Certified & Trusted</h2>
          <p className="text-secondary text-lg">Professional certifications ensuring the highest standards of training</p>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {certifications.map((cert, index) => (
            <div key={index} className="bg-light-gray p-6 rounded-xl text-center hover:shadow-lg transition-shadow">
              <img
                src={cert.image}
                alt={cert.title}
                className="w-full h-32 object-cover rounded-lg mb-4"
              />
              <h3 className="font-semibold text-primary mb-2">{cert.title}</h3>
              <p className="text-secondary text-sm">{cert.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
