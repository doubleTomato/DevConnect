import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Blog from "./pages/Blog";
import Projects from "./pages/Projects";
import Profile from "./pages/Profile";
import Login from "./pages/Login";
import Header from "./common/header";
function App() {
  return (
    <>
    <Header></Header>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/blog" element={<Blog />} />
      <Route path="/projects" element={<Projects />} />
      <Route path="/profile" element={<Profile />} />
      <Route path="/login" element={<Login />} />
    </Routes>
    </>
  );
}

export default App;
