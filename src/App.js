import { Route, Routes } from "react-router-dom";

import Exp from "./component/main";
import Prb from "./component/problem";
import Page from "./component/testprbpage";
import Cpp from "./component/tes";

import Login from "./component/login";
import Signup from "./component/signup";
import Account from "./component/profile";
import Board from "./component/leader"
import Main from "./component/landing";
import Editor from "./component/simplesditor";
import AAccount from "./admin page/adminaccount";
import ABoard from "./admin page/adminboard";
import AExp from "./admin page/adminexp";
import APrb from "./admin page/adminprb";
import Check from"./component/check";
function App() {
  return (
    <>

        <Routes>
          
          <Route path="/login" element={<Login />}></Route>
          <Route path="/Signup" element={<Signup />}></Route>
          <Route path="/Account/Logout" element={<Login />} />
          <Route path="/admin" element={<AExp />}></Route>
          <Route path="/AdProblem" element={<APrb />}></Route>
          <Route path="/AdAccount" element={<AAccount />} />
          <Route path="/AdBoard" element={<ABoard />} />
          <Route path="/" element={<Main />} />
        </Routes>
 
      <Routes>
        <Route element={<Check/>}>
        <Route path="/Exp" element={<Exp />}></Route>
        <Route path="/Exp/:id/:title" element={<Cpp />}></Route>
        <Route path="/Problem/:title" element={<Cpp />}></Route>
        <Route path="/Exp/:id/solve/:problemtitle" element={<Page />}></Route>
        <Route path="/Problem/:id/solve/:problemtitle" element={<Page />}></Route>
        <Route path="/Compiler" element={<Editor />} />
        {/* <Route path="/Board" element={<Board />} /> */}
        <Route path="/Problem" element={<Prb />} />
        <Route path="/Account/:id" element={<Account />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
