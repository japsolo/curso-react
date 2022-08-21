import { useState, useEffect, useRef } from "react";

import UserData from "./UserData";

const UsersHook = () => {
    const [usersList, setUsersList] = useState([]);
    const [isLoading, setIsLoading] = useState(true);
    const title = useRef(null);

    useEffect(() => {
        (async () => {
            const API_URL = "https://reqres.in/api/users?per_page=2&page=1";
            const { data } = await fetch(API_URL).then(response => response.json());
            setUsersList(data);
            setIsLoading(false);
        })();
    }, []);

    const changeTitleHandler = () => {
        title.current.classList.add("testing-title");
    }

    return (
        <>
            <h3 ref={title}>Listado de usuarios</h3>

            <button onClick={changeTitleHandler}>Cambiar el title</button>

            {isLoading && <h4>Cargando...</h4>}

            {!isLoading && (
                <ul>
                    {usersList.map(user => <UserData key={user.id} oneUser={user} />)}
                </ul>
            )}
        </>
    )
}

export default UsersHook;