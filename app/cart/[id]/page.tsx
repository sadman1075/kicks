import ProductCart from '@/components/shared/ProductCart';
import React from 'react';

const page = async ({ params }: { params: { id: string } }) => {
    const { id } = await (params);
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data = await res.json()



    return (
        <div>
            <ProductCart data={data}></ProductCart>
        </div>
    );
};

export default page;