import React from "react";
import styles from "./AboutExp.module.scss";
import { AiOutlineMinusCircle } from "react-icons/ai";

const AboutExp = () => {
  return (
    <div className={`${styles.aboutExp}`}>
      <div className={`${styles.aboutIcons}`}>
        <AiOutlineMinusCircle size={30} />
        <h3>Experiência</h3>
      </div>
      <p>
        Atualmente não possuo experiências registradas em programação, mas estou
        sempre em busca de melhores práticas e também em busca de
        aprender/experimentar novas tecnologias. Minhas experiências atuais são
        os projetos que fiz, e os que ainda estou desenvolvendo. Eles podem ser
        encontrados no meu
        <a
          target="_blank"
          href="https://github.com/Ariane-Brum?tab=repositories"
          rel="noreferrer"
        >
          {" "}
          Github
        </a>
      </p>
    </div>
  );
};

export default AboutExp;
