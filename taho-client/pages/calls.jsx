import React from 'react';
import Footer from '../components/Footer';
import Header from '../components/Header';
import { apiServer } from '../config/index.js';

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
    return (
        <>
            <Header user={worker} />

            <Footer />
        </>
    );
}
