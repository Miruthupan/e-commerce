import React, { useContext } from 'react'
import { ShopContext } from '../Context/ShopContext';
import Breackcrums from '../Components/Breackcrums/Breackcrums';
import { useParams } from 'react-router-dom';
import ProductDisplay from '../Components/ProductDisplay/ProductDisplay'
const Product = () => {
  const{all_product}=useContext(ShopContext);
  const {ProductId}=useParams();
  const product = all_product.find((e)=> e.id === Number(ProductId));
  return (
    <div>
      <Breackcrums product={product}/> 
      <ProductDisplay product={product}/>  
      
    </div>
  )
}

export default Product;
