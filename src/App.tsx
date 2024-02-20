import { Route, Switch } from "wouter";
import Login from "./pages/Login";
import Home from "./pages/Home";
import Error404 from "./pages/Error404";

function App() {
  return (
    <>
      <Switch>
        <Route path="/" component={Home} />
        <Route path="/login" component={Login} />
        <Route component={Error404}></Route>
      </Switch>

    </>
  );
}

export default App;
