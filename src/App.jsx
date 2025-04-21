// useState hook for default render
import { useState } from "react";

import componentsImg from "./assets/components.png"
import { CORE_CONCEPTS } from "./data";
import { EXAMPLES } from "./data";
import Header from "./components/Header/Header";
import CoreConcept from "./components/CoreConcept";
import TabButton from "./components/TabButton";

function App() {
  // hooks MUST be called from top level of the component
  const [selectedTopic, setSelectedTopic] = useState();
  
  // event handler for button click
  function handleSelect(selectedButton){
    setSelectedTopic(selectedButton);
    console.log(selectedTopic);
  }

  // tabContent setup
  let tabContent = <p>Please select a topic</p>;
  if (selectedTopic) {
    tabContent = (
      <div id="tab-content">
        <h3>{EXAMPLES[selectedTopic].title}</h3>
        <p>{EXAMPLES[selectedTopic].description}</p>
        <pre>
          <code>{EXAMPLES[selectedTopic].code}</code>
        </pre>
      </div>
    );
  }

  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            {/* MAP function to translate JSON to component */}
            {CORE_CONCEPTS.map((conceptItem) => <CoreConcept key={conceptItem.title} {...conceptItem} />)}
          </ul>
        </section>
        <section id="examples">
          <h2>Examples</h2>
          <menu>
            <TabButton 
            isSelected={selectedTopic === 'components'}
            onSelect={()=>handleSelect('components')}>Components</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'jsx'}
            onSelect={()=>handleSelect('jsx')}>JSX</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'props'}
            onSelect={()=>handleSelect('props')}>PROPS</TabButton>
            <TabButton 
            isSelected={selectedTopic === 'state'}
            onSelect={()=>handleSelect('state')}>State</TabButton>
          </menu>
          {tabContent}
        </section>
      </main>
    </div>
  );
}

export default App;
