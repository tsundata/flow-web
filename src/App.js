import './App.css';
import '@chatscope/chat-ui-kit-styles/dist/default/styles.min.css';
import { Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Chat from "./components/Chat";
import About from "./components/About";

function App() {
    return (
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="chat" element={<Chat />} />
            <Route path="about" element={<About />} />
            <Route
                path="*"
                element={
                    <main style={{ padding: "1rem" }}>
                        <p>There's nothing here!</p>
                    </main>
                }
                />
        </Routes>
    )
}

export default App;
