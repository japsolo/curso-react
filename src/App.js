import './App.css';

// Importar el componente
import Gretting from "./components/Gretting";
import Users from "./components/Users";

import USERS_DATA from "./data/users.json";

function App() {
    return (
        <div className="App">
            <Gretting text="Trabajando con React" />
            <Users usersList={USERS_DATA} />
        </div>
    );
}

export default App;
