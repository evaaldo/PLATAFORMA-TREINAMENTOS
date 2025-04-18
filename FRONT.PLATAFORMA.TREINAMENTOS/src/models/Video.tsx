export interface VideoType {
    videoId: string;
    title: string;
    description: string;
    teacher: {
        name: string;
        role: string;
        avatar: string;
    }
}