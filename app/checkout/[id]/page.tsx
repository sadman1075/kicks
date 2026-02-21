/* eslint-disable @typescript-eslint/no-explicit-any */

import Checkout from "@/components/shared/Checout";

const page = async ({ params }: any) => {
    const { id } = await (params);
    const res = await fetch(`https://api.escuelajs.co/api/v1/products/${id}`)
    const data = await res.json()
    console.log(data);
    return (
        <div>
            <Checkout data={data}></Checkout>
        </div>
    );
};

export default page;