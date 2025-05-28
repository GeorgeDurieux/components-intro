type ButtonProps = {
    title: string;
    onClick: () => void;
    disabled?: boolean;
    addClass?:  string;
}

const CounterButton = ({title, onClick, disabled = false, addClass = 'bg-cf-dark-gray disabled:bg-gray-600'}: ButtonProps) => {
    return (
        <>
            <button
                className={"text-white py-2 px-4 " + addClass}
                onClick={onClick}
                disabled={disabled}
            >
                {title}
            </button>
        </>
    )
}

export default CounterButton;