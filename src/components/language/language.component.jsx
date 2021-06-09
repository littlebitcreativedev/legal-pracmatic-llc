import React, { useState, useRef } from 'react';
import { Link } from 'gatsby';
import { IntlContextConsumer, changeLocale, injectIntl } from 'gatsby-plugin-intl';

// material ui components
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import Menu from '@material-ui/core/Menu';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { withStyles } from '@material-ui/core/styles';

// components

// styles
import './language.styles.scss';

const languageName = {
  en: 'English',
  es: 'Español',
};

const Language = ({ intl, icon }) => {
  const locale = languageName[intl.locale];

  return (
    <div className="language-options">
      <span className="icon">{icon}</span>
      <div className="language-links">
        <IntlContextConsumer>
          {({ languages, language: currentLocale }) =>
            languages.map((language) => (
              <a className="link" key={language} onClick={() => changeLocale(language)}>
                {languageName[language]}
              </a>
            ))
          }
        </IntlContextConsumer>
      </div>
    </div>
  );
};

export default injectIntl(Language);
