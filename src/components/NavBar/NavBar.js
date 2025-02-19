
import fullRepuestosLogo from "../../images/fullRepuestos.png";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink, Link } from "react-router-dom";

const NavBar = () => {
    const categories = ["Aire Acondicionado", "Lavarropas", "Kits de carga"]; // Array con las categorías

    return (
        <nav className="navBar">

            <Link to={"/"}> 

            {/* Logo */}
            <img src={fullRepuestosLogo} alt="Logo Full Repuestos" style={{ height: '40px' }} />
            </Link>

            {/* Botones de navegación */}
           <div className="navbar-menu">
        <div className="navbar-start">
          {categories.map(category => ( // Mapea las categorías para crear los NavLinks
            <NavLink
              key={category}
              to={`/category/${category}`}
              className={({ isActive }) => (isActive ? 'ActiveOption' : 'Option')}
            >
              {category.charAt(0).toUpperCase() + category.slice(1)} {/* Capitaliza la primera letra */}
            </NavLink>
          ))}
        </div>
      </div>
            <CartWidget/>
        </nav>
    );
};

export default NavBar;
