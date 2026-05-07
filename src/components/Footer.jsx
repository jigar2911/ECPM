import { Link } from 'react-router-dom';
import { Phone, Mail, Facebook, Instagram, Leaf } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-secondary text-white pt-20 pb-10 border-t border-white/5">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          <div className="space-y-6">
            <div className="flex items-center space-x-2">
              <Leaf className="text-primary" size={28} />
              <span className="text-xl font-black tracking-tighter">EARTH<span className="text-primary">CARE</span></span>
            </div>
            <p className="text-gray-400 leading-relaxed">
              Premium property maintenance services in Christchurch. We take care of your property as if it were our own.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="w-10 h-10 bg-white/5 rounded-full flex items-center justify-center hover:bg-primary transition-colors">
                <Instagram size={20} />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 italic">Quick Links</h4>
            <ul className="space-y-4">
              <li><Link to="/" className="text-gray-400 hover:text-primary transition-colors">Home</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors">Our Services</Link></li>
              <li><Link to="/property-managers" className="text-gray-400 hover:text-primary transition-colors">Property Managers</Link></li>
              <li><Link to="/contact" className="text-gray-400 hover:text-primary transition-colors">Request a Quote</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 italic">Our Services</h4>
            <ul className="space-y-4">
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Water Blasting</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Carpet Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Window Cleaning</Link></li>
              <li><Link to="/services" className="text-gray-400 hover:text-primary transition-colors text-sm">Lawn & Garden</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-bold mb-8 italic">Contact Info</h4>
            <ul className="space-y-6">
              <li className="flex items-start space-x-3">
                <Phone className="text-primary mt-1" size={20} />
                <div>
                   <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Call Us</p>
                   <p className="font-bold">+64 21 059 8426</p>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <Mail className="text-primary mt-1" size={20} />
                <div>
                   <p className="text-sm font-bold text-gray-500 uppercase tracking-widest mb-1">Email Us</p>
                   <p className="font-bold break-all">info@earthcaremaintenance.co.nz</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} Earth Care Property Maintenance Christchurch.
          </p>
          <div className="flex space-x-6 text-sm text-gray-500">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
