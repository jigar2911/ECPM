import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Facebook } from 'lucide-react';
import QuoteForm from '../components/QuoteForm';

const Contact = () => {
  return (
    <div className="pt-32 pb-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            <h1 className="text-7xl font-black text-secondary mb-8">
              Let's <span className="text-primary">Work</span> <br />Together
            </h1>
            <p className="text-xl text-gray-500 mb-16 leading-relaxed">
              Have a job in mind? Need a quick quote for a property? Reach out and we'll get back to you with a free estimate.
            </p>

            <div className="space-y-10">
              <a href="tel:+64210598426" className="flex items-center space-x-6 group">
                <div className="bg-gray-100 p-5 rounded-2xl text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Phone size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Direct Call</p>
                  <p className="text-3xl font-black text-secondary">+64 21 059 8426</p>
                </div>
              </a>

              <a href="mailto:earthcaremaintenance@gmail.com" className="flex items-center space-x-6 group">
                <div className="bg-gray-100 p-5 rounded-2xl text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Mail size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Email Support</p>
                  <p className="text-xl font-black text-secondary break-all">earthcaremaintenance@gmail.com</p>
                </div>
              </a>

              <a href="https://www.facebook.com/earthcaremaintenancencl" className="flex items-center space-x-6 group">
                <div className="bg-gray-100 p-5 rounded-2xl text-secondary group-hover:bg-primary group-hover:text-white transition-all duration-300">
                  <Facebook size={32} />
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-400 uppercase tracking-widest mb-1">Follow Us</p>
                  <p className="text-xl font-black text-secondary">earthcaremaintenancencl</p>
                </div>
              </a>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-gray-50 p-10 rounded-[3rem] border border-gray-100 shadow-sm">
               <h3 className="text-3xl font-black text-secondary mb-8 italic">Request a Quote</h3>
               <QuoteForm />
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
