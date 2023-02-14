import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import '../css/main.css';
import SearchBar from '@theme/SearchBar';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('max-w-7xl mx-auto w-full mt-6 !py-0 !px-4 md:!px-8', styles.heroBanner)}>
      <div className="w-full text-left py-10 md:py-20 primary-gradient-box !px-8 lg:!px-20 rounded">
        <p className="text-white font-medium text-xs">Documentation</p>
        <h1 className="text-white text-3xl mb-0 lg:mb-4 lg:text-3xl">Getting Started with Appblocks</h1>
        {/* <p className="hero__subtitle text-xl py-2">{siteConfig.tagline}</p> */}
        {/* <div className="text-left pt-2 search-wrapper"> */}
          {/* <Link
            className="button text-sm font-semibold py-2 hover:bg-[#3A1D6E]"
            to="/docs/intro">
             Read Docs
          </Link> */}
          {/* <SearchBar /> */}
          {/* <input type="text" className="search-input pr-12 rounded-md h-12 focus:outline-none max-w-[400px] w-full border-transparent px-4 text-ab-black text-sm" placeholder="Search keyword"></input> */}
        {/* </div> */}
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main className="mb-10">
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
