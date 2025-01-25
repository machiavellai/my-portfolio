'use client'

export default function AnimatedProjectsHeading() {
  return (
    <h2 className="text-3xl sm:text-4xl font-bold mb-8 text-[#7ec8e3] flex items-center">
      Featured Projects
      <span className="ml-4 inline-block animate-bounce">↓</span>
    </h2>
  )
}

