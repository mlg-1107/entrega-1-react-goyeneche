

import { Outlet } from 'react-router-dom';
import NavBar from '../../src/components/NavBar/NavBar';

function Layout() {
    return (
      <div>
        <NavBar/>
        <Outlet/>
        <footer> Pie de Pagina </footer>
      </div>
    )
  }
  
  export default Layout;