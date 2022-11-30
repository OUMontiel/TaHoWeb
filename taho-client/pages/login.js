import Head from 'next/head';
import Container from '@mui/material/Container';
import Login from '../components/Login';
import { apiServer } from '../config';

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

export default function LoginPage() {
    return (
        <Container>
            <Head>
                <title>Log In - TaHo</title>
            </Head>

            <Login />
        </Container>
    );
}
