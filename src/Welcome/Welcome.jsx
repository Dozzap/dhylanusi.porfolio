import { TypeAnimation } from 'react-type-animation';
import tree from '../assets/tree.png'
function Welcome() {
  const scrollToSection = (id) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };
  return (
    <div id="welcome" className='d-dvh scroll-mt-100'>
      <img src={tree} alt="" className="absolute object-fill left-0 top-0 -z-1 w-dvw xs:h-dvh " />
      <div className="">
        <div className="  relative flex flex-col justify-center items-center text-center gap-6 bg-white shadow-md rounded-lg p-6">
          <h1 className="text-4xl font-bold">Welcome to my site!</h1>

          <div className='flex flex-col'>
            <div className="flex flex-row items-center space-x-2 text-lg">

              <span className="static">Contact me if you’re looking for a</span>

              <div>          <TypeAnimation
                sequence={[
                  'Aspiring Developer',
                  1200,
                  'Continuous Learner',
                  1200,
                  'Recent Graduate',
                  1200,
                  'Tech Enthusiast',
                  1500,
                  () => { },
                ]}
                wrapper="span"
                cursor={true}
                repeat={Infinity}
                className="text-blue-600 font-semibold"
              /></div>
            </div>
            <p className="max-w-md text-gray-600 mt-4">
              Here’s where I share what I’m building, learning, and vibing with — from projects to passions.
              Wanna see something cool? Scroll down and explore.
            </p>

          </div>

          <div className="flex space-x-8 mt-6">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition"
              onClick={() => scrollToSection('projects')}
            >
              See Projects
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:bg-gray-400 transition"
              onClick={() => scrollToSection('contact')}
            >
              Contact Me
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Welcome;
