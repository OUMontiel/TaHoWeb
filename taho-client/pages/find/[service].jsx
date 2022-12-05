import Script from 'next/script';
import React from 'react';
import Button from '@mui/material/Button';
import Footer from '../../components/Footer';
import Header from '../../components/Header';
import WorkerTile from '../../components/WorkerTile';
import { apiServer, servicesNames } from '../../config/index.js';
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

    const servicesNames = [
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
                <Button
                    variant='contained'
                    sx={{
                        color: 'black',
                        backgroundColor: '#4cd5ff',
                        borderRadius: '20px',
                        textTransform: 'none',
                        margin: '2px',
                    }}
                    onClick={() => {
                        location.assign(`/find/all`);
                    }}
                >
                    Todos
                </Button>
                {servicesNames.map((service) => (
                    <Button
                        variant='contained'
                        sx={{
                            color: 'black',
                            backgroundColor: '#4cd5ff',
                            borderRadius: '20px',
                            textTransform: 'none',
                            margin: '2px',
                        }}
                        onClick={() => {
                            location.assign(`/find/${service}`);
                        }}
                    >
                        {service}
                    </Button>
                ))}
                <br />
                <br />

                {workers.length > 0 &&
                    workers.map((worker) => (
                        <WorkerTile
                            key={`worker-${worker.id}`}
                            workerService={workerService.service}
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
