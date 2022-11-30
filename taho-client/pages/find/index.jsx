import { Fragment } from 'react';
import Head from 'next/head';
import { apiServer } from '../../config';

/// Should always redirect somewhere
export const getServerSideProps = async (ctx) => {
    const res = await fetch(`${apiServer}/user/auth`, {
        credentials: 'include',
        headers: ctx.req.headers,
    });
    if (res.status === 201) {
        const body = await res.json();
        return {
            redirect: {
                destination: `/find/all`,
                permanent: true,
            },
        };
    }
    return {
        redirect: {
            permanent: false,
            destination: '/login',
        },
    };
};

const FindingWorkers = () => (
    <Fragment>
        <Head>
            <title>Buscar - TaHo</title>
        </Head>
        <p>Cargando...</p>
    </Fragment>
);

export default FindingWorkers;
