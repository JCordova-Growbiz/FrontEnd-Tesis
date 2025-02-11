import { useState } from "react"

export const useForm = () => {

    const [formValues, setFormValues] = useState();

    const handleInputChange = ()=> {
        const { name, value } = e.target;
        setFormValues((prev) => ({
        ...prev,
        [name]: value,
        }));
    }

    const handleSubmit = () => {

    }



}