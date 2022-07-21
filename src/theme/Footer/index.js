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
                      <div className="w-full text-center mb-2">
                      <svg xmlns="http://www.w3.org/2000/svg" width="33" height="38" viewBox="0 0 512 512" fill="none">
    <rect x="1" y="1" width="511" height="511" rx="39.9219" fill="black"/>
    <rect x="268.437" y="267.605" width="9.69486" height="46.5354" fill="white"/>
    <rect x="268.437" y="337.409" width="11.6338" height="46.5354" fill="#1B1F23"/>
    <rect x="187" y="128" width="46.5455" height="186.182" fill="white"/>
    <rect x="233.546" y="267.636" width="34.9091" height="46.5455" fill="white"/>
    <rect x="233.535" y="337.409" width="44.5964" height="46.5354" fill="white"/>
    <rect x="280.091" y="128" width="47.2727" height="256" fill="white"/>
</svg>
                      </div>
                      <p className="mb-0">Yahilo</p>
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
