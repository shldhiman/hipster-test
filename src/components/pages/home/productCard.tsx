
import { Star } from "lucide-react";
import { Badge } from "../../ui/badge";
import { Card, CardContent } from "../../ui/card";
import type { Product } from "./type";

interface Props {
    product: Product;
}

export default function ProductCard({ product }: Props) {
    return (
        <Card className="rounded-2xl shadow-md hover:shadow-lg transition-all duration-300">
            <img
                src={product.image}
                alt={product.title}
                className="h-56 w-full object-contain p-4"
            />
            <CardContent className="space-y-2 p-4">
                <div className="text-sm text-muted-foreground truncate">{product.category}</div>
                <h3 className="font-medium text-lg line-clamp-2">{product.title}</h3>
                <div className="flex items-center justify-between">
                    <span className="font-bold text-primary">${product.price}</span>
                    <Badge variant="secondary" className="flex items-center gap-1">
                        <Star className="w-4 h-4 text-yellow-500" /> {product.rating.rate}
                    </Badge>
                </div>
            </CardContent>
        </Card>
    );
}
