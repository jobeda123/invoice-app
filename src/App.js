import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage/InvoicePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";

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

          <Route path="/">
            <ProfilePage />
          </Route>

        </Switch>
      </Router>
    </div>
  );
}

export default App;
