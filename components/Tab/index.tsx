import Link from 'next/link';
import { useState } from 'react';

const tabs = ['Developer', 'Designer', 'Freelancer'] as const;

const contentMap = {
  Developer: {
    desc: 'I build responsive, accessible, and performant web apps using React, TypeScript, and modern frontend tools.',
  },
  Designer: {
    desc: 'I design clean, expressive visuals — from logos to interfaces — with a strong sense of structure and style.',
  },
  Freelancer: {
    desc: 'I work with clients to solve real problems, deliver results, and build lasting relationships — on time and budget.',
  },
};

export default function Tabs() {
  const [active, setActive] = useState<(typeof tabs)[number]>('Developer');

  return (
    <>
      <div className='flex gap-4 mb-4 '>
        {tabs.map(tab => (
          <button
            key={tab}
            onClick={() => setActive(tab)}
            className={`py-2 px-4 font-heading font-stretch-115% cursor-pointer border relative ${
              active === tab
                ? 'font-bold bg-amber-400 border-2 after:content-[""] after:w-full after:absolute after:bg-black after:h-full after:-left-1.5 after:top-1.5 after:-z-10'
                : ''
            }`}
          >
            {tab}
          </button>
        ))}
      </div>

      <div className='pt-6'>
        <p className='text-lg mb-4'>{contentMap[active].desc}</p>
      </div>
    </>
  );
}
