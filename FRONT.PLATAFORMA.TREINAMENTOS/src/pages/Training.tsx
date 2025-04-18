import { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Sidebar } from "../components/Sidebar";
import { Video } from "../components/Video";
import { SidebarLoading } from "../components/SidebarLoading";
import { HeaderLoading } from "../components/HeaderLoading";
import { VideoLoading } from "../components/VideoLoading";

export function Training() {
    const [data, setData] = useState(null);
    useEffect(() => {
        let timeoutId: ReturnType<typeof setTimeout>;

        const fetchData = async () => {
            try {
                const response = await fetch("http://localhost:3000");
                if (!response.ok) throw new Error("Erro na resposta");
                const result = await response.json();
                setData(result);
            } catch (error) {
                console.log("Erro ao buscar dados, tentando novamente em 5s... " + error);
                timeoutId = setTimeout(fetchData, 5000);
            }
        };

        fetchData();

        return () => clearTimeout(timeoutId);
        }, []);

    return(
        <>
            { data ? <div className="flex flex-col min-h-screen font-sans">
                <Header />
                <main className="flex flex-1">
                    <Video />
                    <Sidebar />
                </main>
            </div> :
            <div className="flex flex-col min-h-screen font-sans">
                <HeaderLoading />
                <main className="flex flex-1">
                    <VideoLoading />
                    <SidebarLoading />
                </main>
            </div> }
        </>
    )
}