import "./styles/App.css";
import { useState } from "react";

import TopBar from "./components/TopBar";
import Sidebar from "./components/SideBar";
import MainPanel from "./components/MainPanel";
import PropertiesPanel from "./components/PropertiesPanel";
import filesData from "./data/data.json";

function App() {
  const [files] = useState(filesData);
  const [selectedFile, setSelectedFile] = useState(files[1] || files[0] || null);

  function handleSelect(file) {
    setSelectedFile(file);
  }

  return (
    <div className="app">

      <TopBar />

      <div className="dashboard">

        <Sidebar selectedId={selectedFile?.id} onSelectId={(id) => {
          const found = files.find((x) => x.id === id);
          if (found) setSelectedFile(found);
        }} />

        <MainPanel files={files} onSelect={handleSelect} selectedId={selectedFile?.id} />

        <PropertiesPanel file={selectedFile} />

      </div>

    </div>
  );
}

export default App;