import React from 'react';
import {
    List,
    ListItem,
    ListItemIcon,
    ListItemText,
    Divider
} from '@material-ui/core';
import DashboardIcon from '@material-ui/icons/Dashboard';
import ChatIcon from '@material-ui/icons/Chat';
import GroupIcon from '@material-ui/icons/Group';
import SettingsIcon from '@material-ui/icons/Settings';
import TimelineIcon from '@material-ui/icons/Timeline';
import MenuIcon from '@material-ui/icons/Menu';

const PrincipalList = () => {
    return (
        <div>
            <List component='nav'>
                <ListItem button>
                    <ListItemIcon>
                        <DashboardIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Dashboard
                    </ListItemText>
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemIcon>
                        <ChatIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Chat
                    </ListItemText>
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemIcon>
                        <GroupIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Users
                    </ListItemText>
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemIcon>
                        <TimelineIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Relatórios
                    </ListItemText>
                </ListItem>
                <Divider />

                <ListItem button>
                    <ListItemIcon>
                        <SettingsIcon />
                    </ListItemIcon>
                    <ListItemText>
                        Congigurações
                    </ListItemText>
                </ListItem>
                <Divider />
            </List>
        </div>
    )
}

export default PrincipalList;