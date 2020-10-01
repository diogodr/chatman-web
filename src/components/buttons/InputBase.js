import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import InputBase from '@material-ui/core/InputBase';
import Divider from '@material-ui/core/Divider';
import IconButton from '@material-ui/core/IconButton';
import SendIcon from '@material-ui/icons/Send';
import MicIcon from '@material-ui/icons/Mic';
import AttachFileIcon from '@material-ui/icons/AttachFile';

const useStyles = makeStyles((theme) => ({
  root: {
    padding: '2px 4px',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    marginLeft: theme.spacing(1),
    flex: 1,
  },
  iconButton: {
    padding: 10,
  },
  divider: {
    height: 28,
    margin: 4,
  },
}));

export default function CustomizedInputBase() {
  const classes = useStyles();

  return (
    <Paper component="form" className={classes.root}>
      <IconButton className={classes.iconButton} aria-label="menu">
        <AttachFileIcon />
      </IconButton>
      <InputBase
        className={classes.input}
        placeholder="Digite uma mensagem"
        inputProps={{ 'aria-label': 'Digite uma mensagem' }}
      />
      <IconButton type="submit" className={classes.iconButton} aria-label="sendicon">
        <SendIcon />
      </IconButton>
      <Divider className={classes.divider} orientation="vertical" />
      <IconButton className={classes.iconButton} aria-label="microphone">
        <MicIcon />
      </IconButton>
    </Paper>
  );
}