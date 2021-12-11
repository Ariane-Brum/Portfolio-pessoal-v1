import Head from "next/head";
import styles from "./Home.module.scss";
import Link from "next/link";

import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";

const arraySocial = [
  { url: "https://github.com/Ariane-Brum", icone: FaGithub },
  {
    url: "https://www.linkedin.com/in/ariane-brum-dos-santos-aa908521a/",
    icone: FaLinkedin,
  },
  {
    url: "https://www.instagram.com/arianebrum.28/",
    icone: FaInstagram,
  },
];

export default function Home() {
  return (
    <>
      <Head>
        <title>Home | Meu Portfólio</title>
        <meta
          name="description"
          content="Olá me chamo Ariane Brum, sou uma desenvolvedora Front-end em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
        <meta itemProp="name" content="Home | Meu portfólio" />
        <meta
          itemProp="description"
          content="Olá me chamo Ariane Brum, sou uma desenvolvedora Front-end em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />

        <meta itemProp="image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />

        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Home | Meu Portfólio" />
        <meta
          name="twitter:description"
          content="Olá me chamo Ariane Brum, sou uma desenvolvedora Front-end em busca de uma oportunidade. Portfólio feito para apresentar algumas informações e projetos feitos por mim!"
        />
        <meta
          name="twitter:image"
          content="https://portfolio-pessoal-ariane-brum.vercel.app//ogimage.png"
        />
      </Head>

      <main className={`${styles.home} containerPages`}>
        <div className={`${styles.homeWrapper} scaleInCenter`}>
          <div className={styles.homeImg}>
            <img src="/images/gif.gif" alt="Gif menina programando." />
          </div>
          <div className={styles.homeText}>
            <h1 className="typeAnimationTitle">
              Ariane <em>Brum</em>
            </h1>
            <h2 className="typeAnimationSubtitle">Desenvolvedora Front-end</h2>
          </div>
          <div className={styles.homeSocial}>
            <ul>
              {arraySocial.map((social) => (
                <li key={social.url}>
                  <Link href={social.url}>
                    <a target="_blank" rel="noreferrer">
                      <social.icone size={30} />
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </>
  );
}
