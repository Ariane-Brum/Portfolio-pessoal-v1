import Head from "next/head";
import { useState } from "react";
import { Modal } from "../../Components/Modal";
import Image from "next/image";
import styles from "./Portfolio.module.scss";
import useMedia from "../../Hooks/useMedia";

import { getPrismicClient } from "../../services/prismic";
import Prismic from "@prismicio/client";
import { RichText } from "prismic-dom";

export default function Portfolio({ content }) {
  const [modalPhoto, setModalPhoto] = useState(null);
  const mobile = useMedia("(max-width: 26.5625rem)");

  return (
    <>
      <Head>
        <title>Portfólio | Meu Portfólio</title>

        <meta
          name="description"
          content="Projetos que desenvolvi para colocar em prática os estudos. Pretendo adicionar mais projetos ao longo de minha evolução profissional."
        />
        <meta itemProp="name" content="Portfólio | Meu portfólio" />
        <meta
          itemProp="description"
          content="Projetos que desenvolvi para colocar em prática os estudos. Pretendo adicionar mais projetos ao longo de minha evolução profissional."
        />

        <meta itemProp="image" content="/ogimage.png" />
        <meta property="og:image:secure_url" content="/ogimage.png" />
      </Head>
      <main className={`${styles.porfolio}  animeRight`}>
        <div className={`pagesWrapper`}>
          <h1 className="title lineBefore lineAfter">Portfólio</h1>

          <h2>Projetos</h2>
          <div className={styles.cardContent}>
            {content.map((item) => (
              <div
                key={item.slug}
                onClick={() => setModalPhoto(item)}
                className={`${styles.card}`}
              >
                <div className={styles.cardFront}>
                  <Image
                    src={item.cover}
                    alt={item.title}
                    width={500}
                    height={400}
                    quality={100}
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mPMzi88CAAEpgIO6+Q+4wAAAABJRU5ErkJggg=="
                  />
                  {mobile && <p>Clique para mais informações</p>}
                </div>
                <div className={styles.cardBack}>
                  <h2 className={`${styles.title}`}>{item.title}</h2>
                  <p className={`${styles.subtitle}`}>
                    Clique para mais informações
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </main>
      {modalPhoto && (
        <Modal
          onClose={() => setModalPhoto(false)}
          setModalPhoto={setModalPhoto}
          modalPhoto={modalPhoto}
        />
      )}
    </>
  );
}

export async function getStaticProps() {
  const prismic = getPrismicClient();
  const response = await prismic.query(
    [Prismic.Predicates.at("document.type", "projeto")],
    { orderings: "[document.first_publication_date desc]" }
  );

  const content = response.results.map((projeto) => {
    return {
      slug: projeto.uid,
      title: RichText.asText(projeto.data.title),
      description: projeto.data.description,
      linkRepos: projeto.data.link_repository.url,
      linkProject: projeto.data.link_project.url,
      cover: projeto.data.cover.url,
      arrayDemos: projeto.data.demos,
      arrayTec: projeto.data.tecnology,
    };
  });

  return {
    props: {
      content,
    },
    revalidate: 60 * 60 * 24,
  };
}
