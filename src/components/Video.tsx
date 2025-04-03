import { DefaultUi, Player, Youtube } from "@vime/react";
import '@vime/core/themes/default.css';

interface VideoProps {
    videoId: string;
}

export function Video(props: VideoProps) {
    return (
        <div className="flex-1">
            <div className="bg-black flex justify-center">
                <div className="text-white h-full w-full max-h-[100vh] max-w-[1100px] aspect-video">
                    <Player>
                        <Youtube videoId={props.videoId}></Youtube>
                        <DefaultUi />
                    </Player>
                </div>
            </div>
        </div>
    )
}