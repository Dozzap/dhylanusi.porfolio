import tree2 from '../assets/tree2.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

function Contact() {
  return (

    <div id="contact" className="max-w-3xl mx-auto px-4 py-16">
      <h2 className="text-3xl font-bold text-center mb-8">📬 Contact Me</h2>

      <div className="flex justify-center gap-8 mb-12 text-3xl text-gray-700">
        <a
          href="https://linkedin.com/in/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-blue-600 transition"
        >
          <FaLinkedin />
        </a>
        <a
          href="https://github.com/yourusername"
          target="_blank"
          rel="noopener noreferrer"
          className="hover:text-black transition"
        >
          <FaGithub />
        </a>
        <a
          href="mailto:youremail@example.com"
          className="hover:text-red-500 transition"
        >
          <FaEnvelope />
        </a>
      </div>


      <form className="space-y-6 bg-white shadow-md p-8 rounded-xl border">
        <div>
          <label className="block text-sm font-medium text-gray-700">Name</label>
          <input
            type="text"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Your name"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Email</label>
          <input
            type="email"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="you@example.com"
            required
          />
        </div>
        <div>
          <label className="block text-sm font-medium text-gray-700">Message</label>
          <textarea
            rows="4"
            className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
            placeholder="Write your message here..."
            required
          ></textarea>
        </div>
        <button
          type="submit"
          className="bg-blue-600 text-white px-6 py-2 rounded-md hover:bg-blue-700 transition"
        >
          Send Message
        </button>
      </form>
    </div>

  );
}

export default Contact;

