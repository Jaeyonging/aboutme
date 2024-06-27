import { Suspense, useEffect, useState, useRef, RefObject } from "react";
import { Navigate, Route, Routes, useLocation } from "react-router-dom";
import { Home } from "./routes/Home";
import './App.css'
import { Register } from "./routes/Login/Register";
import { FindID } from "./routes/Login/FindID";
import { FindPwd } from "./routes/Login/FindPwd";
import { Projects } from "./routes/Projects";
import { About } from "./routes/About";
import { Contact } from "./routes/Contact";
import { Login } from "./routes/Login/Login";
import { Learned } from "./routes/Learned";
import { Master } from "./routes/Master";
import { useDispatch, useSelector } from "react-redux";
import { RootState } from "./store/configureStore";
import { AddProject } from "./routes/AddProject";
import { AddLearn } from "./routes/AddLearn";
import { Mbti } from "./routes/Mbti"
import ReactGA from 'react-ga4';
import { LoginSuccess } from "./store/userSlice";

const TRACKING_ID = import.meta.env.VITE_GA_PROPERTYID;
ReactGA.initialize(TRACKING_ID);

function App() {
  const dispatch = useDispatch()
  const location = useLocation();
  console.log("start")

  useEffect(() => {
    ReactGA.set({ page: location.pathname });
    ReactGA.send('pageview');
    dispatch(LoginSuccess())
  }, [location]);

  const userInfo = useSelector((state: RootState) => state.userInfo)
  return (
    <>

      <Suspense fallback={<div>로딩중</div>}>

        <Routes>
          <Route path="/login" element={<Login />} />
          {userInfo.isLogin ? (
            <>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/about" element={<About />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/learned" element={<Learned />} />
              <Route path="/mbti" element={<Mbti />}></Route>
              {userInfo.isMaster ? (
                <>
                  <Route path="/master" element={<Master />} />
                  <Route path="/addproject" element={<AddProject />} />
                  <Route path="/addlearn" element={<AddLearn />} />
                </>
              ) : <Route path="*" element={<Navigate to="/home" />} />}
            </>
          )
            :
            (
              <>
                <Route path="/register" element={<Register />} />
                <Route path="/findID" element={<FindID />} />
                <Route path="/findPWD" element={<FindPwd />} />
                <Route path="*" element={<Navigate to="/login" />} />
              </>
            )}

        </Routes>
      </Suspense>

      {/* </div > */}
    </>
  );
}

export default App;
