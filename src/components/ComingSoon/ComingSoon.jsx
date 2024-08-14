import React from "react";
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <section className="padding-container container rg-32-64 mt140-220 mb140-220">
      <h2 className="section-title stroke-text gc-f">Coming soon</h2>
      <div className="gc-f">
        <article className="container rg-32 cg-32-large">
          <div className="img-container fdc gc-f-1-7 large">
            <img
              src="/img/ComingSoon/Album 1 - My self (2) 2.png"
              alt=""
              className="max-h-326"
            />
            <img
              src="/img/ComingSoon/Voiture vigne-2 1.png"
              alt=""
              className="max-h-326"
            />
          </div>
          <div className="gc-f-7-13 large flex fdc h100">
            <h3 className="project-title">My self 'n' I</h3>
            <h4 className="tag-project border-bottom-black-2">
              Photographie - Montage - Autoportrait
            </h4>
            <p className="description-text mt-20">
              « My self 'n' I » est un projet photographique autobiographique
              unique, où chaque cliché met en scène le photographe sous la forme
              de quatre entité qui cohabite, comme s'il était multi-cloné. Ce
              premier album photo explore la personnification du photographe,
              allant bien au-delà de la simple captation d'image pour exprimer
              une émotion profonde, librement interprétable par le spectateur.
            </p>
            <div className="description-text tags-container flex cg-20 mt-20 h100 aife">
              <p className="tag tag-photoshop">Photoshop</p>
              <p className="tag tag-lightroom">Lightroom</p>
              <p className="flex cg-6 aic">
                <img src="./img/TagIACircle.svg" alt="" />
                IA
              </p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
