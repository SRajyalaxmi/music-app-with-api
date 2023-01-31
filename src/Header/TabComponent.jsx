import React,{useState} from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

export default function TabComponent() {
  const [value, setValue] = useState('one');
  const handleChange = (event, newValue) => {
    event.preventDefault()
    setValue(newValue);
  };
  return (
    <Box>
      <div >
      <Tabs
        value={value}
        onChange={handleChange}
        textColor="secondary"
        indicatorColor="secondary"
        aria-label="secondary tabs example">       
        <Tab value="one" label="Music" />
        <Tab value="two" label="Podcasts" />
        <Tab value="three" label="Go Pro" />
        </Tabs>       
      </div>
    </Box>
  );
}