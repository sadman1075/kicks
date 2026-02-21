/* eslint-disable @typescript-eslint/no-explicit-any */
import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowUpRight, ChevronLeft, ChevronRight } from "lucide-react"

export default async function Categories() {

    const res = await fetch('https://api.escuelajs.co/api/v1/categories')
    const data = await res.json()
    const categories = data.slice(0, 2)




    return (
        <section className="max-w-7xl mx-auto px-5 rounded-2xl bg-gradient-to-r from-zinc-900 to-zinc-800 text-white py-16 px-6">
            <div className="max-w-6xl mx-auto">

                {/* Header */}
                <div className="flex items-center justify-between mb-10">
                    <h2 className="text-3xl font-bold tracking-wide">
                        CATEGORIES
                    </h2>

                    <div className="flex gap-2">
                        <Button
                            size="icon"
                            variant="secondary"
                            className="bg-zinc-700 hover:bg-zinc-600 text-white"
                        >
                            <ChevronLeft className="w-4 h-4" />
                        </Button>
                        <Button
                            size="icon"
                            variant="secondary"
                            className="bg-zinc-700 hover:bg-zinc-600 text-white"
                        >
                            <ChevronRight className="w-4 h-4" />
                        </Button>
                    </div>
                </div>

                {/* Category Grid */}
                <div className="grid md:grid-cols-2 gap-6">

                    {
                        categories.map((category: any) => (
                            <Card key={category.id} className="relative bg-[#adacaa] text-black rounded-3xl overflow-hidden p-8 h-[300px] flex items-center justify-between">
                         

                                <img
                                    src={category.image}
                                    alt="Lifestyle Shoes"
                                    className="w-1/3 object-contain"
                                />

                                <div className="flex justify-between gap-4 items-center">
                                    <div>
                                        <h3 className="text-lg font-bold leading-tight">
                                            {category.name}
                                        </h3>
                                    </div>

                                    <Button
                                        size="icon"
                                        className="absolute bottom-6 right-6 bg-black text-white hover:bg-zinc-800 rounded-md"
                                    >
                                        <ArrowUpRight className="w-4 h-4" />
                                    </Button>
                                </div>
                            </Card>
                        ))

                    }




                </div>
            </div>
        </section>
    )
}