
import fullRepuestosLogo from "../../images/fullRepuestos.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    return (
        <nav className="navBar">

            <Link to={"/"}> 

            {/* Logo */}
            <img src={fullRepuestosLogo} alt="Logo Full Repuestos" style={{ height: '40px' }} />
            </Link>

            {/* Botones de navegación */}
            <div className="navbar-menu">     
                <div className="navbar-start">  
                    <NavLink to={`/category/aireacondicionado`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }> Aire Acondicionado </NavLink>
                    <NavLink  to={`/category/lavarropas`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }> Lavarropas </NavLink>
                    <NavLink to={`/category/kitsdecarga`} className={({isActive}) => isActive ? 'ActiveOption' : 'Option' }>Kits de carga </NavLink>
    </div>                  
     </div>    
            <CartWidget/>
        </nav>
    );
};

export default NavBar;
