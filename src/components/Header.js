import PropTypes from 'prop-types'
import Button from './Button'

const Header = ({title}) => {
    return (
        <header>
            {/* <h1>{title}</h1>
            <Button color='green' text='Hello'/>
            <Button color='red' text='this'/>
            <Button text='is a'/>
            <Button color='yellow' text='button!'/> */}
        </header>
    )
}

Header.defaultProps = {
    title: 'Hepburn Data',
}

Header.propTypes = {
    title: PropTypes.string,
}

export default Header
