import { useState } from "react";
import Sidebar from "./Sidebar";
import NewsletterViewer from "./NewsletterViewer";
import HeaderBar from "./HeaderBar";
import BorderPattern from "./BorderPattern";
import "./App.css";

const newsletters = ["Spring 2025", "Winter 2024", "Fall 2024", "Summer 2024"];

function App() {
  const [selected, setSelected] = useState("Spring 2025");

  return (
    <>
      <HeaderBar
        newsletters={newsletters}
        selected={selected}
        onSelect={setSelected}
      />
      <div style={{ display: "flex", height: "80vh", fontFamily: "Avenir" }}>
        <Sidebar
          newsletters={newsletters}
          selected={selected}
          onSelect={setSelected}
        />

        <NewsletterViewer quarter={selected} />
      </div>
    </>
  );
}

export default App;
