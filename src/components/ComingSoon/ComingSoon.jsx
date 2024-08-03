import React from "react";
import "./ComingSoon.css";

export default function ComingSoon() {
  return (
    <section className="padding-container container rg-32-64 mt140-220 mb140-220">
      <h2 className="section-title stroke-text gc-f">Coming soon</h2>
      <div className="gc-f">
        <article className="container rg-32 cg-32-large">
          <div className="img-container fdc gc-f-1-7">
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
          <div className="gc-f-7-13 flex fdc h100">
            <h3 className="project-title">My self 'n' I</h3>
            <h4 className="tag-project border-bottom-black-2">
              Photographie - Montage - Autoportrait
            </h4>
            <p className="description-text mt-20">
              Premier album photo porté sur la personnification du photographe.
              Plus qu'un message, le but est de transmettre une émotion. Une
              émotion libre à interprétation mais une émotion qui à était vécu
              et qui à été propre à chacun. Ces photos sont la représentation de
              la paix intérieur ainsi que l'acceptation de soi.
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
