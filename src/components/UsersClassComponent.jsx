import { Component } from "react";

import UserData from "./UserData";

class UsersClassComponent extends Component {
    constructor() {
        super();
        this.state = {
            usersList: [],
            isLoading: true
        }
    }

    componentDidMount() {
        (async () => {
            const API_URL = "https://reqres.in/api/users?per_page=2&page=1";
            const { data } = await fetch(API_URL).then(response => response.json());
            this.setState({
                usersList: data,
                isLoading: false
            });
        })();
    }

    render() {
        const { isLoading, usersList } = this.state;
        return (
            <>
                <h3>Listado usuarios</h3>
                {isLoading && <h4>Cargando...</h4>}

                {!isLoading && (
                    <ul>
                        {usersList.map(user => <UserData key={user.id} oneUser={user} />)}
                    </ul>
                )}
            </>
        )
    }
}

export default UsersClassComponent;