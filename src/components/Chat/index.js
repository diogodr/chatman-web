import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import { Box } from '@material-ui/core';

const useStyles = makeStyles((theme) => ({
	root: {
		flexGrow: 1,
	},
	paper: {
		height: 600,
		backgroundColor: "#fafafa",
		padding: 10
	},
	messageText: {
		paddingLeft: 10,
		paddingRight: 10,
		padding: 5,
		margin: 10,
		maxWidth: "50%"
	},
}));

function Chat() {
	const classes = useStyles();

	const initialMessages = [
		{ text: "Oi Diego tudo bem?", date: new Date(), author: 1 },
		{ text: "Eu estou bem e você?", date: new Date(), author: 2 },
		{ text: "Você ja terminou o app?", date: new Date(), author: 1 },
		{ text: "Ainda não, estou trabalhando nisso.", date: new Date(), author: 2 },
		{ text: "Que bom, se precisar de algo me chama.", date: new Date(), author: 1 },
		{ text: "Beleza! :D", date: new Date(), author: 2 }
	];

	const [messages, setMessages] = useState(initialMessages)

	return (
		<Grid container className={classes.root} spacing={2}>
			<Grid item xs={9} alignItems="center">
				<Paper className={classes.paper}>
					{messages.map(message => (
						<Box display="flex" justifyContent={message.author === 1 ? "flex-start" : "flex-end"}>
							<Paper className={classes.messageText}>
								<p>{message.text}</p>
							</Paper>
						</Box>
					))}
				</Paper>
			</Grid>
		</Grid>
	);
}

export default Chat;