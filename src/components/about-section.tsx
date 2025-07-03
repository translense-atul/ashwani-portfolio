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
                "It takes time and science to build the body you dream of."
              </p>
            </div>
            <p className="text-gray-700 mb-6">
              Strong believer in evidence-based fitness approaches, I focus on helping clients achieve sustainable transformations through scientific principles and personalized guidance.
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
