import { useEffect, useState } from "react";

export function VideoLoading() {
    const reloadPage = () => {
        window.location.reload();
    }
    const [messageIndex,setMessageIndex] = useState(0);
    const messages = ["Conectando ao servidor.","Conectando ao servidor..","Conectando ao servidor..."];

    useEffect(() => {
        const interval = setInterval(() => {
            setMessageIndex((prevIndex) => (prevIndex + 1) % messages.length)
        }, 500);

        return () => clearInterval(interval)
    }, [])

    return (

        <div className="flex flex-1 flex-col items-center justify-center">
            <img className="w-[400px]" src="erro-conectar-servidor.svg" />
            <h1 className="text-3xl">{messages[messageIndex]}</h1>
            <button onClick={reloadPage} className="bg-blue-700 text-white text-center mt-10 px-10 py-3 rounded flex justify-center items-center gap-1 shadow-lg hover:bg-blue-300 transition-all duration-300 ease-in-out text-[18px]">
                Recarregar
            </button>
        </div>
    )
}