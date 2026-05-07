import { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X, Phone, MessageCircle, Leaf } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Property Managers', path: '/property-managers' },
    { name: 'Contact', path: '/contact' },
  ];

  const contactInfo = {
    phone: '+64 21 059 8426',
    whatsapp: '64210598426'
  };

  return (
    <nav className="fixed w-full z-50 bg-secondary/95 backdrop-blur-md py-3 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <Link to="/" className="flex items-center space-x-2 group">
          <div className="relative">
            <Leaf className="text-primary group-hover:rotate-12 transition-transform duration-300" size={32} />
            <div className="absolute -top-1 -right-1 w-3 h-3 bg-white rounded-full flex items-center justify-center">
              <div className="w-1.5 h-1.5 bg-primary rounded-full animate-pulse"></div>
            </div>
          </div>
          <div className="flex flex-col leading-none">
            <span className="text-xl font-black text-white tracking-tighter uppercase">Earth<span className="text-primary">Care</span></span>
            <span className="text-[10px] text-gray-400 font-bold tracking-[0.2em] uppercase">Property Maintenance</span>
          </div>
        </Link>

        <div className="hidden lg:flex items-center space-x-8">
          <div className="flex items-center space-x-6 mr-8 border-r border-white/10 pr-8">
            <a href={`tel:${contactInfo.phone}`} className="text-white hover:text-primary transition-colors flex items-center space-x-2 text-sm">
              <Phone size={16} className="text-primary" />
              <span>{contactInfo.phone}</span>
            </a>
            <a href={`https://wa.me/${contactInfo.whatsapp}`} target="_blank" rel="noopener noreferrer" className="text-white hover:text-primary transition-colors flex items-center space-x-2 text-sm">
              <MessageCircle size={16} className="text-primary" />
              <span>WhatsApp</span>
            </a>
          </div>

          {navLinks.map((link) => (
            <Link key={link.name} to={link.path} className="text-white hover:text-primary font-medium transition-colors">
              {link.name}
            </Link>
          ))}
          <Link to="/contact" className="bg-primary text-white px-6 py-2.5 rounded-full font-bold hover:bg-opacity-90 transition-all shadow-lg hover:scale-105 active:scale-95">
            Get Quote
          </Link>
        </div>

        <div className="lg:hidden flex items-center space-x-4">
          <a href={`tel:${contactInfo.phone}`} className="text-primary p-2">
            <Phone size={20} />
          </a>
          <button onClick={() => setIsOpen(!isOpen)} className="text-white p-2">
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-secondary border-t border-white/10 overflow-hidden"
          >
            <div className="flex flex-col p-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  onClick={() => setIsOpen(false)}
                  className="text-white text-lg font-medium hover:text-primary transition-colors"
                >
                  {link.name}
                </Link>
              ))}
              <div className="pt-4 border-t border-white/10 flex flex-col space-y-4">
                <a href={`tel:${contactInfo.phone}`} className="flex items-center space-x-3 text-white">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <Phone size={20} className="text-primary" />
                  </div>
                  <span>{contactInfo.phone}</span>
                </a>
                <a href={`https://wa.me/${contactInfo.whatsapp}`} className="flex items-center space-x-3 text-white">
                  <div className="bg-primary/20 p-2 rounded-full">
                    <MessageCircle size={20} className="text-primary" />
                  </div>
                  <span>WhatsApp Chat</span>
                </a>
                <Link
                  to="/contact"
                  onClick={() => setIsOpen(false)}
                  className="bg-primary text-white text-center py-4 rounded-xl font-bold shadow-lg"
                >
                  Request a Free Quote
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};
export default Navbar;
