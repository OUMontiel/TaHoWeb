import React from 'react';
import Box from '@mui/material/Box';
import TabContext from '@mui/lab/TabContext';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import UserForm from './UserForm';
import WorkerForm from './WorkerForm';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function SignUp() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box
            sx={{
                width: '80%',
                typography: 'body1',
            }}
        >
            <TabContext value={toString(value)}>
                <Box
                    component='div'
                    display='flex'
                    justifyContent='center'
                    alignItems='center'
                >
                    <Tabs
                        value={value}
                        onChange={handleChange}
                        aria-label='user worker tabs'
                    >
                        <Tab label='User' {...a11yProps(0)} />
                        <Tab label='Worker' {...a11yProps(1)} />
                    </Tabs>
                </Box>
                <UserForm value={value} index={0} />
                <WorkerForm value={value} index={1} />
            </TabContext>
        </Box>
    );
}
