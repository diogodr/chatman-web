import React from 'react';

import Contacts from './components/Contacts';
import Chat from './components/Chat';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: 10,
    height: "97vh",
    backgroundColor: "#BEBEBE"
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
    <Box className={classes.root}>
      <Grid container spacing={2}>
        <Grid item xs={3} alignItems="center">
          <Contacts />
        </Grid>
        <Grid item xs={9}>
          <Chat />
        </Grid>
      </Grid>
    </Box>
  );
}

export default App;
