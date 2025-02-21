"use client"

import Image from "next/image"
import ExpertiseSection from "@/components/ExpertiseSection"
import AnimatedProjectsHeading from "@/components/AnimatedProjectsHeading"
import { Github, ExternalLink, Linkedin, Twitter, ArrowRight } from "lucide-react"
import { ChangeEvent, FormEvent, useState } from "react";
// import firebase from "firebase/compat/app"


interface FormData {
  Name: string;
  email: string;
  message: string;
}

interface FormState {
  success: boolean;
  error: boolean;
  loading: boolean;
}

export default function Home() {

  const [emailSubmitted, setEmailSubmitted] = useState<boolean>(false);

  const [formData, setFormData] = useState<FormData>({
    Name: "",
    email: "",
    message: "",
  });

  const [formState, setFormState] = useState<FormState>({
    success: false,
    error: false,
    loading: false,
  });

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormState({ success: false, error: false, loading: true });
    try {
      const response = await fetch("/api/mail", {
        method: "POST",
        headers: {
          Accept: "application/json, text/plain, */*",
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.status === 200) {
        setFormState({ success: true, error: false, loading: false });
        setFormData({ Name: "", email: "", message: "" });
      } else {
        setFormState({ success: false, error: true, loading: false });
      }
    } catch (error) {
      console.log("An Error Occurred: ", error);
      setFormState({ success: false, error: true, loading: false });
    }
  };
  const handleInputChange = (e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  return (
    <div className="space-y-16 px-4 sm:px-6 lg:px-8">
      <section className="h-screen flex flex-col justify-center items-center text-center">
        <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold mb-4 text-white">OGHENE VICTOR</h1>
        <p className="text-xl sm:text-2xl md:text-3xl mb-4 text-[#7ec8e3]">Full-Stack Developer & Mobile Developer</p>
        <p className="text-lg sm:text-xl md:text-2xl text-white">A DIGITAL SOLUTION INNOVATOR</p>
      </section>

      <div className="w-full max-w-4xl mx-auto">
        <Image
          src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/custom-mYCFd2IMCj33MDqCfLHPZ3qwKemZS9.png"
          alt="Velli D Creator - Software Engineer Stack"
          width={1200}
          height={400}
          className="rounded-lg shadow-xl"
          priority
        />
      </div>

      <section id="about" className="pt-16">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#7ec8e3]">About Me</h2>
        <div className="space-y-6">
          <p className="text-lg">
            As a Digital Solutions Innovator, I specialize in building scalable websites and mobile applications that
            streamline your business and individual goals. My expertise lies in helping companies scale efficiently and
            build their Minimum Viable Products (MVPs). With a focus on cutting-edge technologies and best practices, I
            deliver solutions that drive growth and innovation.
          </p>
        </div>
      </section>

      <ExpertiseSection />

      <section id="projects" className="pt-16">
        <AnimatedProjectsHeading />
        <div className="grid gap-8">
          {[
            {
              title: "21SZN E-Commerce Platform",
              description:
                "A modern e-commerce platform for streetwear and fashion, featuring a clean UI, category-based shopping, and seamless user experience.",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/2024,%2013_24_14%20GMT+1-vXBqmiioqShvPEFw9MJPn4bJH1ssHw.png",
              tech: ["Next.js", "TypeScript", "Stripe", "Prisma"],
              github: "https://github.com/yourusername/ecommerce",
              live: "https://ecommerce-demo.com",
              type: "Web Application",
              video:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/WhatsApp%20Video%202024-12-14%20at%2015.07.53-XUl0O1owoiT1S2lim8fZ9PCRbAtQzJ.mp4",
            },
            {
              title: "JAFOS FSI APP",
              description:
                "An ecommerce platform built for geographically closed communities. Built with flutterwave, next-js, typescript and mongodb",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/credit%20your%20account-TmJ88frmnFruDHJ1gIQXu5837ao8iY.png",
              tech: ["Web", "React", "Node.js", "Next.JS", "MongoDB"],
              github: "https://github.com/Dbabalola600/jafos-fsi",
              live: "https://jafos-fsi.vercel.app/",
              type: "Web Application",
            },
            {
              title: "QR Code Scanner & Generator",
              description:
                "A mobile application that enables seamless QR code scanning and generation. Built with React Native for cross-platform compatibility.",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/_%20(3)-sNpxXNMQnsof7dGme0il3kGElrJgie.jpeg",
              tech: ["React Native", "Expo", "Mobile Camera API", "QR Code Library"],
              github: "https://github.com/yourusername/qr-scanner",
              live: "https://play.google.com/store/apps/details?id=com.qrscanner",
              type: "Mobile Application",
            },
            {
              title: "Coffee House PH Ordering System",
              description:
                "A comprehensive digital ordering system for Coffee House Portharcourt, featuring real-time order tracking, inventory management, and seamless payment integration.",
              image:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/coffee-puRtCwNj4f44mnGrPW3NRbER4RnqJp.png",
              tech: ["React Native", "Node.js", "Express", "MongoDB", "Socket.io", "Payment Gateway"],
              github: "https://github.com/yourusername/coffeehouse-ph",
              live: "https://coffeehouse-ph.com",
              type: "Full Stack Application",
              video:
                "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screen%20Recording%202025-01-16%20at%2015.19.03-gRtzwSt4TMvXGhgVNzmjGrfYOqawUD.mov",
            },
          ].map((project, index) => (
            <div
              key={index}
              className="bg-[#050a30] rounded-lg overflow-hidden transition-transform hover:scale-[1.02] duration-300"
            >
              <div className="grid sm:grid-cols-2 gap-6">
                <div className="relative h-[200px] sm:h-[300px] overflow-hidden group">
                  {project.video ? (
                    <video
                      className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                      autoPlay
                      loop
                      muted
                      playsInline
                    >
                      <source src={project.video} type="video/mp4" />
                    </video>
                  ) : null}
                  <Image
                    src={project.image || "/placeholder.svg"}
                    fill
                    style={{ objectFit: 'cover' }}
                    alt="Project Image"
                    className={project.video ? "group-hover:opacity-0 transition-opacity duration-300" : ""}
                  />
                </div>
                <div className="p-6 flex flex-col justify-between">
                  <div>
                    <div className="text-[#7ec8e3] text-sm mb-2">{project.type}</div>
                    <h3 className="text-xl sm:text-2xl font-bold mb-2 text-white">{project.title}</h3>
                    <p className="text-gray-300 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-[#000c66] text-[#7ec8e3] px-3 py-1 rounded-full text-sm">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#7ec8e3] transition-colors"
                    >
                      <Github size={20} />
                      <span>Code</span>
                    </a>
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-2 text-white hover:text-[#7ec8e3] transition-colors"
                    >
                      <ExternalLink size={20} />
                      <span>Live Demo</span>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section id="contact" className="bg-[#050a30] p-6 rounded-lg">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#7ec8e3]">Let&apos;s Connect</h2>
          <div className="grid md:grid-cols-2 gap-8 mb-8">
            {/* Social Links */}
            <div className="space-y-6">
              <p className="text-lg">
                I&apos;m always open to new opportunities and collaborations. Feel free to reach out through any of these
                platforms!
              </p>

              <div className="space-y-4">
                <a
                  href="https://github.com/machiavellai"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#7ec8e3] transition-colors p-3 rounded-lg hover:bg-[#000c66]"
                >
                  <Github className="w-6 h-6" />
                  <span className="font-medium">Follow on GitHub</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>

                <a
                  href="https://www.linkedin.com/in/victor-oghene-b256171b6/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#7ec8e3] transition-colors p-3 rounded-lg hover:bg-[#000c66]"
                >
                  <Linkedin className="w-6 h-6" />
                  <span className="font-medium">Connect on LinkedIn</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>

                <a
                  href="https://x.com/_velli_DCreator"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-white hover:text-[#7ec8e3] transition-colors p-3 rounded-lg hover:bg-[#000c66]"
                >
                  <Twitter className="w-6 h-6" />
                  <span className="font-medium">Follow on Twitter</span>
                  <ArrowRight className="w-4 h-4 ml-auto" />
                </a>


              </div>
            </div>

            {/* Contact Form */}
            {emailSubmitted ? (
              <p className="text-green-500 text-sm mt-2">
                Email sent successfully!
              </p>
            ) : (
              <form className="space-y-6" onSubmit={handleSubmit}>
                <div>
                  <label htmlFor="Name" className="block text-[#7ec8e3] mb-2">
                    Name
                  </label>
                  <input
                    name="Name"
                    type="text"
                    id="name"
                    value={formData.Name}
                    placeholder="clark kent"
                    onChange={handleInputChange}
                    className="w-full p-3 rounded bg-[#000c66] text-white border border-gray-800 focus:border-[#7ec8e3] focus:ring-1 focus:ring-[#7ec8e3] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="E-mail" className="block text-[#7ec8e3] mb-2">
                    E-mail
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    placeholder="your email..."
                    onChange={handleInputChange}
                    className="w-full p-3 rounded bg-[#000c66] text-white border border-gray-800 focus:border-[#7ec8e3] focus:ring-1 focus:ring-[#7ec8e3] transition-colors"
                    required
                  />
                </div>
                <div>
                  <label htmlFor="Message" className="block text-[#7ec8e3] mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleInputChange}
                    rows={5}
                    className="w-full p-3 rounded bg-[#000c66] text-white border border-gray-800 focus:border-[#7ec8e3] focus:ring-1 focus:ring-[#7ec8e3] transition-colors"
                    required
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full sm:w-auto bg-[#0000ff] text-white px-6 py-3 rounded hover:bg-[#7ec8e3] hover:text-[#050a30] transition-colors flex items-center justify-center gap-2"
                >
                  Send Message
                  <ArrowRight className="w-4 h-4" />
                </button>
                {formState.loading && (
                  <div className="font-bold tracking-wider mt-6 bg-primary rounded-sm text-center py-4 px-4 text-xl text-white mb-3">
                    Processing... Please Wait
                  </div>
                )}
                {formState.error && (
                  <div className="font-bold tracking-wider mt-6 bg-red-500 rounded-sm text-center py-4 px-4 text-xl text-white mb-3">
                    An Error Occurred, Try Again.
                  </div>
                )}
                {formState.success && (
                  <div className="font-bold tracking-wider mt-6 bg-green-500 rounded-sm text-center py-4 px-4 text-xl text-white mb-3">
                    Message Sent
                  </div>
                )}
              </form>
            )}
          </div>
        </div>
      </section>
    </div>
  )
}

