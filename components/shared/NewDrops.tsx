
"use client";

import { useEffect, useState } from "react";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Button } from "@/components/ui/button"
import {
    Card,

    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card"
import Link from "next/link";
import AosWrapper from "../AosWrapper";


export function NewDropsCard() {



    const [products, setProducts] = useState<any[]>([]);

    useEffect(() => {
        async function fetchProducts() {
            try {
                const res = await fetch('https://api.escuelajs.co/api/v1/products');
                const data = await res.json();

                // Categories you want
                const categories = [1, 2, 4, 5];

                // Pick only one product per category
                const productsByCategory = new Map();

                for (const product of data) {
                    const categoryId = product?.category?.id;
                    if (categories.includes(categoryId) && !productsByCategory.has(categoryId)) {
                        productsByCategory.set(categoryId, product);
                    }
                }

                setProducts(Array.from(productsByCategory.values()));
            } catch (error) {
                console.error("Failed to fetch products:", error);
            }
        }

        fetchProducts();
    }, []);


    return (

        <AosWrapper>
            <section className="max-w-7xl mx-auto mt-10 md:mt-20">
                <div className="flex justify-between  px-5  items-center">
                    <h1 data-aos="fade-right" className="text-xl md:text-5xl font-bold">DONT MISS OUT <br /> NEW DROPS</h1>
                    <Link href="/products">
                        <Button data-aos="fade-left" className="md:h-10 bg-blue-600 hover:bg-blue-600 ">SHOP NEW DROPS</Button>
                    </Link>
                </div>


                <div className='grid grid-cols-1 md:grid-cols-4 gap-4 p-4'>

                    {
                        products.map((product: any) => (
                            <Card data-aos="zoom-in-up" key={product.id} className="relative mx-auto w-full max-w-sm pt-0 rounded-2xl shadow-none  bg-[#e7e7e3]">
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
            </section>
        </AosWrapper>

    )
}
