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
    <div id="welcome" className='d-dvh  md:w-1/3 scroll-mt-100'>
      <img src={tree} alt="" className="absolute object-fill left-0 top-0 -z-1 w-dvw xs:h-dvh " />
      <div className="">
        <div style={{backgroundColor:'var(--color-content)'}} className=" flex flex-col justify-around sm:justify-center items-center text-center gap-6  shadow-md rounded-lg p-1 sm:p-6">
          <h1 className="text-xl sm:text-4xl font-bold">Welcome to my site!</h1>

          <div className='flex flex-col'>
            <div className="flex flex-col space-x-2 text-lg">
              <div className="flex  flex-col md:flex-row">
                <div className=" text-sm sm:text-xl px-1">Contact me if you’re looking for a</div>

                <TypeAnimation
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
                  wrapper="div"
                  cursor={true}
                  repeat={Infinity}
                  className="text-sm sm:text-xl text-blue-600 font-semibold"
                /></div>
            </div>
            <p className="max-w-md text-gray-600 mt-4">
              Here’s where I share what I’m building, learning, and vibing with — from projects to passions.
              Wanna see something cool? Scroll down and explore.
            </p>

          </div>

          <div className="flex space-x-8 mt-6 ">
            <button
              className="bg-blue-600 text-white px-4 py-2 rounded-md hover:scale-125 hover:text-white! transition"
              onClick={() => scrollToSection('projects')}
            >
              See Projects
            </button>
            <button
              className="bg-gray-300 text-gray-800 px-4 py-2 rounded-md hover:scale-125 hover:text-white! transition"
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
