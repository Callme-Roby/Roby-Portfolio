import React from "react";
import "./Projects.css";

export default function Projects() {
  return (
    <section className="padding-container container rg-32-64">
      <h2 className="section-title stroke-text gc-f">Projets</h2>
      <div className="gc-f">
        <article className="container cg-32-large">
          <h3 className="project-title gc-f">La course du petit prince</h3>
          <h4 className="tag-project border-bottom-black-2 gc-f">
            DA - Branding - UX/UI
          </h4>
          <p className="description-text mt-20 gc-f">
            Projet de cours mener en 48h. En équipe nous avons eu pour mission
            de revoir l'identité visuelle de la CDPP, événement caritatif
            organisé dans la forêt du Bourgailh, à Pessac (33). Que ce soit le
            logo, les goodies, la com, le site web, tout était à refaire pour
            rendre l'évènement le plus visible et le plus authentique.
          </p>
          <div className="img-container gc-f">
            <img
              src="/img/Projects/GreyRectProject.png"
              alt=""
              className="max-h-375"
            />
          </div>
          <div className="description-text tags-container flex cg-20 mt-20 h100 aife">
            <p className="tag tag-photoshop">Photoshop</p>
            <p>Figma</p>
            <p className="tag tag-illustrator">Illustrator</p>
          </div>
        </article>
      </div>
    </section>
  );
}
