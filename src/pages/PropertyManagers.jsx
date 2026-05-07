import { motion } from 'framer-motion';
import { Handshake, TrendingUp, BarChart, CheckCircle, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

const PropertyManagers = () => {
  return (
    <div className="pt-32 pb-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center mb-32">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
             <div className="inline-block px-4 py-2 bg-primary/10 text-primary font-bold rounded-lg mb-6 uppercase tracking-widest text-xs">
                Partner With Us
             </div>
            <h1 className="text-6xl md:text-7xl font-black text-secondary leading-tight mb-10">
              Trusted By <br />
              <span className="text-primary">Property Managers</span>
            </h1>
            <p className="text-xl text-gray-500 mb-12 leading-relaxed">
              Managing rentals is tough. We make it easier by providing reliable, high-quality, end-to-end maintenance works for your portfolio.
            </p>

            <div className="space-y-6">
              {[
                'Full end-to-end works for property portfolios',
                'Fast turnaround for tenancy changes',
                'Professional reporting and documentation',
                'Reliable team available for surroundings of Christchurch'
              ].map((item, i) => (
                <div key={i} className="flex items-center space-x-4">
                  <div className="bg-primary rounded-full p-1">
                    <CheckCircle className="text-white" size={16} />
                  </div>
                  <span className="text-lg font-bold text-secondary">{item}</span>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="bg-secondary rounded-[3rem] p-12 text-white relative shadow-2xl border border-white/10"
          >
            <div className="absolute top-0 right-0 p-12 opacity-5">
               <Handshake size={200} />
            </div>

            <h2 className="text-4xl font-black mb-10">Cash Back <br/><span className="text-primary">Program</span></h2>

            <div className="space-y-10 mb-12">
              <div className="flex gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-primary h-fit">
                   <TrendingUp size={32} />
                </div>
                <div>
                   <h4 className="text-2xl font-black text-white mb-2 italic">10% Cash Back</h4>
                   <p className="text-gray-400 text-lg">We provide 10% cash back to property managers when you refer a job or book a work with us.</p>
                </div>
              </div>

              <div className="flex gap-6">
                <div className="bg-white/10 p-4 rounded-2xl text-primary h-fit">
                   <BarChart size={32} />
                </div>
                <div>
                   <h4 className="text-2xl font-black text-white mb-2 italic">Streamlined Billing</h4>
                   <p className="text-gray-400 text-lg">Monthly invoicing and clear service breakdowns for easy owner approvals.</p>
                </div>
              </div>
            </div>

            <Link to="/contact" className="flex items-center justify-between bg-primary text-white p-6 rounded-2xl font-black text-xl hover:bg-primary-dark transition-all group">
              <span>Start Partnership</span>
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </div>
    </div>
  );
};

export default PropertyManagers;
