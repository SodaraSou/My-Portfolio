import myImage from "../images/SodaraSou.jpg";
import { facebook, github, linkedin, telegram, twitter } from "../images";
import { socialLinks } from "../constants";

function Hero() {
  const socialIcons = {
    facebook: facebook,
    github: github,
    linkedin: linkedin,
    telegram: telegram,
    twitter: twitter,
  };
  return (
    <section
      id="hero"
      className="h-screen text-black flex items-center justify-center"
    >
      <div className="max-w-5xl md:mx-auto p-10 flex flex-col-reverse md:flex-row justify-center items-center gap-10 md:gap-0">
        <div className="flex flex-col text-center md:text-left gap-4 w-full md:w-3/5">
          <h1 className="text-5xl md:text-7xl font-bold">
            Hello, I'm <span className="text-daraOrange">Sodara</span> Sou
          </h1>
          <h2 className="text-2xl md:text-4xl">Web Developer</h2>
          <div className="flex justify-center md:justify-start gap-4">
            {socialLinks.map((nav, index) => (
              <div
                className="bg-daraOrange rounded-full p-2 hover:-translate-y-1.5 duration-150"
                key={index}
              >
                <a href={nav.link} target="_blank">
                  <img
                    src={socialIcons[nav.id]}
                    alt={nav.id}
                    className="w-11"
                  />
                </a>
              </div>
            ))}
          </div>
        </div>
        <div className="w-full md:w-2/5">
          <img src={myImage} alt="myImage" className="rounded-full" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
