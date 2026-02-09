
import React from 'react';

const About: React.FC = () => {
  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="bg-[#E5E1DA]/30 py-20 mb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2D3436] mb-4">Our Story</h1>
          <p className="text-xl text-[#636E72] max-w-2xl mx-auto font-light">
            Founded with a vision to bring mindfulness and tranquility to the busy lives of Guwahati residents.
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
          <div className="order-2 lg:order-1">
            <h2 className="text-3xl font-serif text-[#2D3436] mb-6 underline decoration-[#8A9A5B] decoration-4 underline-offset-8">A Sanctuary in the City</h2>
            <p className="text-[#636E72] leading-relaxed mb-6">
              Bodhi Tree Yoga Studio began in 2021 as a small community gathering in a quiet corner of Rukmini Gaon. Our founder, a long-time practitioner of Hatha and Vinyasa, noticed a gap in the local fitness scene: a lack of spaces that emphasized mental well-being alongside physical health.
            </p>
            <p className="text-[#636E72] leading-relaxed mb-6">
              Named after the legendary tree under which Enlightenment was attained, our studio aims to be a place of growth, discovery, and grounding. We’ve grown from a few mats on the floor to a fully equipped modern studio, but our mission remains the same: making yoga accessible, inclusive, and deeply restorative.
            </p>
            <div className="bg-[#4F6D44]/5 border-l-4 border-[#4F6D44] p-6 italic text-[#4F6D44]">
              "We don't use yoga to get flexible. We use yoga to get better at being ourselves."
            </div>
          </div>
          <div className="order-1 lg:order-2 grid grid-cols-2 gap-4">
            <img src="https://picsum.photos/id/452/600/800" alt="Studio Space" className="rounded-2xl h-64 w-full object-cover" />
            <img src="https://picsum.photos/id/106/600/800" alt="Yoga Practice" className="rounded-2xl h-64 w-full object-cover mt-8" />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center py-16 border-t border-[#E5E1DA]">
          <div>
            <div className="w-16 h-16 bg-[#8A9A5B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#4F6D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">Inclusive Community</h3>
            <p className="text-[#636E72]">We welcome practitioners of all ages, body types, and experience levels. There's no judgment here.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-[#8A9A5B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
               <svg className="w-8 h-8 text-[#4F6D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">Mind-Body Focus</h3>
            <p className="text-[#636E72]">While we build strength and flexibility, our core focus remains on breath-work and mental clarity.</p>
          </div>
          <div>
            <div className="w-16 h-16 bg-[#8A9A5B]/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <svg className="w-8 h-8 text-[#4F6D44]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
              </svg>
            </div>
            <h3 className="text-xl font-serif font-bold mb-4">Expert Guidance</h3>
            <p className="text-[#636E72]">Our instructors are certified experts who provide personalized adjustments and support.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
