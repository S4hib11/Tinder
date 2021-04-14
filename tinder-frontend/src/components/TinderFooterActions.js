import React from 'react'
import ReplayIcon from '@material-ui/icons/Replay';
import CloseIcon from '@material-ui/icons/Close';
import StarRateIcon from '@material-ui/icons/StarRate';
import FavoriteIcon from '@material-ui/icons/Favorite';
import FlashOnIcon from '@material-ui/icons/FlashOn';
import { IconButton } from '@material-ui/core';
import styles from '../styles.js/styles';
import { makeStyles } from '@material-ui/core/styles';
import { ThemeProvider, createMuiTheme } from "@material-ui/core/styles";

const useStyles = makeStyles(styles);

const theme = createMuiTheme({
    MuiIconButton: {
        root: {
            backgroundColor: 'black',
            boxShadow: '0px 10px 53px 0px rgba(0,0,0,0.2)'
        }
    }
  });

function TinderFooterActions() {
    const classes = useStyles();
    return (
        <ThemeProvider theme={theme}>
        <div className={classes.footerActions}>
            <IconButton><ReplayIcon className={classes.replay}/></IconButton>
            <IconButton><CloseIcon className={classes.close}/></IconButton>
            <IconButton><StarRateIcon className={classes.star}/></IconButton>
            <IconButton><FavoriteIcon className={classes.fav}/></IconButton>
            <IconButton><FlashOnIcon className={classes.flash}/></IconButton>
        </div>
        </ThemeProvider>
    )
}

export default TinderFooterActions
