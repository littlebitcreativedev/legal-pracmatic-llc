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

const SectionServices = () => (
  <div className="section-services">
    <div className="section-heading">
      <h2 className="heading">Our Services</h2>
      <p className="description">
        Voluptatum quia molestias quis eius ut accusamus debitis consequatur distinctio.
      </p>
    </div>
    <Grid container spacing={3}>
      <ServiceCard
        routeName="/services/translations"
        icon={<TranslationIcon />}
        label="Translations"
        description="get your English to Spanish, Spanish to English translations."
      />
      <ServiceCard
        routeName="/services/notary-public"
        icon={<NotarizationIcon />}
        label="Notary Public"
        description="virtual & in-person notary services in the state of Colorado."
      />
      <ServiceCard
        routeName="/services/document-preparation"
        icon={<DocumentIcon />}
        label="Document Preparation"
        description="we prepare legal documents in Colombia."
      />
      <ServiceCard
        routeName="/services/conciliations"
        icon={<ConciliationIcon />}
        label="Conciliations"
        description="virtual conciliations for legal matters that can be resolved in Colombia."
      />
    </Grid>
  </div>
);

export default SectionServices;
