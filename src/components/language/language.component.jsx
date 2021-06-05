import React, { useState, useRef } from 'react';
import { IntlContextConsumer, changeLocale, injectIntl } from 'gatsby-plugin-intl';

// material ui components
import Button from '@material-ui/core/Button';
import Paper from '@material-ui/core/Paper';
import Popper from '@material-ui/core/Popper';
import MenuList from '@material-ui/core/MenuList';
import MenuItem from '@material-ui/core/MenuItem';
import ClickAwayListener from '@material-ui/core/ClickAwayListener';
import Grow from '@material-ui/core/Grow';
import { withStyles } from '@material-ui/core/styles';

// components

// styles
import './language.styles.scss';

const CustomButton = withStyles({
  root: {
    fontFamily: ['Open Sans'],
    textTransform: 'none',
    fontSize: 12,
    padding: '0',
    color: '#252D40',
    '&:hover': {
      color: '#A8ABB3',
    },
  },
})(Button);

const languageName = {
  en: 'English',
  es: 'Español',
};

const Language = ({ intl, icon }) => {
  const [open, setOpen] = useState(false);
  const anchorRef = useRef(null);
  const locale = languageName[intl.locale];

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };

  function handleListKeyDown(event) {
    if (event.key === 'Tab') {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);

  return (
    <div className="language-options">
      <CustomButton
        startIcon={icon}
        ref={anchorRef}
        aria-controls={open ? 'menu-list-grow' : undefined}
        aria-haspopup="true"
        onClick={handleToggle}
      >
        {locale}
      </CustomButton>
      <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition portal>
        {({ TransitionProps, placement }) => (
          <Grow
            {...TransitionProps}
            style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
          >
            <Paper>
              <ClickAwayListener onClickAway={handleClose}>
                <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                  <IntlContextConsumer>
                    {({ languages, language: currentLocale }) =>
                      languages.map((language) => (
                        <MenuItem key={language} onClick={() => changeLocale(language)}>
                          {languageName[language]}
                        </MenuItem>
                      ))
                    }
                  </IntlContextConsumer>
                </MenuList>
              </ClickAwayListener>
            </Paper>
          </Grow>
        )}
      </Popper>
    </div>
  );
};

export default injectIntl(Language);
