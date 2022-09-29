/**
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */
import React from 'react';
import clsx from 'clsx';
import Link from '@docusaurus/Link';
import {useThemeConfig} from '@docusaurus/theme-common';
import useBaseUrl from '@docusaurus/useBaseUrl';
import isInternalUrl from '@docusaurus/isInternalUrl';
import styles from './styles.module.css';
import ThemedImage from '@theme/ThemedImage';

function FooterLink({to, href, label, prependBaseUrlToHref, ...props}) {
  const toUrl = useBaseUrl(to);
  const normalizedHref = useBaseUrl(href, {
    forcePrependBaseUrl: true,
  });
  return (
    <Link
      className="footer__link-item hover:text-white text-sm"
      {...(href
        ? {
            href: prependBaseUrlToHref ? normalizedHref : href,
          }
        : {
            to: toUrl,
          })}
      {...props}>
      {href && !isInternalUrl(href) ? (
        <span>
          {label}
        </span>
      ) : (
        label
      )}
    </Link>
  );
}

function FooterLogo({sources, alt, width, height}) {
  return (
    <ThemedImage
      className="footer__logo"
      alt={alt}
      sources={sources}
      width={width}
      height={height}
    />
  );
}

function MultiColumnLinks({links}) {
  return (
    <>
      {links.map((linkItem, i) => (
        <div key={i} className="col footer__col">
          <div className="footer__title text-base font-semibold">{linkItem.title}</div>
          <ul className="footer__items">
            {linkItem.items.map((item, key) =>
              item.html ? (
                <li
                  key={key}
                  className="footer__item" // Developer provided the HTML, so assume it's safe.
                  // eslint-disable-next-line react/no-danger
                  dangerouslySetInnerHTML={{
                    __html: item.html,
                  }}
                />
              ) : (
                <li key={item.href || item.to} className="footer__item pb-2">
                  <FooterLink {...item} />
                </li>
              ),
            )}
          </ul>
        </div>
      ))}
    </>
  );
}

function SimpleLinks({links}) {
  return (
    <div className="footer__links">
      {links.map((item, key) => (
        <React.Fragment key={key}>
          {item.html ? (
            <span
              className="footer__link-item" // Developer provided the HTML, so assume it's safe.
              // eslint-disable-next-line react/no-danger
              dangerouslySetInnerHTML={{
                __html: item.html,
              }}
            />
          ) : (
            <FooterLink {...item} />
          )}
          {links.length !== key + 1 && (
            <span className="footer__link-separator">·</span>
          )}
        </React.Fragment>
      ))}
    </div>
  );
}

function isMultiColumnFooterLinks(links) {
  return 'title' in links[0];
}

function Footer() {
  const {footer} = useThemeConfig();
  const {copyright, links = [], logo = {}} = footer || {};
  const sources = {
    light: useBaseUrl(logo.src),
    dark: useBaseUrl(logo.srcDark || logo.src),
  };

  if (!footer) {
    return null;
  }

  return (
    <footer
      className={clsx('footer bg-[#24292E]', {
        'footer--dark': footer.style === 'dark',
      })}>
      <div className="container container-fluid">

        {links &&
          links.length > 0 &&
          (isMultiColumnFooterLinks(links) ? (
            <div className="row footer__links mb-1">
              <div className="col footer__col">
                    <div className="float-left flex flex-col items-start text-base font-semibold">
                      <div className="w-full text-left mb-1">
                            <svg width="40" height="28" viewBox="0 0 40 28" fill="none" xmlns="http://www.w3.org/2000/svg">
                              <path d="M18.3363 15.5171V3.39209H0.155029V27.6371H6.21503V21.5771H12.28V27.6371H18.34V21.5771H21.37V15.5171H18.3363ZM12.2763 15.5171H6.21503V9.45584H12.28V9.44209L12.2763 15.5171Z" fill="white"/>
                              <path d="M27.725 9.45453V0.363281H21.6638V9.45453H18.6338V15.5158H21.6638V21.5758H18.6338V27.6358H39.845V9.45453H27.725ZM33.785 21.5795H27.725V15.5158H33.78L33.785 21.5795Z" fill="#6F42C1"/>
                            </svg>
                      </div>
                      <p className="mb-0">Appblocks</p>
                    </div>
                    <p className="text-sm w-full float-left">Build like Lego, but a lot more flexible.</p>
                </div>
              <MultiColumnLinks links={links} />
            </div>
          ) : (
            <div className="footer__links text--left">
              <SimpleLinks links={links} />
            </div>
          ))}
        {(logo || copyright) && (
          <div className="footer__bottom text--center">
            {logo && (logo.src || logo.srcDark) && (
              <div className="margin-bottom--sm">
                {logo.href ? (
                  <Link href={logo.href} className={styles.footerLogoLink}>
                    <FooterLogo
                      alt={logo.alt}
                      sources={sources}
                      width={logo.width}
                      height={logo.height}
                    />
                  </Link>
                ) : (
                  <FooterLogo
                    alt={logo.alt}
                    sources={sources}
                    width={logo.width}
                    height={logo.height}
                  />
                )}
              </div>
            )}
            {copyright ? (
              <div
                className="footer__copyright text-sm text-left" // Developer provided the HTML, so assume it's safe.
                // eslint-disable-next-line react/no-danger
                dangerouslySetInnerHTML={{
                  __html: copyright,
                }}
              />
            ) : null}
          </div>
        )}
      </div>
    </footer>
  );
}

export default React.memo(Footer);
