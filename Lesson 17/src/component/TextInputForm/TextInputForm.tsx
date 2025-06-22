interface TextInputFormProps {
    value: string;
    onChange: (value: string) => void;
    handleClick: (value: string) => void
}

const TextInputForm: React.FC<TextInputFormProps> = ({ value, onChange, handleClick }) => {



    return (
        <div className="form">
            <input type="text" value={value} onChange={(e) => onChange(e.target.value)} placeholder="Введіть значення" />
            <button onClick={() => handleClick(value)} style={{ cursor: "pointer" }}>Показати значення</button>
        </div>
    )
};

export default TextInputForm;
