import React, { Suspense, useState } from "react";
import "./styles.css";

const ComponentA = React.lazy(() => import(".ComponentA"));

export default function App() {
  const [showComponent, setShowComponent] = useState();

  return (
    <div className="App">
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => setShowComponent(true)}> Pokaż komponent</button>
      <Suspense fallback={<div>Ładowanie...</div>}>
        {showComponent && <ComponentA />}
      </Suspense>
    </div>
  );
}
