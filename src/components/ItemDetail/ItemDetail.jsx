

import ItemCount from "../ItemCount/ItemCount";
import "../../asyncMock";



export const ItemDetail = ({ id, name, img, description, stock, price }) => {

    return (    
        <div className="card-img"> 
        <h5 className="title is-5">{name}</h5>
            <figure className="image"> 
              <img src={img} alt={name} />  
            </figure>          
   
          <div className="card-content">
            <div className="media-content">
              <h6 className="subtitle is-6">{description}</h6>  
              <p>Precio: {price}</p> 
              <ItemCount   
                initial={ 1 }  
                stock={ stock } 
                onAdd={(quantity) => console.log("Su cantidad es: ", quantity )}/>   
            </div>  
          
   
         </div>  
  
       </div>
    )
  
  }
export default ItemDetail;