import { Lesson } from "./Lesson"

export function Sidebar() {
    return (
        <aside className="w-[20vw] p-6 shadow-lg">
            <span className="font-bold text-2xl pb-6 mb-6 block border-b border-gray-600">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
                <Lesson />
            </div>
        </aside>
    )
}