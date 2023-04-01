import React from 'react'

import { Link, useParams } from 'react-router-dom'

const ProductDetails = () => {

    const params = useParams();

    const { id } = params;

    console.log(id);

    return (
        <>
            <div>ProductDetails</div>
            <p>{id}</p>
            <p><Link to=".." relative='path'>Back</Link></p>
        </>
    )
}

export default ProductDetails