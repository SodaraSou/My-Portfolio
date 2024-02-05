import ComputerTopia from "../images/computertopia.store.png";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { github } from "../images";
import Tailwind from "../images/icons8-tailwind-css.svg";
import ReactJs from "../images/icons8-react.svg";
import Firebase from "../images/icons8-firebase.svg";

function Project() {
  return (
    <section
      id="project"
      className="p-10 text-black md:flex md:flex-col md:h-screen md:justify-center"
    >
      <div className="max-w-5xl mx-auto">
        <h1 className="text-4xl text-center md:text-left  font-bold mb-10">
          Project
        </h1>
        <div className="flex flex-col md:flex-row gap-10">
          <div className="w-full md:w-3/5">
            <div className="h-[400px] overflow-hidden">
              <img
                src={ComputerTopia}
                alt="computerTopia"
                className="w-full transform transition-all duration-500 scrolling-image"
              />
            </div>
          </div>
          <div className="w-full md:w-2/5 text-center flex flex-col gap-10">
            <h2 className="text-2xl font-bold">Computer Topia</h2>
            <p className="font-medium text-gray-400">
              Computer Topia is an online store website that allows users to
              view and buy technology products. The website provide an interface
              for user to search products, sort products, filter products based
              on categories, authentication, add items to cart, checkout items,
              and tracking ordered.
            </p>
            <div className="flex justify-center items-center gap-4">
              {/* <h2 className="text-lg font-bold">Tech Stack:</h2> */}
              <img src={ReactJs} alt="ReactJs" />
              <img src={Tailwind} alt="Tailwind" />
              <img src={Firebase} alt="Firebase" />
            </div>
            <div className="flex justify-center gap-10">
              <a
                href="https://github.com/SodaraSou/Computer-Topia-Store"
                target="_blank"
                className="hover:underline font-medium"
              >
                Code <FontAwesomeIcon icon={faGithub} />
              </a>
              <a
                href="https://computertopia.store/"
                target="_blank"
                className="hover:underline font-medium"
              >
                Live Demo <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
