import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Blocks Architecture',
    Svg: require('@site/static/img/icons/blox-arc-icon.svg').default,
    description: (
      <>
        Content related to Blox Architecture
      </>
    ),
    link: "/docs/intro/"
  },
  {
    title: 'yah CLI',
    Svg: require('@site/static/img/icons/blox-cli-icon.svg').default,
    description: (
      <>
        Content related to Blox CLI
      </>
    ),
    link:"/docs/yah-cli/commands/yah-login/",
  },
  {
    title: 'Blocks Store',
    Svg: require('@site/static/img/icons/blox-store-icon.svg').default,
    description: (
      <>
        Content related to Blox Store
      </>
    ),
    link:"/docs/blocks-store/walkthrough/",
  },
  {
    title: 'Advanced SDK Docs',
    Svg: require('@site/static/img/icons/adv-docs-icon.svg').default,
    description: (
      <>
       Content related to Advanced Docs
      </>
    ),
    link:"/docs/yah-sdk/yah-js-sdk/",
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <Link to={link}>
      <div className={clsx('group bg-white border border-solid rounded-lg border-primary py-8 xl:py-12 hover:shadow-[0_0px_0px_3px_#E6DCFD] cursor-pointer flex flex-col justify-center w-full items-center')}>
        <div className="text--center pb-4">
          <Svg className={styles.featureSvg} role="img" />
        </div>
        <div className="text--center padding-horiz--md">
          <h3 className="text-xl font-semibold group-hover:text-[#6F42C1] mb-1.5">{title}</h3>
          <p className="text-sm text-gray-light mb-0">{description}</p>
        </div>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="max-w-6xl mx-auto px-4 md:px-8 lg:px-16 w-full">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-8 lg:gap-16 mt-8">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
