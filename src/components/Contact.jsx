import React from "react";

const Contact = () => {
  const contact_info = [
    { logo: "mail", text: "parikavi750@gmail.com" },
    { logo: "logo-whatsapp", text: "+91 8637499450" },
  ];

  return (
    <section id="contact" className="py-10 px-5 bg-pink-500 text-gray-800">
      <div className="text-center mt-8">
        <h3 className="text-6xl font-bold text-white mb-4">
          Contact <span className="text-cyan-600">Me</span>
        </h3>
        <p className="text-gray-300 font-semibold my-3 text-lg">
          Get in touch
        </p>

        <div className="flex flex-col md:flex-row gap-8 max-w-6xl mx-auto mt-12 bg-pink-700 p-10 rounded-lg shadow-lg">
          {/* Contact Form */}
          <form
            action="https://getform.io/f/bnllenkb"
            method="POST"
            className="flex flex-col flex-1 gap-6 bg-pink-600 p-6 rounded-lg shadow-lg"
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              required
              className="w-full p-3 bg-pink-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-cyan-600 placeholder-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email Address"
              required
              className="w-full p-3 bg-pink-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-cyan-600 placeholder-white"
            />
            <textarea
              name="message"
              placeholder="Your Message"
              className="w-full p-3 bg-pink-500 text-white rounded-lg outline-none focus:ring-2 focus:ring-cyan-600 placeholder-white"
              rows="5"
            ></textarea>
            <button
              type="submit"
              className="w-fit bg-cyan-600 hover:bg-cyan-700 text-white px-5 py-2 rounded-lg font-semibold shadow-lg transition-all"
            >
              Send Message
            </button>
          </form>

          {/* Contact Info */}
          <div className="flex flex-col gap-7 flex-1">
            {contact_info.map((contact, i) => (
              <div
                key={i}
                className="flex items-center gap-5 bg-pink-600 p-6 rounded-lg shadow-lg transition-transform transform hover:scale-105 duration-300"
              >
                <div className="w-14 h-14 text-3xl text-white bg-cyan-600 rounded-full flex items-center justify-center">
                  <ion-icon name={contact.logo}></ion-icon>
                </div>
                <p className="text-white text-lg break-words">
                  {contact.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;






