import Html from "../images/icons8-html.svg";
import Css from "../images/icons8-css.svg";
import Js from "../images/icons8-js.svg";
import Tailwind from "../images/icons8-tailwind-css.svg";
import ReactJs from "../images/icons8-react.svg";
import Firebase from "../images/icons8-firebase.svg";

function Tech() {
  return (
    <div className="flex flex-col">
      <h3 className="text-2xl font-bold mb-10 md:mb-4">Technology</h3>
      <div className="flex justify-center md:justify-start gap-4">
        <img src={Html} alt="HTML" />
        <img src={Css} alt="CSS" />
        <img src={Js} alt="JS" />
        <img src={Tailwind} alt="Tailwind" />
        <img src={ReactJs} alt="ReactJs" />
        <img src={Firebase} alt="Firebase" />
      </div>
    </div>
  );
}

export default Tech;
