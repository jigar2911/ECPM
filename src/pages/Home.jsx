import { motion } from 'framer-motion';
import { Shield, Clock, ThumbsUp, ArrowRight, Star, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center pt-20">
        <div className="absolute inset-0 z-0">
          <img
            src="assets/img/IMG-20260507-WA0000.jpg"
            className="w-full h-full object-cover object-center brightness-[0.4]"
            alt="Earth Care Van"
          />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-3xl"
          >
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5 }}
              className="flex items-center space-x-2 mb-6 bg-primary/20 backdrop-blur-md border border-primary/30 px-4 py-2 rounded-full w-fit"
            >
              <Star className="text-primary" size={16} fill="currentColor" />
              <span className="text-primary font-bold text-sm tracking-wider uppercase">Christchurch's Top Rated Property Care</span>
            </motion.div>
            <h1 className="text-5xl md:text-8xl font-black text-white leading-[0.9] mb-8">
              Expert Care <br />
              <span className="text-primary">For Your Property</span>
            </h1>
            <p className="text-xl text-gray-200 mb-12 leading-relaxed max-w-2xl">
              From water blasting and carpet cleaning to lawn maintenance and rubbish removal. We provide premium property solutions across Christchurch.
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-6">
              <Link to="/contact" className="bg-primary hover:bg-primary-dark text-white px-10 py-5 rounded-full font-black text-lg shadow-2xl transition-all transform hover:scale-105 text-center">
                Get a Free Quote
              </Link>
              <Link to="/services" className="bg-white/10 backdrop-blur-md border border-white/30 text-white px-10 py-5 rounded-full font-black text-lg hover:bg-white/20 transition-all text-center">
                Our Services
              </Link>
            </div>
          </motion.div>
        </div>

        {/* Animated Background Elements */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden md:block">
           <div className="w-1 h-12 rounded-full bg-gradient-to-b from-white/50 to-transparent"></div>
        </div>
      </section>

      {/* Trust Badges */}
      <section className="bg-white py-12 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 flex flex-wrap justify-center gap-12 items-center opacity-60 grayscale hover:grayscale-0 transition-all">
           <span className="text-2xl font-black text-secondary italic">RELIABLE</span>
           <span className="text-2xl font-black text-secondary italic">PROFESSIONAL</span>
           <span className="text-2xl font-black text-secondary italic">TRUSTED</span>
           <span className="text-2xl font-black text-secondary italic">COMMITTED</span>
        </div>
      </section>

      {/* Services Preview Grid */}
      <section className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
             <h2 className="text-4xl md:text-5xl font-black text-secondary mb-4">Complete Property Solutions</h2>
             <p className="text-gray-500 text-lg max-w-2xl mx-auto">One company for all your maintenance needs. We handle it all so you don't have to.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { title: 'Exterior Cleaning', img: 'assets/img/IMG-20260506-WA0000.jpg', services: ['Water Blasting', 'Driveway Washing', 'Window Cleaning'] },
              { title: 'Indoor Care', img: 'assets/img/IMG-20260507-WA0000.jpg', services: ['Carpet Cleaning', 'End of Tenancy', 'Shower Glass Stain Removal'] },
              { title: 'Garden & Waste', img: 'assets/img/IMG-20260507-WA0000.jpg', services: ['Lawn Maintenance', 'Gutter Cleaning', 'Rubbish Removal'] },
            ].map((box, i) => (
              <motion.div
                key={i}
                whileHover={{ y: -10 }}
                className="bg-white rounded-3xl overflow-hidden shadow-xl border border-gray-100 group"
              >
                <div className="h-64 overflow-hidden relative">
                  <img src={box.img} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-gradient-to-t from-secondary to-transparent opacity-60"></div>
                  <h3 className="absolute bottom-6 left-8 text-2xl font-bold text-white">{box.title}</h3>
                </div>
                <div className="p-8">
                  <ul className="space-y-3">
                    {box.services.map((s, idx) => (
                      <li key={idx} className="flex items-center text-gray-600">
                        <CheckCircle className="text-primary mr-3" size={18} />
                        {s}
                      </li>
                    ))}
                  </ul>
                  <Link to="/services" className="mt-8 flex items-center text-primary font-bold group">
                    View Details <ArrowRight className="ml-2 group-hover:translate-x-2 transition-transform" size={18} />
                  </Link>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-secondary mb-4">What Our Customers Say</h2>
            <div className="w-24 h-1 bg-primary mx-auto"></div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                name: "Sarah Jenkins",
                role: "Homeowner in Riccarton",
                content: "Earth Care did an amazing job with our driveway water blasting. It looks brand new! Highly recommend their professional service."
              },
              {
                name: "Mark Thompson",
                role: "Property Manager",
                content: "We've been using Earth Care for all our end-of-tenancy cleans and garden maintenance. They are reliable, thorough, and the 10% cashback is a great bonus!"
              },
              {
                name: "David Wilson",
                role: "Local Resident",
                content: "Excellent lawn mowing and edge trimming. They are always on time and leave the place spotless. Best garden service in Christchurch."
              }
            ].map((testimonial, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.1 }}
                viewport={{ once: true }}
                className="bg-gray-50 p-8 rounded-2xl shadow-sm border border-gray-100"
              >
                <div className="flex text-primary mb-4">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-current" />
                  ))}
                </div>
                <p className="text-gray-600 italic mb-6">"{testimonial.content}"</p>
                <div>
                  <h4 className="font-bold text-secondary">{testimonial.name}</h4>
                  <p className="text-sm text-gray-500">{testimonial.role}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Property Manager Banner */}
      <section className="py-20 bg-secondary relative overflow-hidden">
        <div className="absolute -right-20 -top-20 w-96 h-96 bg-primary/10 rounded-full blur-3xl"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center md:text-left">
          <div className="flex flex-col md:flex-row items-center justify-between gap-10">
            <div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4">Property Manager?</h2>
              <p className="text-xl text-gray-400 max-w-xl">We partner with property managers for end-to-end rental maintenance.</p>
            </div>
            <div className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center backdrop-blur-sm">
               <div className="text-primary text-5xl font-black mb-2">10% CASH BACK</div>
               <p className="text-white font-bold tracking-widest uppercase text-sm mb-6">ON REFERRALS OR JOBS</p>
               <Link to="/property-managers" className="inline-block bg-primary text-white px-8 py-3 rounded-full font-black hover:bg-primary-dark transition-all">
                 Join Partnership
               </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
