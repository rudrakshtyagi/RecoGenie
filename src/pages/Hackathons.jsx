import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx';
import { motion } from 'framer-motion';

const hackathons = [
  {
    id: 1,
    name: 'Global Hackathon 2024',
    date: '2024-07-15',
    description: 'Join developers worldwide to build innovative solutions in 48 hours.',
    registrationLink: 'https://globalhackathon2024.com/register',
  },
  {
    id: 2,
    name: 'AI & ML Hackathon',
    date: '2024-08-10',
    description: 'Focus on artificial intelligence and machine learning projects.',
    registrationLink: 'https://aimlhackathon.com/register',
  },
  {
    id: 3,
    name: 'GreenTech Hackathon',
    date: '2024-09-05',
    description: 'Build sustainable solutions for a greener planet.',
    registrationLink: 'https://greentechhack.com/register',
  },
];

const cardVariants = {
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, ease: 'easeOut' } },
};

function Hackathons() {
  return (
    <section className="py-10 max-w-5xl mx-auto">
      <h1 className="text-4xl font-bold mb-10 text-primary-light select-none">Upcoming Hackathons</h1>
      <div className="space-y-8">
        {hackathons.map((hackathon) => (
          <HackathonCard key={hackathon.id} hackathon={hackathon} />
        ))}
      </div>
    </section>
  );
}

function HackathonCard({ hackathon }) {
  const { ref, controls } = useScrollAnimation();

  return (
    <motion.div
      ref={ref}
      animate={controls}
      initial="hidden"
      variants={cardVariants}
      className="bg-card-dark dark:bg-card-dark rounded-lg shadow-lg p-6 hover:shadow-xl transition-shadow cursor-pointer"
    >
      <h2 className="text-2xl font-semibold text-primary-light mb-2">{hackathon.name}</h2>
      <p className="text-gray-400 font-medium mb-2">{new Date(hackathon.date).toLocaleDateString()}</p>
      <p className="text-gray-300 mb-4">{hackathon.description}</p>
      <a
        href={hackathon.registrationLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-block px-5 py-2 rounded-md bg-primary-light text-background-dark hover:bg-primary-dark transition font-semibold"
      >
        Register
      </a>
    </motion.div>
  );
}

export default Hackathons;
