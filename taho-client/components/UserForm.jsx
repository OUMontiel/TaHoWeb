import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { apiServer } from '../config';

export default function UserForm(props) {
    const { children, value, index, ...other } = props;

    const onSubmit = async (e) => {
        e.preventDefault();
        const target = e.target;

        const inputs = {
            firstName: target.firstName.value,
            lastName: target.lastName.value,
            phone: target.phone.value,
            username: target.username.value,
            password: target.password.value,
        };

        try {
            const response = await axios.post(
                `${apiServer}/user/register`,
                inputs,
                { withCredentials: true },
            );
            location.assign('/home');
        } catch (err) {
            if (axios.isAxiosError(err) && err.response) {
                alert((err.response?.data).error);
            }
        }
    };

    return (
        <div
            role='tabpanel'
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
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
                    <TextField
                        required
                        fullWidth
                        name='firstName'
                        id='firstName'
                        label='First name'
                    />
                    <TextField
                        required
                        fullWidth
                        name='lastName'
                        id='lastName'
                        label='Last name'
                    />
                    <TextField
                        required
                        fullWidth
                        name='phone'
                        id='phone'
                        label='Phone'
                        inputProps={{
                            pattern:
                                '\\s*(?:\\+?(\\d{1,3}))?[-. (]*(\\d{3})[-. )]*(\\d{3})[-. ]*(\\d{4})(?: *x(\\d+))?\\s*',
                        }}
                    />
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
                        inputProps={{
                            pattern: '(?=.*[0-9])(?=.*[a-z])(?=.*[A-Z]).{8,}',
                        }}
                        helperText='At least 8 characters, 1 uppercase, 1 lowercase y 1 number.'
                    />

                    <Button
                        variant='contained'
                        size='large'
                        type='submit'
                        sx={{ mb: 1 }}
                    >
                        Create account
                    </Button>
                    <Link href='/login'>
                        <Button
                            variant='contained'
                            color='secondary'
                            size='large'
                            type='submit'
                        >
                            Go to login
                        </Button>
                    </Link>
                </Stack>
            )}
        </div>
    );
}
