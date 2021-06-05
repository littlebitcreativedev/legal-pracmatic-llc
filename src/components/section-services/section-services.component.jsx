import React from 'react';
import { injectIntl, FormattedMessage } from 'gatsby-plugin-intl';

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
      <p className="description">
        Voluptatum quia molestias quis eius ut accusamus debitis consequatur distinctio.
      </p>
    </div>
    <Grid container spacing={3}>
      <ServiceCard
        routeName="/services/translations"
        icon={<TranslationIcon />}
        label={intl.formatMessage({ id: 'translations' })}
        description="get your English to Spanish, Spanish to English translations."
      />
      <ServiceCard
        routeName="/services/notary-public"
        icon={<NotarizationIcon />}
        label={intl.formatMessage({ id: 'notary-public' })}
        description="virtual & in-person notary services in the state of Colorado."
      />
      <ServiceCard
        routeName="/services/document-preparation"
        icon={<DocumentIcon />}
        label={intl.formatMessage({ id: 'document-preparation' })}
        description="we prepare legal documents in Colombia."
      />
      <ServiceCard
        routeName="/services/conciliations"
        icon={<ConciliationIcon />}
        label={intl.formatMessage({ id: 'conciliations' })}
        description="virtual conciliations for legal matters that can be resolved in Colombia."
      />
    </Grid>
  </div>
);

export default injectIntl(SectionServices);
