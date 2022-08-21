import './App.css';

// Importar el componente
import Gretting from "./components/Gretting";
import Container from "./components/Container";

function App() {
    return (
        <div className="App">
            <Gretting text="Trabajando con React" />
            <Container />
        </div>
    );
}

export default App;
