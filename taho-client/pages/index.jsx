import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';
import { apiServer } from '../config';

import busca from '../images/busca.png';
import iniciosesion from '../images/inicio-de-sesion.png';
import registrate from '../images/registrate.png';
import taho_logo from '../images/taho_logo.png';

export const getServerSideProps = async (ctx) => {
    const res = await fetch(`${apiServer}/user/auth`, {
        credentials: 'include',
        headers: ctx.req.headers,
    });
    if (res.status === 201) {
        const body = await res.json();
        if (!body.isWorker) {
            return {
                redirect: {
                    permanent: false,
                    destination: '/home',
                },
            };
        } else {
            return {
                redirect: {
                    permanent: false,
                    destination: '/calls',
                },
            };
        }
    }
    return { props: {} };
};

export default function Index() {
    return (
        <Container>
            <Head>
                <title>TaHo</title>
                <meta name='description' content='Find jobs, build community' />
                <link rel='icon' href='/favicon.ico' />
            </Head>

            <Stack
                direction='column'
                justifyContent='center'
                alignItems='center'
                spacing={2}
                minHeight='100vh'
            >
                <Typography variant='h1' align='center' fontSize={'4.5rem'}>
                    Welcome to
                </Typography>
                <Image id='taho_logo' src={taho_logo} width={202} height={88} />

                <Stack direction='row' spacing={2}>
                    <Link href='/login'>
                        <Button variant='contained' size='large'>
                            Login
                        </Button>
                    </Link>
                    <Link href='/signup'>
                        <Button variant='contained' size='large'>
                            Sign up
                        </Button>
                    </Link>
                </Stack>
            </Stack>
        </Container>
    );
}
