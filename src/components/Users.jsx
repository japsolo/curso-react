import PropTypes from "prop-types";

import UserData from "./UserData";

const Users = ({ usersList }) => {
    return (
        <>
            <h3>Listado usuarios</h3>
            {usersList.length === 0 && <h4>No hay usuarios para mostrar</h4>}

            {usersList.length > 0 && (
                <ul>
                    {usersList.map(user => <UserData key={user.id} oneUser={user} />)}
                </ul>
            )}
        </>
    )
}

Users.propTypes = {
    usersList: PropTypes.arrayOf(
        PropTypes.shape({
            id: PropTypes.number,
            first_name: PropTypes.string,
            last_name: PropTypes.string,
            email: PropTypes.string,
        })
    ).isRequired,
}

export default Users;