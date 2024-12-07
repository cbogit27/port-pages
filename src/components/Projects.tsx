import Image from 'next/image';
import Link from 'next/link';
import ActiveSlider from './ActiveSlider';

export function Projects() {

  
  return (
   
    
    <section className="max-w-[1240px] mx-auto py-16 px-4">
      <div className='py-4 text-center justify-center'>
        <h3 className='text-md font-extrabold uppercase text-gray-900/40'>take a look at some of the projects</h3>
      </div>
      <ActiveSlider/>
    </section>
  );
}


