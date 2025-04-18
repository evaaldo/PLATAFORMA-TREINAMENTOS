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
        fetch(`http://localhost:3000/lessons/${videoId}`)
            .then(response => response.json())
            .then(result => {
                console.log(result);
                setData(result)
            })
            .catch(error => console.log(error));
    }, [videoId]);

    console.log(data)
    console.log("videoId: " + videoId);

    return (<div className="flex-1 flex-col">
                {videoId ? <div className="bg-black flex justify-center">
                    <div className="text-white h-full w-full max-h-[100vh] max-w-[1100px] aspect-video">
                        <Player>
                            <Youtube videoId={videoId}></Youtube>
                            <DefaultUi />
                        </Player>
                    </div>
                </div> : (
                    <div className="flex flex-col items-center justify-center pt-20">
                        <img className="w-[500px]" src="sem-aula-selecionada.svg" />
                        <h1 className="text-3xl">Comece por alguma das aulas ao lado!</h1>
                    </div>
                )}
                {videoId ? <div className="p-6 w-[80%] flex justify-center flex-col m-auto gap-6">
                    <div className="flex justify-between items-center">
                        <div>
                            <h1 className="text-[38px] font-bold">{data?.title}</h1>
                            <p className="text-gray-700 mt-3 text-[22px]">{data?.description}</p>
                        </div>
                        <div className="flex flex-col gap-2">
                            <Link to={`/notFound`} className="bg-blue-700 text-white text-center px-2 py-3 rounded flex justify-center items-center gap-1 shadow-lg hover:bg-blue-300 transition-all duration-300 ease-in-out text-[18px]">
                                <Globe size={18} />
                                Intranet
                            </Link>
                            <Link to={`/notFound`} className="bg-gray-700 text-white text-center px-2 py-3 rounded flex justify-center items-center gap-1 shadow-lg hover:bg-black transition-all duration-300 ease-in-out text-[18px]">
                                <Lightning size={18} />
                                Acesse o desafio
                            </Link>
                        </div>
                    </div>
                    <div className="flex items-center gap-6">
                        <img className="rounded-full w-20" src={data?.teacher.avatar} alt="" />
                        <span>
                            <span className="text-[26px] font-semibold">{data?.teacher.name}</span>
                            <p className="text-[14px] text-gray-600">{data?.teacher.role}</p>
                        </span>
                    </div>
                </div> : <></>}
            </div>
    )
}