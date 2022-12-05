import React, { Component } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import Stack from '@mui/material/Stack';
import Typography from '@mui/material/Typography';

export default function ProfileModal({
    user,
    isWorker,
    openProfile,
    handleCloseProfile,
}) {
    return (
        <Dialog
            open={openProfile}
            onClose={handleCloseProfile}
            fullWidth
            maxWidth='sm'
        >
            <Box
                sx={{
                    p: 4,
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                }}
            >
                <Typography variant='h5' textAlign='center' fontWeight='bold'>
                    {isWorker ? 'Trabajador' : 'Usuario'}
                </Typography>
                <Stack
                    maxWidth
                    sx={{
                        p: 2,
                        display: 'flex',
                        alignItems: 'flex-start',
                    }}
                    spacing={2}
                >
                    <Typography textAlign='left'>
                        <b>Nombre: </b> {user.firstName}
                    </Typography>
                    <Typography textAlign='left'>
                        <b>Apellido: </b> {user.lastName}{' '}
                    </Typography>
                    <Typography textAlign='left'>
                        <b>Teléfono: </b> {user.phone}
                    </Typography>
                    {isWorker && (
                        <>
                            <Typography textAlign='left'>
                                <b>RFC: </b> {user.rfc}
                            </Typography>
                            <Typography textAlign='left'>
                                <b>Certificados: </b> {user.certificates}
                            </Typography>
                            <Typography textAlign='left'>
                                <b>Servicios: </b> {user.services}
                            </Typography>
                            <Typography textAlign='left'>
                                <b>Descripción: </b> {user.description}
                            </Typography>
                        </>
                    )}
                </Stack>
                <Button
                    variant='contained'
                    color='error'
                    onClick={handleCloseProfile}
                >
                    Close
                </Button>
            </Box>
        </Dialog>
    );
}
