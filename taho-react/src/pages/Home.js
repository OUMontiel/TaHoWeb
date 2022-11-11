import React from "react";
import Find from './Find';

import albanil from './imagenes/albanil.png'
import busca from './imagenes/busca.png'
import carpintero from './imagenes/carpintero.png'
import cerrajero from './imagenes/cerrajero.png'
import electricista from './imagenes/electricista.png'
import iniciosesion from './imagenes/inicio-de-sesion.png'
import jardinero from './imagenes/jardinero.png'
import limpieza from './imagenes/limpieza.png'
import ninera from './imagenes/ninera.png'
import pintor from './imagenes/pintor.png'
import plomero from './imagenes/plomero.png'
import registrate from './imagenes/registrate.png'
import verificacion from './imagenes/verificacion.png'

import { NavLink, Link } from "react-router-dom"

class Home extends React.Component {
    render() {
        return (
        <main>
            <div className="icons">
                <h1>¿Qué estas buscando?</h1>
                <div className="row">
                    <Link to="/find">
                    <div className="icon">
                        <img id="image" src={plomero} width={50} height={50} />
                        <br/>
                        <span>PLOMERO</span>
                    </div>
                    </Link>
                    <div className="icon">
                        <img id="image" src={ninera} width={50} height={50} />
                        <br/>
                        <span>NIÑERA</span>
                    </div>
                    <div className="icon">
                        <img id="image" src={carpintero} width={50} height={50} />
                        <br/>
                        <span>CARPINTERO</span>
                    </div>
                </div>
                <div className="row">
                    <div className="icon">
                        <img id="image" src={electricista} width={50} height={50} />
                        <br/>
                        <span>ELECTRICISTA</span>
                    </div>
                    <div className="icon">
                        <img id="image" src={jardinero} width={50} height={50} />
                        <br/>
                        <span>JARDINERO</span>
                    </div>
                    <div className="icon">
                        <img id="image" src={limpieza} width={50} height={50} />
                        <br/>
                        <span>LIMPIEZA</span>
                    </div>
                </div>
                <div className="row">
                    <div className="icon">
                        <img id="image" src={albanil} width={50} height={50} />
                        <br/>
                        <span>ALBAÑIL</span>
                    </div>
                    <div className="icon">
                        <img id="image" src={cerrajero} width={50} height={50} />
                        <br/>
                        <span>CERRAJERO</span>
                    </div>
                    <div className="icon">
                        <img id="image" src={pintor} width={50} height={50} />
                        <br/>
                        <span>PINTOR</span>
                    </div>
                </div>
            </div>
            <br/>
            <div className="instrucciones">
                    <h2>Pasos a seguir:</h2>
                    <div className="instructions-container">
                        <div className="box">
                            <div className="front" style={{marginTop: "10px"}}>
                                <img className="step-image" src={registrate} width={140} height={140}/>
                            </div>
                            <div className="back">
                                <br/>
                                <p id="text">1.El primer paso es crear una cuenta y registrarte con nosotros.</p>
                                <p id="text">Puedes registrarte como usuario o trabajador según tus necesidades</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="front" style={{marginTop: "10px"}}>
                                    <img className="step-image" src={verificacion} width={140} height={140}/>
                            </div>
                            <div className="back">
                                <br/>
                                <p id="text">2.El segundo paso es esperar a que tu cuenta sea verificada.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="front" style={{marginTop: "10px"}}>
                                <img className="step-image" src={iniciosesion} width={140} height={140}/>
                            </div>
                            <div className="back">
                                <br/>
                                <p id="text">3.Una vez verificada tu cuenta, inicia sesión en nuestra página.</p>
                            </div>
                        </div>
                        <div className="box">
                            <div className="front" style={{marginTop: "10px"}}>
                                <img className="step-image" src={busca} width={140} height={140}/>
                            </div>
                            <div className="back">
                                <p id="text">4.¡A explorar la página! En caso de ser usuario, podrás buscar trabajdores que se adapten a tus necesidades.</p>
                                <p id="text">En caso de ser trabajador, podrás publicar tu perfil y esperar a que te contacten.</p>
                            </div>
                        </div>
                    </div>
                </div>
        </main>
        );
    }
}

export default Home;