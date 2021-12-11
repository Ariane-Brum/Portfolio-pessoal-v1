import Link from "next/link";
import { useState, useEffect } from "react";
import { ActiveLink } from "../ActiveLink";
import { useRouter } from "next/router";

import useMedia from "../../Hooks/useMedia";

import styles from "./Header.module.scss";

import { FaGithub, FaLinkedin, FaHeart } from "react-icons/fa";
import { FaHome } from "react-icons/fa";
import { FaUserAlt } from "react-icons/fa";
import { FaBriefcase } from "react-icons/fa";

const arrayMenu = [
  { url: "/", icone: FaHome, nome: "Home" },
  { url: "/sobre", icone: FaUserAlt, nome: "Sobre" },
  { url: "/portfolio", icone: FaBriefcase, nome: "Portfolio" },
];

export default function Header() {
  const [darkTheme, setDarkTheme] = useState(undefined);
  const mobile = useMedia("(max-width: 90.625rem)");
  // estado para saber se o mobile menu esta aberto ou fechado
  const [mobileMenu, setMobileMenu] = useState(false);

  // toda vez que eu clicar em uma opção do menu,ou seja, toda vez que eu mudar de rota, quero que o menu desapareça
  const { pathname } = useRouter();

  useEffect(() => {
    setMobileMenu(null);
  }, [pathname]);

  const handleToggle = (event) => {
    setDarkTheme(event.target.checked);
  };

  useEffect(() => {
    if (darkTheme !== undefined) {
      if (darkTheme) {
        // Set value of  darkmode to light
        document.documentElement.setAttribute("data-theme", "light");
        window.localStorage.setItem("theme", "light");
      } else {
        // Set value of  darkmode to dark
        document.documentElement.removeAttribute("data-theme");
        window.localStorage.setItem("theme", "dark");
      }
    }
  }, [darkTheme]);

  useEffect(() => {
    const root = window.document.documentElement;
    const initialColorValue = root.style.getPropertyValue(
      "--initial-color-mode"
    );
    // Set initial darkmode to light
    setDarkTheme(initialColorValue === "light");
  }, []);

  return (
    <>
      {/* Eu quero que esse botão só aparece se tiver no mobile */}
      {mobile && (
        <button
          aria-label="Menu"
          className={`${styles.mobileButton} ${
            mobileMenu && styles.mobileButtonActive
          }`}
          onClick={() => setMobileMenu(!mobileMenu)}
        ></button>
      )}
      <header
        className={`${styles.header} ${
          mobileMenu && styles.headerMobileActive
        }`}
      >
        <div>
          {darkTheme !== undefined && (
            <form action="#">
              <label className="switch">
                <input
                  type="checkbox"
                  checked={darkTheme}
                  onChange={handleToggle}
                />
                <span className="slider"></span>
              </label>
            </form>
          )}
        </div>
        <div className={styles.headerWrapper}>
          <div className={styles.headerImg}>
            <Link href="/">
              <a>
                <img src="/images/ariane.jpg" alt="Foto Ariane" />
              </a>
            </Link>
          </div>
          <nav className={styles.nav}>
            <ul>
              {arrayMenu.map((link) => (
                <li key={link.nome}>
                  <ActiveLink href={link.url} activeClassName={styles.active}>
                    <a>
                      <link.icone />
                      {link.nome}
                    </a>
                  </ActiveLink>
                </li>
              ))}
            </ul>
          </nav>
          <div className={styles.redesWrapper}>
            <h3>Redes Sociais</h3>
            <div className={styles.redesSociais}>
              <a
                target="_blank"
                href="https://github.com/Ariane-Brum"
                rel="noreferrer"
              >
                <FaGithub size={30} />
              </a>
              <a
                target="_blank"
                href="https://www.linkedin.com/in/ariane-brum-dos-santos-aa908521a/"
                rel="noreferrer"
              >
                <FaLinkedin size={30} />
              </a>
            </div>
          </div>
        </div>

        <p className={styles.footer}>
          Criado por Ariane Brum
          <FaHeart />
        </p>
      </header>
    </>
  );
}
