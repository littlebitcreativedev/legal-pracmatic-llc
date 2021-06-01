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

const ServiceDescriptions = () => {
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
          label="Translations"
          {...a11yProps(0)}
          arial-label="transltations"
        />
        <Tab
          className="service-tab"
          icon={<NotaryIcon />}
          label="Notary Public"
          {...a11yProps(1)}
          arial-label="notary-public"
        />
        <Tab
          className="service-tab"
          icon={<DocumentIcon />}
          label="Document Preparation"
          {...a11yProps(2)}
          arial-label="document-preparation"
        />
        <Tab
          className="service-tab"
          icon={<ConciliationIcon />}
          label="Conciliations"
          {...a11yProps(3)}
          arial-label="conciliations"
        />
      </Tabs>
      <div className="services-tabpanel">
        <TabPanel value={value} index={0}>
          <SectionImageLeftButton
            imageUrl="https://i.ibb.co/W0n0c2R/woman-laptop-working.png"
            sectionHeading="Translations"
            text="Delivering top quality translations is of most importance to us here at Legal Pracmatic, LLC.
            To ensure this, our translations are carried out and corrected by people who are fluent in both
            the original text and target language, guaranteeing that the translated content communicates the original 
            meaning, format and tone."
            routeName="/services/translations"
          />
        </TabPanel>
        <TabPanel value={value} index={1}>
          <SectionImageLeftButton
            imageUrl="https://i.ibb.co/PcTXwdv/notary-public.png"
            sectionHeading="Notary Public"
            text="Comming soon!"
          />
        </TabPanel>
        <TabPanel value={value} index={2}>
          <SectionImageLeftButton
            imageUrl="https://i.ibb.co/4mqB2rB/document-preparation.png"
            sectionHeading="Document Preparation"
            text="Comming soon!"
            routeName="/services/document-preparations"
          />
        </TabPanel>
        <TabPanel value={value} index={3}>
          <SectionImageLeftButton
            imageUrl="https://i.ibb.co/cDp76t9/conciliations.png"
            sectionHeading="Conciliations"
            text="Comming soon!"
            routeName="/services/conciliations"
          />
        </TabPanel>
      </div>
    </div>
  );
};

export default ServiceDescriptions;
