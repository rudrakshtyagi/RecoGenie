import React from 'react';
import { useScrollAnimation } from '../hooks/useScrollAnimation.jsx';

function About() {
  const { ref: titleRef, controls: titleControls } = useScrollAnimation();
  const { ref: paraRef, controls: paraControls } = useScrollAnimation();

  return (
    <section className="py-10 max-w-4xl mx-auto">
      <h1
        ref={titleRef}
        className="text-4xl font-bold mb-6 text-primary-light select-none"
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease, transform 0.6s ease' }}
        onTransitionEnd={() => titleControls.start({ opacity: 1, y: 0 })}
      >
        About Recogenie
      </h1>

      <p
        ref={paraRef}
        className="text-gray-300 leading-relaxed text-lg"
        style={{ opacity: 0, transform: 'translateY(20px)', transition: 'opacity 0.6s ease 0.3s, transform 0.6s ease 0.3s' }}
        onTransitionEnd={() => paraControls.start({ opacity: 1, y: 0 })}
      >
        Recogenie is a platform dedicated to helping students find the best hackathons and internships tailored to their skills and interests. Our mission is to connect ambitious students with exciting opportunities that foster growth, learning, and career advancement.
      </p>

      <p className="mt-6 text-gray-400 leading-relaxed text-lg">
bhangbhosda bhandbhosda hang bhosda bhangbhosda 
bhangbhosda bhangbhosda bhangbhosda
bhangbhosda bhangbhosda 
maki chu btech ki
mai yha kyu aya 
ghr jakr kheti krunga
bhangbhsda      </p>
    </section>
  );
}

export default About;
