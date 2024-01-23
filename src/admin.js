import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Exp from "./adminexp";
import Prb from "./adminprb";
import Page from "./adminpebpage";
import Kick from "./adminkick";
import Start from "./c-starter";
import Cpp from "./cppcov";
import Python from "./pycover";
import Login from "./login";
import Signup from "./signup";
import Account from "./adminaccount";
import Board from "./adminboard";
function App() {
  return (
    <>
      <Container>
        <Routes>
          
          <Route path="/" element={<Exp />}></Route>
          <Route path="/AdProblem" element={<Prb />}></Route>
          <Route path="/AdAccount" element={<Account />} />
          <Route path="/AdBoard" element={<Board />} />
          <Route path="/AdProblem/Adsolve" element={<Page />}></Route>
        </Routes>
      </Container>
      <Routes>
        <Route>
          <Route path="/AdProblem/Adkick" element={<Kick />}></Route>
          <Route path="/Adsolve" element={<Page />}></Route>
        </Route>
      </Routes>
    </>
  );
}

export default App;
