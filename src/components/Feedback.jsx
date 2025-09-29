import React from 'react'

export default function Feedback() {
  return (
    
      <div className="w-full max-full bg-gray-800  shadow-lg p-6 min-h-[400px] sm:min-h-[500px] md:min-h-[600px]">
        <h2 className="text-2xl md:text-3xl font-semibold text-amber-500 mb-2 text-center">Feedback</h2>
        <p className="text-white mb-4 text-center text-2xl">I'd love to hear your thoughts — please fill out the form below.</p>

        <iframe
          title="Feedback Form"
          src="https://docs.google.com/forms/d/e/1FAIpQLScV5729GKwAt_gMZoAvIFZlNcIIqmOWK4nE0yXHgegiwWmX6Q/viewform?embedded=true"
          className="w-full h-[600px] rounded-lg"
          frameBorder="0"
          marginHeight="0"
          marginWidth="0"
          allowFullScreen
        ></iframe>

        <p className="mt-4 text-sm text-white">
          If the form doesn't load, you can <a
            href="https://docs.google.com/forms/d/e/1FAIpQLScV5729GKwAt_gMZoAvIFZlNcIIqmOWK4nE0yXHgegiwWmX6Q/viewform?embedded=true"
            target="_blank"
            rel="noreferrer"
            className="text-indigo-600 hover:underline"
          >open it in a new tab</a>.
        </p>
      </div>
    
  )
}