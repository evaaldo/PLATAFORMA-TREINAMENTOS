import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { UserType } from "../models/User";
import { LessonType } from "../models/Lesson";

export function Header() {
    const userId = 1; // Dado mockado
    const { videoId } = useParams<{ videoId: string }>()
    const [user,setUser] = useState<UserType | null>(null);
    const [lesson,setLesson] = useState<LessonType | null>(null);

    useEffect(() => {
        fetch(`http://localhost:3000/users/${userId}`)
            .then(response => response.json())
            .then(result => setUser(result))
            .catch(error => console.log(error))
    }, []);

    useEffect(() => {
        fetch(`http://localhost:3000/lessons/${videoId}`)
            .then(response => response.json())
            .then(result => setLesson(result))
            .catch(error => console.log(error));
    }, [videoId]);

    return (
        <header className="flex w-full justify-between align-center py-2 border-b border-gray-600 px-6">
            <div className="flex items-center gap-4">
                <Link to={"/"}>
                    <img src="/logo.svg" alt="Logo da plataforma de treinamentos" />
                </Link>
                {lesson ? <h1 className="text-2xl font-bold">{lesson?.formation}</h1> : <h1 className="text-2xl font-bold">Plataforma de Treinamentos</h1>}
            </div>
            <div className="flex items-center gap-3">
                <div className="flex flex-col text-center">
                    <span>{user?.name}</span>
                    <span className="text-sm text-gray-700">{user?.role}</span>
                </div>
                <img className="rounded-full w-12 h-12" src={user?.avatar} alt="" />
            </div>
        </header>
    )
}