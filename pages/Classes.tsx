
import React from 'react';
import { Link } from 'react-router-dom';

const Classes: React.FC = () => {
  const classes = [
    {
      id: 'beginner',
      name: 'Beginner Yoga',
      duration: '60 min',
      intensity: 'Low',
      description: 'The perfect starting point. We focus on basic postures, alignment, and terminology in a slow-paced, supportive environment.',
      benefits: ['Improved flexibility', 'Stress reduction', 'Better posture'],
      image: 'https://picsum.photos/id/40/800/600'
    },
    {
      id: 'strength',
      name: 'Strength & Flexibility',
      duration: '75 min',
      intensity: 'Medium/High',
      description: 'A dynamic class that combines traditional asanas with core-strengthening movements to build a resilient and balanced body.',
      benefits: ['Toned muscles', 'Core stability', 'Increased stamina'],
      image: 'https://picsum.photos/id/526/800/600'
    },
    {
      id: 'mindfulness',
      name: 'Mindfulness & Relaxation',
      duration: '60 min',
      intensity: 'Low',
      description: 'Settle into stillness. This class uses Yin and Restorative techniques to target deep connective tissues and calm the nervous system.',
      benefits: ['Better sleep', 'Mental clarity', 'Joint health'],
      image: 'https://picsum.photos/id/429/800/600'
    },
    {
      id: 'fullbody',
      name: 'Full Body Yoga Flow',
      duration: '60 min',
      intensity: 'Medium',
      description: 'A breath-synchronized movement practice that flows through a creative sequence of poses, warming the body and centering the mind.',
      benefits: ['Detoxification', 'Full body engagement', 'Mood elevation'],
      image: 'https://picsum.photos/id/616/800/600'
    }
  ];

  return (
    <div className="pb-24">
      {/* Page Header */}
      <div className="bg-[#E5E1DA]/30 py-20 mb-20 text-center">
        <h1 className="text-4xl md:text-6xl font-serif font-bold text-[#2D3436] mb-4">Our Classes</h1>
        <p className="text-xl text-[#636E72] max-w-2xl mx-auto font-light px-4">
          Discover the right practice for your current needs and goals.
        </p>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {classes.map((cls) => (
            <div key={cls.id} className="bg-white rounded-3xl overflow-hidden shadow-sm border border-[#E5E1DA] hover:shadow-md transition-shadow">
              <div className="h-64 relative">
                <img src={cls.image} alt={cls.name} className="w-full h-full object-cover" />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-4 py-1 rounded-full text-xs font-bold uppercase tracking-widest text-[#4F6D44]">
                  {cls.intensity} Intensity
                </div>
              </div>
              <div className="p-8">
                <div className="flex justify-between items-start mb-4">
                  <h3 className="text-2xl font-serif font-bold text-[#2D3436]">{cls.name}</h3>
                  <span className="text-[#8A9A5B] font-semibold">{cls.duration}</span>
                </div>
                <p className="text-[#636E72] mb-6 leading-relaxed">
                  {cls.description}
                </p>
                <div className="mb-8">
                  <h4 className="text-xs uppercase tracking-widest font-bold text-[#2D3436] mb-3">Key Benefits</h4>
                  <ul className="grid grid-cols-2 gap-2">
                    {cls.benefits.map((benefit, bIdx) => (
                      <li key={bIdx} className="flex items-center text-sm text-[#636E72]">
                        <svg className="w-4 h-4 text-[#4F6D44] mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                        </svg>
                        {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
                <Link
                  to="/contact"
                  className="block w-full text-center bg-[#FAF9F6] border-2 border-[#4F6D44] text-[#4F6D44] px-6 py-3 rounded-full font-bold hover:bg-[#4F6D44] hover:text-white transition-all duration-300"
                >
                  Book This Class
                </Link>
              </div>
            </div>
          ))}
        </div>

        {/* Schedule Hint */}
        <div className="mt-20 bg-[#4F6D44] rounded-3xl p-10 text-white flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl font-serif mb-2">Want to see the full weekly schedule?</h2>
            <p className="text-[#C8D3C5]">We offer morning, afternoon, and evening slots to fit your busy life.</p>
          </div>
          <a href="#" className="bg-white text-[#4F6D44] px-8 py-4 rounded-full font-bold whitespace-nowrap hover:bg-[#FAF9F6] transition-colors">
            Download PDF Schedule
          </a>
        </div>
      </div>
    </div>
  );
};

export default Classes;
