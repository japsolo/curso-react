import './App.css';

// Importar el componente
import Saludo from "./components/Saludo";

function App() {
    const age = 16;
    return (
        <div className="App">
            {age < 20 ? <Saludo /> : ""}
        </div>
    );
}

export default App;
