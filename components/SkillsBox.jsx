import Image from "next/image";

import unityIcon from "../public/images/icons/unity.png";
import sharpIcon from "../public/images/icons/csharp.png";
import asepriteIcon from "../public/images/icons/aseprite.png";
import htmlIcon from "../public/images/icons/html.svg";
import cssIcon from "../public/images/icons/css.svg";
import javascriptIcon from "../public/images/icons/javascript.svg";
import typescriptIcon from "../public/images/icons/typescript.png";
import reactIcon from "../public/images/icons/react.svg";
import vueIcon from "../public/images/icons/vue.png";
import angularIcon from "../public/images/icons/angular.png";


const Skill = ({ icon, name, url }) => {
  return (
    <a
      href={url}
      target="_blank"
      rel="noreferrer"
      className="hover:scale-110 transition duration-300 w-5 h-5 sm:w-7 sm:h-7 md:w-10 md:h-10 lg:w-12 lg:h-12"
    >
      <Image src={icon} alt={name} />
    </a>
  );
};

const SkillsBox = (props) => {
  return (
    <div className="flex flex-col rounded-md w-3/4 max-w-xs h-[8.5rem] p-4 border-2 sm:w-full sm:max-w-none md:h-[9.5rem] md:p-4 md:border-2 lg:h-40 lg:p-4 lg:border-2 border-purple items-center justify-center bg-slate-50 dark:bg-dark-blurple">
      <div className="text-center max-w-[200px] sm:max-w-none">
        <p className="font-mono text-md md:text-xl dark:text-gray-400">
          Skills
        </p>
        <div className="flex space-x-[6px] mt-4 cursor-pointer md:space-x-5">

          <Skill icon={unityIcon} name="UNITY" url="https://unity.com/pt"/>
          <Skill icon={sharpIcon} name="C#" url="https://learn.microsoft.com/pt-br/dotnet/csharp/" />
          <Skill icon={asepriteIcon} name="Aseprite" url="https://www.aseprite.org/" />
          <hr></hr>
          <Skill icon={htmlIcon} name="HTML5" url="//www.w3.org/html/" />
          <Skill icon={cssIcon} name="CSS3" url="//www.w3schools.com/css/" />
          <Skill
            icon={javascriptIcon}
            name="JavaScript"
            url="//developer.mozilla.org/en-US/docs/Web/JavaScript"
          />
          <Skill
            icon={typescriptIcon}
            name="TypeScript"
            url="https://www.typescriptlang.org/"
          />
          <Skill icon={reactIcon} name="React" url="//reactjs.org/" />
          <Skill icon={vueIcon} name="Vue" url="https://vuejs.org/" />
          <Skill icon={angularIcon} name="Angular" url="https://angular.io/" />
        </div>
        {/* <p className="font-mono text-2xl">Coming Soon</p> */}
      </div>
    </div>

    
  );
};

export default SkillsBox;
