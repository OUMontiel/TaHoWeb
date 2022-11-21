import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Image from 'next/image';
import { apiServer } from '../config/index.js';

import albanil from '../images/albanil.png';

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

export default function Find({ user }) {
    return (
        <>
            <Header user={user} />
            <div className='icons'>
                <form>
                    <div className='form-row justify-content-md-center'>
                        <div className='col-auto'>
                            <select
                                className='custom-select'
                                id='filtrarPorTrabajo'
                                onchange='searchFilter()'
                            >
                                <option value='' selected>
                                    Trabajo
                                </option>
                                <option value='albañil'>Albañil</option>
                                <option value='carpintero'>Carpintero</option>
                                <option value='cerrajero'>Cerrajero</option>
                                <option value='electricista'>
                                    Electricista
                                </option>
                                <option value='jardinero'>Jardinero</option>
                                <option value='limpieza'>Limpieza</option>
                                <option value='niñera'>Niñera</option>
                                <option value='pintor'>Pintor</option>
                                <option value='plomero'>Plomero</option>
                            </select>
                        </div>
                        <div className='col-auto'>
                            <select
                                className='custom-select'
                                id='filtrarPorLoc'
                                onchange='searchFilter()'
                            >
                                <option value='' selected>
                                    Ubicación
                                </option>
                                <option value='green'>Apodaca</option>
                                <option value='blue'>Cadereyta Jimenez</option>
                                <option value='yellow'>El Carmen</option>
                                <option value='yellow'>Garcia</option>
                                <option value='yellow'>
                                    San Pedro Garza Garcia
                                </option>
                                <option value='yellow'>General Escobedo</option>
                                <option value='yellow'>Guadalupe</option>
                                <option value='yellow'>Juarez</option>
                                <option value='yellow'>Monterrey</option>
                                <option value='yellow'>Salinas Victoria</option>
                                <option value='yellow'>
                                    San Nicolas de los Garza
                                </option>
                                <option value='yellow'>Santa Catarina</option>
                                <option value='yellow'>Santiago</option>
                            </select>
                        </div>
                        <div className='col-auto'>
                            <select
                                className='custom-select'
                                id='filtrarPorCosto'
                                onchange='searchFilter()'
                            >
                                <option value='' selected>
                                    Costo
                                </option>
                                <option value='green'>$$$</option>
                                <option value='blue'>$$</option>
                                <option value='yellow'>$</option>
                            </select>
                        </div>
                        <div className='col-auto'>
                            <select
                                className='custom-select'
                                id='filtrarPorCalif'
                                onchange='searchFilter()'
                            >
                                <option value='' selected>
                                    Calificacion
                                </option>
                                <option value='cinco'>5</option>
                                <option value='cuatro'>4</option>
                                <option value='tres'>3</option>
                                <option value='dos'>2</option>
                                <option value='uno'>1</option>
                            </select>
                        </div>
                    </div>
                </form>
                <br />
                <br />

                <div className='card-deck'>
                    <div className='card'>
                        <Image
                            className='card-img-top'
                            src={albanil}
                            alt='Card image cap'
                            width={50}
                            height={50}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>Jorge Sanchez</h5>
                            <p className='card-text'>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                content is a little bit longer.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <small className='text-muted'>
                                Last updated 3 mins ago
                            </small>
                        </div>
                    </div>
                    <div className='card'>
                        <Image
                            className='card-img-top'
                            src={albanil}
                            alt='Card image cap'
                            width={50}
                            height={50}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>Mauricio Rodriguez</h5>
                            <p className='card-text'>
                                This card has supporting text below as a natural
                                lead-in to additional content.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <small className='text-muted'>
                                Last updated 3 mins ago
                            </small>
                        </div>
                    </div>
                    <div className='card'>
                        <Image
                            className='card-img-top'
                            src={albanil}
                            alt='Card image cap'
                            width={50}
                            height={50}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>Carlos Herrera</h5>
                            <p className='card-text'>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <small className='text-muted'>
                                Last updated 3 mins ago
                            </small>
                        </div>
                    </div>
                    <div className='card'>
                        <Image
                            className='card-img-top'
                            src={albanil}
                            alt='Card image cap'
                            width={50}
                            height={50}
                        />
                        <div className='card-body'>
                            <h5 className='card-title'>Diego Montes</h5>
                            <p className='card-text'>
                                This is a wider card with supporting text below
                                as a natural lead-in to additional content. This
                                card has even longer content than the first to
                                show that equal height action.
                            </p>
                        </div>
                        <div className='card-footer'>
                            <small className='text-muted'>
                                Last updated 3 mins ago
                            </small>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
}
