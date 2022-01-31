import { useState } from 'react';

// Custom COMPONENTS
import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';
import Button from './components/Button';

// Custom HOOKS
import useFormulario from './hooks/useFormulario';

function App() {
    const [usuarios, setUsuarios] = useState([]);

    const [formulario, handleChange, limpiarFormulario] = useFormulario({
        nombre: '',
        apellido: '',
        email: '',
    });

    const submit = (e) => {
        e.preventDefault();
        setUsuarios([...usuarios, formulario]);
        limpiarFormulario();
    };

    return (
        <div style={{ marginTop: '15%' }}>
            <Container>
                <Card>
                    <div style={{ padding: 20 }}>
                        <form onSubmit={submit}>
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
                    </div>
                </Card>
                <Card>
                    <ul>
                        {usuarios.map((usuario) => (
                            <li
                                key={
                                    usuario.email
                                }>{`${usuario.nombre} ${usuario.apellido}: ${usuario.email}`}</li>
                        ))}
                    </ul>
                </Card>
            </Container>
        </div>
    );
}

export default App;
