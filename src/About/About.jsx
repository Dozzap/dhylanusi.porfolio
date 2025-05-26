import Stacked_Full from '../assets/Stacked_Full.png';
import tree3 from '../assets/tree3.png'
function About() {
    return (
        <div id="about" className="w-2/3 flex flex-col space-y-12 px-8 py-16 my-16 bg-gray-600 ">
            <img src={tree3} alt="" className="absolute object-fill left-0 -z-1 w-dvw xs:h-dvh" />
            <div   className="d-dvh  flex flex-col items-center gap-6 bg-white shadow-md rounded-lg p-6">
                <h1 className=" text-3xl font-bold">👋 About Me</h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 max-w-5xl mx-auto">
                    {/* Text section */}
                    <div className="flex-1 text-center md:text-left space-y-4">
                        <p className="text-lg text-gray-700">
Hey! I'm a recent Computer Science grad from Western University with a passion for building things that actually matter. Over the past few years, I’ve been lucky to work on some pretty cool projects — from developing internal apps at a healthcare institute, to revamping university websites, to digitizing rock samples in a geology lab (yes, really).                        </p>
                        <p className="text-lg text-gray-700">
I’ve dabbled in everything from frontend design to backend logic, and I enjoy finding smart, simple ways to solve real-world problems with code. I’ve also had the chance to work with all kinds of people — developers, designers, researchers, and even students — which taught me a lot about communication, collaboration, and adapting fast.                        </p>
                        <p className="text-lg text-gray-700">
Outside of the tech world, you’ll probably catch me gaming, at the gym, or jumping into new hobbies for fun. I’m currently on the hunt for an entry-level or new grad software role where I can grow, learn, and make an impact.
                        </p>
                    </div>

                    {/* Image */}
                    <div className="flex-1">
                        <img
                            src={Stacked_Full}
                            alt="Stacked Full"
                            className="w-2/3 max-w-md mx-auto rounded-xl"
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
