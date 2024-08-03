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
              Projet de cours mener en 48h. En équipe nous avons eu pour mission
              de revoir l'identité visuelle de la CDPP, événement caritatif
              organisé dans la forêt du Bourgailh, à Pessac (33). Que ce soit le
              logo, les goodies, la com, le site web, tout était à refaire pour
              rendre l'évènement le plus visible et le plus authentique.
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
            <h3 className="project-title">La course du petit prince</h3>
            <h4 className="tag-project border-bottom-black-2">
              DA - Branding - UX/UI
            </h4>
            <p className="description-text mt-20">
              Projet de cours mener en 48h. En équipe nous avons eu pour mission
              de revoir l'identité visuelle de la CDPP, événement caritatif
              organisé dans la forêt du Bourgailh, à Pessac (33). Que ce soit le
              logo, les goodies, la com, le site web, tout était à refaire pour
              rendre l'évènement le plus visible et le plus authentique.
            </p>
          </div>
          <div className="img-container gc-f-7-13 gr-f medium h100">
            <img src="/img/Projects/GreyRectProject.png" alt="" />
          </div>
          <div className="description-text tags-container flex cg-20  h100 aife gc-f-1-7 medium">
            <p className="tag tag-photoshop">Photoshop</p>
            <p className="flex cg-6 aic">
              <img src="./img/TagFigmaCircle.svg" alt="" />
              Figma
            </p>
            <p className="tag tag-illustrator">Illustrator</p>
          </div>
        </article>

        <article className="container cg-32-medium gtr-f-auto">
          <div className="project-title gc-f-7-13 medium">
            <h3 className="project-title">La course du petit prince</h3>
            <h4 className="tag-project border-bottom-black-2">
              DA - Branding - UX/UI
            </h4>
            <p className="description-text mt-20">
              Projet de cours mener en 48h. En équipe nous avons eu pour mission
              de revoir l'identité visuelle de la CDPP, événement caritatif
              organisé dans la forêt du Bourgailh, à Pessac (33). Que ce soit le
              logo, les goodies, la com, le site web, tout était à refaire pour
              rendre l'évènement le plus visible et le plus authentique.
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
