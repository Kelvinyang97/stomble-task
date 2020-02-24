import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemSecondaryAction from '@material-ui/core/ListItemSecondaryAction';
import Checkbox from '@material-ui/core/Checkbox';
import IconButton from '@material-ui/core/IconButton';
import DeleteIcon from '@material-ui/icons/Delete';

const useStyles = makeStyles(theme => ({
  root: {
    width: '100%',
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
  },
}));

export default function TodoList(props) {
console.log(props)
  const classes = useStyles();
  const [checked, setChecked] = React.useState([0]);

  const handleToggle = value => () => {
    const currentIndex = checked.indexOf(value);
    const newChecked = [...checked];

    if (currentIndex === -1) {
      newChecked.push(value);
    } else {
      newChecked.splice(currentIndex, 1);
    }

    setChecked(newChecked);
  };

  const handleRemove = toDel => () => {
      window.console.log('trying to remove?')
    for (const [key, value] of Object.entries(props.itemList)) {
        if (value === toDel){
            props.onItemRemove(key)
        }
     }
  };

  return (
    <List className={classes.root}>
      {Object.values(props.itemList).map(entry => {
        console.log(entry)
        const labelId = `checkbox-list-label-${entry}`;

        return (
          <ListItem key={entry} role={undefined} dense button onClick={handleToggle(entry)}>
            <ListItemIcon>
              <Checkbox
                edge="start"
                checked={checked.indexOf(entry) !== -1}
                tabIndex={-1}
                disableRipple
                inputProps={{ 'aria-labelledby': labelId }}
              />
            </ListItemIcon>
            <ListItemText id={labelId} primary={`${entry}`} />
            <ListItemSecondaryAction>
              <IconButton 
                edge="end" 
                aria-label="comments"
                onClick={handleRemove(entry)}
                >
                <DeleteIcon />
              </IconButton>
            </ListItemSecondaryAction>
          </ListItem>
        );
      })}
    </List>
  );
}
