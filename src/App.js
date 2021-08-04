import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage/InvoicePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from './pages/SignUpPage/SignUpPage';
import LoginPage from "./pages/LoginPage/LoginPage";

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/invoicePage">
            <InvoicePage />
          </Route>

          <Route path="/profilePage">
            <ProfilePage />
          </Route>

          <Route path="/login">
            <LoginPage />
          </Route>

          <Route path="/signupPage">
            <SignUpPage />
          </Route>

          <Route path="/">
            <InvoicePage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
