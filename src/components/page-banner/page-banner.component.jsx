import React from 'react';
import { Link } from 'gatsby';

// material ui componets
import Breadcrumbs from '@material-ui/core/Breadcrumbs';

// styles
import './page-banner.styles.scss';

const breadcrumbNameMap = {
  '/services': 'Services',
  '/services/translations': 'Translations',
  '/services/notary-public': 'Notary Public',
  '/services/document-preparation': 'Document Preparation',
  '/services/conciliations': 'Conciliations',
  '/about-us': 'About Us',
  '/contact-us': 'Contact Us',
  '/terms-of-use': 'Terms and Conditions',
  '/privacy-policy': 'Privacy Policy',
  '/cookies': 'Cookies',
};

const PageBanner = ({ title, imageUrl, altText, location }) => {
  const currentLocation = location;
  const pathnames = currentLocation.pathname.split('/').filter((x) => x);

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
              Home
            </Link>
            {pathnames.map((value, index) => {
              const last = index === pathnames.length - 1;
              const to = `/${pathnames.slice(0, index + 1).join('/')}`;
              return last ? (
                <span className="breadcrum-link__color" key={to}>
                  {breadcrumbNameMap[to]}
                </span>
              ) : (
                <Link className="breadcrumb-current" to={to} key={to}>
                  {breadcrumbNameMap[to]}
                </Link>
              );
            })}
          </Breadcrumbs>
        </div>
      </div>
    </div>
  );
};

export default PageBanner;
