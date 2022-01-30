import Input from './components/Input';
import Card from './components/Card';
import Container from './components/Container';

// Custom HOOKS
import useFormulario from './hooks/useFormulario';

function App() {
    const [formulario, handleChange] = useFormulario({
        nombre: '',
        apellido: '',
    });
    console.log(formulario);

    return (
        <Container>
            <Card>
                <div style={{ padding: 20 }}>
                    <form>
                        <Input
                            label='Nombre'
                            name='nombre'
                            value={formulario.nombre}
                            onChange={handleChange}
                        />

                        <Input
                            label='Apellido'
                            name='apellido'
                            value={formulario.apellido}
                            onChange={handleChange}
                        />
                    </form>
                </div>
            </Card>
        </Container>
    );
}

export default App;
