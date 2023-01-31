import  React,{useState} from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import MenuItem from '@mui/material/MenuItem';
import Menu from '@mui/material/Menu';

const options = [
  'What music do you like?',
  'Hindi',
  'English',
  'Telugu',
  'Malayalam',
  'Tamil'
];

export default function MusicLanguage() {
  const [anchorEl, setAnchorEl] = useState(null);
  const [selectedIndex, setSelectedIndex] = useState(1);
  const open = Boolean(anchorEl);
  const handleClickListItem = (event) => {
    event.preventDefault()
    setAnchorEl(event.currentTarget);
  };
  function handleMenuItemClick(event,
    index) {
    event.preventDefault();
    setSelectedIndex(index);
    setAnchorEl(null);
  }
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <List
        component="nav"
        sx={{ bgcolor: 'background.paper' }}>
        <ListItem
          button
          id="lock-button"
          aria-haspopup="listbox"
          aria-controls="lock-menu"
          aria-label="when device is locked"
          aria-expanded={open ? 'true' : undefined}
          onClick={handleClickListItem}>
          <ListItemText
            primary="Music Language"
            secondary={options[selectedIndex]}
          />
        </ListItem>
      </List>
      <Menu style={{display:"flex",flexDirection:"colomn"}}
        id="lock-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        MenuListProps={{
          role: 'listbox',
        }}>
        {options.map((option, index) => (
          <MenuItem style={{display:"block"}}
            key={option}
            disabled={index === 0}
            selected={index === selectedIndex}
            onClick={(event) => handleMenuItemClick(event, index)}>
            {option}
          </MenuItem>
        ))}
      </Menu>
    </div>
  );
}