import React from 'react';
import { motion } from 'framer-motion';

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
};

function InternshipCard({ title, description, company, applyLink, animationControls, animationRef }) {
  return (
    <motion.div
      ref={animationRef}
      animate={animationControls}
      initial="hidden"
      variants={cardVariants}
      className="bg-card-dark dark:bg-card-dark rounded-lg shadow-lg p-6 flex flex-col justify-between hover:shadow-xl transition-shadow cursor-pointer"
    >
      <div>
        <h3 className="text-xl font-semibold text-primary-light mb-2">{title}</h3>
        <p className="text-gray-300 mb-4 line-clamp-3">{description}</p>
        <p className="text-sm font-medium text-gray-400 mb-3">Company: {company}</p>
      </div>
      <a
        href={applyLink}
        target="_blank"
        rel="noopener noreferrer"
        className="self-start px-4 py-2 rounded-md bg-primary-light text-background-dark hover:bg-primary-dark transition font-semibold"
        onClick={(e) => e.stopPropagation()}
      >
        Apply
      </a>
    </motion.div>
  );
}

export default InternshipCard;
