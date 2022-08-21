import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

// Importar el componente
import Gretting from "./components/Gretting";
import Wrapper from "./components/Container";
import { StyledComponents } from "./components/StyledComponents";

function App() {
    return (
        <Container>
            <Row>
                <Col sm={12} md={6} lg={4}>
                    <Gretting text="Trabajando con React" />
                </Col>
                <Col sm={12} md={6} lg={8}>
                    <StyledComponents />
                    <Button variant="warning">Esto es un botón</Button>
                    <Wrapper />
                </Col>
            </Row>
        </Container>
    );
}

export default App;
