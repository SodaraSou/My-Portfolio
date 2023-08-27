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
      className="h-screen text-black mt-[100px] md:mt-0 md:flex md:items-center md:justify-center"
    >
      <div className="max-w-5xl md:mx-auto p-10 xl:p-0 flex flex-col-reverse md:flex-row justify-center items-center">
        <div className="text-center md:text-left">
          <div>
            <h2 className="text-5xl md:text-7xl mb-5 font-bold">
              Hi there, I'm <span className="text-daraOrange">Sodara</span> Sou
            </h2>
            <h2 className="text-2xl md:text-4xl mb-5">I like Coding!</h2>
          </div>
          <div className="space-x-2 md:space-x-5 flex justify-center md:justify-start">
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
        <div className="mb-10 md:mb-0 flex items-center justify-center md:justify-end">
          <img src={myImage} alt="myImage" className="rounded-full w-[500px]" />
        </div>
      </div>
    </section>
  );
}

export default Hero;
