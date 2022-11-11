import React from "react";

class Find extends React.Component {
    render() {
        return (
            <div className="icons">
                <div className="row mt-2">
                    <div className="col-12 mb-3 col-md-0">
                        <select className="form-select" id="filtrarPorTrabajo" onchange="searchFilter()">
                            <option value="" selected>Trabajo</option>
                            <option value="albañil">Albañil</option>
                            <option value="carpintero">Carpintero</option>
                            <option value="cerrajero">Cerrajero</option>
                            <option value="electricista">Electricista</option>
                            <option value="jardinero">Jardinero</option>
                            <option value="limpieza">Limpieza</option>
                            <option value="niñera">Niñera</option>
                            <option value="pintor">Pintor</option>
                            <option value="plomero">Plomero</option>
                        </select>
                    </div>
                    <div className="col-12 mb-3 col-md-0">
                        <select className="form-select" id="filtrarPorLoc" onchange="searchFilter()">
                            <option value="" selected>Ubicación</option>
                            <option value="green">Apodaca</option>
                            <option value="blue">Cadereyta Jimenez</option>
                            <option value="yellow">El Carmen</option>
                            <option value="yellow">Garcia</option>
                            <option value="yellow">San Pedro Garza Garcia</option>
                            <option value="yellow">General Escobedo</option>
                            <option value="yellow">Guadalupe</option>
                            <option value="yellow">Juarez</option>
                            <option value="yellow">Monterrey</option>
                            <option value="yellow">Salinas Victoria</option>
                            <option value="yellow">San Nicolas de los Garza</option>
                            <option value="yellow">Santa Catarina</option>
                            <option value="yellow">Santiago</option>
                        </select>
                    </div>
                    <div className="col-12 mb-3 col-md-0">
                        <select className="form-select" id="filtrarPorCosto" onchange="searchFilter()">
                            <option value="" selected>Costo</option>
                            <option value="green">$$$</option>
                            <option value="blue">$$</option>
                            <option value="yellow">$</option>
                        </select>
                    </div>
                    <div className="col-12 mb-3 col-md-0">
                        <select className="form-select" id="filtrarPorCalif" onchange="searchFilter()">
                            <option value="" selected>Calificacion</option>
                            <option value="cinco">5</option>
                            <option value="cuatro">4</option>
                            <option value="tres">3</option>
                            <option value="dos">2</option>
                            <option value="uno">1</option>
                        </select>
                    </div>
                </div>  
            </div>
        )
    }
}

export default Find