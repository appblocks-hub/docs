import React from 'react';
import clsx from 'clsx';
import styles from './styles.module.css';
import Link from '@docusaurus/Link';
import CustomerSupport from '../Help';

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
const GetStartedList = [
  {
    title: 'Introduction',
    description: 'An overview of how Appblocks works.'
  },
  {
    title: 'Guide article title',
    description: 'Description text'
  },
  {
    title: 'Guide article title',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Morbi commodo iaculis quam quis dapibus'
  },
  {
    title: 'Guide article title',
    description: 'Description text'
  },
  {
    title: 'Guide article title',
    description: 'Description text'
  },
];

function Feature({Svg, title, description, link}) {
  return (
    <Link to={link} className="box-link-main group">
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
        <span className="text-xs text-left text-gray-light float-left mb-0 mt-6 hover:text-primary hover:underline">Read Now</span>
      </div>
    </Link>
  );
}

export default function HomepageFeatures() {
  return (
    <>
    <section className={styles.features}>
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <h3 className="text-black font-medium text-2xl mb-2 mt-5">Guides and resources</h3>
        <p className="text-ab-black text-base font-medium">Explore and Learn more about everything from building blocks to selling your own blocks to customers across the globe.</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {FeatureList.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-4">
        <h3 className="text-black font-medium text-2xl mb-2">Get started</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 mt-4">
          {GetStartedList.map((props, idx) => (
            <div key={idx} className="w-full border-b border-t-0 border-x-0 border-solid border-ab-gray-dark py-3">
                <p className="text-base text-ab-black m-0 font-medium">{props.title}</p>
                <p className="text-sm text-ab-black/60 mt-2 mb-0">{props.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full mt-10">
        <div className="border-0 border-b border-ab-gray-dark border-solid pb-10">
          <h3 className="text-black font-medium text-2xl mb-2">Lorem ipsum dolor</h3>
          <p className="text-ab-black text-base font-medium">Explore and Learn more about everything from building blocks to selling your own blocks to customers across the globe.</p>
          <a href="javascript:;" className="bg-primary max-w-[320px] w-full h-12 inline-flex items-center justify-center rounded text-white hover:no-underline hover:opacity-90 hover:text-white focus:outline-none py-3.5 px-4">Store Walkthrough</a>
        </div>
      </div>
    </section>
    <section>
      <div className="max-w-7xl mx-auto px-4 md:px-8 w-full">
        <CustomerSupport/>
      </div>
    </section>
    </>
  );
}
