import { SkeletonLoading } from "./SkeletonLoading";

export function SidebarLoading() {
    return (
        <aside className="w-[20vw] p-6 shadow-lg">
            <span className="text-transparent shimmer font-bold text-xl pb-6 mb-6 block rounded">
                Cronograma de aulas
            </span>        
            <div className="flex flex-col gap-8">
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
                <SkeletonLoading />
            </div>
        </aside>
    )
}