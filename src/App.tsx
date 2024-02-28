import Titlebar from "./components/Titlebar";
import { Button } from "./components/ui/button";

function App() {
  
  return (
    <>
      <Titlebar />
      <div className="app">
        <h1>Hello, world!</h1>
        <Button variant="default">Hello</Button>
      </div>
    </>
  );
}

export default App;
