import React from "react";
import styles from "./Education.module.scss";

import { FaRegCalendarAlt } from "react-icons/fa";
import { MdCastForEducation } from "react-icons/md";

const Education = () => {
  return (
    <div className={`${styles.aboutEducation}`}>
      <div className={`${styles.aboutIcons}`}>
        <MdCastForEducation size={30} />
        <h3>Educação</h3>
      </div>

      <div className={`${styles.aboutEducationItem}`}>
        <div className={`${styles.aboutEducationDate}`}>
          <FaRegCalendarAlt />
          <p>2019 - 2022</p>
        </div>

        <h4>Escola e Faculdade QI (Cursando)</h4>
        <span>Análise e desenvolvimento de sistemas</span>
      </div>

      <div className={`${styles.aboutEducationItem}`}>
        <div className={`${styles.aboutEducationDate}`}>
          <FaRegCalendarAlt />
          <p>2019 - 2020</p>
        </div>

        <h4>Colégio Estadual Protásio Alves</h4>
        <span>Curso técnico informática para internet</span>
      </div>

      <div className={`${styles.aboutEducationItem}`}>
        <div className={`${styles.aboutEducationDate}`}>
          <FaRegCalendarAlt />
          <p>2019 - 2020</p>
        </div>

        <h4>Colégio Agir</h4>
        <span>Ensino Médio</span>
      </div>
    </div>
  );
};

export default Education;
