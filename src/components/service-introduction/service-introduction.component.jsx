import React from 'react';

// material ui components
import Grid from '@material-ui/core/Grid';

// components

// styles
import './service-introduction.styles.scss';

const ServiceIntroduction = () => (
  <div className="section-introduction">
    <Grid container spacing={3}>
      <Grid item xs={12} md={3}>
        <h2>What we do</h2>
      </Grid>
      <Grid item xs={12} md={4}>
        <p>
          Our goal at Legal Pracmatic, LLC., is to afford our clients with a simple and practical
          experience according to the services we provide which include: English and Spanish
          translations, remote and face-to-face notarization, conciliation and document preparation
          services.
        </p>
        <p>
          The services we provide are handled by specialized individuals in their respective fields
          of expertise in order to guarantee our clients with the best results and experience.
        </p>
        <p>
          We offer a fast and economic service without diminishing the quality of work, all with
          absolute confidentiality.
        </p>
      </Grid>
      <Grid item xs={12} md={4}>
        <p>
          We translate all types of legal and personal documents, website content, diplomas,
          immigration documents, master thesis, books, marketing materials and so much more.
        </p>
        <p>
          Legal Pracmatic, LLC also offers remote and in-person notarization services for our
          clients who reside in the state of Colorado and we provide virtual conciliation services
          and preparation of documents relating to a series of legal matters in the country of
          Colombia.
        </p>
      </Grid>
    </Grid>
  </div>
);

export default ServiceIntroduction;
