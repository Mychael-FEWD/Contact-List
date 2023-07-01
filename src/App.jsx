import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList.jsx";

export default function App() {
  const [selectedContactId, setSelectedContactId] = useState(null);
  const [count, setCount] = useState(0);

  function handleClose() {
    setSelectedContactId(null);
  }

  return (
    <>
      {selectedContactId ? (
        <div>
          <button onClick={handleClose}>Close</button>
        </div>
      ) : (
        <ContactList onSelect={setSelectedContactId} />
      )}
    </>
  );
}
