import { useState } from "react";


export default function useInput (initState) {

    const [value, setValue] = useState(initState)

    const onChange = (e) => setValue(e.target.value)
    
    return {
        value,
        onChange
    }

}