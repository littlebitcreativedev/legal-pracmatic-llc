import React, { useState } from 'react';

// material ui components
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

// components
import TabPanel from '../service-tab-panel/service-tab-panel.component';
import SectionImageLeftButton from '../section-image_left-button/section-image_left-button.component';

// styles
import './services-descriptions.styles.scss';

// icons
import { default as TranslationIcon } from '../../assets/translation.svg';
import { default as NotaryIcon } from '../../assets/notarization.svg';
import { default as DocumentIcon } from '../../assets/contract.svg';
import { default as ConciliationIcon } from '../../assets/conciliation.svg';

const a11yProps = (index) => ({
  id: `tab-${index}`,
  'arial-controls': `tabpanel-${index}`,
});

const ServiceDescriptions = ({ intl }) => {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="service-descriptions">
      <Tabs
        value={value}
        onChange={handleChange}
        variant="scrollable"
        scrollButtons="auto"
        arial-label="tabs"
        className="services-tabs"
      >
        <Tab
          className="service-tab"
          icon={<TranslationIcon />}
          label={intl.formatMessage({ id: 'translations' })}
          {...a11yProps(0)}
          arial-label="transltations"
        />
        <Tab
          className="service-tab"
          icon={<NotaryIcon />}
          label={intl.formatMessage({ id: 'notary-public' })}
          {...a11yProps(1)}
          arial-label="notary-public"
        />
        <Tab
          className="service-tab"
          icon={<DocumentIcon />}
          label={intl.formatMessage({ id: 'document-preparation' })}
          {...a11yProps(2)}
          arial-label="document-preparation"
        />
        <Tab
          className="service-tab"
          icon={<ConciliationIcon />}
          label={intl.formatMessage({ id: 'conciliations' })}
          {...a11yProps(3)}
          arial-label="conciliations"
        />
      </Tabs>
      <div className="services-tabpanel">
        <TabPanel value={value} index={0}>
          <SectionImageLeftButton
            imageUrl="https://i.ibb.co/W0n0c2R/woman-laptop-working.png"
            sectionHeading={intl.formatMessage({ id: 'translations' })}
            text={intl.formatMessage({ id: 'service_page.translation-description' })}
            routeName="/services/translations"
            linkName={intl.formatMessage({ id: 'learn-more' })}
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SectionImageLeftButton
            imageUrl="https://i.ibb.co/PcTXwdv/notary-public.png"
            sectionHeading={intl.formatMessage({ id: 'notary-public' })}
            text={intl.formatMessage({ id: 'service_page.coming-soon' })}
            routeName="/services/notary-public"
            linkName={intl.formatMessage({ id: 'learn-more' })}
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SectionImageLeftButton
            imageUrl="https://i.ibb.co/4mqB2rB/document-preparation.png"
            sectionHeading={intl.formatMessage({ id: 'document-preparation' })}
            text={intl.formatMessage({ id: 'service_page.coming-soon' })}
            routeName="/services/document-preparations"
            linkName={intl.formatMessage({ id: 'learn-more' })}
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SectionImageLeftButton
            imageUrl="https://i.ibb.co/cDp76t9/conciliations.png"
            sectionHeading={intl.formatMessage({ id: 'conciliations' })}
            text={intl.formatMessage({ id: 'service_page.coming-soon' })}
            routeName="/services/conciliations"
            linkName={intl.formatMessage({ id: 'learn-more' })}
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default ServiceDescriptions;
