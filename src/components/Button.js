const Button = ({ color, texto, onClick }) => {
    return (
        <div>
            <button
                className="btn"
                style={{ backgroundColor: color }}
                onClick={onClick}>{texto}</button>
        </div>
    )
}

Button.defaultProps = {
    texto: 'Botón',
    color: 'green'
}

export default Button