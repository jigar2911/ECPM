import { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle, AlertCircle } from 'lucide-react';

const QuoteForm = () => {
  const [status, setStatus] = useState('idle');
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    service: 'Water Blasting',
    details: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus('loading');

    try {
      const response = await fetch('/contact.php', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setStatus('success');
      } else {
        setStatus('error');
      }
    } catch (error) {
      console.error('Submission error:', error);
      setStatus('error');
    }
  };

  if (status === 'success') {
    return (
      <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-center p-8 bg-white rounded-2xl shadow-xl">
        <CheckCircle className="text-green-500 mx-auto mb-4" size={48} />
        <h3 className="text-2xl font-bold text-secondary mb-2">Message Sent!</h3>
        <p className="text-gray-600">Thank you for reaching out. We will get back to you shortly with a quote.</p>
        <button
          onClick={() => setStatus('idle')}
          className="mt-6 text-primary font-bold hover:underline"
        >
          Send another message
        </button>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      {status === 'error' && (
        <div className="bg-red-50 text-red-600 p-4 rounded-xl flex items-center space-x-2 mb-4">
          <AlertCircle size={20} />
          <span>Something went wrong. Please try again or call us directly.</span>
        </div>
      )}

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
        <input
          required
          name="name"
          value={formData.name}
          onChange={handleChange}
          type="text"
          placeholder="John Doe"
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Email Address</label>
          <input
            required
            name="email"
            value={formData.email}
            onChange={handleChange}
            type="email"
            placeholder="john@example.com"
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
          <input
            required
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            type="tel"
            placeholder="021 000 0000"
            className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Property Address</label>
        <input
          required
          name="address"
          value={formData.address}
          onChange={handleChange}
          type="text"
          placeholder="Street, Suburb, Christchurch"
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
        />
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Service Required</label>
        <select
          name="service"
          value={formData.service}
          onChange={handleChange}
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all appearance-none bg-white"
        >
          <option>Water Blasting</option>
          <option>Lawn & Garden Maintenance</option>
          <option>Window Cleaning</option>
          <option>Carpet Cleaning</option>
          <option>End of Tenancy Cleaning</option>
          <option>Rubbish Removal</option>
          <option>Gutter Cleaning</option>
          <option>Shower Glass Treatment</option>
          <option>Man with Van</option>
          <option>Property Manager Referral / Job</option>
          <option>Other</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-medium text-gray-700 mb-1">Job Details</label>
        <textarea
          name="details"
          value={formData.details}
          onChange={handleChange}
          placeholder="Tell us more about what you need..."
          className="w-full p-3 rounded-xl border border-gray-200 focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
          rows="4"
        ></textarea>
      </div>

      <button
        disabled={status === 'loading'}
        type="submit"
        className={`w-full bg-primary text-white py-4 rounded-xl font-bold flex items-center justify-center space-x-2 shadow-lg hover:bg-opacity-90 transition-all ${status === 'loading' ? 'opacity-70 cursor-not-allowed' : ''}`}
      >
        {status === 'loading' ? (
          <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
        ) : (
          <>
            <Send size={18} />
            <span>{formData.service === 'Property Manager Referral / Job' ? 'Send Referral' : 'Get My Free Quote'}</span>
          </>
        )}
      </button>
    </form>
  );
};

export default QuoteForm;
