import atomImg from "../../assets/react-core-concepts.png";
import './Header.css';

const reactDescription = ['Fundamental', 'Core', 'Crucial'];

function genRandomInt(max){
    return Math.floor(Math.random() * (max + 1));
}

export default function Header() {
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