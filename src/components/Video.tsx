import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css';
import { Link } from "react-router-dom";
import { Globe, Lightning } from "phosphor-react";

interface VideoProps {
    videoId: string;
    title: string;
    description: string;
    teacherName: string;
    teacherRole: string;
    teacherAvatar: string;
}

export function Video(props: VideoProps) {
    return (
        <div className="flex-1 flex-col">
            <div className="bg-black flex justify-center">
                <div className="text-white h-full w-full max-h-[100vh] max-w-[1100px] aspect-video">
                    <Player>
                        <Youtube videoId={props.videoId}></Youtube>
                        <DefaultUi />
                    </Player>
                </div>
            </div>
            <div className="p-6 w-[80%] flex justify-center flex-col m-auto gap-6">
                <div className="flex justify-between items-center">
                    <div>
                        <h1 className="text-3xl font-bold">{props.title}</h1>
                        <p className="text-gray-700 mt-3 text-lg">{props.description}</p>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Link to={`/notFound`} className="bg-blue-700 text-white text-center px-2 py-3 rounded flex justify-center items-center gap-1 shadow-lg">
                            <Globe size={18} />
                            Intranet
                        </Link>
                        <Link to={`/notFound`} className="bg-gray-700 text-white text-center px-2 py-3 rounded flex justify-center items-center gap-1 shadow-lg">
                            <Lightning size={18} />
                            Acesse o desafio
                        </Link>
                    </div>
                </div>
                <div className="flex items-center gap-6">
                    <img className="rounded-full w-20" src={props.teacherAvatar} alt="" />
                    <span>
                        <span className="text-2xl font-semibold">{props.teacherName}</span>
                        <p className="text-sm text-gray-600">{props.teacherRole}</p>
                    </span>
                </div>
            </div>
        </div>
    )
}