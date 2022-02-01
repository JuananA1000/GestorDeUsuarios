import React from 'react';

import Button from './Button';
import Input from './Input';

// Custom HOOKS
import useFormulario from '../hooks/useFormulario';

const UserForm = ({ submit }) => {
    const [formulario, handleChange, limpiarFormulario] = useFormulario({
        nombre: '',
        apellido: '',
        email: '',
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        submit(formulario);
        limpiarFormulario();
    };

    return (
        <form onSubmit={handleSubmit}>
            <Input
                label='Nombre'
                name='nombre'
                value={formulario.nombre}
                onChange={handleChange}
                placeholder='Nombre'
            />
            <Input
                label='Apellido'
                name='apellido'
                value={formulario.apellido}
                onChange={handleChange}
                placeholder='Apellido'
            />
            <Input
                label='E-mail'
                name='email'
                value={formulario.email}
                onChange={handleChange}
                placeholder='E-mail'
            />
            <Button>Enviar</Button>
        </form>
    );
};

export default UserForm;
