import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import { useLocation, useNavigate } from "react-router-dom";
import { ImArrowLeft, ImArrowRight } from "react-icons/im";
import Pageroute from "./routes/Pageroute";

function App() {
  const navigate = useNavigate();
  const location = useLocation();
  const path = location.pathname;
  const [carry] = useState({
    course: {
      targe: "python tutorial",
      title: "python crash course",
      section1: {
        header: "intro",
        content: "loremshvc,gjvcgchvhavmcaecgcea,k",
      },
      section2: { header: "syntax", content: "wuvydmcgycv hgccxms " },
    },
  });

  return (
    <div className="App">
      {path !== "/" && (
        <div className="float">
          <div onClick={() => navigate(-1)}>
            <ImArrowLeft size={30} className="icon1" />
          </div>
          <div onClick={() => navigate(+1)}>
            <ImArrowRight size={30} className="icon1" />
          </div>
        </div>
      )}
      <Pageroute />
      {/* <Footer /> */}
    </div>
  );
}

export default App;
