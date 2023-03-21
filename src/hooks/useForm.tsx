import {useState} from "react";

export function useForm() {
    const [value, setValue] = useState('');
    const onChange = (value) => {
        setValue(value);
    }
    return {
        value,
        onChange
    }
}