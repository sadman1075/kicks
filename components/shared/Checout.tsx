"use client";

/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
// import { Input } from "@/components/ui/input";
import Image from "next/image";
import { Heart, Trash2 } from "lucide-react";
import { useEffect, useState } from "react";
import Link from "next/link";

export default function Checkout({ data }: any) {

    const id = data.category?.id;
    const [products, setProducts] = useState<any[]>([]);
    const [showAll, setShowAll] = useState(false); // track if show more is clicked

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await res.json();

            let filtered = data.filter((product: any) => product?.category?.id === id);

            if (!showAll) {
                filtered = filtered.slice(0, 4);
            }

            setProducts(filtered);
        };

        fetchData();
    }, [id, showAll]); 

    const handleShowMore = () => {
        setShowAll(true); 
    };
    const handleBack = () => {
        setProducts(products.slice(0, 4)); 
        setShowAll(false);
    };




    const total = data.price + 6.99; 
    return (
        <section className="max-w-7xl mx-auto p-4">
            {/* Banner */}
            <div className="mb-6">
                <h2 className="text-xl font-semibold">Saving to celebrate</h2>
                <p className="text-sm text-muted-foreground">
                    Enjoy up to 60% off thousands of styles during the End of Year sale – while supplies last. No code needed.
                </p>
                <p className="text-sm mt-1">
                    <span className="underline cursor-pointer">Join us</span> or{" "}
                    <span className="underline cursor-pointer">Sign-in</span>
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                {/* Details*/}
                <Card className="lg:col-span-2 rounded-2xl">
                    <CardContent className="p-6">
                        <h3 className="text-lg font-semibold mb-1">Your Bag</h3>
                        <p className="text-sm text-muted-foreground mb-6">
                            Items in your bag not reserved – check out now to make them yours.
                        </p>



                        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                            
                            <div className="w-full sm:w-28 h-28 bg-gray-100 rounded-xl flex items-center justify-center">
                                <Image
                                    src={data.images[0]}
                                    alt="Product"
                                    width={120}
                                    height={120}
                                    className="object-cover rounded-xl"
                                />
                            </div>


                            <div className="flex-1">

                                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2">
                                    <div>
                                        <h4 className="font-semibold">{data.title}</h4>
                                        <p className="text-sm text-muted-foreground">
                                            Men&apos;s Road Running Shoes
                                        </p>
                                        <p className="text-sm text-muted-foreground">
                                            Enamel Blue / University White
                                        </p>
                                    </div>

                                    <span className="font-semibold text-blue-600 sm:text-right">
                                        ${data.price}.00
                                    </span>
                                </div>


                                <div className="flex flex-wrap gap-4 mt-4 text-sm">
                                    <div className="flex items-center gap-2">
                                        <span>Size</span>
                                        <select className="border rounded px-2 py-1">
                                            <option>10</option>
                                        </select>
                                    </div>

                                    <div className="flex items-center gap-2">
                                        <span>Quantity</span>
                                        <select className="border rounded px-2 py-1">
                                            <option>1</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Actions */}
                                <div className="flex gap-4 mt-4 text-muted-foreground">
                                    <button className="hover:text-black"><Heart></Heart></button>
                                    <button className="hover:text-black"><Trash2></Trash2></button>
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>

                {/* Order Summary */}
                <Card className="rounded-2xl h-fit bg-[#e7e7e3] shadow-none">
                    <CardContent className="p-6">
                        <h3 className="text-lg md:text-xl font-bold mb-4">Order Summary</h3>

                        <div className="space-y-2 text-sm">
                            <div className="flex justify-between">
                                <span>1 Item</span>
                                <span>${data.price}.00</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Delivery</span>
                                <span>$6.99</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Sales Tax</span>
                                <span>–</span>
                            </div>
                        </div>

                        <div className="border-t my-4" />

                        <div className="flex justify-between font-semibold mb-4">
                            <span>Total</span>
                            <span>{total}</span>
                        </div>

                        <Button className="w-full rounded-xl">Checkout</Button>

                        <p className="text-sm mt-4 underline cursor-pointer">Use a promo code</p>
                    </CardContent>
                </Card>
            </div>

            {/* Similar Products */}
            <div>
                <div className="max-w-7xl mx-auto mt-10 md:mt-20">
                    <div className="flex justify-between  px-5  items-center">
                        <h1 className="text-sm md:text-5xl font-bold">You may also like</h1>

                        {!showAll ? (
                            <Button onClick={handleShowMore} className="md:h-10 bg-blue-600 hover:bg-blue-600 ">SHOW MORE</Button>
                        ) : (
                            <Button onClick={handleBack} className="md:h-10 bg-black cursor-not-allowed text-white">BACK</Button>
                        )
                        }

                    </div>


                    <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>

                        {
                            products.map((product: any) => (
                                <Card key={product.id} className="relative mx-auto w-full max-w-sm pt-0 rounded-2xl shadow-none  bg-[#e7e7e3]">
                                    <div className="absolute " />
                                    <Image
                                        src={product.images[0]}
                                        alt="Event cover"
                                        height={500}
                                        width={500}
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
            </div>
        </section>
    );
}
