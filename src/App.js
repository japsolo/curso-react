import './App.css';

// Importar el componente
import Gretting from "./components/Gretting";
import UsersClassComponent from "./components/UsersClassComponent";
// import Users from "./components/Users";
// import Counter from "./components/Counter";

// import USERS_DATA from "./data/users.json";

function App() {
    return (
        <div className="App">
            <Gretting text="Trabajando con React" />
            <UsersClassComponent />
            {/* <Counter subject="React" developerName="Jane" />
            <Users usersList={USERS_DATA} /> */}
        </div>
    );
}

export default App;
