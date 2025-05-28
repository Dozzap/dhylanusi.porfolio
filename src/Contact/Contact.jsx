import tree2 from '../assets/tree2.png';
import { FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';




function Contact() {
  return (

    <div style={{ backgroundColor: 'var(--color-middle)' }} id="contact" className=" rounded-lg w-7/8 sm:w-9/10 flex flex-col space-y-12 px-8 py-16 my-16 bg-gray-600 ">
      <div className="border rounded-xl">
        <h1 style={{ backgroundColor: 'var(--color-headers)' }} className="w-full justify-center static text-xl border text-center sm:text-3xl font-bold px-6  mx-auto p-6 rounded-tl-lg rounded-tr-lg">📬 Contact Me</h1>

        <div className=" bg-white shadow-md p-8 flex flow-row justify-center gap-8  text-3xl text-gray-700">
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
            href="mailto:&#100;&#104;&#121;&#108;&#097;&#110;&#098;&#117;&#064;&#103;&#109;&#097;&#105;&#108;&#046;&#099;&#111;&#109;"
            className="hover:text-red-500 transition"
          >
            <FaEnvelope />
          </a>
        </div>


        <form action="https://formsubmit.co/8360668eb4ad933e0bca53e28562db19" method="POST" target="_blank"  className="w-full space-y-6  bg-white shadow-md px-8 pb-6 rounded-bl-xl rounded-br-xl justify-center items-center">
          <div className="font-bold  ">Got A Burning Question?</div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Name</label>
            <input
              type="text" name="name"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Your name"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Email</label>
            <input
type="email" name="email"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="you@example.com"
              required
            />
          </div>
          <div>
            <label className="block text-sm font-medium text-gray-700">Message</label>
            <textarea
              rows="4"
              name="message"
              className="mt-1 block w-full border border-gray-300 rounded-md shadow-sm p-2"
              placeholder="Write your message here..."
              required
            ></textarea>
          </div>
          <button
            type="submit"
            className=" text-white px-6 py-2 rounded-md hover:scale-125 transition"
          >
            Send Message
          </button >
        </form>

      </div>

    </div>

  );
}

export default Contact;

