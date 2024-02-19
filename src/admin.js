import { Route, Routes } from "react-router-dom";
import Container from "react-bootstrap/Container";
import AExp from "./adminexp";
import APrb from "./adminprb";
import Page from "./adminpebpage";
import Kick from "./adminkick";
import Start from "./c-starter";
import Cpp from "./cppcov";
import Python from "./pycover";
import Login from "./login";
import Signup from "./signup";
import AAccount from "./adminaccount";
import ABoard from "./adminboard";
function App() {
  return (
    <>
      <Container>
        <Routes>
          
          <Route path="/admin" element={<AExp />}></Route>
          <Route path="/AdProblem" element={<APrb />}></Route>
          <Route path="/AdAccount" element={<AAccount />} />
          <Route path="/AdBoard" element={<ABoard />} />
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
