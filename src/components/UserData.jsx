import PropTypes from "prop-types";

const UserData = ({ oneUser }) => {
    return (
        <li>
            <h3>{`${oneUser.id} - ${oneUser.first_name} ${oneUser.last_name}`}</h3>
            <a href={`mailto:${oneUser.email}`}>{oneUser.email}</a>
        </li>
    )
}

UserData.propTypes = {
    oneUser: PropTypes.shape({
        id: PropTypes.number,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        email: PropTypes.string,
    }).isRequired,
}

export default UserData;