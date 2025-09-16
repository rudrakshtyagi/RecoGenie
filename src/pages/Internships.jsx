import React, { useState, useMemo } from 'react';
import InternshipCard from '../components/InternshipCard.jsx';
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx';

const internships = [
  {
    id: 1,
    title: 'Frontend Developer Intern',
    description:
      'Work with React and TailwindCSS to build beautiful user interfaces for our platform.',
    company: 'Tech Solutions Ltd.',
    location: 'Remote',
    duration: '3 months',
    applyLink: 'https://techsolutions.com/apply/frontend',
  },
  {
    id: 2,
    title: 'Backend Developer Intern',
    description:
      'Develop and maintain APIs using Node.js and Express for scalable applications.',
    company: 'Innovatech Corp.',
    location: 'New York',
    duration: '6 months',
    applyLink: 'https://innovatech.com/apply/backend',
  },
  {
    id: 3,
    title: 'Data Science Intern',
    description:
      'Analyze data and build machine learning models to improve business intelligence.',
    company: 'DataMinds Inc.',
    location: 'San Francisco',
    duration: '3 months',
    applyLink: 'https://dataminds.com/apply/datascience',
  },
  {
    id: 4,
    title: 'UI/UX Design Intern',
    description:
      'Collaborate with product teams to create user-centric designs and prototypes.',
    company: 'Creative Studio',
    location: 'Remote',
    duration: '4 months',
    applyLink: 'https://creativestudio.com/apply/uiux',
  },
  {
    id: 5,
    title: 'Mobile App Developer Intern',
    description:
      'Build cross-platform mobile applications using React Native and modern tools.',
    company: 'MobileWave',
    location: 'Boston',
    duration: '6 months',
    applyLink: 'https://mobilewave.com/apply/mobile',
  },
];

function Internships() {
  const [filters, setFilters] = useState({
    location: '',
    duration: '',
  });

  const filteredInternships = useMemo(() => {
    return internships.filter(({ location, duration }) => {
      const matchesLocation = filters.location
        ? location.toLowerCase() === filters.location.toLowerCase()
        : true;
      const matchesDuration = filters.duration
        ? duration.toLowerCase() === filters.duration.toLowerCase()
        : true;
      return matchesLocation && matchesDuration;
    });
  }, [filters]);

  function handleChange(e) {
    const { name, value } = e.target;
    setFilters((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  return (
    <section className="py-10 max-w-7xl mx-auto">
      <h1 className="text-4xl font-bold mb-8 text-primary-light select-none">Internship Listings</h1>

      <form className="flex flex-col sm:flex-row gap-4 mb-10 max-w-4xl">
        <select
          name="location"
          value={filters.location}
          onChange={handleChange}
          className="rounded-md bg-card-dark dark:bg-card-dark text-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition"
          aria-label="Filter by location"
        >
          <option value="">All Locations</option>
          <option value="Remote">Remote</option>
          <option value="New York">New York</option>
          <option value="San Francisco">San Francisco</option>
          <option value="Boston">Boston</option>
        </select>

        <select
          name="duration"
          value={filters.duration}
          onChange={handleChange}
          className="rounded-md bg-card-dark dark:bg-card-dark text-gray-200 px-4 py-3 shadow-sm focus:outline-none focus:ring-2 focus:ring-primary-light transition"
          aria-label="Filter by duration"
        >
          <option value="">All Durations</option>
          <option value="3 months">3 months</option>
          <option value="4 months">4 months</option>
          <option value="6 months">6 months</option>
        </select>
      </form>

      <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {filteredInternships.length === 0 ? (
          <p className="text-gray-400 col-span-full text-center">No internships found matching filters.</p>
        ) : (
          filteredInternships.map((internship) => (
            <InternshipAnimatedCard key={internship.id} internship={internship} />
          ))
        )}
      </div>
    </section>
  );
}

function InternshipAnimatedCard({ internship }) {
  const { ref, controls } = useScrollAnimation();

  return (
    <InternshipCard
      title={internship.title}
      description={internship.description}
      company={`${internship.company} - ${internship.location} (${internship.duration})`}
      applyLink={internship.applyLink}
      animationControls={controls}
      animationRef={ref}
    />
  );
}

export default Internships;
