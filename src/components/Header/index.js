import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SettingsIcon from '@material-ui/icons/Settings';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    paddingBottom: 10
  },
  menuButton: {
    marginRight: theme.spacing(2),
    color: '#fff'
  },
  title: {
    flexGrow: 1,
  },
  configuration: {
      color: "#fff",
  },
  toolBar: {
    backgroundColor: '#333'
  }
}));

export default function ButtonAppBar() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
        <AppBar position="static">
            <Toolbar className={classes.toolBar}>
                <IconButton className={classes.menuButton} aria-label="menu">
                    <MenuIcon />
                </IconButton>
                <Typography variant="h6" className={classes.title}>
                   Chatman
                </Typography>
                <Button className={classes.configuration}>
                    <SettingsIcon /> 
                </Button>
            </Toolbar>
        </AppBar>
    </div>
  );
}
