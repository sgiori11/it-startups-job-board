import Button from './Button'

export default function PrimaryButton({ text, onClick }) {
    return(
        <Button onClick={onClick}>
            {text}
        </Button>

    );
};