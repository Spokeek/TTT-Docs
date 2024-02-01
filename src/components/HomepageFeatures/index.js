import clsx from 'clsx';
import Heading from '@theme/Heading';
import styles from './styles.module.css';

const FeatureList = [
  {
    title: 'AtlasTexture',
    img: require('@site/static/img/TutorialCard/AtlasTexture-TutorialHeader.png').default,
    description: (
      <>
        非破壊でテクスチャアトラス化！
      </>
    ),
  },

  {
    title: 'SimpleDecal',
    img: require('@site/static/img/TutorialCard/SimpleDecal-TutorialHeader.png').default,
    description: (
      <>
        直感的な色改変！
      </>
    ),
  },

  // {
  //   title: 'PSD Inproter',
  //   img: require('@site/static/img/undraw_docusaurus_react.svg').default,
  //   description: (
  //     <>
  //       レイヤー差分をUnityで！
  //     </>
  //   ),
  // },
];

function Feature({ img, title, description }) {
  return (
    <div className={clsx('col col--4')}>
      <div className="text--center">
        <img className={styles.featureImg} src={img} />
      </div>
      <div className="text--center padding-horiz--md">
        <Heading as="h3">{title}</Heading>
        <p>{description}</p>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className={styles.featuresContainer}>
        <div className={styles.featureRow}>
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
