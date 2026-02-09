
import React from 'react';

const Contact: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="bg-[#E5E1DA]/30 py-20 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2D3436] mb-4">Connect With Us</h1>
        <p className="text-xl text-[#636E72] max-w-2xl mx-auto font-light px-4">
          Have questions about our classes or looking to start your free trial? We'd love to hear from you.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">
          {/* Contact Info */}
          <div>
            <h2 className="text-3xl font-serif text-[#2D3436] mb-8">Studio Information</h2>
            
            <div className="space-y-8">
              <div className="flex items-start">
                <div className="bg-[#4F6D44]/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-[#4F6D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#2D3436]">Location</h4>
                  <p className="text-[#636E72]">1st Floor, Building 12, Rukmini Gaon, G.S. Road,<br />Guwahati, Assam 781022</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#4F6D44]/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-[#4F6D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#2D3436]">Studio Hours</h4>
                  <p className="text-[#636E72]">Mon - Fri: 06:00 AM - 08:30 PM</p>
                  <p className="text-[#636E72]">Sat: 07:00 AM - 02:00 PM</p>
                  <p className="text-[#636E72]">Sun: Closed for Workshops</p>
                </div>
              </div>

              <div className="flex items-start">
                <div className="bg-[#4F6D44]/10 p-3 rounded-lg mr-4">
                  <svg className="w-6 h-6 text-[#4F6D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <h4 className="font-bold text-[#2D3436]">Email & Phone</h4>
                  <p className="text-[#636E72]">hello@bodhitreeyoga.com</p>
                  <p className="text-[#636E72]">+91 98765 43210</p>
                </div>
              </div>
            </div>

            {/* Map Placeholder */}
            <div className="mt-12 h-80 bg-[#E5E1DA] rounded-3xl overflow-hidden relative">
              <div className="absolute inset-0 flex items-center justify-center text-[#8A9A5B] font-bold">
                <div className="text-center p-8">
                  <svg className="w-12 h-12 mx-auto mb-4" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
                  </svg>
                  <p>Interactive Map of Rukmini Gaon Area</p>
                  <p className="text-xs mt-2 uppercase tracking-widest">Near Rukmini Gaon Masjid</p>
                </div>
              </div>
              {/* Actual Map iframe would go here */}
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-3xl p-8 md:p-12 shadow-sm border border-[#E5E1DA]">
            <h2 className="text-3xl font-serif text-[#2D3436] mb-2">Book Your Free Trial</h2>
            <p className="text-[#636E72] mb-8">Fill out the form below and we'll reach out to schedule your first session.</p>
            
            <form name="contact" method="POST" data-netlify="true" className="space-y-6">
              <input type="hidden" name="form-name" value="contact" />
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-bold text-[#2D3436] mb-2 uppercase tracking-wide">Full Name</label>
                  <input
                    type="text"
                    name="name"
                    required
                    placeholder="E.g. Akash Barua"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E1DA] focus:outline-none focus:border-[#4F6D44] transition-colors"
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-[#2D3436] mb-2 uppercase tracking-wide">Phone Number</label>
                  <input
                    type="tel"
                    name="phone"
                    required
                    placeholder="91-XXXXX-XXXXX"
                    className="w-full px-4 py-3 rounded-xl border border-[#E5E1DA] focus:outline-none focus:border-[#4F6D44] transition-colors"
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#2D3436] mb-2 uppercase tracking-wide">Interested Class</label>
                <select
                  name="class"
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E1DA] focus:outline-none focus:border-[#4F6D44] transition-colors appearance-none bg-white"
                >
                  <option>Beginner Yoga</option>
                  <option>Strength & Flexibility</option>
                  <option>Mindfulness & Relaxation</option>
                  <option>Full Body Yoga Flow</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-bold text-[#2D3436] mb-2 uppercase tracking-wide">Message (Optional)</label>
                <textarea
                  name="message"
                  rows={4}
                  placeholder="Tell us about your fitness goals..."
                  className="w-full px-4 py-3 rounded-xl border border-[#E5E1DA] focus:outline-none focus:border-[#4F6D44] transition-colors"
                ></textarea>
              </div>

              <div className="flex items-center space-x-2 text-sm text-red-600 font-medium mb-4">
                <span className="w-2 h-2 bg-red-600 rounded-full animate-pulse"></span>
                <span>Limited trial slots available for this week.</span>
              </div>

              <button
                type="submit"
                className="w-full bg-[#4F6D44] text-white py-4 rounded-full font-bold text-lg hover:bg-[#3D5535] transition-all transform active:scale-95"
              >
                Claim Free Session
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
