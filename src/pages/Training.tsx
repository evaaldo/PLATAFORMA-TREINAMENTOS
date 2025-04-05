import { useParams } from "react-router-dom";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";

export function Training() {
    const { videoId } = useParams<{ videoId: string }>()

    return(
        <div className="flex flex-col min-h-screen font-sans">
            <Header />
            <main className="flex flex-1">
                {videoId ? <Video
                    videoId={videoId}
                    title="Aula 01 - Título da aula"
                    description="Nessa aula vamos dar início ao entendimento da estrutura base do treinamento que será feito"
                    teacherName="Evaldo Rodrigues"
                    teacherRole="Software Developer"
                    teacherAvatar="https://github.com/evaaldo.png"
                /> : 
                <h1 className="flex-1 text-center pt-12">Acesse alguma aula</h1>}
                <Sidebar />
            </main>
        </div>
    )
}