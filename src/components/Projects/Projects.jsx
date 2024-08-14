import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="padding-container container rg-32-64">
      <h2 className="section-title stroke-text gc-f">Projets</h2>
      <div className="gc-f rg-80 grid">
        <article className="container cg-32-medium gtr-f-auto">
          <div className="project-title gc-f-7-13 medium">
            <h3 className="project-title">La course du petit prince</h3>
            <h4 className="tag-project border-bottom-black-2">
              DA - Branding - UX/UI
            </h4>
            <p className="description-text mt-20">
              En 48 heures, notre équipe de six designers a refondu l'identité
              visuelle de "La Course du Petit Prince", un marathon caritatif à
              Pessac (Gironde), dédié à la lutte contre les sarcomes. Nous avons
              conçu un nouveau logo, un site web, et divers supports de
              communication, pour moderniser l'image de l'événement tout en
              respectant son engagement envers la santé.
            </p>
          </div>
          <div className="img-container gc-f-1-7 gr-f medium h100">
            <img src="/img/Projects/GreyRectProject.png" alt="" />
          </div>
          <div className="description-text tags-container flex cg-20  h100 aife gc-f-7-13 medium">
            <p className="tag tag-photoshop">Photoshop</p>
            <p className="flex cg-6 aic">
              <img src="./img/TagFigmaCircle.svg" alt="" />
              Figma
            </p>
            <p className="tag tag-illustrator">Illustrator</p>
          </div>
        </article>

        <article className="container cg-32-medium gtr-f-auto">
          <div className="project-title gc-f-1-7 medium">
            <h3 className="project-title">Réseau Santosha</h3>
            <h4 className="tag-project border-bottom-black-2">
              DA - Conception Web - UX/UI - Développement No-code
            </h4>
            <p className="description-text mt-20">
              Pour ce projet, j'ai conçu et développé le site internet
              "Santosha", une one page destinée à faciliter les rencontres
              professionnelles en face à face. En plus de la conception UX/UI et
              du développement en NoCode sur Elementor, j'ai également créé et
              conceptualisé toute la direction artistique du site. Cela inclut
              les logos, le choix des couleurs, la typographie, les icônes,
              ainsi que tous les éléments visuels et graphiques. Ce projet m'a
              permis de combiner mes compétences en design et en développement
              pour offrir une solution complète et cohérente.
            </p>
          </div>
          <div className="img-container gc-f-7-13 gr-f medium h100">
            <img src="/img/Projects/GreyRectProject.png" alt="" />
          </div>
          <div className="description-text tags-container flex cg-20  h100 aife gc-f-1-7 medium">
            <p className="flex cg-6 aic">
              <img
                src="./img/TagFigmaCircle.svg"
                alt="Cercle de couleur identifiant le tag figma"
              />
              Figma
            </p>
            <p className="tag tag-photoshop">Photoshop</p>
            <p className="tag tag-illustrator">Illustrator</p>
          </div>
        </article>

        <article className="container cg-32-medium gtr-f-auto">
          <div className="project-title gc-f-7-13 medium">
            <h3 className="project-title">Rebirth : NF</h3>
            <h4 className="tag-project border-bottom-black-2">
              DA - Modélisation 3D - After Effect
            </h4>
            <p className="description-text mt-20">
              Dans le cadre d'un projet de cours, j'ai collaboré avec un
              collègue designer pour réaliser le rebranding et la création
              complète d'un vinyle pour le rappeur américain NF. Le défi
              consistait à rester fidèle à l'identité artistique de NF, tout en
              apportant une touche nouvelle basée sur un thème imposé : le
              sourire et le bonheur.
            </p>
          </div>
          <div className="img-container gc-f-1-7 gr-f medium h100">
            <img src="/img/Projects/GreyRectProject.png" alt="" />
          </div>
          <div className="description-text tags-container flex cg-20  h100 aife gc-f-7-13 medium">
            <p className="tag tag-photoshop">Photoshop</p>
            <p className="flex cg-6 aic">
              <img src="./img/TagFigmaCircle.svg" alt="" />
              Figma
            </p>
            <p className="tag tag-illustrator">Illustrator</p>
          </div>
        </article>
      </div>
    </section>
  );
}
