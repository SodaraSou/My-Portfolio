import ProjectThreeJS from "../images/ThreeJS.png";
import TodayILearned from "../images/TodayILearned.png";
import CubeGamingStore from "../images/CubeGamingStore.png";

function Project() {
  return (
    <section id="project">
      <div className="p-10">
        <h1 className="text-5xl font-bold text-center md:text-left mb-10">
          Project
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-1 gap-10 h-full">
          <div className="bg-daraBlack rounded-2xl hover:scale-105 duration-500">
            <a href="#">
              <img
                src={ProjectThreeJS}
                alt="ProjectThreeJS"
                className="rounded-t-2xl w-full h-[180px]"
              />
              <div className="p-5 space-y-3">
                <h5 className="text-2xl font-bold">Three.js Project</h5>
                <div className="flex items-center text-sm space-x-3 font-medium">
                  <span className="bg-orange-600 px-2 rounded-md">HTML</span>
                  <span className="bg-blue-700 px-2 rounded-md">CSS</span>
                  <span className="bg-white text-black px-2 rounded-md">
                    Three.js
                  </span>
                </div>
              </div>
            </a>
          </div>
          <div className="bg-daraBlack rounded-2xl hover:scale-105 duration-500">
            <a href="#">
              <img
                src={TodayILearned}
                alt="ProjectThreeJS"
                className="rounded-t-2xl w-full h-[180px]"
              />
              <div className="p-5">
                <h5 className="text-2xl font-bold">Today I Learned</h5>
              </div>
            </a>
          </div>
          <div className="bg-daraBlack rounded-2xl hover:scale-105 duration-500">
            <a href="#">
              <img
                src={CubeGamingStore}
                alt="ProjectThreeJS"
                className="rounded-t-2xl w-full h-[180px]"
              />
              <div className="p-5">
                <h5 className="text-2xl font-bold">Cube Gaming Store </h5>
              </div>
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Project;
