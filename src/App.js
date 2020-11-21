import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import SignUpHome from "./components/Authentication/SignUpHome/SignUpHome";
import TeacherLogin from "./components/Authentication/Teacher/TeacherLogin/TeacherLogin";
import TeacherSignUp from "./components/Authentication/Teacher/TeacherSignUp/TeacherSignUp";
import VerifyOtp from "./components/Authentication/VerifyOtp/VerifyOtp";
import TeacherDashboard from "./components/Dashboard/TeacherDashboard/TeacherDashboard/TeacherDashboard";
import Home from "./components/Home/Home/Home";
import NotFound from "./components/NotFound/NotFound";

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Home></Home>
        </Route>
        <Route path="/home">
          <Home></Home>
        </Route>
        <Route path="/signUpHome">
          <SignUpHome></SignUpHome>
        </Route>
        <Route path="/teacherSignUp">
          <TeacherSignUp></TeacherSignUp>
        </Route>
        <Route path="/teacherLogin">
          <TeacherLogin></TeacherLogin>
        </Route>
        <Route path="/login">
          <TeacherLogin></TeacherLogin>
        </Route>
        <Route path="/teacherDashboard">
          <TeacherDashboard></TeacherDashboard>
        </Route>
        <Route path="/verifyOtp">
          <VerifyOtp></VerifyOtp>
        </Route>
        <Route path="*">
          <NotFound></NotFound>
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
