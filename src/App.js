import React from 'react';

import Contacts from './components/Contacts';
import Chat from './components/Chat';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: 10,
    width: "100%"
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary,
  },
}));

function App() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={2}>
      <Grid item xs={3} alignItems="center">
        <Contacts />
      </Grid>
      <Grid item xs={9}>
        <Chat />
      </Grid>
    </Grid>
  );
}

export default App;
