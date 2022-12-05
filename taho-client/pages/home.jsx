import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import { apiServer, servicesNames } from '../config/index.js';
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
    const services = [
        albanil,
        carpintero,
        cerrajero,
        electricista,
        jardinero,
        limpieza,
        ninera,
        pintor,
        plomero,
    ];

    return (
        <>
            <Header user={user} isWorker={false} />
            <main>
                <div className='icons'>
                    <h1>¿Qué estas buscando?</h1>
                    {[...Array(3)].map((x, i) => (
                        <div key={i} className='row'>
                            {[...Array(3)].map((x, j) => (
                                <Link
                                    key={i * 3 + j}
                                    href={'/find/' + servicesNames[i * 3 + j]}
                                >
                                    <a>
                                        <div className='icon'>
                                            <Image
                                                id={servicesNames[i * 3 + j]}
                                                src={services[i * 3 + j]}
                                                width='50px'
                                                height='50px'
                                            />
                                            <br />
                                            <span>
                                                {servicesNames[i * 3 + j]}
                                            </span>
                                        </div>
                                    </a>
                                </Link>
                            ))}
                        </div>
                    ))}
                </div>
            </main>
            <Footer />
        </>
    );
}
