import React from 'react';
import axios from 'axios';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Footer from '../components/Footer';
import Grid from '@mui/material/Grid';
import Header from '../components/Header';
import Image from 'next/image';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { apiServer } from '../config/index.js';

import usuario from '../images/usuario.png';

export const getServerSideProps = async (ctx) => {
    const res = await fetch(`${apiServer}/user/auth`, {
        credentials: 'include',
        headers: ctx.req.headers,
    });
    if (res.status !== 201) {
        return {
            redirect: {
                permanent: false,
                destination: '/login',
            },
        };
    }
    const body = await res.json();
    if (!body.isWorker) {
        return {
            redirect: {
                permanent: false,
                destination: '/home',
            },
        };
    }
    return { props: { worker: body.user } };
};

export default function Calls({ worker }) {
    const [jobs, setJobs] = React.useState([]);
    const [users, setUsers] = React.useState([]);

    React.useEffect(() => {
        const fetchWorkers = async () => {
            const response = await fetch(`${apiServer}/job`, {
                credentials: 'include',
            });

            const res = await response.json();
            setJobs(res.jobs);
            setUsers(res.users);
        };

        fetchWorkers().catch(console.error);
    }, []);

    const endJob = async (userId) => {
        try {
            console.log(userId);
            const response = await axios.post(
                `${apiServer}/job/end`,
                { userId },
                { withCredentials: true },
            );

            location.assign(`/calls`);
        } catch (err) {
            console.log(err);
            if (axios.isAxiosError(err) && err.response) {
                alert((err.response?.data).error);
            }
        }
    };

    return (
        <>
            <Header user={worker} isWorker={true} />
            <div className='icons'>
                {users.length == 0 && (
                    <Stack>
                        <p>No calls today.</p>
                    </Stack>
                )}
                {users.map((user) => (
                    <Stack key={user.userId}>
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
                                        width: '150px',
                                        height: '150px',
                                    }}
                                >
                                    <Image
                                        className='card-img-top'
                                        src={usuario}
                                        alt='Card image cap'
                                    />{' '}
                                </Box>
                            </Grid>
                            <Grid item xs={10}>
                                <Stack
                                    display='flex'
                                    alignItems='flex-start'
                                    padding={2}
                                >
                                    <Typography
                                        noWrap
                                        sx={{
                                            fontSize: 32,
                                            fontWeight: 'bold',
                                        }}
                                    >
                                        {user.firstName} {user.lastName}
                                    </Typography>
                                    <Typography>
                                        <b>Phone:</b> {user.phone}
                                    </Typography>
                                </Stack>
                            </Grid>
                            <Grid item xs={1}>
                                <Button
                                    variant='contained'
                                    onClick={() => endJob(user.id)}
                                >
                                    End
                                </Button>
                            </Grid>
                        </Grid>
                    </Stack>
                ))}
            </div>

            <Footer />
        </>
    );
}
