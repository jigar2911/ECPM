import { motion } from 'framer-motion';
import {
  Waves, Sparkles, Wind, Grid, Droplets,
  Scissors, Trash2, Home, Truck, GlassWater
} from 'lucide-react';
import { Link } from 'react-router-dom';

const Services = () => {
  const services = [
    { icon: <Waves />, name: 'Water Blasting', desc: 'Powerful exterior cleaning for paths, decks, and walls.' },
    { icon: <Grid />, name: 'Driveways & Patios', desc: 'Restoring your driveways and outdoor living areas.' },
    { icon: <Sparkles />, name: 'End of Tenancy', desc: 'Thorough bond cleaning to ensure you get your deposit back.' },
    { icon: <Wind />, name: 'Carpet Cleaning', desc: 'Professional deep steam cleaning for all carpet types.' },
    { icon: <Grid />, name: 'Window Cleaning', desc: 'Streak-free interior and exterior window services.' },
    { icon: <Droplets />, name: 'Gutter Cleaning', desc: 'Safely clearing gutters and downpipes from debris.' },
    { icon: <Scissors />, name: 'Lawn & Garden', desc: 'Regular maintenance, mowing, and garden care.' },
    { icon: <Trash2 />, name: 'Rubbish Removal', desc: 'Quick removal of unwanted waste and bin cleaning.' },
    { icon: <GlassWater />, name: 'Shower Glass', desc: 'Specialized hard water stain removal and restoration.' },
    { icon: <Truck />, name: 'Man with Van', desc: 'Local deliveries and small item removals.' },
  ];

  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-24">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl font-black text-secondary mb-8"
          >
            Our Professional <span className="text-primary">Services</span>
          </motion.h1>
          <p className="text-xl text-gray-500 max-w-3xl mx-auto">
            We provide a comprehensive range of property maintenance services in Christchurch and Surrounding areas.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {services.map((service, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.1 }}
              viewport={{ once: true }}
              className="p-10 rounded-[2.5rem] bg-gray-50 border border-gray-100 hover:bg-white hover:shadow-2xl hover:border-transparent transition-all group"
            >
              <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-8 text-primary shadow-sm group-hover:bg-primary group-hover:text-white transition-all duration-300 transform group-hover:rotate-6">
                {service.icon}
              </div>
              <h3 className="text-2xl font-black text-secondary mb-4">{service.name}</h3>
              <p className="text-gray-500 leading-relaxed text-lg">{service.desc}</p>
            </motion.div>
          ))}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="p-10 rounded-[2.5rem] bg-primary text-white flex flex-col justify-between shadow-xl shadow-primary/20"
          >
            <div>
              <h3 className="text-3xl font-black mb-6 italic">And Much More...</h3>
              <p className="text-white/80 text-lg leading-relaxed">
                If you need something specific done for your property, just reach out! We handle many custom tasks for our clients.
              </p>
            </div>
            <Link to="/contact" className="mt-12 bg-white text-primary px-8 py-4 rounded-full font-black text-center hover:bg-gray-100 transition-all flex items-center justify-center space-x-2">
              <span>Request Custom Job</span>
              <ArrowRight size={20} />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

import { ArrowRight } from 'lucide-react';
export default Services;
