import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Chip from '@mui/material/Chip';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import Link from 'next/link';
import MenuItem from '@mui/material/MenuItem';
import OutlinedInput from '@mui/material/OutlinedInput';
import Select from '@mui/material/Select';
import Stack from '@mui/material/Stack';
import TextField from '@mui/material/TextField';
import { apiServer } from '../config';
import { useTheme } from '@mui/material/styles';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
    PaperProps: {
        style: {
            maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
            width: 250,
        },
    },
};

const services = [
    'Albañil',
    'Carpintero',
    'Cerrajero',
    'Electricista',
    'Jardinero',
    'Limpieza',
    'Niñera',
    'Pintor',
    'Plomero',
];

function getStyles(service, workerService, theme) {
    return {
        fontWeight:
            workerService.indexOf(service) === -1
                ? theme.typography.fontWeightRegular
                : theme.typography.fontWeightMedium,
    };
}

export default function WorkerForm(props) {
    const { children, value, index, ...other } = props;
    const theme = useTheme();
    const [workerServices, setWorkerServices] = React.useState([]);

    const handleChange = (event) => {
        const {
            target: { value },
        } = event;
        setWorkerServices(typeof value === 'string' ? value.split(',') : value);
    };

    const onSubmit = async (e) => {
        e.preventDefault();
        const target = e.target;

        const inputs = {
            firstName: target.firstName.value,
            lastName: target.lastName.value,
            phone: target.phone.value,
            rfc: target.rfc.value,
            certificates: target.certificates.value,
            services: target.services.value,
            description: target.description.value,
            username: target.username.value,
            password: target.password.value,
        };

        try {
            const response = await axios.post(
                `${apiServer}/worker/register`,
                inputs,
                { withCredentials: true },
            );
            location.assign('/calls');
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
                    <Stack direction='row' spacing={2}>
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
                            name='rfc'
                            id='rfc'
                            label='RFC'
                        />
                    </Stack>
                    <Stack direction='row' spacing={2}>
                        <TextField
                            fullWidth
                            name='certificates'
                            id='certificates'
                            label='Certificates'
                        />
                        <FormControl fullWidth>
                            <InputLabel id='services-label'>
                                Services
                            </InputLabel>
                            <Select
                                required
                                fullWidth
                                name='services'
                                id='services'
                                labelId='services-label'
                                label='Services'
                                multiple
                                value={workerServices}
                                onChange={handleChange}
                                input={
                                    <OutlinedInput
                                        id='select-multiple-chip'
                                        label='Chip'
                                    />
                                }
                                renderValue={(selected) => (
                                    <Box
                                        sx={{
                                            display: 'flex',
                                            flexWrap: 'wrap',
                                            gap: 0.5,
                                        }}
                                    >
                                        {selected.map((value) => (
                                            <Chip key={value} label={value} />
                                        ))}
                                    </Box>
                                )}
                                MenuProps={MenuProps}
                            >
                                {services.map((service) => (
                                    <MenuItem
                                        key={service}
                                        value={service}
                                        style={getStyles(
                                            service,
                                            workerServices,
                                            theme,
                                        )}
                                    >
                                        {service}
                                    </MenuItem>
                                ))}
                            </Select>
                        </FormControl>
                    </Stack>
                    <TextField
                        required
                        fullWidth
                        name='description'
                        id='description'
                        label='Description'
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
                    <Stack
                        direction='row'
                        spacing={2}
                        fullWidth
                        justifyContent='center'
                    >
                        <Link href='/'>
                            <Button
                                variant='contained'
                                color='secondary'
                                type='submit'
                                fullWidth
                            >
                                Go back
                            </Button>
                        </Link>
                        <Link href='/login'>
                            <Button
                                variant='contained'
                                color='secondary'
                                type='submit'
                                fullWidth
                            >
                                Go to login
                            </Button>
                        </Link>
                    </Stack>
                </Stack>
            )}
        </div>
    );
}
