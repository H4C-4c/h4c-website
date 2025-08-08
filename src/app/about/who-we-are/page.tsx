'use client';

import Image from 'next/image';
import { FaBullseye, FaEye, FaHandsHelping, FaLeaf, FaUsers, FaLightbulb } from 'react-icons/fa';

export default function WhoWeArePage() {
  return (
    <section className="bg-white py-16 px-4 md:px-10 text-[#004d43]">
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-4">Who We Are</h1>
        <p className="text-lg mb-8 text-center max-w-2xl mx-auto">
          Hope for Community is a youth-led, grassroots CBO based in Changamwe, Mombasa, transforming lives through advocacy, climate action, health education, and youth empowerment.
        </p>

        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h2 className="text-2xl font-semibold flex items-center gap-2 mb-2">
              <FaBullseye className="text-jungle" /> Mission
            </h2>
            <p>
              A thriving, empowered, and resilient community where young people lead positive change in health, leadership, and climate action.
            </p>

            <h2 className="text-2xl font-semibold flex items-center gap-2 mt-6 mb-2">
              <FaEye className="text-jungle" /> Vision
            </h2>
            <p>
              To empower youth and communities through leadership development, advocacy for health and well-being, and promotion of climate-smart initiatives.
            </p>
          </div>
          <Image
            src="/images/hope14.jpg"
            alt="Vision and Mission"
            width={500}
            height={350}
            className="rounded-xl shadow-lg"
          />
        </div>

        <div className="bg-[#f0fdf6] p-8 rounded-xl shadow-md">
          <h2 className="text-3xl font-bold text-center text-jungle mb-6">Our Core Values</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
            <div className="flex items-start gap-3">
              <FaHandsHelping className="text-jungle mt-1" size={24} />
              <div>
                <h3 className="font-semibold">Integrity</h3>
                <p className="text-sm">We uphold transparency, honesty, and accountability in all our actions and partnerships.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaUsers className="text-jungle mt-1" size={24} />
              <div>
                <h3 className="font-semibold">Empowerment</h3>
                <p className="text-sm">We nurture the potential of young people and communities to lead change.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaLeaf className="text-jungle mt-1" size={24} />
              <div>
                <h3 className="font-semibold">Sustainability</h3>
                <p className="text-sm">We champion initiatives that protect the environment and promote long-term well-being.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaUsers className="text-jungle mt-1" size={24} />
              <div>
                <h3 className="font-semibold">Inclusivity</h3>
                <p className="text-sm">We embrace diversity and foster equal opportunities for all.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaHandsHelping className="text-jungle mt-1" size={24} />
              <div>
                <h3 className="font-semibold">Compassion</h3>
                <p className="text-sm">We serve with empathy, respect, and deep commitment to improving lives.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaLightbulb className="text-jungle mt-1" size={24} />
              <div>
                <h3 className="font-semibold">Innovation</h3>
                <p className="text-sm">We encourage creativity and embrace new ideas to drive change.</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
