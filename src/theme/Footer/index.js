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
                        <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M1.33984 8.10525H5.85135V26.1513H1.33984V8.10525Z" fill="white"/>
                          <path d="M10.3624 5.84961H14.8739V17.1284H10.3624V5.84961Z" fill="white"/>
                          <path d="M10.3624 21.6401H14.8739V26.1516H10.3624V21.6401Z" fill="white"/>
                          <path d="M5.85177 12.6169L5.85135 8.10525L10.3633 8.10536V12.6169H5.85177Z" fill="white"/>
                          <path d="M21.6392 21.6401H26.1507V26.1516H21.6392V21.6401Z" fill="#6F42C1"/>
                          <path d="M26.1511 12.6169H30.6626V26.1514L26.1507 26.1516L26.1511 12.6169Z" fill="#6F42C1"/>
                          <path d="M21.6392 12.6169H26.1511L26.1507 17.1284H21.6392V12.6169Z" fill="#6F42C1"/>
                          <path d="M14.9727 17.1285L14.9727 12.617H17.1277V17.1285H14.9727Z" fill="#6F42C1"/>
                          <path d="M17.1272 26.1514L17.1272 5.84961L21.6387 5.84961L21.6392 26.1516L17.1272 26.1514Z" fill="#6F42C1"/>
                          <path d="M14.9789 26.1514L14.9789 21.6399H17.1277L17.1272 26.1514H14.9789Z" fill="#6F42C1"/>
                          <path d="M5.85156 21.6396L5.85156 17.1281L16.9672 17.1281L16.9672 21.6396L5.85156 21.6396Z" fill="white"/>
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
