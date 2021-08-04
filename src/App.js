import "./App.css";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage/InvoicePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route path="/">
            <InvoicePage />
          </Route>

          <Route path="/invoicePage">
            <InvoicePage />
          </Route>

          <Route path="/profile">
            <ProfilePage />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
