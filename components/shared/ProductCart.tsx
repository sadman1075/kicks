/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Heart } from "lucide-react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";


export default function ProductCart({ data }: any) {
    const id = data.category?.id;
    const [products, setProducts] = useState<any[]>([]);
    const [showAll, setShowAll] = useState(false); // track if show more is clicked

    useEffect(() => {
        const fetchData = async () => {
            const res = await fetch("https://api.escuelajs.co/api/v1/products");
            const data = await res.json();

            // Filter by category id
            let filtered = data.filter((product: any) => product?.category?.id === id);

            // If showAll is false, only take first 4
            if (!showAll) {
                filtered = filtered.slice(0, 4);
            }

            setProducts(filtered);
        };

        fetchData();
    }, [id, showAll]); // refetch when showAll changes

    const handleShowMore = () => {
        setShowAll(true); // show all products
    };
    const handleBack = () => {
        setProducts(products.slice(0, 4)); // go back to 4
        setShowAll(false);
    };


    const [selectedImage, setSelectedImage] = useState(data.images[1]);
    const [selectedSize, setSelectedSize] = useState<number | null>(38);
    const [selectedColor, setSelectedColor] = useState("navy");

    const sizes = [38, 39, 40, 41, 42, 43, 44, 45, 46, 47];

    return (
        <div className="max-w-7xl mx-auto px-6 py-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">

                {/* LEFT SIDE - IMAGE GALLERY */}
                <div>
                    <div className="grid grid-cols-2 gap-4">
                        {data?.images.map((img:any, index:any) => (
                            <div
                                key={index}
                                onClick={() => setSelectedImage(img)}
                                className={`cursor-pointer rounded-xl overflow-hidden border-2 ${selectedImage === img
                                    ? "border-blue-500"
                                    : "border-transparent"
                                    }`}
                            >
                                <Image
                                    src={img}
                                    alt="product"
                                    width={500}
                                    height={600}
                                    className="w-full h-full object-cover bg-white"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* RIGHT SIDE - PRODUCT INFO */}
                <div>
                    <span className="bg-blue-500 text-white text-xs px-3 py-1 rounded-full">
                        New Release
                    </span>

                    <h1 className="text-3xl font-bold mt-4">
                        {data.title}
                    </h1>

                    <p className="text-blue-600 text-xl font-bold mt-2">
                        ${data.price}.00
                    </p>

                    {/* COLOR SELECTOR */}
                    <div className="mt-6">
                        <h3 className="font-semibold mb-2">COLOR</h3>
                        <div className="flex gap-3">
                            <button
                                onClick={() => setSelectedColor("navy")}
                                className={`w-8 h-8 rounded-full bg-gray-700 border-2 ${selectedColor === "navy"
                                    ? "border-3 border-black"
                                    : "border-3 border-transparent"
                                    }`}
                            />
                            <button
                                onClick={() => setSelectedColor("green")}
                                className={`w-8 h-8 rounded-full bg-green-500 border-2 ${selectedColor === "green"
                                    ? "border-black"
                                    : "border-transparent"
                                    }`}
                            />
                        </div>
                    </div>

                    {/* SIZE SELECTOR */}
                    <div className="mt-6">
                        <div className="flex justify-between items-center">
                            <h3 className="font-bold text-sm md:text-xl">SIZE</h3>
                            <span className="text-sm text-black cursor-pointer md:text-xl font-semibold underline">
                                SIZE CHART
                            </span>
                        </div>

                        <div className="grid grid-cols-5 gap-3 mt-3">
                            {sizes.map((size) => (
                                <button
                                    key={size}
                                    onClick={() => setSelectedSize(size)}
                                    className={`py-2 rounded-lg border ${selectedSize === size
                                        ? "bg-black text-white"
                                        : "bg-white text-black"
                                        }`}
                                >
                                    {size}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* BUTTONS */}
                    <div className="mt-8 space-y-3">
                        <div className="flex gap-3">
                            <button className="w-full bg-black text-white py-3 rounded-xl font-semibold">
                                ADD TO CART
                            </button>
                            <button className="bg-black text-white py-3 px-3 rounded-xl font-semibold">

                                <Heart />
                            </button>
                        </div>

                        <Link href={`/checkout/${data.id}`}>
                            <button className="w-full bg-blue-600 text-white py-3 rounded-xl font-semibold">
                                BUY IT NOW
                            </button>
                        </Link>
                    </div>

                    {/* PRODUCT DESCRIPTION */}
                    <div className="mt-8 text-gray-600 text-sm leading-relaxed">
                        <h4 className="font-bold text-lg text-black mb-2">
                            ABOUT THE PRODUCT
                        </h4>
                        <p>Shadow Navy / Army Green</p>
                        <p className="mt-2">
                            {
                                data.description
                            }
                        </p>
                        {/* <ul className="list-disc ml-5 mt-3 space-y-1">
                            <li>Pay over time in interest-free installments.</li>
                            <li>Join adiClub to get unlimited free shipping.</li>
                        </ul> */}
                    </div>
                </div>
            </div>

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
        </div>
    );
}