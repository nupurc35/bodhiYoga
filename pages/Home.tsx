
import React from 'react';
import { Link } from 'react-router-dom';

const Home: React.FC = () => {
  return (
    <div className="space-y-24 pb-20">
      {/* Hero Section */}
      <section className="relative h-[85vh] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src="https://picsum.photos/id/128/1920/1080"
            alt="Yoga Practice"
            className="w-full h-full object-cover filter brightness-[0.7] scale-105 transition-transform duration-10000 hover:scale-100"
          />
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center sm:text-left">
          <div className="max-w-2xl bg-white/10 backdrop-blur-sm p-8 sm:p-12 rounded-2xl border border-white/20">
            <h1 className="text-4xl md:text-6xl font-serif font-bold text-white mb-6 leading-tight">
              Begin Your Journey to <span className="italic text-[#C8D3C5]">Inner Balance</span>
            </h1>
            <p className="text-xl text-white/90 mb-10 leading-relaxed font-light">
              Guwahati's most tranquil yoga sanctuary. Beginner-friendly classes designed to melt away stress and build sustainable strength.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center sm:justify-start">
              <Link
                to="/contact"
                className="bg-[#4F6D44] text-white px-8 py-4 rounded-full text-lg font-semibold hover:bg-[#3D5535] transition-all duration-300 text-center"
              >
                Claim Your Free Trial
              </Link>
              <Link
                to="/classes"
                className="bg-white/10 text-white border border-white/30 px-8 py-4 rounded-full text-lg font-semibold hover:bg-white/20 transition-all duration-300 backdrop-blur-sm text-center"
              >
                Explore Classes
              </Link>
            </div>
            <p className="mt-6 text-white/70 text-sm flex items-center justify-center sm:justify-start">
              <span className="inline-block w-2 h-2 bg-red-400 rounded-full mr-2 animate-pulse"></span>
              Only 4 free spots left this week!
            </p>
          </div>
        </div>
      </section>

      {/* Intro Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="max-w-3xl mx-auto">
          <span className="text-[#8A9A5B] font-semibold tracking-widest uppercase text-sm block mb-4">Welcome to Bodhi Tree</span>
          <h2 className="text-3xl md:text-5xl font-serif text-[#2D3436] mb-8">
            Experience the harmony of breath, movement, and stillness.
          </h2>
          <p className="text-lg text-[#636E72] leading-relaxed mb-10">
            Located in the heart of Rukmini Gaon, Bodhi Tree Yoga Studio is more than just a fitness space. It's a community dedicated to mindful living. We believe yoga is for every body, regardless of flexibility or experience.
          </p>
          <Link to="/about" className="text-[#4F6D44] font-semibold border-b-2 border-[#4F6D44] pb-1 hover:text-[#3D5535] hover:border-[#3D5535] transition-all">
            Read Our Story
          </Link>
        </div>
      </section>

      {/* Class Highlights */}
      <section className="bg-[#E5E1DA]/30 py-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl md:text-5xl font-serif text-[#2D3436] mb-4">Our Signature Classes</h2>
              <p className="text-[#636E72] max-w-xl">Curated sessions designed to meet you where you are on your wellness path.</p>
            </div>
            <Link to="/classes" className="mt-6 md:mt-0 text-[#4F6D44] font-semibold flex items-center">
              View Schedule
              <svg className="w-5 h-5 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </Link>
          </div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              { title: 'Beginner Yoga', desc: 'Perfect foundation for newcomers.', img: 'https://picsum.photos/id/616/600/800' },
              { title: 'Full Body Flow', desc: 'Dynamic movement for strength.', img: 'https://picsum.photos/id/600/600/800' },
              { title: 'Yin Yoga', desc: 'Deep stretching and relaxation.', img: 'https://picsum.photos/id/158/600/800' },
              { title: 'Vinyasa Flow', desc: 'Breath-synchronized sequences.', img: 'https://picsum.photos/id/351/600/800' },
            ].map((cls, idx) => (
              <div key={idx} className="group cursor-pointer">
                <div className="relative aspect-[3/4] overflow-hidden rounded-2xl mb-4">
                  <img src={cls.img} alt={cls.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-all duration-300"></div>
                </div>
                <h3 className="text-xl font-serif font-bold text-[#2D3436]">{cls.title}</h3>
                <p className="text-[#636E72] text-sm">{cls.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-[#4F6D44] rounded-[2rem] p-12 md:p-20 text-white relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <svg className="w-32 h-32" fill="currentColor" viewBox="0 0 32 32">
              <path d="M10 8v8H6v2a2 2 0 002 2h2v4H8a6 6 0 01-6-6v-8a2 2 0 012-2h4zm16 0v8h-4v2a2 2 0 002 2h2v4h-2a6 6 0 01-6-6v-8a2 2 0 012-2h4z" />
            </svg>
          </div>
          <div className="max-w-2xl relative z-10">
            <h2 className="text-3xl md:text-5xl font-serif mb-12 italic">"Bodhi Tree changed my perception of yoga. The instructors are patient and the vibe is incredibly healing."</h2>
            <div className="flex items-center">
              <div className="w-16 h-16 rounded-full overflow-hidden border-2 border-[#C8D3C5] mr-4">
                <img src="https://picsum.photos/id/64/100/100" alt="Student" />
              </div>
              <div>
                <p className="font-bold text-lg">Priyanka Sarma</p>
                <p className="text-[#C8D3C5] text-sm">Member since 2022</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-12">
        <div className="bg-[#FAF9F6] border-2 border-[#E5E1DA] rounded-3xl p-10 text-center">
          <h2 className="text-3xl font-serif text-[#2D3436] mb-6">Ready to find your flow?</h2>
          <p className="text-[#636E72] mb-8 max-w-xl mx-auto">
            Your first class is always on us. Come visit our studio in Rukmini Gaon and experience the transformation for yourself.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
             <Link
                to="/contact"
                className="bg-[#4F6D44] text-white px-10 py-4 rounded-full text-lg font-semibold hover:bg-[#3D5535] transition-all duration-300"
              >
                Book Free Trial Session
              </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
