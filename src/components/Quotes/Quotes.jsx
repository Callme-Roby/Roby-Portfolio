import React from "react";
import "./Quotes.css";

export default function Quotes() {
  return (
    <section className="padding-container container flex mt140-220 mb140-220 rg-20">
      <h2 className="gc-f text">
        "Une bonne conception nécessite que les utilisateurs comprennent le
        système, et le meilleur moyen d'y parvenir est de créer un modèle
        conceptuel qui permet aux utilisateurs de prédire les effets de leurs
        actions."
      </h2>
      <p className="gc-f jse">Donald Norman</p>
    </section>
  );
}
