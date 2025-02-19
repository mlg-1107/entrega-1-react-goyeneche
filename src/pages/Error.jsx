

import { Link } from 'react-router-dom';
import React from 'react';

function Error(){
    return (
      <div>
          <h1> 404 </h1>
          <p> Página no encontrada </p>
          <Link to="/"> Volver </Link>
      </div>
    )
  }
  
  export default Error;
