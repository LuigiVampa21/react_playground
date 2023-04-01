import React from 'react'
import { Link } from 'react-router-dom'

const DUMMY_PRODUCT = [
  {id: 'p1',title: 'Product 1'},
  {id: 'p2',title: 'Product 2'},
  {id: 'p3',title: 'Product 3'},
]


const Product = () => {
  return (
    <>
    <h1>Product</h1>
    <ul>
      {DUMMY_PRODUCT.map(product => (
        <li key={product.id}> <Link to={product.id}>{product.title}</Link></li>
      ))}
    </ul>
    </>
  )
}

export default Product