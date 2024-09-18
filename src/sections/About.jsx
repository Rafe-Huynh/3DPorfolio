import { useState } from 'react';
import Globe from 'react-globe.gl';
import { MdAttachEmail } from "react-icons/md";
import Button from '../components/Button.jsx';

const About = () => {
  const [hasCopied, setHasCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(' adrian@jsmastery.pro');
    setHasCopied(true);

    setTimeout(() => {
      setHasCopied(false);
    }, 2000);
  };

  return (
    <section className="c-space my-20" id="about">
      <div className="grid xl:grid-cols-3 xl:grid-rows-6 md:grid-cols-2 grid-cols-1 gap-5 h-full">
        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid1.png" alt="grid-1" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">I'm Rafe Huynh</p>
              <p className="grid-subtext">
              I'm a software engineer.
        I understand the importance of staying ahead in tech. <br/>
        I'm committed to continuous learning, 
        eager to add more tools to my developer's arsenal.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-3">
          <div className="grid-container">
            <img src="assets/grid2.png" alt="grid-2" className="w-full sm:h-[276px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Tech</p>
              <p className="grid-subtext">
                I specialize in Python and Javascript, React frameworks, and tools that allow me to build robust and scalable
                applications.
              </p>
            </div>
          </div>
        </div>

        <div className="col-span-1 xl:row-span-4">
          <div className="grid-container">
            <div className="rounded-3xl w-full sm:h-[326px] h-fit flex justify-center items-center">
              <Globe
                height={326}
                width={326}
                backgroundColor="rgba(0, 0, 0, 0)"
                backgroundImageOpacity={0.5}
                showAtmosphere
                showGraticules
                globeImageUrl="//unpkg.com/three-globe/example/img/earth-night.jpg"
                bumpImageUrl="//unpkg.com/three-globe/example/img/earth-topology.png"
                labelsData={[{ lat: 40, lng: -100, text: 'Rjieka, Croatia', color: 'white', size: 15 }]}
              />
            </div>
            <div>
              <p className="grid-headtext">I’m flexible with locations</p>
              <p className="grid-subtext">I can relocate anywhere in the US</p>
              <Button name="Contact Me" isBeam containerClass="w-full mt-10" />
            </div>
          </div>
        </div>

        <div className="xl:col-span-2 xl:row-span-3">
          <div className='grid-container'>

          <div className="grid grid-cols-2 gap-0">
            <div className='grid-container2'>
            <img src="assets/bmcc.jpg" alt="bmcc" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Associate of Art in Computer Science</p>
              <p className="grid-subtext">
                Graduated from Borough of Manhattan Community College of The City University of New York
              </p>
            </div>
            </div>
            <div className='grid-container2'>
            <img src="assets/hunter college.jpg" alt="hunter" className="w-full sm:h-[266px] h-fit object-contain" />

            <div>
              <p className="grid-headtext">Bachelor of Art in Computer Science</p>
              <p className="grid-subtext">
                Graduated from Hunter College of The City University of New York 
              </p>
            </div>
            </div>
          </div>
          </div>
        </div>

        <div className="xl:col-span-1 xl:row-span-2">
          <div className="grid-container">
            <div className='flex flex-col items-center justify-center text-white-600'>
          <MdAttachEmail size={50}/>
          </div>
            <div className="space-y-2">
              <div className="copy-container" onClick={handleCopy}>
                <img src={hasCopied ? 'assets/tick.svg' : 'assets/copy.svg'} alt="copy" />
                <p className="lg:text-2xl md:text-xl font-medium text-gray_gradient text-white">rafehuynh0510@gmail.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;