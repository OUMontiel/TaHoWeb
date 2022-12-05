import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import { apiServer } from '../config/index.js';
import Link from 'next/link';

import albanil from '../images/albanil.png';
import carpintero from '../images/carpintero.png';
import cerrajero from '../images/cerrajero.png';
import electricista from '../images/electricista.png';
import jardinero from '../images/jardinero.png';
import limpieza from '../images/limpieza.png';
import ninera from '../images/ninera.png';
import pintor from '../images/pintor.png';
import plomero from '../images/plomero.png';

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
    if (body.isWorker) {
        return {
            redirect: {
                permanent: false,
                destination: '/calls',
            },
        };
    }
    return { props: { user: body.user } };
};

export default function Home({ user }) {
    return (
        <>
            <Header user={user} isWorker={false} />
            <main>
                <div className='icons'>
                    <h1>¿Qué estas buscando?</h1>
                    <div className='row'>
                        <Link href='/find'>
                            <div className='icon'>
                                <Image
                                    id='plomero'
                                    src={plomero}
                                    width='50px'
                                    height='50px'
                                />
                                <br />
                                <span>PLOMERO</span>
                            </div>
                        </Link>
                        <div className='icon'>
                            <Image
                                id='image'
                                src={ninera}
                                width={50}
                                height={50}
                            />
                            <br />
                            <span>NIÑERA</span>
                        </div>
                        <div className='icon'>
                            <Image
                                id='image'
                                src={carpintero}
                                width={50}
                                height={50}
                            />
                            <br />
                            <span>CARPINTERO</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='icon'>
                            <Image
                                id='image'
                                src={electricista}
                                width={50}
                                height={50}
                            />
                            <br />
                            <span>ELECTRICISTA</span>
                        </div>
                        <div className='icon'>
                            <Image
                                id='image'
                                src={jardinero}
                                width={50}
                                height={50}
                            />
                            <br />
                            <span>JARDINERO</span>
                        </div>
                        <div className='icon'>
                            <Image
                                id='image'
                                src={limpieza}
                                width={50}
                                height={50}
                            />
                            <br />
                            <span>LIMPIEZA</span>
                        </div>
                    </div>
                    <div className='row'>
                        <div className='icon'>
                            <Image
                                id='image'
                                src={albanil}
                                width={50}
                                height={50}
                            />
                            <br />
                            <span>ALBAÑIL</span>
                        </div>
                        <div className='icon'>
                            <Image
                                id='image'
                                src={cerrajero}
                                width={50}
                                height={50}
                            />
                            <br />
                            <span>CERRAJERO</span>
                        </div>
                        <div className='icon'>
                            <Image
                                id='image'
                                src={pintor}
                                width={50}
                                height={50}
                            />
                            <br />
                            <span>PINTOR</span>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
