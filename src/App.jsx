// useState hook for default render
import { Fragment } from "react";
import componentsImg from "./assets/components.png"

import Header from "./components/Header/Header";
import CoreConcepts from "./components/CoreConcepts.jsx";
import Examples from "./components/Examples.jsx"; 

function App() {

  return (
    // use Fragment or empty tags <></> to avoid unnecessary div wrapping
    <Fragment>
      <Header />
      <main>
        <CoreConcepts />
        <Examples />
      </main>
    </Fragment>
  );
}

export default App;
