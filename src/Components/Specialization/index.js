import React from "react";
import styles from "./Specialization.module.scss";
import { GiGiftOfKnowledge } from "react-icons/gi";

const Specialization = () => {
  return (
    <>
      <div className={`${styles.abouSpecialization}`}>
        <div className={`${styles.aboutIcons}`}>
          <GiGiftOfKnowledge size={30} />
          <h3>Cursos / Especializações</h3>
        </div>
        <div className={`${styles.aboutSpecializationWrapper}`}>
          <div className={`${styles.aboutSpecializationItem}`}>
            <h4>Web Design Completo</h4>
            <h5>Origamid</h5>
            <p>Ano de conclusão: 2020</p>
            <p>Carga horária: 44 horas</p>
          </div>
          <div className={`${styles.aboutSpecializationItem}`}>
            <h4>CSS com SASS</h4>
            <h5>Origamid</h5>
            <p>Ano de conclusão: 2021</p>
            <p>Carga horária: 12 horas</p>
          </div>
          <div className={`${styles.aboutSpecializationItem}`}>
            <h4>React Completo</h4>
            <h5>Origamid</h5>
            <p>Ano de conclusão: 2021</p>
            <p>Carga horária: 36 horas</p>
          </div>
          <div className={`${styles.aboutSpecializationItem}`}>
            <h4>Front-end do Zero ao Profissional</h4>
            <h5>B7Web</h5>
            <p>Ano de conclusão: 2021</p>
            <p>Carga horária: 36 horas</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Specialization;
