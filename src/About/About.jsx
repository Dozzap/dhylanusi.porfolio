import Stacked_Full from '../assets/Stacked_Full.png';
import tree3 from '../assets/tree3.png'
function About() {
    return (
        <div id="about" className="max-w-4xl mx-auto flex flex-col space-y-12 px-4 py-16 ">
            <img src={tree3} alt="" className="absolute object-fill left-0 -z-1 w-dvw xs:h-dvh" />
            <div   className="d-dvh  flex flex-col items-center gap-6 bg-white shadow-md rounded-lg p-6">
                <h1 className="text-3xl font-bold text-center mb-12">👋 About Me</h1>

                <div className="flex flex-col md:flex-row items-center justify-center gap-10 px-6 max-w-5xl mx-auto">
                    {/* Text section */}
                    <div className="flex-1 text-center md:text-left space-y-4">
                        <p className="text-lg text-gray-700">
                            Hey! I'm a recent graduate from the University of Western Ontario with an Honours Specialization in Computer Science. I'm passionate about building meaningful things with code and solving real-world problems with tech.
                        </p>
                        <p className="text-lg text-gray-700">
                            Over the years, I've worked with a variety of languages, frameworks, and tools — and I'm always excited to learn more. Whether it's creating personal projects, contributing to open-source, or experimenting with new tech trends, I love to stay curious.
                        </p>
                        <p className="text-lg text-gray-700">
                            Outside of tech, you can usually catch me playing video games, hitting the gym, or figuring out new hobbies just to keep the boredom away.
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
