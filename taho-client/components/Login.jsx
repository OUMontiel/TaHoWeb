import React from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Tab from '@mui/material/Tab';
import Tabs from '@mui/material/Tabs';
import TextField from '@mui/material/TextField';
import axios from 'axios';
import { apiServer } from '../config';

function a11yProps(index) {
    return {
        id: `simple-tab-${index}`,
        'aria-controls': `simple-tabpanel-${index}`,
    };
}

export default function Login() {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const target = e.target;

        const inputs = {
            username: target.username.value,
            password: target.password.value,
        };

        try {
            if (value === 0) {
                const response = await axios.post(
                    `${apiServer}/user/login`,
                    inputs,
                    { withCredentials: true },
                );
                location.assign('/home');
            } else if (value === 1) {
                const response = await axios.post(
                    `${apiServer}/worker/login`,
                    inputs,
                    { withCredentials: true },
                );
                location.assign('/calls');
            }
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                alert((err.response?.data).error);
            }
        }
    };

    return (
        <Box
            component='div'
            display='flex'
            justifyContent='center'
            alignItems='center'
            minHeight='100vh'
        >
            <Stack
                component='form'
                sx={{
                    '& .MuiFormControl-root': { my: 1 },
                    p: 3,
                    borderRadius: 2,
                    bgcolor: 'white',
                    maxWidth: '100%',
                }}
                onSubmit={onSubmit}
            >
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
                <TextField
                    required
                    fullWidth
                    name='username'
                    id='username'
                    label='Username'
                />
                <TextField
                    required
                    fullWidth
                    name='password'
                    id='password'
                    label='Password'
                    type='password'
                />

                <Button
                    variant='contained'
                    size='large'
                    type='submit'
                    sx={{ mb: 1 }}
                >
                    Login
                </Button>
                <Link href='/signup'>
                    <Button
                        variant='contained'
                        color='secondary'
                        size='large'
                        type='submit'
                    >
                        Go to sign up
                    </Button>
                </Link>
            </Stack>
        </Box>
    );
}
