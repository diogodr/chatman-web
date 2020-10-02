import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import Avatar from '@material-ui/core/Avatar';
import Divider from '@material-ui/core/Divider';
import { Box, Container, Paper } from '@material-ui/core';
import { Scrollbars } from 'react-custom-scrollbars';
import CustomizedInputBase from '../InputBase';
import InputSearchContacts from '../InputSearchContacts';



const useStyles = makeStyles((theme) => ({
	containerList: {
		height: '70vh',
		overflow: 'auto'
	},
	paper: {
		backgroundColor: "#fafafa",
		padding: 10,
	},
}));

function Contacts() {
	const classes = useStyles();

	const contacts = [
		{ name: "Diego Rosa", picture: "https://bit.ly/3ifttSL", status: "online" },
		{ name: "Eder Duarte", picture: "https://bit.ly/30hyLqC", status: "offline" },
		{ name: "Giovanna Marçaro", picture: "https://bit.ly/2S7o2e2", status: "occupied" },
		{ name: "Thais Oliveira", picture: null, status: "online" },
		{ name: "Thais Oliveira", picture: null, status: "online" },
		{ name: "Thais Oliveira", picture: null, status: "online" },
		{ name: "Thais Oliveira", picture: null, status: "online" },
		{ name: "Thais Oliveira", picture: null, status: "online" },
		{ name: "Thais Oliveira", picture: null, status: "online" },
		{ name: "Thais Oliveira", picture: null, status: "online" },
		{ name: "Thais Oliveira", picture: null, status: "online" },
	]

	const openChat = (contact) => {
		alert("Conversando com: " + contact.name)
	}

	return (
		<Paper elevation={3} className={classes.paper}>
			<Box width="97%" mx="auto"  className={classes.boxInput}>
				<InputSearchContacts className={classes.InputBase} />
			</Box>			
			<List component="nav" className={classes.containerList} aria-label="mailbox folders">
				<Scrollbars style={{ width: '100%', height: '100%' }}>
					{contacts.map(contact => (
						<>
							<ListItem button onClick={() => openChat(contact)}>
								<ListItemAvatar>
									<Avatar alt={contact.name} src={contact.picture}/>
								</ListItemAvatar>
								<ListItemText primary={contact.name} secondary={contact.status} />
							</ListItem>
							<Divider />
						</>
					))}
				</Scrollbars>
			</List>			
		</Paper>
	);
}

export default Contacts;