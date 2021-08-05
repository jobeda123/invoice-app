import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import InvoicePage from "./pages/InvoicePage/InvoicePage";
import ProfilePage from "./pages/ProfilePage/ProfilePage";
import SignUpPage from "./pages/SignUpPage/SignUpPage";
import LoginPage from "./pages/LoginPage/LoginPage";
import { createContext } from "react";
import { useState } from "react";
import PrivateRoute from "./components/PrivateRoute/PrivateRoute";
import fakeData from "./FakeData/FakeData.json";

//context declare
export const UserContext = createContext();
export const InvoiceContext = createContext();
export const HandleAddInvoiceContext = createContext();
export const HandleRemoveInvoiceContext = createContext();

function App() {
  const [user, setUser] = useState({
    isSignIn: false,
    name: "User",
    email: "user@gmail.com",
    password: "userA1234",
    gender: "female",
    address: "Block-D, road no-5, Dhanmondi",
    contact: "+8801980440055",
    birthDate: "09-12-1997",
  });

  const [invoice, setInvoice] = useState(fakeData);

  return (
    <UserContext.Provider value={[user, setUser]}>
      <InvoiceContext.Provider value={[invoice, setInvoice]}>
        <div className="App">
          <Router>
            <Switch>
              <PrivateRoute path="/invoicePage">
                <InvoicePage />
              </PrivateRoute>

              <PrivateRoute path="/profilePage">
                <ProfilePage />
              </PrivateRoute>

              <Route path="/loginPage">
                <LoginPage />
              </Route>

              <Route path="/signupPage">
                <SignUpPage />
              </Route>

              <Route path="/">
                <LoginPage />
              </Route>
            </Switch>
          </Router>
        </div>
      </InvoiceContext.Provider>
    </UserContext.Provider>
  );
}

export default App;
