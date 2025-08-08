'use client';

import { motion } from 'framer-motion';

const projects = [
  {
    title: 'Project Hope',
    description: 'A 6-month multi-focus initiative on Climate Change, GBV, Peace & Security, Menstrual Health, and Governance in Changamwe.',
    impact: 'Reached over 500 youth and women with civic education, SRHR awareness, and leadership training.',
  },
  {
    title: 'My Pad, My Health',
    description: 'Delivered menstrual health education, pad distribution, and stigma reduction at Kwa Hola Primary.',
    impact: 'Distributed 300+ reusable pads and trained 200 girls on menstrual hygiene management.',
  },
  {
    title: 'Rabai Girls Empowerment',
    description: 'Mentorship and SRHR education for girls in Rabai, with leadership and life skills training.',
    impact: 'Empowered 150 girls through mentorship and SRHR workshops.',
  },
  {
    title: 'Transparency & Accountability',
    description: 'Strengthened public participation and promoted good governance and anti-corruption awareness.',
    impact: 'Hosted 4 public forums and published 2 civic engagement toolkits.',
  },
  {
    title: 'Boychild Mentorship',
    description: 'Provided emotional support, life skills, and mentorship to boys at Kwa Hola Primary.',
    impact: 'Reached 100 boys with peer mentorship, mental health talks, and personal development sessions.',
  },
  {
    title: 'Ramadan Drive',
    description: 'Distributed food and hygiene packages to vulnerable families during the holy month of Ramadan.',
    impact: 'Supported 75 households with food packs and hygiene essentials.',
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="bg-white py-16 px-4 md:px-8">
      <div className="max-w-7xl mx-auto">
        <motion.h2
          className="text-3xl md:text-4xl font-bold text-jungle text-center mb-6"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Our Projects
        </motion.h2>
        <motion.p
          className="text-gray-600 mb-12 max-w-2xl mx-auto text-center"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2, duration: 0.6 }}
        >
          Hope for Community runs impactful projects that address real needs across climate, health, education, and governance.
        </motion.p>

        <div className="grid gap-6 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              className="bg-gray-50 p-6 rounded-xl shadow border-l-4 border-jungle hover:shadow-lg transition"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
            >
              <h3 className="text-lg font-semibold text-jungle mb-2">{project.title}</h3>
              <p className="text-sm text-gray-700 mb-3">{project.description}</p>
              <p className="text-sm text-green-800 font-semibold">Impact: {project.impact}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
