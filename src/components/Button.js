const Button = ({color, text}) => {
    return (
        <button style={{backgroundColor: color}} className='button'>{text}</button>
    )
}

Button.defaultProps = {
    color: 'steelblue'
}

export default Button
