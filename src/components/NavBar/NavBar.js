import React from "react";
import fullRepuestosLogo from "../../images/fullRepuestos.png";
import CartWidget from "../CartWidget/CartWidget";

const NavBar = () => {
    return (
        <nav>
            {/* Logo SVG */}
            <img src={fullRepuestosLogo} alt="Logo Full Repuestos" style={{ height: '40px' }} />

            {/* Botones de navegación */}
            <div>
                <button>Aire Acondicionado</button>
                <button>Lavarropas</button>
                <button>Kits de carga</button>
            </div>
            <CartWidget></CartWidget>
        </nav>
    );
};

export default NavBar;
