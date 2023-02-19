const Button = ({ text, onClick }) => {
    return (
        <button onClick={onClick}>
            {text}
        </button>
    );
};

export default Button;