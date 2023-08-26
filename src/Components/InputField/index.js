import './Styles.css'

export default function InputField({ labelName, type, placeholder, value, onChange }) {
    return (
        <div className='input_container'>
            <label className='label_1'>{labelName}</label>
            <input
                className='Input_1'
                type={type}
                placeholder={placeholder}
                value={value}
                onChange={onChange}
            />
        </div>
    );
};