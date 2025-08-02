const ProductCardSkeleton = () => {
    return (
        <div className="rounded-2xl shadow-sm p-5 animate-pulse space-y-4 bg-muted">
            <div className="h-5 w-3/4 bg-gray-300 rounded"></div>
            <div className="h-3 w-full bg-gray-300 rounded"></div>
            <div className="h-3 w-5/6 bg-gray-300 rounded"></div>
            <div className="h-8 w-24 bg-gray-300 rounded mt-4"></div>
        </div>
    );
}
export default ProductCardSkeleton;