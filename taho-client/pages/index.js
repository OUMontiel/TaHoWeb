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
                padding='100px'
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
            <Box
                className='instrucciones'
                component='div'
                display='flex'
                position='absolute'
                bottom='0'
                left='0'
                right='0'
            >
                <h2>Pasos a seguir:</h2>
                <div className='instructions-container'>
                    <div className='box'>
                        <div className='front' style={{ marginTop: '10px' }}>
                            <Image
                                className='step-image'
                                src={registrate}
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className='back'>
                            <br />
                            <p id='text'>
                                1. El primer paso es crear una cuenta y
                                registrarte con nosotros.
                            </p>
                            <p id='text'>
                                Puedes registrarte como usuario o trabajador
                                según tus necesidades
                            </p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='front' style={{ marginTop: '10px' }}>
                            <Image
                                className='step-image'
                                src={iniciosesion}
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className='back'>
                            <br />
                            <p id='text'>2. Inicia sesión en nuestra página.</p>
                        </div>
                    </div>
                    <div className='box'>
                        <div className='front' style={{ marginTop: '10px' }}>
                            <Image
                                className='step-image'
                                src={busca}
                                width={140}
                                height={140}
                            />
                        </div>
                        <div className='back'>
                            <p id='text'>
                                3. ¡A explorar la página! En caso de ser
                                usuario, podrás buscar trabajdores que se
                                adapten a tus necesidades.
                            </p>
                            <p id='text'>
                                En caso de ser trabajador, podrás publicar tu
                                perfil y esperar a que te contacten.
                            </p>
                        </div>
                    </div>
                </div>
            </Box>
        </Container>
    );
}
