import Head from "next/head";
import styles from "./Sobre.module.scss";

import Specialization from "../../Components/Specialization";
import Education from "../../Components/Education";
import Knowledge from "../../Components/Knowledge";
import AboutExp from "../../Components/AboutExp";

export default function Sobre() {
  return (
    <>
      <Head>
        <title>Sobre | Meu Portfólio</title>
        <meta
          name="description"
          content="Aqui escrevo um pouco sobre mim, meus cursos, e processos de aprendizagem."
        />
        <meta itemProp="name" content="Sobre | Meu portfólio" />
        <meta
          itemProp="description"
          content="Aqui escrevo um pouco sobre mim, meus cursos, e processos de aprendizagem."
        />

        <meta itemProp="image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
      </Head>

      <main className={`${styles.about}  animeRight`}>
        <div className={`pagesWrapper`}>
          <div className={`${styles.aboutText}`}>
            <h1 className="title lineBefore lineAfter">Sobre mim</h1>
            <h2>Seja bem vindo(a).</h2>
            <p>
              Me chamo Ariane, sou estudante de Análise e desenvolvimento de
              sistemas, estou no 5º semestre. Sou apaixonada por tecnologia e
              estou em busca de uma oportunidade na área de desenvolvimento web
              para adquirir mais conhecimento no assunto, e poder evoluir mais
              rápido. Meu objetivo é me tornar uma pessoa desenvolvedora.
            </p>
          </div>

          <div className={`${styles.aboutInfo}`}>
            <div className={`${styles.aboutAbilities}`}>
              <h3>Habilidades e competências</h3>
              <ul>
                <li className={`animate`}>Motivada, disciplinada.</li>
                <li className={`animate`}>Gosto de ajudar os outros.</li>
                <li className={`animate`}>Inglês técnico.</li>
                <li className={`animate`}>Trabalho em equipe.</li>
              </ul>
            </div>

            <div className={styles.contatoInfo}>
              <h3>Dados de Contato</h3>

              <ul>
                <li className={`animate`}>Porto Alegre / RS</li>
                <li className={`animate`}>Bairro Partenon</li>
                <li className={`animate`}>
                  <a
                    target="_blank"
                    href="https://api.whatsapp.com/send?phone=5551981265688&text=Contato%20Ariane"
                    rel="noreferrer"
                  >
                    (51)981-265-688
                  </a>
                </li>
                <li className={`animate`}>arianebrum27@gmail.com</li>
              </ul>
            </div>
          </div>

          <div className={`${styles.aboutWrapper}`}>
            <Specialization />
            <Education />
            <Knowledge />
            <AboutExp />
          </div>
        </div>
      </main>
    </>
  );
}
