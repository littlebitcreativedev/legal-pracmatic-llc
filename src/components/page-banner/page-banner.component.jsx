import React from 'react';
import { Link, useIntl } from 'gatsby-plugin-intl';

// material ui componets
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

// styles
import './page-banner.styles.scss';

const breadcrumbNameMap = {
  '/en/services': 'Services',
  '/en/services/translations': 'Translations',
  '/en/services/notary-public': 'Notary Public',
  '/en/services/document-preparation': 'Document Preparation',
  '/en/services/conciliations': 'Conciliations',
  '/en/about-us': 'About Us',
  '/en/contact-us': 'Contact Us',
  '/en/terms-of-use': 'Terms and Conditions',
  '/en/privacy-policy': 'Privacy Policy',
  '/en/cookies': 'Cookies',
  '/es/services': 'Servicios',
  '/es/services/translations': 'Traducciones',
  '/es/services/notary-public': 'Notario',
  '/es/services/document-preparation': 'Preparación de Documentos',
  '/es/services/conciliations': 'Conciliaciones',
  '/es/about-us': 'Sobre Nosotros',
  '/es/contact-us': 'Contacto',
  '/es/terms-of-use': 'Términos y Condiciones',
  '/es/privacy-policy': 'Política de Privacidad',
  '/es/cookies': 'Cookies',
};

const PageBanner = ({ title, imageUrl, altText, location }) => {
  const currentLocation = location;
  const pathnames = currentLocation.pathname.split('/').filter((x) => x);
  const intl = useIntl();
  const locale = intl.locale !== 'en' ? `/${intl.locale}` : '';

  return (
    <div
      className="page-banner"
      style={{ backgroundImage: `url('https://i.ibb.co/Qdptpyx/page-banner-image.png')` }}
      alt={altText}
    >
      <div className="content">
        <h1 className="title">{title}</h1>
        <div className="breadcrumb-container">
          <Breadcrumbs aria-label="breadcrumb">
            <Link className="breadcrumb-link__color" to="/">
              {intl.formatMessage({ id: 'home' })}
            </Link>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              return last ? (
                <span className="breadcrum-link__color" key={to}>
                  {breadcrumbNameMap[to]}
                </span>
              ) : (
                ''
                // <Link className="breadcrumb-current" to={to} key={to}>
                //   {breadcrumbNameMap[to]}
                // </Link>
              );
            })}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
