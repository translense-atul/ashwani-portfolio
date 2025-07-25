export default function AboutSection() {
  return (
    <section id="about" className="section-padding bg-white">
      <div className="container-padding">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <img
              src="https://images.unsplash.com/photo-1594737625785-a6cbdabd333c?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&h=600"
              alt="Ashwani Upadhyay in gym setting"
              className="rounded-xl shadow-lg w-full"
            />
          </div>
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">About Ashwani</h2>
            <div className="text-lg text-primary mb-6 p-4 bg-light-gray rounded-lg border-l-4 border-accent">
              <p className="italic font-medium">
                "If I can transform, you can too – and I’ll be there with you, every step of the way."
              </p>
            </div>
            <p className="text-gray-700 mb-6">
              A few years ago, I was exactly where you might be now – struggling to lose fat, confused about diets, and spending hours in the gym with little to no results. I know how frustrating it is to give your all and still not see the change you want.

              That’s when I decided to take matters into my own hands – diving deep into fitness, understanding what truly works, and transforming my own body and mindset.

              <br></br>Today, I help people just like you break through similar challenges – using science-backed workouts, realistic nutrition plans, and strategies that fit into your lifestyle. No crash diets. No extremes. Just consistent, smart training that gets real results.
            </p>
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="flex items-center space-x-3">
                <i className="fas fa-microscope text-accent text-xl"></i>
                <span className="text-gray-700">Scientific muscle building</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-utensils text-accent text-xl"></i>
                <span className="text-gray-700">Personalized nutrition plans</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-brain text-accent text-xl"></i>
                <span className="text-gray-700">Mind-muscle connection</span>
              </div>
              <div className="flex items-center space-x-3">
                <i className="fas fa-calendar-check text-accent text-xl"></i>
                <span className="text-gray-700">Long-term fitness habits</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
