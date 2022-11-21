import React from 'react';
import Header from '../components/Header';
import Image from 'next/image';
import Footer from '../components/Footer';
import { apiServer } from '../config/index.js';

import albanil from '../images/albanil.png';
import busca from '../images/busca.png';
import carpintero from '../images/carpintero.png';
import cerrajero from '../images/cerrajero.png';
import electricista from '../images/electricista.png';
import iniciosesion from '../images/inicio-de-sesion.png';
import jardinero from '../images/jardinero.png';
import limpieza from '../images/limpieza.png';
import ninera from '../images/ninera.png';
import pintor from '../images/pintor.png';
import plomero from '../images/plomero.png';
import registrate from '../images/registrate.png';
import verificacion from '../images/verificacion.png';

import { NavLink, Link } from 'react-router-dom';

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
    return { props: { user: body.user } };
};

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <div className='icons'>
                    <h1>¿Qué estas buscando?</h1>
                    <div className='row'>
                        {/* <Link to='/find'> */}
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
                        {/* </Link> */}
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
                <br />
                <div className='instrucciones'>
                    <h2>Pasos a seguir:</h2>
                    <div className='instructions-container'>
                        <div className='box'>
                            <div
                                className='front'
                                style={{ marginTop: '10px' }}
                            >
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
                                    1.El primer paso es crear una cuenta y
                                    registrarte con nosotros.
                                </p>
                                <p id='text'>
                                    Puedes registrarte como usuario o trabajador
                                    según tus necesidades
                                </p>
                            </div>
                        </div>
                        <div className='box'>
                            <div
                                className='front'
                                style={{ marginTop: '10px' }}
                            >
                                <Image
                                    className='step-image'
                                    src={verificacion}
                                    width={140}
                                    height={140}
                                />
                            </div>
                            <div className='back'>
                                <br />
                                <p id='text'>
                                    2.El segundo paso es esperar a que tu cuenta
                                    sea verificada.
                                </p>
                            </div>
                        </div>
                        <div className='box'>
                            <div
                                className='front'
                                style={{ marginTop: '10px' }}
                            >
                                <Image
                                    className='step-image'
                                    src={iniciosesion}
                                    width={140}
                                    height={140}
                                />
                            </div>
                            <div className='back'>
                                <br />
                                <p id='text'>
                                    3.Una vez verificada tu cuenta, inicia
                                    sesión en nuestra página.
                                </p>
                            </div>
                        </div>
                        <div className='box'>
                            <div
                                className='front'
                                style={{ marginTop: '10px' }}
                            >
                                <Image
                                    className='step-image'
                                    src={busca}
                                    width={140}
                                    height={140}
                                />
                            </div>
                            <div className='back'>
                                <p id='text'>
                                    4.¡A explorar la página! En caso de ser
                                    usuario, podrás buscar trabajdores que se
                                    adapten a tus necesidades.
                                </p>
                                <p id='text'>
                                    En caso de ser trabajador, podrás publicar
                                    tu perfil y esperar a que te contacten.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
            <Footer />
        </>
    );
}
