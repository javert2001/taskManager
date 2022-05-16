import PropTypes from 'prop-types';
import Button from './Button';
const Header = ({ titulo, onShow, show }) => {
    const onClick = () => {
        onShow();
    }
    return (
        <header className='header'>
            <h1>
                {titulo}
            </h1>
            <Button texto={!show ? "Add" : "Hide"} color='teal' onClick={onClick}></Button>

        </header>
    )
}

Header.defaultProps = {
    titulo: 'Default'
}

Header.propTypes = {
    titulo: PropTypes.string.isRequired
}

export default Header