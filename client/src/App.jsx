import BugForm from "./components/BugForm";
import BugList from "./components/BugList";
import { useState } from "react";

function App() {
  const [bugs, setBugs] = useState([]);

  return (
    <div>
      <h1>MERN Bug Tracker</h1>
      <BugForm onBugAdded={bug => setBugs(prev => [...prev, bug])} />
      <BugList bugs={bugs} />
    </div>
  );
}

export default App;