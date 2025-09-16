import React, { useState, useMemo } from 'react';
import InternshipCard from '../components/InternshipCard.jsx';
import SearchBar from '../components/SearchBar.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx';
import BackgroundAbstracts from '../components/BackgroundAbstracts.jsx';

const internshipData = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    description:
      'Work with React and TailwindCSS to build beautiful user interfaces for our platform.',
    company: 'Tech Solutions Ltd.',
    applyLink: 'https://techsolutions.com/apply/frontend',
  },
  {
    id: 2,
    title: 'Backend Developer Intern',
    description:
      'Develop and maintain APIs using Node.js and Express for scalable applications.',
    company: 'Innovatech Corp.',
    applyLink: 'https://innovatech.com/apply/backend',
  },
  {
    id: 3,
    title: 'Data Science Intern',
    description:
      'Analyze data and build machine learning models to improve business intelligence.',
    company: 'DataMinds Inc.',
    applyLink: 'https://dataminds.com/apply/datascience',
  },
  {
    id: 4,
    title: 'UI/UX Design Intern',
    description:
      'Collaborate with product teams to create user-centric designs and prototypes.',
    company: 'Creative Studio',
    applyLink: 'https://creativestudio.com/apply/uiux',
  },
  {
    id: 5,
    title: 'Mobile App Developer Intern',
    description:
      'Build cross-platform mobile applications using React Native and modern tools.',
    company: 'MobileWave',
    applyLink: 'https://mobilewave.com/apply/mobile',
  },
  {
    id: 6,
    title: 'Cloud Engineer Intern',
    description:
      'Assist in managing cloud infrastructure and deployment pipelines.',
    company: 'CloudNet',
    applyLink: 'https://cloudnet.com/apply/cloud',
  },
  {
    id: 7,
    title: 'Marketing Intern',
    description:
      'Help in creating marketing campaigns and social media content to grow user base.',
    company: 'BrandBoost',
    applyLink: 'https://brandboost.com/apply/marketing',
  },
  {
    id: 8,
    title: 'QA Testing Intern',
    description:
      'Perform manual and automated testing to ensure product quality and reliability.',
    company: 'QualityFirst',
    applyLink: 'https://qualityfirst.com/apply/qa',
  },
];

function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredInternships = useMemo(() => {
    if (!searchTerm) return internshipData;
    return internshipData.filter(({ title, description, company }) =>
      [title, description, company].some((field) =>
        field.toLowerCase().includes(searchTerm.toLowerCase())
      )
    );
  }, [searchTerm]);

  return (
    <section className="py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-primary-light select-none">Find Your Next Internship</h1>
      <div className="mb-12">
        <SearchBar onSearch={setSearchTerm} />
      </div>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredInternships.map((internship) => (
          <InternshipItem key={internship.id} internship={internship} />
        ))}
        {filteredInternships.length === 0 && (
          <p className="text-gray-400 col-span-full text-center mt-8">No internships found for your search.</p>
        )}
      </div>
    </section>
  );
}

function InternshipItem({ internship }) {
  const { ref, controls } = useScrollAnimation();

  return (<div>
    
    <InternshipCard
      title={internship.title}
      description={internship.description}
      company={internship.company}
      applyLink={internship.applyLink}
      animationControls={controls}
      animationRef={ref}
    />
    </div>
  );
}

export default Home;
