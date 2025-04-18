import { Route, Routes } from "react-router-dom";
import { Training } from "./pages/Training";
import { NotFound } from "./pages/NotFound";

export function Router() {
    return (
        <Routes>
            <Route path="/" element={<Training />} />
            <Route path="/:videoId" element={<Training />} />
            <Route path="/notFound" element={<NotFound />} />
        </Routes>
    )
}