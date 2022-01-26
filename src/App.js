import Input from './components/Input';
import Card from './components/Card';

// Custom HOOKS
import useFormulario from './hooks/useFormulario';

function App() {
    const [formulario, handleChange] = useFormulario({
        nombre: '',
        apellido: '',
    });
    console.log(formulario);

    return (
        <Card>
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
        </Card>
    );
}

export default App;
