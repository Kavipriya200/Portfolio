import React from "react";

const Hero = () => {
  const social_media = [
    {
      name: "logo-linkedin",
      link: "https://www.linkedin.com/in/kavi-priya-94a531334?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    },
    {
      name: "logo-github",
      link: "https://github.com/Kavipriya200", // Replace with your GitHub profile link
    },
  ];

  return (
    <section
      id="home"
      className="min-h-screen flex py-10 items-center justify-center"
    >
      <div className="text-center">
        <h1 className="md:text-6xl text-3xl md:leading-normal leading-10 text-white font-bold">
          <span className="text-gray-600 md:text-7xl text-6xl">
            Hello!
            <br />
          </span>
          My Name is <span> Kavipriya P</span>
        </h1>
        <h4 className="md:text-3xl text-xl md:leading-normal leading-5 mt-4 font-bold text-gray-600">
          Front-End Developer
        </h4>
        {/* Social media section */}
        <div className="mt-8 text-3xl flex justify-center items-center gap-5">
          {social_media.map((icon) => (
            <a
              key={icon.name}
              href={icon.link}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-white cursor-pointer"
            >
              <ion-icon name={icon.name}></ion-icon>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;



