import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';

// components
import ServiceCard from '../service-card/service-card.component';

// styles
import './section-services.styles.scss';

// icons
import TranslationIcon from '../../assets/translation.svg';
import NotarizationIcon from '../../assets/notarization.svg';
import DocumentIcon from '../../assets/contract.svg';
import ConciliationIcon from '../../assets/conciliation.svg';

const SectionServices = ({ intl }) => (
  <div className="section-services">
    <div className="section-heading">
      <h2 className="heading">{intl.formatMessage({ id: 'services' })}</h2>
      <p className="description">{intl.formatMessage({ id: 'carousel-banner.slide2-subheading' })}</p>
    </div>
    <Grid container spacing={3}>
      <ServiceCard
        routeName="/services/translations"
        icon={<TranslationIcon />}
        label={intl.formatMessage({ id: 'translations' })}
        description={intl.formatMessage({ id: 'services-section.card-one' })}
      />
      <ServiceCard
        routeName="/services/notary-public"
        icon={<NotarizationIcon />}
        label={intl.formatMessage({ id: 'notary-public' })}
        description={intl.formatMessage({ id: 'services-section.card-two' })}
      />
      <ServiceCard
        routeName="/services/document-preparation"
        icon={<DocumentIcon />}
        label={intl.formatMessage({ id: 'document-preparation' })}
        description={intl.formatMessage({ id: 'services-section.card-three' })}
      />
      <ServiceCard
        routeName="/services/conciliations"
        icon={<ConciliationIcon />}
        label={intl.formatMessage({ id: 'conciliations' })}
        description={intl.formatMessage({ id: 'services-section.card-four' })}
      />
    </Grid>
  </div>
);

export default SectionServices;
