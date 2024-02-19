import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Navi from "./nav";
import Exp from "./main";
import Prb from "./problem";
import Page from "./prbpage";
import Kick from "./kickstart";
import Start from "./c-starter";
import Cpp from "./tes";
import Python from "./pycover";
import Login from "./login";
import Signup from "./signup";
import Account from "./profile";
import Board from "./leader"
import Main from "./landing";
import Editor from "./simplesditor";
import AAccount from "./adminaccount";
import ABoard from "./adminboard";
import AExp from "./adminexp";
import APrb from "./adminprb";
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
          <Route path="/admin" element={<AExp />}></Route>
          <Route path="/AdProblem" element={<APrb />}></Route>
          <Route path="/AdAccount" element={<AAccount />} />
          <Route path="/AdBoard" element={<ABoard />} />
        </Routes>
      </Container>
      <Routes>
        <Route>
        <Route path="/Problem/solve" element={<Page />}></Route>
        <Route path="/" element={<Main />} />
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
