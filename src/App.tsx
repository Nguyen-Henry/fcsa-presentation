import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";

function App() {
  const [alertVisble, setAlertVisblility] = useState(false);

  return (
    <div>
      {alertVisble && (
        <Alert onClose={() => setAlertVisblility(false)}>My Alert</Alert>
      )}
      <Button color="danger" onClick={() => setAlertVisblility(true)}>
        Wassuh
      </Button>
    </div>
  );
}

export default App;
