import React, { useState } from 'react';
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PropTypes from 'prop-types';
import './experience.css';

const isHorizontal = window.innerWidth < 600;
function TabPanel(props) {
    const { children, value, index, ...other } = props;
  
    return (
      <div
        role="tabpanel"
        hidden={value !== index}
        id={`simple-tabpanel-${index}`}
        aria-labelledby={`simple-tab-${index}`}
        {...other}
      >
        {value === index && (
          <Box sx={{ p: 3 }}>
            <Typography>{children}</Typography>
          </Box>
        )}
      </div>
    );
  }
  
  TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.number.isRequired,
    value: PropTypes.number.isRequired,
  };

  const useStyles = makeStyles(theme => ({
    root: {
      flexGrow: 1,
      backgroundColor: "theme.palette.background.paper",
      display: "flex",
      height: 300
    },
    tabs: {
      borderRight: `1px solid ${theme.palette.divider}`
    }
  }));
  
  function a11yProps(index) {
    return {
      id: `simple-tab-${index}`,
      'aria-controls': `simple-tabpanel-${index}`,
    };
  }
export default function Experience(){
    const [value, setValue] = useState(0);
    const classes = useStyles();

  const handleChange = (event, newValue) => {
    console.log(newValue)
    setValue(newValue);
  };
    return <Box sx={{ width: '100%' }}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <Tabs value={value} onChange={handleChange} aria-label="basic tabs example" variant={isHorizontal ? "fullWidth" : "scrollable" } className={classes.tabs}>
        <Tab label="Item One" {...a11yProps(0)}/>
        <Tab label="Item Two" {...a11yProps(1)} />
        <Tab label="Item Three" {...a11yProps(2)} />
      </Tabs>
    </Box>
    <TabPanel value={value}index={0}>
      Item One
    </TabPanel>
    <TabPanel value={value} index={1}>
      Item Two
    </TabPanel>
    <TabPanel value={value} index={2}>
      Item Three
    </TabPanel>
  </Box>

}