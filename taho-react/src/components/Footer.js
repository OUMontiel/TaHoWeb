import React from "react";

class Footer extends React.Component {
    render() {
        return (
            <footer>
                <div className="ayuda">
                    <span className="footer">ayuda@taho.mx</span> <p className="separators"> | </p>
                    <span className="footer">Términos de uso</span> <p className="separators"> | </p>
                    <span className="footer">Quienes somos</span>
                    <span className="copyright">TaHo © 2022. Todos Los Derechos Reservados</span>
                </div>
                <div style={{clear: "both"}}></div>
            </footer>
        )
    }
}

export default Footer;