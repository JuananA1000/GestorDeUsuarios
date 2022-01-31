import { useState } from 'react';

const useFormulario = (inicial) => {
    const [formulario, setFormulario] = useState(inicial);

    const handleChange = (e) => {
        setFormulario({
            ...formulario,
            [e.target.name]: e.target.value,
        });
    };

    const limpiarFormulario = () => {
        setFormulario(inicial); // Seteamos el formulario con las propiedades iniciales
    };

    return [formulario, handleChange, limpiarFormulario];
};

export default useFormulario;
