import { Button } from "components/Button";
import "./App.css";
import HelloWorld from "components/HelloWorld";

function App() {
  return (
    <div className="dark bg-background min-h-screen w-full flex justify-center items-center gap-4 flex-col">
      <HelloWorld />
      <Button>Click me!</Button>
    </div>
  );
}

export default App;
