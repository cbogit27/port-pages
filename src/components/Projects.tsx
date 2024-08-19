import Image from 'next/image';
import Link from 'next/link';

export function Projects() {
  return (
    <section className="max-w-[1240px] mx-auto px-3 sm:px-4 lg:px-6 py-16">
      <h2 className="text-3xl sm:text-4xl font-bold text-gray-800 mb-8 text-center">
        Recent Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        <div className="relative group">
          <Link href="/project-one">
            <Image
              src="/path-to-project-one-image.jpg"
              alt="Project One"
              width={600}
              height={400}
              className="rounded-md object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <h3 className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                Project One
              </h3>
            </div>
          </Link>
        </div>
        <div className="relative group">
          <Link href="/project-two">
            <Image
              src="/path-to-project-two-image.jpg"
              alt="Project Two"
              width={600}
              height={400}
              className="rounded-md object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <h3 className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                Project Two
              </h3>
            </div>
          </Link>
        </div>
        <div className="relative group">
          <Link href="/project-three">
            <Image
              src="/path-to-project-three-image.jpg"
              alt="Project Three"
              width={600}
              height={400}
              className="rounded-md object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <h3 className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                Project Three
              </h3>
            </div>
          </Link>
        </div>
        <div className="relative group">
          <Link href="/project-four">
            <Image
              src="/path-to-project-four-image.jpg"
              alt="Project Four"
              width={600}
              height={400}
              className="rounded-md object-cover transition-transform duration-300 transform group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-md">
              <h3 className="text-2xl font-semibold text-white absolute bottom-4 left-4">
                Project Four
              </h3>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
}
