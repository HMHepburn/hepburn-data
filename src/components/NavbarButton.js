import React from 'react'

const NavbarButton = ({text}) => {
    return (
        <div>
            <button>{text}</button>
        </div>
    )
}

NavbarButton.defaultProps = {
    text: 'Error',
}

NavbarButton.propTypes = {
    text: PropTypes.string,
}

export default NavbarButton
