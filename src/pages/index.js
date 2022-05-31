import React from 'react';
import clsx from 'clsx';
import Layout from '@theme/Layout';
import Link from '@docusaurus/Link';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';
import styles from './index.module.css';
import HomepageFeatures from '@site/src/components/HomepageFeatures';
import '../css/main.css';
function HomepageHeader() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <header className={clsx('hero hero--primary banner-bg', styles.heroBanner)}>
      <div className="container text-left pt-4 pb-40 md:py-20">
        <h1 className="hero__title text-3xl mb-0 lg:mb-4 lg:text-5xl">Appblox</h1>
        <p className="hero__subtitle text-xl py-2">{siteConfig.tagline}</p>
        <div className="text-left">
          <Link
            className="button text-sm font-semibold py-2 hover:bg-[#3A1D6E]"
            to="/docs/intro">
             Read Docs
          </Link>
        </div>
      </div>
    </header>
  );
}

export default function Home() {
  const {siteConfig} = useDocusaurusContext();
  return (
    <Layout
      title={`Hello from ${siteConfig.title}`}
      description="Description will go into a meta tag in <head />">
      <HomepageHeader />
      <main>
        <HomepageFeatures />
      </main>
    </Layout>
  );
}
