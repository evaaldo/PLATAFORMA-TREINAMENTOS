import { Route, Routes } from "react-router-dom";
import { Training } from "./pages/Training";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Training />} />
            <Route path="/:videoId" element={<Training />} />
        </Routes>
    )
}