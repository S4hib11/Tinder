import React from 'react';
import PersonIcon from '@material-ui/icons/Person';
import ForumIcon from '@material-ui/icons/Forum';
import { IconButton } from '@material-ui/core';
import styles from '../styles.js/styles';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(styles);

function Header() {
    const classes = useStyles();

    return (
        <div className={classes.header}>
            <IconButton><PersonIcon className={classes.headerIcon}/></IconButton>
            <img src="https://img.pngio.com/meaning-tinder-logo-and-symbol-history-and-evolution-tinder-logo-transparent-1920_1080.png" className={classes.appLogo}></img>
            <IconButton><ForumIcon className={classes.headerIcon}/></IconButton>
        </div>
    )
}

export default Header
