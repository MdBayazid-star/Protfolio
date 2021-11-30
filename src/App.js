import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./Components/shared/Header/Header";
import Home from "./Components/Home/Home";
import Footer from "./Components/shared/Footer/Footer";
import ProjectDetails from "./Components/ProjectDetails/ProjectDetails";
import CommingSoon from "./Components/CommingSoon/CommingSoon";
import Blog from "./Components/Blog/Blog";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header></Header>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/comingSoon" element={<CommingSoon />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/details">
            <Route path=":userId" element={<ProjectDetails />} />
          </Route>
        </Routes>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
