import { useState, useEffect } from "react";
import { getProducts, getProductsByCategory } from "../asyncMock";
import ItemList from "../ItemList/ItemList";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting }) => { 
 
    const [ products, setProducts ] = useState([]);
        
    const { categoryId } = useParams();

    useEffect(() => {
      const fetchProducts = async () => { // Renombrado para mayor claridad
        try {
          const productData = categoryId ? await getProductsByCategory(categoryId) : await getProducts();
          setProducts(productData);
        } catch (error) {
          console.error("Error fetching products:", error);
          // Aquí puedes mostrar un mensaje de error al usuario
        }
      };
  
      fetchProducts(); // Llamar a la función asíncrona
    }, [categoryId]); 

    return (   
          <div>  
              <h3 className="title is-3 is-spaced">{greeting}</h3> 
              <ItemList  products={ products } /> 
          </div>       

    ) 
} 

export default ItemListContainer;  