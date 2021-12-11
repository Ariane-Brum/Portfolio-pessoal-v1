import React from "react";
import Slide from "../Slide";
import styles from "./Modal.module.scss";
import Link from "next/link";
import { FaLink, FaTools } from "react-icons/fa";

export const Modal = ({
  id = "modal",
  onClose = () => {},
  modalPhoto,
  setModalPhoto,
}) => {
  const handleOutsideClick = (e) => {
    if (e.target.id === id) onClose();
  };

  const { arrayTec } = modalPhoto;

  return (
    <div
      id={id}
      className={`${styles.modal} slide-in-elliptic-bottom-fwd`}
      onClick={handleOutsideClick}
    >
      <div className={styles.modalContainer}>
        <button className={styles.close} onClick={onClose} />
        <h1>{modalPhoto.title}</h1>
        <div className={styles.modalWrapper}>
          <Slide modalPhoto={modalPhoto} />
          <div className={styles.modalDescription}>
            <h2>Informações do Projeto</h2>
            <p>{modalPhoto.description}</p>
            <div className={`${styles.modalIcon}`}>
              <FaTools size={20} />
              <span>Tecnologias utilizadas</span>
            </div>
            <div className={styles.modalItem}>
              <ul>
                {arrayTec.map((tec, index) => (
                  <li className={`animate`} key={index}>
                    {tec.tecnologies}
                  </li>
                ))}
              </ul>
            </div>
            <div className={styles.modalLinks}>
              <Link href={modalPhoto.linkRepos}>
                <a target="_blank" rel="noreferrer">
                  <FaLink />
                  Link para o repositório do projeto.
                </a>
              </Link>
              <Link href={modalPhoto.linkProject}>
                <a target="_blank" rel="noreferrer">
                  <FaLink />
                  Link para o Projeto.
                </a>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
