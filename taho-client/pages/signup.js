import Head from 'next/head';
import Container from '@mui/material/Container';
import SignUp from '../components/SignUp';
import { apiServer } from '../config';

export const getServerSideProps = async (ctx) => {
    const res = await fetch(`${apiServer}/user/auth`, {
        credentials: 'include',
        headers: ctx.req.headers,
    });
    if (res.status === 201) {
        return {
            redirect: {
                permanent: false,
                destination: '/home',
            },
        };
    }
    return { props: {} };
};

export default function SignUpPage() {
    return (
        <Container
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                minHeight: '100vh',
            }}
        >
            <Head>
                <title>Sign Up - TaHo</title>
            </Head>

            <SignUp />
        </Container>
    );
}
