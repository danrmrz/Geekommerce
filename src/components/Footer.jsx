import React from "react";
import { Link } from 'react-router-dom';
import "../assets/styles/components/Footer.scss";

const Footer = () => (
    <footer className="footer">
        <div>
            <p>Creado por Geeks del Mercado</p>
        </div>
        <div className="enlaces">
            <Link to='/politicasPrivacidad'>Políticas de privacidad</Link>
            <Link to='/terminosycondiciones'>Términos y condiciones</Link>
            <Link to='/acercade'>Acerca de nosotros</Link>
        </div>
    </footer>
);

export default Footer;
