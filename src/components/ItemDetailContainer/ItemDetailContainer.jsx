import { useEffect, useState } from "react";
import { getProductById } from "../../asyncMock";
import { ItemDetail } from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css"



const ItemDetailContainer = () => {
  const [ product, setProduct] = useState(null)
  
  const { itemId } = useParams();

  useEffect(() => { 
  
    getProductById(itemId) 
    .then((resp) => { 
      setProduct(resp)   
    })
    .catch((err) => {
      console.error(err); 
    })
  
  }, [itemId]);
  
  if (!product) {
    return <p>Cargando producto...</p>; // O mostrar un spinner de carga
  }
  
    return (  
   <div className="ItemDetailContainer">    
    
      <ItemDetail  { ...product } />       
            
    </div> 
  )
}

export default ItemDetailContainer;