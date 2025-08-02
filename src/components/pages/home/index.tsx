import React, { useEffect, useState } from 'react';
import type { Product } from './type';
import ProductCard from './productCard';
import { Button } from '../../ui/button';
import { Card, CardContent } from '../../ui/card';
import ProductCardSkeleton from './productCardSkeleton';



const Home = () => {

    const [loading, setLoading] = useState(true);
    const [products, setProducts] = useState<Product[]>([]);

    useEffect(() => {
        if (loading) {
            const fetchData = async () => {
                try {
                    let result = await fetch("https://fakestoreapi.com/products");
                    let response = await result.json();
                    console.log(response, "response");
                    setProducts(response)
                    setLoading(false);
                } catch (error) {

                }
            }
            fetchData()
        }

    }, [loading])

    return (
        <div className="px-4 md:px-16 py-8 space-y-8 pt-8">
            {/* Title & Paragraph */}
            <div className="text-center max-w-3xl mx-auto space-y-4">
                <h1 className="text-3xl md:text-4xl font-bold">Welcome to Home Page</h1>
                <p className="text-muted-foreground">
                    There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. If you are going to use a passage of Lorem Ipsum, you need to be sure there isn't anything embarrassing hidden in the middle of text. All the Lorem Ipsum generators on the Internet tend to repeat predefined chunks as necessary, making this the first true generator on the Internet. It uses a dictionary of over 200 Latin words, combined with a handful of model sentence structures, to generate Lorem Ipsum which looks reasonable.
                </p>
                <Button className="mt-2">Get Started</Button>
            </div>

            {/* Responsive Card Grid */}
            <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                {loading
                    ? Array.from({ length: 4 }).map((_, i) => <ProductCardSkeleton key={i} />)
                    : (
                        products as Product[]).map((product) => (
                            <ProductCard key={product.id} product={product} />
                        )
                        )}

            </div>
        </div>
    );
};

export default Home;
