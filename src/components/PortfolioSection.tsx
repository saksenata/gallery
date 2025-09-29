'use client';

import Image from 'next/image';
import Link from 'next/link';

interface PortfolioProject {
  title: string;
  description: string;
  href: string;
  badge: string;
  preview: {
    type: 'image' | 'embed';
    src?: string;
  };
}

export default function PortfolioSection() {
  const projects: PortfolioProject[] = [
    {
      title: 'File Compressor & Watermarker',
      description:
        'A fast, private, in‑browser tool to compress files and add text watermarks. Client‑side only with Web Worker and pdf-lib.',
      href: 'https://file-compressor-rho.vercel.app/',
      badge: 'Live Demo',
      preview: { type: 'embed' },
    },
    {
      title: 'Meal Web – Menu & Ordering Preview',
      description:
        'A minimal restaurant/meal site demo focused on clean presentation and fast UX, deployed on Vercel.',
      href: 'https://meal-web-sandy.vercel.app/',
      badge: 'Live Demo',
      preview: { type: 'embed' },
    },
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-light text-gray-900 mb-4 tracking-wide">Portfolio</h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Selected projects showcasing design, performance, and user‑focused engineering.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {projects.map((project) => (
            <Link
              key={project.title}
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="group block border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-shadow"
            >
              <div className="aspect-video bg-gray-50 flex items-center justify-center relative">
                {project.preview.type === 'embed' ? (
                  <>
                    <iframe
                      src={project.href}
                      title={`${project.title} preview`}
                      className="absolute inset-0 w-full h-full border-0 scale-[1] [transform-origin:top_left]"
                      loading="lazy"
                      referrerPolicy="no-referrer"
                      sandbox="allow-same-origin allow-scripts allow-forms allow-popups"
                    />
                    <div className="pointer-events-none absolute inset-0 ring-1 ring-black/5" />
                  </>
                ) : project.preview.type === 'image' && project.preview.src ? (
                  <Image
                    src={project.preview.src}
                    alt={`${project.title} preview`}
                    width={320}
                    height={180}
                    className="w-24 h-24 opacity-80 group-hover:opacity-100 transition-opacity"
                  />
                ) : (
                  <div className="text-gray-400">Preview</div>
                )}
              </div>
              <div className="p-5">
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-medium text-gray-900">{project.title}</h3>
                  <span className="text-[10px] uppercase tracking-wider bg-gray-900 text-white px-2 py-1 rounded-full">
                    {project.badge}
                  </span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{project.description}</p>
                <span className="mt-3 inline-flex items-center text-sm text-gray-900 group-hover:translate-x-0.5 transition-transform">
                  Visit
                  <svg className="w-4 h-4 ml-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17 7l-10 10M17 7H7m10 0v10" />
                  </svg>
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <p className="text-xs text-gray-500">
            References: <a className="underline hover:text-gray-900" target="_blank" rel="noreferrer" href="https://github.com/saksenata/file-compressor">file-compressor</a> •
            <a className="underline hover:text-gray-900 ml-1" target="_blank" rel="noreferrer" href="https://meal-web-sandy.vercel.app/">meal-web</a>
          </p>
        </div>
      </div>
    </section>
  );
}



