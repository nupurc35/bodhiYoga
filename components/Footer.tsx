
import React from 'react';
import { Link } from 'react-router-dom';

const Footer: React.FC = () => {
  return (
    <footer className="bg-[#4F6D44] text-[#FAF9F6] pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h3 className="text-2xl font-serif font-bold mb-4">Bodhi Tree Yoga Studio</h3>
            <p className="text-[#C8D3C5] max-w-sm mb-6 leading-relaxed">
              Find your inner peace amidst the bustle of Guwahati. Our studio offers a sanctuary for all skill levels to discover the transformative power of traditional and modern yoga.
            </p>
            <div className="flex space-x-4">
              {/* Simple Social Icons placeholders */}
              <a href="#" className="hover:text-[#FAF9F6]/70 transition-colors">Instagram</a>
              <a href="#" className="hover:text-[#FAF9F6]/70 transition-colors">Facebook</a>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-6">Quick Links</h4>
            <ul className="space-y-4 text-[#C8D3C5]">
              <li><Link to="/" className="hover:text-white transition-colors">Home</Link></li>
              <li><Link to="/about" className="hover:text-white transition-colors">Our Story</Link></li>
              <li><Link to="/classes" className="hover:text-white transition-colors">Classes</Link></li>
              <li><Link to="/contact" className="hover:text-white transition-colors">Contact Us</Link></li>
            </ul>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-6">Contact</h4>
            <ul className="space-y-4 text-[#C8D3C5]">
              <li>Rukmini Gaon, G.S. Road<br />Guwahati, Assam 781022</li>
              <li>+91 98765 43210</li>
              <li>hello@bodhitreeyoga.com</li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-[#FAF9F6]/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-[#C8D3C5]">
          <p>© {new Date().getFullYear()} Bodhi Tree Yoga Studio. All rights reserved.</p>
          <div className="mt-4 md:mt-0 space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
