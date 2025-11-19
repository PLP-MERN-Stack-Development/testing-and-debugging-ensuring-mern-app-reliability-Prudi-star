import { useEffect, useState } from "react";
import axios from "axios";

export default function BugList() {
  const [bugs, setBugs] = useState([]);

  const fetchBugs = async () => {
    const res = await axios.get("http://localhost:5000/api/bugs");
    setBugs(res.data);
  };

  useEffect(() => { fetchBugs(); }, []);

  return (
    <div>
      {bugs.length === 0 ? <p>No bugs reported</p> :
        bugs.map(bug => <div key={bug._id}>{bug.title} - {bug.status}</div>)}
    </div>
  );
}