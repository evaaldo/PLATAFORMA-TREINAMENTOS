import { CheckCircle, Lock } from "phosphor-react";
import { useCallback } from "react";
import { Link } from "react-router-dom";
import { LessonType } from "../models/Lesson";

export function Lesson(props: LessonType) {
    const reload = useCallback(() => {
        setTimeout(() => {
            window.location.reload();
        }, 50);
    }, []);

    return (
        <Link to={`/${props.videoId}`} className="group" onClick={reload}>
            <span className="text-gray-700 mb-2">{ props.date }</span>
            <div className="flex flex-col gap-2 border p-3 rounded border-black mt-2 group-hover:border-gray-500 cursor-pointer">
                <header className="flex justify-between">
                    {props.isAvailable ? (
                        <span className="flex items-center text-sm gap-1 text-blue-300">
                            <CheckCircle size={20} />
                            Conteúdo liberado
                        </span>) : (
                        <span className="flex items-center text-sm gap-1 text-orange-700">
                            <Lock size={20} />
                            Em breve
                        </span>
                    )}       
                    { props.isLive ? (
                        <span className="text-[12px] border rounded border-blue-700 bg-blue-700 text-white px-[0.35rem] py-[0.125rem]">AO VIVO</span>) : (
                        <span className="text-[12px] border rounded border-blue-700 bg-blue-700 text-white px-[0.35rem] py-[0.125rem]">AULA PRÁTICA</span>
                        )
                    } 
                           
                </header>
                <span className="">{ props.title }</span>
            </div>
        </Link>
    )
}