import atomImg from "./assets/react-core-concepts.png"
import componentsImg from "./assets/components.png"

import { CORE_CONCEPTS } from "./data";

const reactDescription = ['Fundamental', 'Core', 'Crucial'];

function genRandomInt(max){
  return Math.floor(Math.random() * (max + 1));
}

function Header() {
  const description = reactDescription[genRandomInt(2)];
  return (
  <header>
    <img src={atomImg} alt="Stylized atom" />
    <h1>React Essentials</h1>
    <p>
      {description} React concepts you will need for almost any app you are going
      to build!
    </p>
  </header>
  )
}

function CoreConcept({image, title, description}){
  return (
    <li>
      <img src={image} alt={title+'_img'} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}

function App() {
  return (
    <div>
      <Header />
      <main>
        <section id="core-concepts">
          <h2>Time to get started!</h2>
          <ul>
            <CoreConcept
              title={CORE_CONCEPTS[0].title}
              description={CORE_CONCEPTS[0].description}
              image={CORE_CONCEPTS[0].image}
            />
            <CoreConcept {...CORE_CONCEPTS[1]}/>
            <CoreConcept {...CORE_CONCEPTS[2]}/>
            <CoreConcept {...CORE_CONCEPTS[3]}/>
          </ul>
        </section>

      </main>
    </div>
  );
}

export default App;
