import React from "react";

function ContactLink() {
  const url = "https://docs.google.com/forms/d/e/1FAIpQLScV5729GKwAt_gMZoAvIFZlNcIIqmOWK4nE0yXHgegiwWmX6Q/viewform?embedded=true"; // from Google Forms -> Send -> Link

  return (
    <section id="contact" className="py-20">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <h2 className="text-3xl font-bold">Contact</h2>
        <p className="mt-2 text-gray-600">Feel Free to Contact If there is issues ? Click below to open the contact form.</p>

        <a
          href={url}
          target="_blank"
          rel="noreferrer"
          className="inline-block mt-6 px-6 py-2 bg-indigo-600 text-white rounded hover:bg-indigo-700 transition"
        >
          Open Contact Form
        </a>

        <div className="mt-6 text-sm text-gray-500">
          Or email: <a href="mailto:youremail@example.com" className="text-indigo-600">Bhanushahi70@gmail.com</a>
        </div>
      </div>
    </section>
  );
}
export default ContactLink;