
import React from 'react';

const FloatingActions: React.FC = () => {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col space-y-3 z-50">
      <a
        href="https://wa.me/919876543210"
        target="_blank"
        rel="noopener noreferrer"
        className="bg-[#25D366] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center group"
        aria-label="Contact on WhatsApp"
      >
        <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766 0-3.18-2.587-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-1.557-.487-2.614-1.456-1.057-.97-1.423-1.494-1.639-1.859-.215-.365-.236-.639-.236-.639 0-.254.11-.376.185-.478.074-.103.147-.118.197-.162.05-.044.1-.044.15-.044s.1-.015.15 0c.05.015.118.044.18.177.062.133.215.516.236.56.021.044.035.089.007.148-.028.059-.044.103-.088.162s-.1.133-.144.177c-.044.044-.088.089-.044.162.044.074.197.325.42.53.287.265.53.34.613.383.082.044.131.044.177 0 .044-.044.191-.221.242-.31s.088-.133.162-.103c.074.029.47.221.552.265.081.044.133.059.155.089.022.029.022.177-.122.582z"/>
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap text-sm font-semibold">
          WhatsApp Us
        </span>
      </a>
      
      <a
        href="tel:+919876543210"
        className="bg-[#4F6D44] text-white p-3.5 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center group"
        aria-label="Call Studio"
      >
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
        </svg>
        <span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-300 group-hover:ml-2 whitespace-nowrap text-sm font-semibold">
          Call Now
        </span>
      </a>
    </div>
  );
};

export default FloatingActions;
