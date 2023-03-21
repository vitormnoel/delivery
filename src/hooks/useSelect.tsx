import {useState} from "react";

export function useSelect() {
    const [value, setValue] = useState(null);
    const [options, setOptions] = useState([]);

    const onChange = (value) => {
        setValue(value);
    }

    return {
        value,
        onChange,
        options,
        setOptions
    }
}