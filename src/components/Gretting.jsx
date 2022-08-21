import PropTypes from "prop-types";

function Gretting({ text, children }) {
    const titleStyles = {
        color: "orange",
        textAlign: "center",
        fontSize: "40px"
    }
    return (
        <>
            <h2 style={titleStyles}>{text}</h2>
            {children}
        </>
    )
}

Gretting.propTypes = {
    text: PropTypes.string
}

Gretting.defaultProps = {
    text: "Valor genérico"
}

export default Gretting;