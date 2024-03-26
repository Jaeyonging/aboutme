import { Suspense, useState } from "react";
import { Route, Routes } from "react-router-dom";
import { Home } from "./routes/Home";
import './App.css'
import { Register } from "./routes/Login/Register";
import { FindID } from "./routes/Login/FindID";
import { FindPwd } from "./routes/Login/FindPwd";
import { Login } from "./components/Login";
import { Projects } from "./routes/Projects";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";

function App() {
  return (
    <Suspense fallback={<div>로딩중</div>}>
      {/* <audio src="../src/assets/bgm.mp3" autoPlay={true} /> */}


      <Routes>
        <Route path="/" element={<Login></Login>} />
        <Route path="/home" element={<Home></Home>} />
        <Route path="/projects" element={<Projects></Projects>} />
        <Route path="/about" element={<About></About>} />
        <Route path="/contact" element={<Contact></Contact>} />
        <Route path="/register" element={<Register></Register>} />
        <Route path="/findID" element={<FindID></FindID>} />
        <Route path="/findPWD" element={<FindPwd></FindPwd>} />
      </Routes>
    </Suspense>
  );
}

export default App;
