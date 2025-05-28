// src/components/Papers.jsx
import tree3 from '../assets/tree3.png';
export default function Papers() {
  const papers = [
    {
      title: 'Cloud-Edge Continuum Computing with Kubernetes Deployment',
      summary:
        'This project explores how to deploy real-time applications across a cloud–MEC–edge continuum using Kubernetes, Docker, and AWS Wavelength. I built a distributed microservice pipeline for audio processing, where different tasks like Text-to-Speech, profanity detection, and audio compression are handled at different layers (edge, MEC, cloud) depending on latency and resource needs. The result was a fully working system that shows how edge computing can be used for fast and scalable processing in real-world setups.',
      tech: ['Kubernetes', 'Docker', 'Terraform', 'MQTT', 'Edge Computing', 'AWS'],
      file: '/Cloud_Edge_Continuum_Computing_with_Kubernetes_Deployment.pdf',
    },
    {
      title: 'Physiological Illusion Detection: The Thatcher Effect',
      summary:
        'We trained a convolutional neural network to recognize Thatcherized faces — a famous visual illusion where facial features flipped upside down look normal until the face is upright. We generated a custom dataset, ran a human survey for comparison, and achieved ~85% detection accuracy with our model. This showed that AI can match human perception in detecting certain visual illusions — and even outperform it in tricky cases.',
      tech: ['CNN', 'Dlib', 'Computer Vision'],
      file: '/CS4442_Final_Project_Report.pdf',
    },
  ];

  return (





    <div style={{ backgroundColor: 'var(--color-middle)' }} id="papers" className='rounded-lg w-7/8 sm:w-9/10 flex flex-col space-y-12 px-8 py-16 my-16 bg-gray-600 '>
      <img src={tree3} alt="" className="absolute object-contain left-0 -z-1 w-dvw rounded-xl" />
      <div className="border rounded-xl">           
         <h1 style={{ backgroundColor: 'var(--color-headers)' }} className=" w-full justify-center static text-xl border text-center sm:text-3xl font-bold px-6  mx-auto p-6 rounded-tl-lg rounded-tr-lg">📄 (Unpublished) Papers & Research</h1>
        <div className="d-dvh  flex flex-col items-center gap-6 bg-white shadow-md p-6 rounded-bl-xl rounded-br-xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {papers.map((paper, index) => (
              <div
                key={index}
                className="p-6 rounded-xl shadow bg-white border border-gray-200 space-y-4"
              >
                <h3 className="text-xl font-semibold">{paper.title}</h3>
                <p className="text-sm text-gray-700">{paper.summary}</p>
                <div className="text-xs text-gray-500 flex flex-wrap gap-2">
                  {paper.tech.map((tag, i) => (
                    <span
                      key={i}
                      className="px-2 py-1 bg-gray-100 rounded-full text-xs font-medium"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={paper.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block text-blue-600 hover:text-blue-800 underline text-sm"
                >
                  View Paper →
                </a>
              </div>
            ))}
          </div>
        </div></div>
    </div>
  );
}
