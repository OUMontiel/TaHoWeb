import React from 'react';

export default function Registro() {
    return (
        <div>
            <div className='container'>
                <div className='rows'>
                    <div className='col-md-12'>
                        <div className='modal-box'>
                            <div
                                className='modal fade'
                                id='myModal'
                                tabindex='-1'
                                role='dialog'
                                aria-labelledby='myModalLabel'
                            >
                                <div className='modal-dialog' role='document'>
                                    <div className='modal-content'>
                                        <button
                                            type='button'
                                            className='close'
                                            data-dismiss='modal'
                                            aria-label='Close'
                                        >
                                            <span aria-hidden='true'>×</span>
                                        </button>
                                        <div className='modal-body'>
                                            <h3 className='title'>
                                                Iniciar sesión
                                            </h3>
                                            <br />
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fa fa-envelope'></i>
                                                </span>
                                                <input
                                                    type='username'
                                                    className='form-control'
                                                    placeholder='Correo'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-key'></i>
                                                </span>
                                                <input
                                                    type='password'
                                                    className='form-control'
                                                    placeholder='Contraseña'
                                                />
                                            </div>
                                            <div className='form-group checkbox'>
                                                <input type='checkbox' />
                                                <label>Recuerdame</label>
                                            </div>
                                            <a href='' className='forgot-pass'>
                                                ¿Olvidaste tu contraseña?
                                            </a>
                                            <button className='btn'>
                                                Login
                                            </button>
                                            <br />
                                            <br />
                                            <a
                                                href=''
                                                className='register'
                                                data-toggle='modal'
                                                data-target='#myModal2'
                                            >
                                                ¿No tienes cuenta? Registrate
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='rows'>
                    <div className='col-md-12'>
                        <div className='modal-box'>
                            <div
                                className='modal fade'
                                id='myModal2'
                                tabindex='-1'
                                role='dialog'
                                aria-labelledby='myModalLabel'
                            >
                                <div className='modal-dialog' role='document'>
                                    <div className='modal-content'>
                                        <button
                                            type='button'
                                            className='close'
                                            data-dismiss='modal'
                                            aria-label='Close'
                                        >
                                            <span aria-hidden='true'>×</span>
                                        </button>
                                        <div className='modal-body'>
                                            <h3 className='title'>
                                                Registrate
                                            </h3>
                                            <br />
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fa fa-envelope'></i>
                                                </span>
                                                <input
                                                    type='username'
                                                    className='form-control'
                                                    placeholder='Correo'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-key'></i>
                                                </span>
                                                <input
                                                    type='password'
                                                    className='form-control'
                                                    placeholder='Contraseña'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-phone'></i>
                                                </span>
                                                <input
                                                    type='telefono'
                                                    className='form-control'
                                                    placeholder='Telefono'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-user'></i>
                                                </span>
                                                <input
                                                    type='nombres'
                                                    className='form-control'
                                                    placeholder='Nombres'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-user'></i>
                                                </span>
                                                <input
                                                    type='apellidos'
                                                    className='form-control'
                                                    placeholder='Apellidos'
                                                />
                                            </div>
                                            <button className='btn'>
                                                Registrarse
                                            </button>
                                            <br />
                                            <br />
                                            <a
                                                href=''
                                                className='register'
                                                data-toggle='modal'
                                                data-target='#myModal2'
                                            >
                                                ¿Ya tienes cuenta? Inicia sesión
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='container'>
                <div className='rows'>
                    <div className='col-md-12'>
                        <div className='modal-box'>
                            <div
                                className='modal fade'
                                id='myModal3'
                                tabindex='-1'
                                role='dialog'
                                aria-labelledby='myModalLabel'
                            >
                                <div className='modal-dialog' role='document'>
                                    <div className='modal-content'>
                                        <button
                                            type='button'
                                            className='close'
                                            data-dismiss='modal'
                                            aria-label='Close'
                                        >
                                            <span aria-hidden='true'>×</span>
                                        </button>
                                        <div className='modal-body'>
                                            <h3 className='title'>
                                                Trabaja con nosotros
                                            </h3>
                                            <br />
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fa fa-envelope'></i>
                                                </span>
                                                <input
                                                    type='username'
                                                    className='form-control'
                                                    placeholder='Correo'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-key'></i>
                                                </span>
                                                <input
                                                    type='password'
                                                    className='form-control'
                                                    placeholder='Contraseña'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-phone'></i>
                                                </span>
                                                <input
                                                    type='telefono'
                                                    className='form-control'
                                                    placeholder='Telefono'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-user'></i>
                                                </span>
                                                <input
                                                    type='nombres'
                                                    className='form-control'
                                                    placeholder='Nombres'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-user'></i>
                                                </span>
                                                <input
                                                    type='apellidos'
                                                    className='form-control'
                                                    placeholder='Apellidos'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-user'></i>
                                                </span>
                                                <input
                                                    type='rfc'
                                                    className='form-control'
                                                    placeholder='RFC'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='input-icon'>
                                                    <i className='fas fa-home'></i>
                                                </span>
                                                <input
                                                    type='apellidos'
                                                    className='form-control'
                                                    placeholder='Domicilio'
                                                />
                                            </div>
                                            <div className='form-group'>
                                                <span className='glyphicon glyphicon-education'></span>
                                                ¿Tiene algun certificado?
                                                <label className='radio-inline'>
                                                    <input
                                                        type='radio'
                                                        name='optradio'
                                                        checked
                                                    />
                                                    Si
                                                </label>
                                                <label className='radio-inline'>
                                                    <input
                                                        type='radio'
                                                        name='optradio'
                                                    />
                                                    No
                                                </label>
                                                <br />
                                                <label
                                                    for='formFileMultiple'
                                                    className='form-label'
                                                ></label>
                                                <input
                                                    className='form-control'
                                                    type='file'
                                                    id='formFileMultiple'
                                                    multiple
                                                />
                                            </div>
                                            ¿En cual de los siguientes eres
                                            experto?
                                            <br />
                                            <br />
                                            <p id='id_trabajos'>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='1'
                                                    />
                                                    <span>Carpinteria</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='2'
                                                    />
                                                    <span>Limpieza</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='3'
                                                    />
                                                    <span>Pintura</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='4'
                                                    />
                                                    <span>Electricidad</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='5'
                                                    />
                                                    <span>Plomeria</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='6'
                                                    />
                                                    <span>Cerrajeria</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='7'
                                                    />
                                                    <span>Albañeria</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='8'
                                                    />
                                                    <span>Niñera</span>
                                                </label>
                                                <label>
                                                    <input
                                                        type='checkbox'
                                                        name='trabajos'
                                                        value='9'
                                                    />
                                                    <span>Jardineria</span>
                                                </label>
                                            </p>
                                            <button
                                                className='btn'
                                                data-dismiss='modal'
                                            >
                                                Enviar
                                            </button>
                                            <span className='help-block'>
                                                Al hacer click en enviar,
                                                tendrás que esperar a que se
                                                valide tu perfil, verifica tu
                                                correo
                                            </span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
