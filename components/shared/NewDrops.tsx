/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Card,

    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";

export async function NewDropsCard() {

    const res = await fetch('https://api.escuelajs.co/api/v1/products')
    const data = await res.json()
    const products = data
        .filter((product: any) => product?.category?.id === 4)
        .slice(0, 4);

    console.log("products", products);

    return (

        <div className="max-w-7xl mx-auto mt-10 md:mt-20">
            <div className="flex justify-between  px-5  items-center">
                <h1 className="text-xl md:text-5xl font-bold">DONT MISS OUT <br /> NEW DROPS</h1>
                <Link href="/products">
                    <Button className="md:h-10 bg-blue-600 hover:bg-blue-600 ">SHOP NEW DROPS</Button>
                </Link>
            </div>


            <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>

                {
                    products.map((product: any) => (
                        <Card key={product.id} className="relative mx-auto w-full max-w-sm pt-0 rounded-2xl shadow-none  bg-[#e7e7e3]">
                            <div className="absolute " />
                            <img
                                src={product.images[0]}
                                alt="Event cover"
                                className="relative z-20 border-4 border-white  rounded-2xl  w-full object-cover "
                            />
                            <CardHeader>

                                <CardTitle className="">{product.title}</CardTitle>

                            </CardHeader>

                            <CardFooter>
                                <div className="m-2">
                                    <Link href={`/cart/${product.id}`}>
                                        <Button className="w-full text-sm mx-auto">
                                            View Product - ${product.price}
                                        </Button>
                                    </Link>                                </div>
                            </CardFooter>
                        </Card>
                    ))
                }
            </div>
        </div>

    )
}
