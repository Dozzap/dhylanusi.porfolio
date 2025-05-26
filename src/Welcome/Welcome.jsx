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
    <div  className="">
      <div className="  relative flex flex-col justify-center items-center text-center gap-6 bg-white shadow-md rounded-lg p-6">
        <h1 className="text-4xl font-bold">Welcome to my site!</h1>

        <div className="flex flex-row justify-center items-center space-x-2 text-lg">
          <span>Contact me if you’re looking for a</span>
          <TypeAnimation
            sequence={[
              'Learner',
              1000,
              'Programmer',
              1000,
              'Leader',
              2000,
              () => { },
            ]}
            wrapper="span"
            cursor={true}
            repeat={Infinity}
            className="text-blue-600 font-semibold"
          />
        </div>

        <p className="max-w-xl text-gray-700">
          Dive in below to learn more about me, my projects, and the cool stuff I’m working on.
        </p>

        <div className="flex flex-col w-full justify-around items-center">
          <p>
            Where do you want to start?
          </p>
          <ul className="flex flex-row w-1/2 justify-around">
            <li className="cursor-pointer " onClick={() => scrollToSection('about')}>Beginning</li>
            <li className="cursor-pointer" onClick={() => scrollToSection('contact')}>End</li>
          </ul>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Welcome;
