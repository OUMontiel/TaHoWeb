import Head from 'next/head';
import Container from '@mui/material/Container';
import Login from '../components/Login';

export const getServerSideProps = async (ctx) => {
    const res = await fetch('http://localhost:3001/user/auth', {
        credentials: 'include',
        headers: ctx.req.headers,
    });
    if (res.status === 201) {
        return {
            redirect: {
                permanent: false,
                destination: '/landingPage',
            },
        };
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
