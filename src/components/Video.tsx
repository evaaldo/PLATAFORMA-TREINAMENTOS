import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css';
import { Link, useParams } from "react-router-dom";
import { Globe, Lightning } from "phosphor-react";
import { useEffect, useState } from "react";
import { VideoType } from "../models/Video";

export function Video() {
    const [ data, setData ] = useState<VideoType | null>(null);
    const { videoId } = useParams<{ videoId: string }>()

    useEffect(() => {
        fetch(`https://localhost:7079/training/${videoId}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setData(result[0])
            })
            .catch(error => console.log(error));
    }, [videoId]);

    console.log(data)
    console.log("videoId: " + videoId);

    return (<div className="flex-1 flex-col">
                <div className="bg-black flex justify-center">
                    <div className="text-white h-full w-full max-h-[100vh] max-w-[1100px] aspect-video">
                        { videoId ? (
                            <Player>
                                <Youtube videoId={videoId}></Youtube>
                                <DefaultUi />
                            </Player>) : (<h1>Vídeo não encontrado</h1>)
                        }
                    </div>
                </div>
                <div className="p-6 w-[80%] flex justify-center flex-col m-auto gap-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-3xl font-bold">{data?.title ?? ''}</h1>
                            <p className="text-gray-700 mt-3 text-lg">{data?.description ?? ''}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link to={`/notFound`} className="bg-blue-700 text-white text-center px-2 py-3 rounded flex justify-center items-center gap-1 shadow-lg hover:bg-blue-300 transition-all duration-300 ease-in-out">
                                <Globe size={18} />
                                Intranet
                            </Link>
                            <Link to={`/notFound`} className="bg-gray-700 text-white text-center px-2 py-3 rounded flex justify-center items-center gap-1 shadow-lg hover:bg-black transition-all duration-300 ease-in-out">
                                <Lightning size={18} />
                                Acesse o desafio
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="rounded-full w-20" src={data?.teacherAvatar ?? ''} alt="" />
                        <span>
                            <span className="text-2xl font-semibold">{data?.teacherName ?? ''}</span>
                            <p className="text-sm text-gray-600">{data?.teacherRole ?? ''}</p>
                        </span>
                    </div>
                </div>
            </div>
    )
}