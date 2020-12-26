import React from 'react';
import { List, ListItem, ListItemText,ListItemAvatar} from '@material-ui/core';
import db from './firebase';
import DeleteForeverIcon from '@material-ui/icons/DeleteForever';

function Todo(props) {
    return (
        <List>
            <ListItem>
                <ListItemAvatar>
                </ListItemAvatar>
                <ListItemText primary="Todo" secondary={props.text} />
                <DeleteForeverIcon onClick={event => db.collection('todos').doc(props.id).delete()} />
            </ListItem>
   
        </List>
    )
}

export default Todo
