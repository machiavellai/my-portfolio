import { Server, Globe, SmartphoneIcon as Mobile } from "lucide-react"
import Link from "next/link"
import { ReactNode } from "react";

type ServiceCardProps = {
  icon: ReactNode; // For JSX elements like <Globe />
  title: string;
  description: string;
  technologies: string[]; // Array of strings
};

type ProjectCardProps = {
  title: string;
  description: string;
  technologies: string[]; // Array of strings
  url: string;
};

// title, description, technologies, url


export default function ServicesPage() {


  return (
    <div className="min-h-screen bg-[#000c66] text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6 text-[#7ec8e3]">My Services</h1>
          <p className="text-xl mb-8">
            Ready to bring your digital vision to life? I'm available to help build innovative solutions that will
            transform your ideas into reality.
          </p>
          <div className="bg-[#050a30] p-8 rounded-lg shadow-lg">
            <h2 className="text-2xl font-bold mb-4 text-[#7ec8e3]">Looking to Build Your MVP?</h2>
            <p className="text-lg mb-6">
              I specialize in helping startups build reliable and scalable MVPs for both web and mobile platforms. Let's
              turn your concept into a working product that will impress investors and delight users.
            </p>
            <Link
              href="/#contact"
              className="inline-block bg-[#7ec8e3] text-[#050a30] px-8 py-3 rounded-lg font-semibold hover:bg-[#0000ff] hover:text-white transition-colors"
            >
              Start Your Project
            </Link>
          </div>
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 max-w-4xl mx-auto">
          <ServiceCard
            icon={<Globe className="w-12 h-12 text-[#7ec8e3]" />}
            title="Web Development"
            description="Creating responsive and interactive web applications using React and Next.js. From e-commerce platforms to custom web solutions."
            technologies={["React", "Next.js", "TypeScript", "Tailwind CSS"]}
          />
          <ServiceCard
            icon={<Mobile className="w-12 h-12 text-[#7ec8e3]" />}
            title="Mobile App Development"
            description="Building cross-platform mobile applications with React Native. Delivering smooth, native-like experiences on both iOS and Android."
            technologies={["React Native", "Expo", "Mobile APIs"]}
          />
          <ServiceCard
            icon={<Server className="w-12 h-12 text-[#7ec8e3]" />}
            title="Backend Development"
            description="Developing robust, scalable, and efficient server-side applications and APIs to power your digital solutions. Specializing in microservices architecture, database optimization, and cloud integration."
            technologies={[
              "Node.js",
              "Express",
              "MongoDB",
              "RESTful APIs",
              "GraphQL",
              "Microservices",
              "AWS",
              "Docker",
            ]}
          />
        </div>

        <div className="mt-16">
          <h2 className="text-3xl font-bold text-center mb-8 text-[#7ec8e3]">Featured Projects</h2>
          <div className="grid gap-8 md:grid-cols-2">
            <ProjectCard
              title="21SZN E-Commerce Platform"
              description="A modern e-commerce platform for streetwear and fashion, featuring a clean UI, category-based shopping, and seamless user experience."
              technologies={["Next.js", "TypeScript", "Stripe", "Prisma"]}
              url="https://21szn.vercel.app/"
            />
            <ProjectCard
              title="JAFOS FSI APP"
              description="An ecommerce platform built for geographically closed communities. Built with flutterwave, next-js, typescript and mongodb."
              technologies={["Next.js", "React", "Node.js", "MongoDB"]}
              url="https://jafos-fsi.vercel.app/"
            />
            <ProjectCard
              title="QR Code Scanner & Generator"
              description="A mobile application that enables seamless QR code scanning and generation. Built with React Native for cross-platform compatibility."
              technologies={["React Native", "Expo", "Mobile Camera API", "QR Code Library"]}
              url="https://github.com/machiavellai/react-native-vision-camera.git"
            />
            <ProjectCard
              title="Coffee House PH Ordering System"
              description="A comprehensive digital ordering system for Coffee House Portharcourt, featuring real-time order tracking, inventory management, and seamless payment integration."
              technologies={["React Native", "Node.js", "Express", "MongoDB", "Socket.io"]}
              url="https://github.com/machiavellai/CoffeApp-v1.git"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

function ServiceCard({ icon, title, description, technologies }: ServiceCardProps) {
  return (
    <div className="bg-[#050a30] p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
      <div className="flex items-center mb-4">
        {icon}
        <h3 className="text-xl font-semibold ml-4">{title}</h3>
      </div>
      <p className="text-gray-300 mb-4">{description}</p>
      <div className="flex flex-wrap gap-2">
        {technologies.map((tech, index) => (
          <span key={index} className="bg-[#000c66] text-[#7ec8e3] px-2 py-1 rounded-full text-sm">
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

function ProjectCard({ title, description, technologies, url }: ProjectCardProps) {
  return (
    <Link href={url} className="block">
      <div className="bg-[#050a30] p-6 rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-105 cursor-pointer">
        <h3 className="text-xl font-semibold mb-2 text-[#7ec8e3]">{title}</h3>
        <p className="text-gray-300 mb-4">{description}</p>
        <div className="flex flex-wrap gap-2">
          {technologies.map((tech, index) => (
            <span key={index} className="bg-[#000c66] text-[#7ec8e3] px-2 py-1 rounded-full text-sm">
              {tech}
            </span>
          ))}
        </div>
      </div>
    </Link>
  )
}

