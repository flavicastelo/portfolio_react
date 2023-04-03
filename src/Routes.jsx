import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import ContactPage from "./pages/ContactPage";
import HomePage from "./pages/HomePage";
import ProjectPage from "./pages/ProjectPage";
export function AppRoutes(){
    return (
        <Router>
            <Routes>
                <Route path="/" element={<HomePage />}/>
                <Route path="/experience" element={<ProjectPage />}/>
                <Route path="/contact" element={<ContactPage />}/>
            </Routes>
        </Router>
    );
}