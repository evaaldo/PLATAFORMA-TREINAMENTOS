import { Lesson } from "./Lesson"

export function Sidebar() {
    return (
        <aside className="w-[20vw] p-6 shadow-lg">
            <span className="font-bold text-2xl pb-6 mb-6 block border-b border-gray-600">
                Cronograma de aulas
            </span>
            <div className="flex flex-col gap-8">
                <Lesson
                    date="Segunda - 31 de Abril - 10h00"
                    videoId="P5eqNeGSXRs"
                    isAvailable={true}
                    lessonType="live"
                    title="Aula 01 - Título da aula"
                />
                <Lesson
                    date="Terça - 01 de Abril - 10h00"
                    videoId="t4pi3wYMDjQ"
                    isAvailable={false}
                    lessonType="live"
                    title="Aula 02 - Título da aula"
                />
                <Lesson
                    date="Quarta - 02 de Abril - 10h00"
                    videoId="kt1AqWcxoA0"
                    isAvailable={false}
                    lessonType="live"
                    title="Aula 03 - Título da aula"
                />
                <Lesson
                    date="Quinta - 03 de Junho - 10h00"
                    videoId="DVMSapFlFlo"
                    isAvailable={false}
                    lessonType="live"
                    title="Aula 04 - Título da aula"
                />
                <Lesson
                    date="Sexta - 04 de Junho - 10h00"
                    videoId="qvMWR996T9w"
                    isAvailable={false}
                    lessonType="live"
                    title="Aula 05 - Título da aula"
                />
            </div>
        </aside>
    )
}