import { useState } from 'react';

// Custom COMPONENTS
import Card from './components/Card';
import Container from './components/Container';
import UserForm from './components/UserForm';
import Title from './components/Title';

function App() {
    const [usuarios, setUsuarios] = useState([]);

    const submit = (usuario) => {
        setUsuarios([...usuarios, usuario]);
    };
    console.log(usuarios);
    return (
        <div style={{ marginTop: '15%' }}>
            <Container>
                <Card>
                    <Title />
                    <div style={{ padding: 20 }}>
                        <UserForm submit={submit} />
                    </div>
                </Card>
                <Card>
                    <ul>
                        {usuarios.map((x) => (
                            <li
                                style={{ listStyle: 'none' }}
                                key={
                                    x.email
                                }>{`${x.nombre} ${x.apellido}: ${x.email}`}</li>
                        ))}
                    </ul>
                </Card>
            </Container>
        </div>
    );
}

export default App;
