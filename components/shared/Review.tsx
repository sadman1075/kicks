/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"

import Link from "next/link";

import rev1 from "../../app/assets/images/doctor-cardiologist.jpg"
import Image from "next/image";

export async function Reviews() {

    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await res.json()


    const products = data
        .filter((product: any) => product.category?.id === 4)
        .slice(0, 3);

    console.log(products);

    return (

        <div className="max-w-7xl  mx-auto mt-10 md:mt-20">
            <div className="flex justify-between px-5 items-center">
                <h1 className="text-3xl md:text-5xl font-bold">REVIEWS</h1>
                <Link href="#">
                    <Button className="md:h-10 bg-blue-600 hover:bg-blue-600 ">SEE ALL</Button>
                </Link>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-3 gap-4 p-4'>

                {
                    products.map((product: any) => (
                        <div key={product.id} className="max-w-sm rounded-3xl overflow-hidden bg-white">

                            <div className="p-6 flex justify-between items-start">
                                <div>
                                    <h3 className="text-xl font-bold text-gray-800">
                                        Good Quality
                                    </h3>
                                    <p className="text-gray-600 mt-2 text-sm">
                                        I highly recommend shopping from kicks
                                    </p>

                                    <div className="flex items-center gap-1 mt-4">
                                        ⭐ ⭐ ⭐ ⭐ ⭐
                                        <span className="ml-2 text-gray-700 font-medium">5.0</span>
                                    </div>
                                </div>

                                <div className="relative w-14 h-14">
                                    <Image
                                        src={rev1}
                                        alt="profile"
                                        fill
                                        className="rounded-full object-cover"
                                    />
                                </div>
                            </div>

                            <div className="relative w-full h-64">
                                <Image
                                    src=   {product.images[0]}
                                    alt="Shoes"
                                    fill
                                    className="object-cover"
                                />
                            </div>

                        </div>
                    ))
                }
            </div>
        </div>

    )
}
