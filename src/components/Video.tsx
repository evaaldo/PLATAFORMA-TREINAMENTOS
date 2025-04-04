import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css';
import { Link } from "react-router-dom";
import { Globe, Lightning } from "phosphor-react";

interface VideoProps {
    videoId: string;
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
                        <h1 className="text-3xl font-bold">Aula 01 - Título da aula</h1>
                        <p className="text-gray-700 mt-3 text-lg">Nessa aula vamos dar início ao entendimento da estrutura base do treinamento que será feito</p>
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
                    <img className="rounded-full w-20" src="https://github.com/evaaldo.png" alt="" />
                    <span>
                        <span className="text-2xl font-semibold">Evaldo Rodrigues</span>
                        <p className="text-sm text-gray-600">Software Developer</p>
                    </span>
                </div>
            </div>
        </div>
    )
}