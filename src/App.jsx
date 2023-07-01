import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList.jsx";

export default function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ContactList />
    </>
  );
}
