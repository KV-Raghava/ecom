import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";

import ProductItem from "../product-item/product-item.component";
import { fetchproducts, productselector, sortSelector } from "../../redux/productreducer";
import { cartSelector } from "../../redux/productreducer";
function Products() {
 
  // const sortedProducts = useSelector(selectSortedProds);
  const isSorted = useSelector(sortSelector);
  const dispatch = useDispatch();
  // const isSorted = false;
  const products=useSelector(productselector);
  const sortedProducts = [...products].sort((a,b)=>
  a.price-b.price);
  
  // const productsArray = useSelector(cartSelector) ? [...products].sort((a,b)=>
  // a.price-b.price) : products;
  useEffect(() => {   
    
    console.log("inside use Effect"); 
    dispatch(fetchproducts());
  }, []);



  return (
    <>
      {isSorted
        ? sortedProducts.map((product) => (
            <ProductItem key={product.id} product={product} />
          ))
        : 
          products.map((product) => (
            
          
            <ProductItem key={product.id} product={product} />
            
          ))}
    </>
  );
}

export default Products;
