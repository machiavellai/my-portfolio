import { Server, Globe, Smartphone } from 'lucide-react'

const ExpertiseSection = () => {
  return (
    <section className="py-16">
      <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-center mb-12 sm:mb-16 text-white">My Expertise</h2>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {/* Backend Development */}
        <div className="bg-[#050a30] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="space-y-4">
            <Server className="w-12 h-12 text-white" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
                Backend
                <div className="relative inline-block">
                  Development
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#ff69b4]"></div>
                </div>
              </h3>
            </div>
            <div className="font-mono text-gray-400 space-y-2">
              <div className="text-gray-500">&lt;h3&gt;</div>
              <p className="pl-4 text-sm leading-relaxed">
                Proficient in Node.js, Java Spring Boot, and Python. Building robust and scalable server-side applications.
              </p>
              <div className="text-gray-500">&lt;/h3&gt;</div>
            </div>
          </div>
        </div>

        {/* Web Development */}
        <div className="bg-[#050a30] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="space-y-4">
            <Globe className="w-12 h-12 text-white" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
                Web
                <div className="relative inline-block">
                  Development
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#0000ff]"></div>
                </div>
              </h3>
            </div>
            <div className="font-mono text-gray-400 space-y-2">
              <div className="text-gray-500">&lt;h3&gt;</div>
              <p className="pl-4 text-sm leading-relaxed">
                Spanning across React and Next.js to build efficient web apps and websites. Creating responsive and interactive user interfaces.
              </p>
              <div className="text-gray-500">&lt;/h3&gt;</div>
            </div>
          </div>
        </div>

        {/* Mobile Development */}
        <div className="bg-[#050a30] p-6 sm:p-8 rounded-2xl border border-gray-800 shadow-lg hover:shadow-xl transition-all duration-300 ease-in-out transform hover:-translate-y-2">
          <div className="space-y-4">
            <Smartphone className="w-12 h-12 text-white" />
            <div>
              <h3 className="text-xl sm:text-2xl font-bold text-white flex flex-wrap items-center gap-2">
                Mobile
                <div className="relative inline-block">
                  Development
                  <div className="absolute -bottom-1 left-0 w-full h-1 bg-[#ff7f50]"></div>
                </div>
              </h3>
            </div>
            <div className="font-mono text-gray-400 space-y-2">
              <div className="text-gray-500">&lt;h3&gt;</div>
              <p className="pl-4 text-sm leading-relaxed">
                Utilizing React Native to build scalable mobile applications. Delivering smooth, native-like experiences on both iOS and Android platforms.
              </p>
              <div className="text-gray-500">&lt;/h3&gt;</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ExpertiseSection

