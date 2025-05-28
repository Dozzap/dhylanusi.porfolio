
import tree2 from '../assets/tree2.png'
import snake_ from '../assets/snake_.png'
import janken_ from '../assets/janken_.png'
import cec from '../assets/cec.png'
import td_ from '../assets/td_.png'
function Projects() {

    const projects = [
    {
      title: "Janken",
      summary: "A fun web version of Rock Paper Scissors that I designed and built from scratch. It’s all about smooth, responsive gameplay and clean visuals. I used this project to sharpen my front-end skills, focus on user experience, and keep the codebase nice and tidy.",
      tech: ["HTML", "CSS", "JavaScript"],
      link: "https://github.com/Dozzap/Janken",
      image: janken_
    },
    {
      title: "Online-Snake",
      summary: "A multiplayer Snake game with real-time gameplay and end-to-end encryption. Built in Python with sockets, it uses RSA + Fernet for secure comms and has a built-in chat. I used this to dive deep into networking, game loops with Pygame, and secure data transfer.",
      tech: ["Python", "Pygame", "Sockets", "RSA", "Fernet"],
      link: "https://github.com/Dozzap/Online-Snake",
      image: snake_
    },
    {
      title: "Thatcher Detector & Dataset Generator",
      summary: "Two tools for working with the Thatcher effect in faces. One detects and flags Thatcherized images using OpenCV, the other helps generate custom datasets for training/testing. Great for CV/ML workflows. It’s all modular, cleanly written in Python, and ready to plug into bigger projects.",
      tech: ["Python", "OpenCV", "NumPy"],
      link: "https://github.com/Dozzap/thatcher-detector",
      image: td_
    },
    {
      title: "Dockerized Python Pipeline Template",
      summary: "A template repo for building and running microservices and data pipelines with Docker. It’s modular, production-ready, and perfect for CI/CD or rapid prototyping. Makes spinning up isolated services way easier.",
      tech: ["Python", "Docker", "Microservices", "DevOps"],
      link: "https://github.com/Dozzap/General-workflow-docker-implementation",
      image:cec
    },
    {
      title: "Squable: Java Wordle Clone",
      summary: "A console-based Wordle clone in Java with some cool under-the-hood stuff like custom linked lists to track guesses. Fully modular design, strong input validation, and clean OOP structure throughout.",
      tech: ["Java", "Linked Lists", "Algorithms", "Game Logic"],
      link: "https://github.com/Dozzap/Squable"
    }
  ];


    return (
        <div style={{backgroundColor:'var(--color-middle)'}}  id="projects" className='rounded-lg w-7/8 sm:w-9/10 flex flex-col space-y-12 px-8 py-16 my-16 bg-gray-600 '>
            <div className='border rounded-xl '>
                 <h1 style={{backgroundColor:'var(--color-headers)'}} className="border w-full static text-xl text-center sm:text-3xl font-bold p-4 rounded-tl-xl rounded-tr-xl">💻 Projects</h1>
            <div style={{backgroundColor:'var(--color-inner)'}} className="rounded-xl p-6 grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((proj, index) => (
                    <div
                        key={index}
                        className="p-6 rounded-xl shadow bg-white border border-gray-200 space-y-4"
                    >
                        {proj.image && (
                            <img
                                src={proj.image}
                                alt={`${proj.title} screenshot`}
                                className="project-image w-full h-40 object-cover rounded-md"
                            />
                        )}
                        <h3 className="text-xl font-semibold">{proj.title}</h3>
                        <p className="text-sm text-gray-700">{proj.summary}</p>
                        <div className="text-xs text-gray-500 flex flex-wrap gap-2">
                            {proj.tech.map((tag, i) => (
                                <span
                                    key={i}
                                    className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </div>
                        <a
                            href={proj.link}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="inline-block text-blue-600 hover:text-blue-800 underline text-sm"
                        >
                            View Project →
                        </a>
                    </div>
                ))}
            </div>
            </div>
        </div>
    );
}

export default Projects;