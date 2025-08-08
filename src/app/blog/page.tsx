'use client';

import { motion } from 'framer-motion';

const videos = [
  {
    title: 'Patrick Gathogo - Mental Health Talks',
    summary: 'Insightful discussions around mental health from Patrick Gathogo’s YouTube channel.',
    date: 'July 25, 2025',
    youtubeUrl: 'https://www.youtube.com/embed/v=kCPJJyNc7UA',
  },
  {
    title: 'Short Video on Substance Abuse Awareness',
    summary: 'Quick, impactful awareness clip on the dangers of drug abuse.',
    date: 'July 26, 2025',
    youtubeUrl: 'https://www.youtube.com/embed/MiuDVsPVsws',
  },
];

export default function BlogPage() {
  return (
    <section className="bg-white py-20 px-4 md:px-6 font-body">
      <div className="max-w-7xl mx-auto">
        <motion.h1
          className="text-4xl md:text-5xl font-bold text-jungle mb-10 text-center font-heading"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Our Stories. Our Voice.
        </motion.h1>

        <div className="grid md:grid-cols-2 gap-8">
          {videos.map((video, i) => (
            <motion.div
              key={video.youtubeUrl}
              className="bg-gray-100 rounded-xl overflow-hidden shadow hover:shadow-lg transition"
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.5 }}
            >
              <div className="aspect-w-16 aspect-h-9">
                <iframe
                  src={video.youtubeUrl}
                  title={video.title}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                ></iframe>
              </div>
              <div className="p-6">
                <p className="text-sm text-gray-500 mb-1">{video.date}</p>
                <h2 className="text-xl font-semibold text-jungle mb-2">{video.title}</h2>
                <p className="text-gray-700">{video.summary}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
