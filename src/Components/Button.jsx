import PropTypes from 'prop-types';

export default function Button({ label, className, onClick }) {
    return (
        <button
            className={`btn ${className || ''}`.trim()}
            onClick={onClick}
        >
            {label}
        </button>
    );
}

Button.propTypes = {
    label: PropTypes.string.isRequired,
    className: PropTypes.oneOf(['black', 'green']),
    onClick: PropTypes.func,
};

Button.defaultProps = {
    className: 'black',
    onClick: () => {},
};
