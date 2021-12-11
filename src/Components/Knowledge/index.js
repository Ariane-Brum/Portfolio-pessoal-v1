import React from "react";
import styles from "./Knowledge.module.scss";
import { BsCodeSlash } from "react-icons/bs";

import {
  DiJavascript,
  DiHtml5,
  DiCss3,
  DiReact,
  DiSass,
  DiGithubBadge,
  DiNpm,
} from "react-icons/di";

const arrayIcons = [
  { name: "Javascript", icone: DiJavascript, color: "#efd81d" },
  { name: "HTML5", icone: DiHtml5, color: "#f7621e" },
  { name: "CSS3", icone: DiCss3, color: "#016db4" },
  { name: "React.js", icone: DiReact, color: "#60d7f7" },
  { name: "SASS", icone: DiSass, color: "#c76494" },
  { name: "Git e Github", icone: DiGithubBadge, color: "#e94e31" },
  { name: "Npm", icone: DiNpm, color: "#C53635" },
];

const Knowledge = () => {
  return (
    <div className={`${styles.aboutKnowledge}`}>
      <div className={`${styles.aboutIcons}`}>
        <BsCodeSlash size={30} />
        <h3>Conhecimentos</h3>
      </div>
      <ul>
        {arrayIcons.map((icon) => (
          <li key={icon.name}>
            <icon.icone size={50} color={icon.color} />
            <p>{icon.name}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Knowledge;
