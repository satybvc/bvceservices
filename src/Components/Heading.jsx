import PropTypes from 'prop-types';

export default function Heading({ title, description, className }) {
    return (
        <div className={`heading ${className || ''}`.trim()}>
            <h2>{title}</h2>
            {description && <p>{description}</p>}
        </div>
    );
}

Heading.propTypes = {
    title: PropTypes.string.isRequired,
    className: PropTypes.string,
    description: PropTypes.string.isRequired,
};
