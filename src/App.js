import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navi from "./nav";
import Exp from "./main";
import Prb from "./problem";
import Page from "./prbpage";
import Kick from "./kickstart";
import Start from "./c-starter";
import Cpp from "./cppcov";
import Python from "./pycover";
import Login from "./login";
import Signup from "./signup";
import Account from "./userinfo";
import Board from "./board"
import Main from "./landing";
import Landingbody from "./landingbody";
import Editor from "./simplesditor";
function App() {
  return (
    <>
      <Container>
        <Routes>
          
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Exp" element={<Exp />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Problem" element={<Prb />}></Route>
         
          <Route path="/Account" element={<Account />} />
          <Route path="/Board" element={<Board />} />
          <Route path="/Account/Logout" element={<Login />} />
          <Route path="/Problem/solve" element={<Page />}></Route>
        </Routes>
      </Container>
      <Routes>
        <Route>
        <Route path="/" element={<Main />} />
        <Route path="/about" element={<Landingbody />} />
        <Route path="/Compiler" element={<Editor />} />
          <Route path="/Problem/kick" element={<Kick />}></Route>
          <Route path="/Problem/start" element={<Start />}></Route>
          <Route path="/Problem/cpp" element={<Cpp />}></Route>
          <Route path="/Exp/cpp" element={<Cpp />}></Route>
          <Route path="/Problem/python" element={<Python />}></Route>
          <Route path="/solve" element={<Page />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
