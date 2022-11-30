import Script from 'next/script';
import React from 'react';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Image from 'next/image';
import WorkerTile from '../../components/WorkerTile';
import { apiServer } from '../../config/index.js';
import { useRouter } from 'next/router';

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

export default function Find({ user }) {
    const router = useRouter();
    const workerService = router.query;
    const [workers, setWorkers] = React.useState([]);

    React.useEffect(() => {
        const fetchWorkers = async () => {
            const workersResponse = await fetch(
                `${apiServer}/worker/${workerService.service}`,
                {
                    credentials: 'include',
                },
            );
            const workers = await workersResponse.json();
            console.log(workers);
            setWorkers(workers);
        };

        fetchWorkers().catch(console.error);
    }, [workerService]);

    return (
        <>
            <Script src='https://cdn.jsdelivr.net/npm/jquery@3.6.0/dist/jquery.slim.min.js' />
            <Script src='https://cdn.jsdelivr.net/npm/popper.js@1.16.1/dist/umd/popper.min.js' />
            <Script src='https://cdn.jsdelivr.net/npm/bootstrap@4.6.1/dist/js/bootstrap.bundle.min.js' />
            <link
                rel='stylesheet'
                href='https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.15.3/css/all.min.css'
            ></link>
            <link
                rel='stylesheet'
                href='https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/css/bootstrap.min.css'
                integrity='sha384-xOolHFLEh07PJGoPkLv1IbcEPTNtaed2xpHsD9ESMhqIYd0nLMwNLD69Npy4HI+N'
                crossorigin='anonymous'
            ></link>

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

                {workers.length > 0 &&
                    workers.map((worker) => (
                        <WorkerTile
                            key={`worker-${worker.id}`}
                            service={workerService}
                            workerId={worker.id}
                            firstName={worker.firstName}
                            lastName={worker.lastName}
                            services={worker.services}
                            phone={worker.phone}
                            certificates={worker.certificates}
                            description={worker.description}
                        />
                    ))}
            </div>
            <Footer />
            <script
                src='https://cdn.jsdelivr.net/npm/jquery@3.5.1/dist/jquery.slim.min.js'
                integrity='sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj'
                crossorigin='anonymous'
            ></script>
            <script
                src='https://cdn.jsdelivr.net/npm/bootstrap@4.6.2/dist/js/bootstrap.bundle.min.js'
                integrity='sha384-Fy6S3B9q64WdZWQUiU+q4/2Lc9npb8tCaSX9FK7E8HnRr0Jz8D6OP9dO5Vg3Q9ct'
                crossorigin='anonymous'
            ></script>
        </>
    );
}
