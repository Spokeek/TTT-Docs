import React from 'react';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

interface CardProps {
  imageSrc: string;
  text: string;
  jumpLink: string;
}

const tpCards = [

  {
    imageSrc: require("@site/static/img/TutorialCard/AtlasTexture-TutorialHeader.png").default,
    text: "AtlasTexture",
    jumpLink: "/docs/Tutorial/AtlasTexture-Tutorial",
  },
  
  {
    imageSrc: require("@site/static/img/TutorialCard/SimpleDecal-TutorialHeader.png").default,
    text: "SimpleDecal",
    jumpLink: "/docs/Tutorial/SimpleDecal-Tutorial",
  },

  // {
  //   imageSrc: require("@site/static/img/").default,
  //   text: "PSD Improter",
  //   jumpLink: "/docs/Tutorial/PSDInporter-Tutorial",
  // }
]


function TutorialCard(tpCord: CardProps) {
  return (
    <div className={styles.TutorialCardTop}>
      <Link to={tpCord.jumpLink}>
        <img src={tpCord.imageSrc} alt="Card" />
        <div className={styles.TutorialCardText}> {tpCord.text} </div>
        <div className={styles.TutorialCardGradient} />
      </Link>
    </div>
  );

}


export function TutorialCardElement(): JSX.Element {
  return (
    <div className={styles.TutorialContainer}>
      {tpCards.map((card) => (<TutorialCard key={card.text} {...card} />))}
    </div>
  )
}