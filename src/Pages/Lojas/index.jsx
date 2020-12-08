import {Card, CardDeck} from 'react-bootstrap'

import LojaRio from './loja-rio.jpg'
import LojaSP from './loja-sp.jpg'
import LojaFloripa from './loja-floripa.jpg'

function Lojas(){
    return(
        <>
            <h2 className="border-bottom py-3">Nossas Lojas</h2>
            <CardDeck>
                <Card>
                    <Card.Img variant="top" src={LojaRio} />
                    <Card.Body>
                        <Card.Title>Rio de Janeiro</Card.Title>
                        <Card.Text>Avenida Presidente Vargas, 5000</Card.Text>
                        <Card.Text>10 &ordm; andar</Card.Text>
                        <Card.Text>Centro</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">(21) 3333-3333</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={LojaSP} />
                    <Card.Body>
                    <Card.Title>São Paulo</Card.Title>
                    <Card.Text>Avenida Paulista, 985</Card.Text>
                        <Card.Text>3 &ordm; andar</Card.Text>
                        <Card.Text>Jardins</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">(11) 4444-4444</small>
                    </Card.Footer>
                </Card>
                <Card>
                    <Card.Img variant="top" src={LojaFloripa} />
                    <Card.Body>
                    <Card.Title>Santa Catarina</Card.Title>
                        <Card.Text>Rua Major &Aacute;vila, 370</Card.Text>
                        <Card.Text>Vila Mariana</Card.Text>
                    </Card.Body>
                    <Card.Footer>
                    <small className="text-muted">(47) 5555-5555</small>
                    </Card.Footer>
                </Card>
            </CardDeck>
        </>
    )
}


export default Lojas