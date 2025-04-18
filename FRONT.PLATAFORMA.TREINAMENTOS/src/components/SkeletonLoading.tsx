export function SkeletonLoading() {
    return (
        <div>
            <div className="mb-2 w-[150px] rounded text-transparent shimmer h-4"></div>
            <div className="flex flex-col gap-2 border p-3 rounded shimmer border-gray-200 mt-2 h-[100px]"></div>
        </div>
    )
}