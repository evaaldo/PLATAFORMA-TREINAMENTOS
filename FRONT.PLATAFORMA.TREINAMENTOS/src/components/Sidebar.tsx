import { useEffect, useState } from "react"
import { LessonType } from "../models/Lesson";
import { Lesson } from "./Lesson";

export function Sidebar() {
    const [data, setData] = useState<LessonType[] | null>(null);

    useEffect(() => {
        fetch("http://localhost:3000")
            .then(response => response.json())
            .then(result => setData(result))
            .catch(error => console.log("Erro: " + error))
    }, []);

    return (
        <aside className="w-[20vw] p-6 shadow-lg">
            <span className="font-bold text-2xl pb-6 mb-6 block border-b border-gray-600">
                Cronograma de aulas
            </span>       
            <div className="flex flex-col gap-8">
                {data && data.map(lesson => (
                    <Lesson
                        date={lesson.date}
                        videoId={lesson.videoId}
                        isAvailable={lesson.isAvailable}
                        isLive={lesson.isLive}
                        title={lesson.title}
                        description={lesson.description}
                        formation={lesson.formation}
                    />
                ))}
            </div>
        </aside>
    )
}