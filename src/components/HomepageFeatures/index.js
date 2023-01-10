import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';

const FeatureList = [
  {
    title: 'Blocks Architecture',
    Svg: require('@site/static/img/icons/blocks-arc-icon.svg').default,
    description: (
      <>
        Content related to Blocks Architecture
      </>
    ),
    link: "/docs/intro/"
  },
  {
    title: 'BB CLI',
    Svg: require('@site/static/img/icons/blocks-cli-icon.svg').default,
    description: (
      <>
        Content related to BB CLI
      </>
    ),
    link:"/docs/bb-cli/commands/bb-login/",
  },
  {
    title: 'Blocks Store',
    Svg: require('@site/static/img/icons/blocks-store-icon.svg').default,
    description: (
      <>
        Content related to Blocks Store
      </>
    ),
    link:"/docs/blocks-store/walkthrough/",
  },
  {
    title: 'Advanced SDK',
    Svg: require('@site/static/img/icons/adv-docs-icon.svg').default,
    description: (
      <>
       Content related to Advanced Docs
      </>
    ),
    link:"/docs/sdk/js-sdk/",
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <div className="box-link-main">
      <div className={clsx('group bg-white border border-solid rounded-md border-primary py-6 cursor-pointer flex flex-col justify-between w-full h-full p-4')}>
        <div className="w-full flex flex-col">
          <div className="w-full flex flex-start pb-3 pt-5">
            <Svg className={styles.featureSvg} role="img" />
          </div>
          <div className="text-left">
            <h3 className="text-lg font-medium text-gray-dark mb-1.5">{title}</h3>
            <p className="text-sm text-gray-light mb-0">{description}</p>
          </div>
        </div>
        <Link to={link} className=" text-xs text-left text-gray-light float-left mb-0 mt-6 hover:text-primary hover:underline">Read Now</Link>
      </div>
    </div>
  );
}

export default function HomepageFeatures() {
  return (
    <section className={styles.features}>
      <div className="max-w-5xl mx-auto px-4 md:px-8 w-full">
        <h3 className="text-black font-medium text-2xl mb-2 mt-14">Guides and resources</h3>
        <p className="text-ab-black text-base font-medium">Explore and Learn more about everything from building blocks to selling your own blocks to customers across the globe.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-8">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}
