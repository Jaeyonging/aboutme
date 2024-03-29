import { Suspense, useEffect, useState, useRef, RefObject } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import './App.css'
import { Register } from "./routes/Login/Register";
import { FindID } from "./routes/Login/FindID";
import { FindPwd } from "./routes/Login/FindPwd";
import { Projects } from "./routes/Projects";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Blogs } from "./routes/Blogs";
import { Login } from "./routes/Login/Login";

function App() {
  const [xy, setXY] = useState({ x: 0, y: 0 });
  const mainRef = useRef<HTMLDivElement | null>(null);

  const xyHandler = (e: { clientX: number; clientY: number; }) => {
    const mouseX = e.clientX - 11;
    const mouseY = e.clientY - 11;
    if (mainRef.current) {
      const rect = mainRef.current.getBoundingClientRect();
      const offsetX = mouseX - rect.left;
      const offsetY = mouseY - rect.top;
      setXY({ x: offsetX, y: offsetY });
    }
  };

  useEffect(() => {
    document.addEventListener('mousemove', xyHandler);

    return () => {
      document.removeEventListener('mousemove', xyHandler);
    };
  }, []);

  return (
    <>
      <div className="main" ref={mainRef}>
        <div className='pointer' style={{
          transform: `translate(${xy.x}px, ${xy.y}px)`
        }}>
        </div>

        <Suspense fallback={<div>로딩중</div>}>

          <Routes>
            <Route path="/" element={<Login />} />
            <Route path="/home" element={<Home />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/blogs" element={<Blogs />} />
            <Route path="/register" element={<Register />} />
            <Route path="/findID" element={<FindID />} />
            <Route path="/findPWD" element={<FindPwd />} />
          </Routes>
        </Suspense>

      </div>
    </>
  );
}

export default App;
