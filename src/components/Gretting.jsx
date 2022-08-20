import PropTypes from "prop-types";

function Gretting({ text, children }) {
    return (
        <>
            <h2 className="title">{text}</h2>
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