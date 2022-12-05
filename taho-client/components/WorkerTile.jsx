import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { apiServer } from '../config/index.js';

import albanil from '../images/albanil.png';
import carpintero from '../images/carpintero.png';
import cerrajero from '../images/cerrajero.png';
import electricista from '../images/electricista.png';
import jardinero from '../images/jardinero.png';
import limpieza from '../images/limpieza.png';
import ninera from '../images/ninera.png';
import pintor from '../images/pintor.png';
import plomero from '../images/plomero.png';

const WorkerTile = ({
    service,
    workerId,
    workerService,
    firstName,
    lastName,
    services,
    phone,
    certificates,
    description,
    called,
    setJobs,
}) => {
    const getWorkerImage = () => {
        const image =
            workerService !== 'all' ? workerService : services.split(',')[0];
        switch (image) {
            case 'Albañil':
                return albanil;
            case 'Carpintero':
                return carpintero;
            case 'Cerrajero':
                return cerrajero;
            case 'Electricista':
                return electricista;
            case 'Jardinero':
                return jardinero;
            case 'Limpieza':
                return limpieza;
            case 'Niñera':
                return ninera;
            case 'Pintor':
                return pintor;
            case 'Plomero':
                return plomero;
            default:
                return albanil;
        }
    };

    const call = async () => {
        try {
            let response;
            if (!called) {
                response = await axios.post(
                    `${apiServer}/job/call`,
                    { workerId },
                    {
                        withCredentials: true,
                    },
                );
            } else {
                response = await axios.post(
                    `${apiServer}/job/cancel`,
                    { workerId },
                    { withCredentials: true },
                );
            }

            setJobs(response.jobs);
            location.assign(`/find/${workerService}`);
        } catch (err) {
            console.log(err);
            if (axios.isAxiosError(err) && err.response) {
                alert((err.response?.data).error);
            }
        }
    };

    return (
        <Stack>
            <Grid
                sx={{
                    margin: '8px',
                    backgroundColor: 'white',
                    borderRadius: '20px',
                }}
                container
                display='flex'
                justifyContent='center'
                alignItems='center'
            >
                <Grid item xs={1}>
                    <Box
                        sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            height: 180,
                            fontSize: '72px',
                            padding: '20px',
                            width: '150px',
                            height: '150px',
                        }}
                    >
                        <Image
                            className='card-img-top'
                            src={getWorkerImage()}
                            alt='Card image cap'
                        />{' '}
                    </Box>
                </Grid>
                <Grid item xs={10}>
                    <Stack display='flex' alignItems='flex-start' padding={2}>
                        <Typography
                            noWrap
                            sx={{
                                fontSize: 32,
                                fontWeight: 'bold',
                            }}
                        >
                            {firstName} {lastName}
                        </Typography>
                        <Typography>
                            <b>Servicios:</b> {services}
                        </Typography>
                        <Typography>
                            <b>Phone:</b> {phone}
                        </Typography>
                        <Typography>
                            <b>Certificates:</b> {certificates}
                        </Typography>
                        <Typography align='left'>
                            <b>Description:</b> {description}
                        </Typography>
                    </Stack>
                </Grid>
                <Grid item xs={1}>
                    {called ? (
                        <Button
                            variant='contained'
                            color='error'
                            onClick={call}
                        >
                            Cancel
                        </Button>
                    ) : (
                        <Button variant='contained' onClick={call}>
                            Call
                        </Button>
                    )}
                </Grid>
            </Grid>
        </Stack>
    );
};

export default WorkerTile;
