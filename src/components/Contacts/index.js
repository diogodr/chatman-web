import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';



const useStyles = makeStyles((theme) => ({
	root: {
		width: '100%',
		maxWidth: 360,
		backgroundColor: theme.palette.background.paper,
	},
}));

function Contacts() {
	const classes = useStyles();

	const contacts = [
		{ name: "Diego Rosa", picture: "https://bit.ly/3ifttSL", status: "online" },
		{ name: "Eder Duarte", picture: "https://bit.ly/30hyLqC", status: "offline" },
		{ name: "Giovanna Marçaro", picture: "https://bit.ly/2S7o2e2", status: "occupied" },
		{ name: "Thais Oliveira", picture: null, status: "online" }
	]

	const openChat = (contact) => {
		alert("Conversando com: " + contact.name)
	}

	return (
		contacts.map(contact => (
				<List component="nav" className={classes.root} aria-label="mailbox folders">
					<ListItem button onClick={() => openChat(contact)}>
						<ListItemAvatar>
							<Avatar alt={contact.name} src={contact.picture} />
						</ListItemAvatar>
						<ListItemText primary={contact.name} secondary={contact.status} />
					</ListItem>
					<Divider />
				</List>
		))
	);
}

export default Contacts;