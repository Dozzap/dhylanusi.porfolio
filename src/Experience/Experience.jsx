import parkwood_logo from '../assets/parkwood_logo.svg';
import wcslogobanner from '../assets/wcslogobanner.png';
import tree2 from '../assets/tree2.png';
import kumon_ from '../assets/kumon_.png';
import ncb from '../assets/ncb.jfif';
function Experience() {
  return (
     <div id="experience" style={{backgroundColor:'var(--color-middle)'}}  className='rounded-lg w-7/8 sm:w-9/10 flex flex-col space-y-12 px-8 py-16 my-16 bg-gray-600 '>
           <img src={tree2} alt="" className="absolute object-contain left-0 -z-1 w-dvw" />
    <div  className="border d-dvh  flex flex-col items-center gap-6 bg-white shadow-md rounded-xl">
              <h1 style={{ backgroundColor: 'var(--color-headers)' }} className="w-full justify-center static text-xl border text-center sm:text-3xl font-bold px-6  mx-auto p-6 rounded-tl-lg rounded-tr-lg">💼 Experience</h1>
      <div className="max-w-4xl mx-auto flex flex-col space-y-12 p-4">

        {/* Parkwood Institute */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white shadow-md rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">St. Joseph's Health Care London – App developer</h2>
            <p className="text-gray-700 text-sm">
              Built internal tools to improve workflow efficiency and support healthcare operations. Collaborated with cross-functional teams to develop practical solutions with real-world impact in a clinical environment.
            </p>
          </div>
          <img src={parkwood_logo} alt="Parkwood Institute" className="w-24 h-auto" />
        </div>

        {/* Western Continuing Studies */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white shadow-md rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Western Continuing Studies – Web Developer</h2>
            <p className="text-gray-700 text-sm">
              Redesigned and enhanced the student online learning experience. Collaborated with designers and devs to build accessible, modern web interfaces. Gained hands-on experience with project management and agile workflows.
            </p>
          </div>
          <img src={wcslogobanner} alt="Western Continuing Studies" className="w-28 h-auto" />
        </div>

        {/* Research Assistant */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white shadow-md rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Research Assistant – Earth Sciences Dept.</h2>
            <p className="text-gray-700 text-sm">
              Digitized geological data and helped streamline rock sample cataloging for the Richard W. Hutchinson Geoscience Suite. Built internal tools, improved UI/UX, and collaborated with researchers.  
              <br />Yes — I now have strong opinions about rocks.
            </p>
          </div>
          <img src={ncb} alt="" className="w-30 h-auto"/>
        </div>

        {/* Kumon */}
        <div className="flex flex-col-reverse md:flex-row items-center gap-6 bg-white shadow-md rounded-lg p-6">
          <div className="flex-1">
            <h2 className="text-xl font-semibold mb-2">Assistant Instructor – Kumon Math & Reading Centre</h2>
            <p className="text-gray-700 text-sm">
              Supported students in math and reading by creating personalized learning plans and building confidence. Improved my communication skills — and surprisingly, got better at explaining code too.
            </p>
          </div>
        <img src={kumon_} alt="" className="w-28 h-auto"/>
        </div>
        
      </div>
    </div>
     </div>
  );
}

export default Experience;
