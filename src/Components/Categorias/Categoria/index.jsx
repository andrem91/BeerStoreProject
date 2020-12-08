import Marcas from './Marcas'
import Estilos from './Estilos'
import Origens from './Origens'
import { ListGroup } from 'react-bootstrap'

function Categoria() {

    return (
        <div>
            <h4>Marca:</h4>
            <ListGroup>
                <Marcas />
            </ListGroup>
            <h4>Estilo:</h4>
            <ListGroup>
                <Estilos />
            </ListGroup>
            <h4>País de Origem:</h4>
            <ListGroup>
                <Origens />
            </ListGroup>
        </div>
    )
}

export default Categoria
