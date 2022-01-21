import Input from "./components/Input";

// Custom HOOKS
import useFormulario from "./hooks/useFormulario";

function App() {
    const [formulario, handleChange] = useFormulario({
        nombre: "",
        apellido: "",
    });
    console.log(formulario);

    return (
        <form>
            <Input
                label="Nombre"
                name="nombre"
                value={formulario.nombre}
                onChange={handleChange}
            />

            <Input
                label="Apellido"
                name="apellido"
                value={formulario.apellido}
                onChange={handleChange}
            />
        </form>
    );
}

export default App;
