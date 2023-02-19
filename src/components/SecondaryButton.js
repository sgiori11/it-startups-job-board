import Button from './Button'

export default function SecondaryButton({ text, onClick }) {
    return(
        <Button onClick={onClick}>
            {text}
        </Button>

    );
};