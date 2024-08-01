import React from "react";
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <section className="padding-container container rg-32">
      <h2 className="section-title stroke-text gc-f">Coming soon</h2>
      <div className="gc-f">
        <article className="grid rg-32">
          <div className="img-container fdc">
            <img src="/img/ComingSoon/Album 1 - My self (2) 2.png" alt="" />
            <img src="/img/ComingSoon/Voiture vigne-2 1.png" alt="" />
          </div>
          <div>
            <h3 className="project-title">My self 'n' I</h3>
            <h4 className="tag-project border-bottom-black">
              Photographie - Montage - Autoportrait
            </h4>
            <p className="description-text mt-20">
              Premier album photo porté sur la personnification du photographe.
              Plus qu'un message, le but est de transmettre une émotion. Une
              émotion libre à interprétation mais une émotion qui à était vécu
              et qui à été propre à chacun. Ces photos sont la représentation de
              la paix intérieur ainsi que l'acceptation de soi.
            </p>
            <div className="description-text tags-container flex cg-20 mt-20">
              <p className="tag tag-photoshop">Photoshop</p>
              <p className="tag tag-lightroom">Lightroom</p>
              <p>IA</p>
            </div>
          </div>
        </article>
      </div>
    </section>
  );
}
